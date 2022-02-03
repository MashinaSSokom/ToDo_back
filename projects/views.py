from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.pagination import PageNumberPagination

from .serializers import ProjectModelSerializer, TODOModelSerializer, ProjectReadModelSerializer, \
    TODOReadModelSerializer
from .models import Project, TODO
from .filters import ProjectFilter, TODOFilter


class ProjectPagination(PageNumberPagination):
    page_size = 10


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    filterset_class = ProjectFilter
    pagination_class = ProjectPagination

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return ProjectReadModelSerializer
        return ProjectModelSerializer

    def perform_destroy(self, instance):
        instance.is_active = False
        instance.save()

class TODOPagination(PageNumberPagination):
    page_size = 20


class TODOModelViewSet(ModelViewSet):
    queryset = TODO.objects.all()
    serializer_class = TODOModelSerializer
    filterset_class = TODOFilter
    pagination_class = TODOPagination

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return TODOReadModelSerializer
        return TODOModelSerializer

    def perform_destroy(self, instance):
        instance.is_active = False
        instance.save()
