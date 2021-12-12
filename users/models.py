from django.contrib.auth.models import AbstractUser, AbstractBaseUser, UserManager
from django.db import models


# Create your models here.

class User(AbstractUser):
    USER_ROLE_CHOICES = [
        ('user', 'Пользователь'),
        ('manager', 'Менеджер'),
        ('admin', 'Админ'),
    ]

    role = models.Choices(USER_ROLE_CHOICES)

    def __str__(self):
        return f'{self.username}'
