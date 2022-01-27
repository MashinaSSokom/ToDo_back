from itertools import chain
from .apps import AppConfig
from django.db.models import Q
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APITestCase, RequestsClient
from django.contrib.auth.models import Group, Permission

from mixer.backend.django import mixer

from .views import UserViewSet

from .models import User


class TestUserView(APITestCase):

    def setUp(self) -> None:
        # mixer.blend()

        # Создание админа
        admin_perm = Permission.objects.all()
        admin_group = Group.objects.create(name='AdminGroup')
        admin_group.permissions.set(admin_perm)
        self.admin = User.objects.create(username='TestAdmin', password='123', email='test@admin.com',
                                         role=User.ADMIN,
                                         is_active=True, is_staff=True)
        self.admin.groups.add(admin_group)

        # Создание разработчика
        dev_group = Group.objects.create(name='DevelopGroup')
        dev_perm = Permission.objects.filter(
            Q(content_type__model='project', codename__startswith='view') | Q(content_type__model='todo') | Q(
                content_type__model='user',
                codename__startswith='view'))
        dev_group.permissions.set(dev_perm)
        self.developer = User.objects.create(username='TestDeveloper', email='test@developer.com', password='123',
                                             role=User.DEVELOPER, is_active=True, is_staff=True)
        self.developer.groups.add(dev_group)

        # Создание менеджера
        manager_group = Group.objects.create(name='ManagerGroup')
        manager_perm = Permission.objects.filter(
            Q(content_type__model='project') | Q(content_type__model='todo') | Q(content_type__model='user',
                                                                                 codename__startswith='view'))
        manager_group.permissions.set(manager_perm)
        self.manager = User.objects.create(username='TestManager', email='test@manager.com', password='123',
                                           role=User.MANAGER, is_active=True, is_staff=True)
        self.manager.groups.add(manager_group)

    # Сделал тесты на джанговые пермишены, но не уверен, что есть смысл их тестировать
    def test_post_user_not_allowed_all_users(
            self):
        self.client.force_login(self.admin)
        response = self.client.post('/api/users/', {})
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

    def test_get_user_list_by_admin(self):
        self.client.force_login(self.admin)
        response = self.client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_user_list_by_manager(self):
        self.client.force_login(self.manager)
        response = self.client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_user_list_by_developer(self):
        self.client.force_login(self.developer)
        response = self.client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

