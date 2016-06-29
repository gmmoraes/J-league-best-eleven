from __future__ import unicode_literals

from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.core.exceptions import ValidationError
from django.utils.translation import ugettext_lazy as _
from django.db.models import Count


# Create your models here.
class Registers(models.Model):
    username = models.CharField(max_length=200)
    password = models.IntegerField()
    created_date = models.DateTimeField(
            default=timezone.now)
            
            
class Vote(models.Model):
    player = models.CharField(max_length=200)
    team = models.CharField(max_length=200)
    created_date = models.DateTimeField(
            default=timezone.now)
    is_active   = models.BooleanField(default=True)
    is_admin    = models.BooleanField(default=False)
    is_staff    = models.BooleanField(default=False)



class UserManager(BaseUserManager):

    def create_user(self, email, password, **kwargs):
        user = self.model(
            email=self.normalize_email(email),
            is_active=True,
            **kwargs
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, **kwargs):
        user = self.model(
            email=email,
            is_staff=True,
            is_superuser=True,
            is_active=True,
            **kwargs
        )
        user.set_password(password)
        user.save(using=self._db)
        return user




class User(AbstractBaseUser,PermissionsMixin):
    #USERNAME_FIELD = 'email'
    email = models.EmailField('email address', unique=True, db_index=True)
    joined = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    
    objects = UserManager()
    #REQUIRED_FIELDS = ['email']

    def get_full_name(self):
        return self.email
    def get_short_name(self):
        return self.email
        
class Players(models.Model):
    name = models.CharField(max_length=200)
    team = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    
    
