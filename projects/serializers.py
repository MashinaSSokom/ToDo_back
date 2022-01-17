from rest_framework.serializers import ModelSerializer
from .models import Project, TODO
from users.serializers import UserModelSerializer


class ProjectModelSerializer(ModelSerializer):

    # members = UserModelSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class ProjectReadModelSerializer(ModelSerializer):

    members = UserModelSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class TODOModelSerializer(ModelSerializer):
    class Meta:
        model = TODO
        fields = '__all__'


class TODOReadModelSerializer(ModelSerializer):
    project = ProjectModelSerializer()
    creator = UserModelSerializer()

    class Meta:
        model = TODO
        fields = '__all__'
