# Generated by Django 4.0.4 on 2022-06-20 16:23

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
                ('name', models.CharField(choices=[('help', 'Help Needed'), ('trending', 'Trending'), ('urgent', 'Urgent')], db_index=True, default='others', max_length=20, primary_key=True, serialize=False)),
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
                ('image', models.ImageField(default='default.png', upload_to='../../media/')),
                ('slug', models.SlugField(max_length=255)),
                ('tags', models.CharField(default='newest', max_length=30)),
                ('fund_total', models.DecimalField(decimal_places=2, default=82954791, max_digits=1000)),
                ('fund_remaining', models.DecimalField(decimal_places=2, default=8730, max_digits=1000)),
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
