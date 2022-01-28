# Generated by Django 4.0.1 on 2022-01-28 08:58

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PaytmHistory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ORDERID', models.CharField(max_length=30, verbose_name='ORDER ID')),
                ('TXNDATE', models.DateTimeField(default=django.utils.timezone.now, verbose_name='TXN DATE')),
                ('TXNID', models.IntegerField(verbose_name='TXN ID')),
                ('BANKTXNID', models.IntegerField(blank=True, null=True, verbose_name='BANK TXN ID')),
                ('BANKNAME', models.CharField(blank=True, max_length=50, null=True, verbose_name='BANK NAME')),
                ('RESPCODE', models.IntegerField(verbose_name='RESP CODE')),
                ('PAYMENTMODE', models.CharField(blank=True, max_length=10, null=True, verbose_name='PAYMENT MODE')),
                ('CURRENCY', models.CharField(blank=True, max_length=4, null=True, verbose_name='CURRENCY')),
                ('GATEWAYNAME', models.CharField(blank=True, max_length=30, null=True, verbose_name='GATEWAY NAME')),
                ('MID', models.CharField(max_length=40)),
                ('RESPMSG', models.TextField(max_length=250, verbose_name='RESP MSG')),
                ('TXNAMOUNT', models.FloatField(verbose_name='TXN AMOUNT')),
                ('STATUS', models.CharField(max_length=12, verbose_name='STATUS')),
            ],
        ),
    ]
