# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-06-24 12:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sites', '0008_auto_20160611_2225'),
    ]

    operations = [
        migrations.CreateModel(
            name='Players',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('team', models.CharField(max_length=200)),
                ('position', models.CharField(max_length=200)),
            ],
        ),
    ]