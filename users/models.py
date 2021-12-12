from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.

class User(AbstractUser):
    DEVELOPER = 'U'
    MANAGER = 'M'
    ADMIN = 'A'

    USER_ROLE_CHOICES = (
        (DEVELOPER, 'Разработчик'),
        (MANAGER, 'Менеджер'),
        (ADMIN, 'Админ'),
    )

    role = models.CharField(verbose_name='Роль',
                            max_length=1,
                            choices=USER_ROLE_CHOICES,
                            default=DEVELOPER)
    email = models.EmailField(verbose_name='Почта', unique=True)
    groups = None

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
        ordering = ['id']

    def __str__(self):
        return f'{self.username}'
