# Generated by Django 4.0.2 on 2022-02-13 06:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='customuser',
            options={'ordering': ('name', '-date_joined'), 'verbose_name_plural': 'Users'},
        ),
    ]
