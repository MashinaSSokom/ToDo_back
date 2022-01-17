from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import ProjectModelSerializer, TODOModelSerializer, ProjectReadModelSerializer, TODOReadModelSerializer

from .models import Project, TODO


# Create your views here.


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return ProjectReadModelSerializer
        return ProjectModelSerializer


class TODOModelViewSet(ModelViewSet):
    queryset = TODO.objects.all()
    serializer_class = TODOModelSerializer

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return TODOReadModelSerializer
        return TODOModelSerializer