from django.conf.urls import url
from . import views
import django.contrib.auth.views

from django.contrib import admin
admin.autodiscover()

urlpatterns = [
    url(r'^$', views.player_list, name='player_list'),
    url(r'^post/vote/$', views.vote, name='vote'),
    #url(r'^post/player_list/$', views.player_list, name='player_list'),
    url(r'^post/register/$', views.register, name='register'),
    url(r'^post/login/$', views.login, name='login'),
    url(r'^post/logout/$', views.logout, name='logout'),
    #url(r'^post/login/$', django.contrib.auth.views.login, name="login"),
]