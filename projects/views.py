from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet, GenericViewSet
# from rest_framework.mixins import

from .serializers import ProjectModelSerializer, TODOModelSerializer, ProjectReadModelSerializer, \
    TODOReadModelSerializer
from .models import Project, TODO
from .filters import ProjectFilter

# Create your views here.


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    filterset_class = ProjectFilter

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return ProjectReadModelSerializer
        return ProjectModelSerializer


class TODOModelViewSet(ModelViewSet):
    queryset = TODO.objects.all()
    serializer_class = TODOModelSerializer
    filterset_fields = ['project']


    def get_serializer_class(self):
        if self.request.method == 'GET':
            return TODOReadModelSerializer
        return TODOModelSerializer

    def perform_destroy(self, instance):
        instance.is_active = False
        instance.save()


