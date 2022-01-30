from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer
from .models import User


class UserModelSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class UserModelSerializerV2(ModelSerializer):
    class Meta:
        model = User
        exclude = ['is_superuser', 'is_staff']
