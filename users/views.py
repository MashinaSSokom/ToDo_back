import io

from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.viewsets import ModelViewSet
from rest_framework.serializers import Serializer, CharField, IntegerField, EmailField
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

from .serializers import UserModelSerializer
from .models import User


class UserModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer

#
# class UserSerializer(Serializer):
#     username = CharField(max_length=150)
#     first_name = CharField(max_length=150)
#     last_name = CharField(max_length=150)
#     email = EmailField()
#
#     def update(self, instance, validated_data):
#         pass
#
#     def create(self, validated_data):
#         user = User(**validated_data)
#         user.save()
#         return user
#
#
# # TODO: протестировать в постмене create и update
#
# def get_view(request):
#     user = User.objects.get(pk=2)
#     serializer = UserSerializer(user)
#     print('inside serializer:', serializer.data)
#     render = JSONRenderer()
#     json_data = render.render(serializer.data)
#     print('rendered data', json_data)
#     return HttpResponse(json_data)
#
#
# @csrf_exempt
# def post_view(request):
#     data = JSONParser().parse(io.BytesIO(request.body))
#     serializer = UserSerializer(data=data)
#     if serializer.is_valid():
#         print(serializer.validated_data)
#         user = serializer.save()
#         serializer = UserSerializer(user)
#         render = JSONRenderer()
#         json_data = render.render(serializer.data)
#         return HttpResponse(json_data)
