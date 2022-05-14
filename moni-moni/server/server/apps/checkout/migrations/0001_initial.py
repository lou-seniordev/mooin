# Generated by Django 4.0.2 on 2022-05-14 13:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FundingOptions',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('funding_name', models.CharField(help_text='Required', max_length=255, verbose_name='funding_name')),
                ('funding_price', models.DecimalField(decimal_places=2, help_text='Required', max_digits=1000, verbose_name='funding price')),
                ('funding_timeframe', models.CharField(help_text='Required', max_length=255, verbose_name='funding timeframe')),
                ('funding_window', models.CharField(help_text='Required', max_length=255, verbose_name='funding window')),
            ],
            options={
                'verbose_name': 'Funding Option',
                'verbose_name_plural': 'Funding Options',
            },
        ),
        migrations.CreateModel(
            name='PaymentSelections',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='Required', max_length=255, verbose_name='name')),
                ('is_active', models.BooleanField(default=True)),
            ],
            options={
                'verbose_name': 'Payment Selection',
                'verbose_name_plural': 'Payment Selections',
            },
        ),
    ]
