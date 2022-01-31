import graphene
from graphene_django import DjangoObjectType
from projects.models import Project, TODO
from users.models import User


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class TODOType(DjangoObjectType):
    class Meta:
        model = TODO
        fields = '__all__'


class Query(graphene.ObjectType):
    users_by_project = graphene.List(UserType, project_id=graphene.Int(required=True))

    def resolve_users_by_project(root, info, project_id):
        try:
            return User.objects.filter(project=project_id)
        except User.DoesNotExist:
            return None

    todos_by_project = graphene.List(TODOType, project_id=graphene.Int(required=True))

    def resolve_todos_by_project(root, info, project_id):
        try:
            return TODO.objects.filter(project=project_id)
        except User.DoesNotExist:
            return None


schema = graphene.Schema(query=Query)
