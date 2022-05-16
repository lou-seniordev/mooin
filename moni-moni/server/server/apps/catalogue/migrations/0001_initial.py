# Generated by Django 4.0.4 on 2022-05-16 12:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=255)),
                ('slug', models.SlugField(max_length=255, unique=True)),
            ],
            options={
                'verbose_name_plural': 'categories',
            },
        ),
        migrations.CreateModel(
            name='Fundraiser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('author', models.CharField(default='admin', max_length=255)),
                ('description', models.TextField(blank=True)),
                ('image', models.ImageField(default='images/default.png', upload_to='images/')),
                ('slug', models.SlugField(max_length=255)),
                ('tags', models.CharField(default='newest', max_length=30)),
                ('fund_total', models.DecimalField(decimal_places=2, max_digits=1000)),
                ('fund_remaining', models.DecimalField(decimal_places=2, max_digits=1000)),
                ('funding_method', models.JSONField(help_text='Required', max_length=255, verbose_name='funding_method')),
                ('is_active', models.BooleanField(default=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fundraiser', to='catalogue.category')),
            ],
            options={
                'verbose_name_plural': 'fundraisers',
                'ordering': ('-created',),
            },
        ),
    ]
