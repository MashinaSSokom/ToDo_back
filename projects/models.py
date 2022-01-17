from django.db import models
from users.models import User
# Create your models here.


class Project(models.Model):
    members = models.ManyToManyField(to=User)
    name = models.CharField(verbose_name='Название проекта', max_length=200)
    description = models.CharField(verbose_name='Описание проекта', max_length=600)
    project_url = models.URLField(verbose_name='Ссылка на проект')
    is_active = models.BooleanField(verbose_name='Активность', default=True)

    def __str__(self):
        return f'{self.name}'


class TODO(models.Model):
    project = models.ForeignKey(to=Project, on_delete=models.CASCADE)
    creator = models.ForeignKey(to=User, on_delete=models.SET_DEFAULT, default='Пользователь удалён')
    name = models.CharField(verbose_name='Название', max_length=150)
    text = models.CharField(verbose_name='Текст', max_length=1000)
    is_active = models.BooleanField(verbose_name='Активность', default=True)

    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.name} ({self.project})'
