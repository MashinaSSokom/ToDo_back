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
from projects.models import Project, TODO


class TestUserView(APITestCase):

    def setUp(self) -> None:
        # mixer.blend()

        admin_perm = Permission.objects.all()
        admin_group, created = Group.objects.get_or_create(name='AdminGroup')
        admin_group.permissions.set(admin_perm)

        self.admin = User.objects.create(username='TestAdmin', password='123', email='test@admin.com',
                                         role=User.ADMIN,
                                         is_active=True, is_staff=True)

        self.admin.groups.add(admin_group)


        # projperm = Permission.objects.filter(Q(content_type__model='project'))
        # todoperm = Permission.objects.filter(Q(codename__regex=r'^(add|view)+'), Q(content_type__model='todo'))
        self.developer = User.objects.create(username='TestDeveloper', email='test@developer.com', password='123',
                                             role=User.DEVELOPER, is_active=True, is_staff=True)
        self.manager = User.objects.create(username='TestManager', email='test@manager.com', password='123',
                                           role=User.MANAGER, is_active=True, is_staff=True)

    def test_get_user_list_by_admin(self):
        self.client.force_login(self.admin)
        response = self.client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_post_user_by_admin(self):
        self.client.force_login(self.admin)
        response = self.client.post('/api/users/', {})
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)
