import io

from rest_framework.response import Response
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin, \
    CreateModelMixin
from rest_framework.permissions import DjangoModelPermissions, SAFE_METHODS
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.parsers import JSONParser

from .serializers import UserModelSerializer, UserModelSerializerV2

from .models import User


# class UsersCustomPermissions(DjangoModelPermissions):
#
#     def has_permission(self, request, view):
#         #     if request.user.role == User.ADMIN:
#         #         return True
#         #     elif request.method in SAFE_METHODS:
#         #         return True
#         #     return False
#         #
#         # def has_object_permission(self, request, view, obj):
#         #     return super().has_object_permission(request, view, obj)
#         return True
#
#     def has_object_permission(self, request, view, obj):
#         return True


class UserViewSet(ListModelMixin, RetrieveModelMixin, UpdateModelMixin, GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    # permission_classes = [UsersCustomPermissions]

    def get_serializer_class(self):
        if self.request.version == 'v2':
            return UserModelSerializerV2
        return UserModelSerializer

