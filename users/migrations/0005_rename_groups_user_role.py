# Generated by Django 4.0 on 2022-01-23 15:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_rename_role_user_groups'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='groups',
            new_name='role',
        ),
    ]
