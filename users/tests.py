from itertools import chain

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

        admin_perm = set(chain(
            Permission.objects.filter(content_type__model='project'),
            Permission.objects.filter(Q(content_type__model='todo') & Q(codename__startswith='add'))
        ))
        Group.objects.create(name='AdminGroup')
        admin_group = Group.objects.get(pk=1)
        admin_group.permissions.set(admin_perm)


        self.admin = User.objects.create(username='TestAdmin', email='test@admin.com', password='123',
                                         role=User.ADMIN,
                                         is_active=True, is_staff=True)
        self.admin = User.objects.get(pk=1)

        admin_group.user_set.add(self.admin)

        print(User.objects.get(pk=1).groups)


        # self.developer = User.objects.create(username='TestDeveloper', email='test@developer.com', password='123',
        #                                      role=User.DEVELOPER, is_active=True, is_staff=True)
        # self.manager = User.objects.create(username='TestManager', email='test@manager.com', password='123',
        #                                    role=User.MANAGER, is_active=True, is_staff=True)
        print(self.admin.)

    def test_get_list_by_admin(self):
        factory = APIRequestFactory()
        self.client.force_login(self.admin)
        response = self.client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        print(response.data)
        self.assertEqual(response.data.__len__(), 1)
