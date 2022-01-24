from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter, SimpleRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

import config.settings as config
from users.views import UserViewSet
from projects.views import ProjectModelViewSet, TODOModelViewSet

router = SimpleRouter()

if config.DEBUG:
    router = DefaultRouter()

router.register('users', UserViewSet)
router.register('projects', ProjectModelViewSet)
router.register('todos', TODOModelViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]