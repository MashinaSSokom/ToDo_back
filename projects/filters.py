from django_filters import rest_framework as filters

from .models import Project, TODO


class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Project
        fields = ['name']


class TODOFilter(filters.FilterSet):
    created_date = filters.DateFromToRangeFilter()

    class Meta:
        model = TODO
        fields = ['project', 'created_date']