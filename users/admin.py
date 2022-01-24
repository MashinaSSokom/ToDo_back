from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext, gettext_lazy as _

from . import models


@admin.register(models.User)
class CustomUserAdmin(UserAdmin):
    model = models.User
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff', 'role')
    fieldsets = ((_('Personal info'), {'fields': ('username', 'password', 'first_name', 'last_name', 'email', 'role')}),
                 (_('Permissions'), {
                     'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions'),
                 }),
                 (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
                 )


# admin.site.register(models.User, CustomUserAdmin)
