from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import permissions
from rest_framework.routers import DefaultRouter, SimpleRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from graphene_django.views import GraphQLView

import config.settings as config
from users.views import UserViewSet
from projects.views import ProjectModelViewSet, TODOModelViewSet

router = SimpleRouter()

if config.DEBUG:
    router = DefaultRouter()

# router.register('users', UserViewSet)
router.register('projects', ProjectModelViewSet)
router.register('todos', TODOModelViewSet)

schema_view = get_schema_view(
    openapi.Info(
        title="TODO API",
        default_version='1',
        description='API documentation for TODO project',
        contact=openapi.Contact(name='MashinaSSokom', email='MashinaSSokom@test.com'),
        license=openapi.License(name='MIT license')
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/users/v1/', include('users.urls', namespace='v1')),
    path('api/users/v2/', include('users.urls', namespace='v2')),
    path('api-auth/', include('rest_framework.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('graphql/', GraphQLView.as_view(graphiql=True))
]