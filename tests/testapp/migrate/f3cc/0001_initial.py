# Generated by Django 3.2.7 on 2021-09-14 10:52

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="CookieCategory",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.SlugField(unique=True, verbose_name="technical name")),
                (
                    "title_en",
                    models.CharField(
                        blank=True, default="", max_length=200, verbose_name="title"
                    ),
                ),
                (
                    "title_de",
                    models.CharField(
                        blank=True, default="", max_length=200, verbose_name="title"
                    ),
                ),
                (
                    "description_en",
                    models.TextField(blank=True, verbose_name="description"),
                ),
                (
                    "description_de",
                    models.TextField(blank=True, verbose_name="description"),
                ),
                ("preselect", models.BooleanField(default=False)),
                ("disabled", models.BooleanField(default=False)),
                ("ordering", models.IntegerField(default=0, verbose_name="ordering")),
            ],
            options={
                "verbose_name": "cookie category",
                "verbose_name_plural": "cookie categories",
                "ordering": ("ordering",),
            },
        ),
        migrations.CreateModel(
            name="CookieScript",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.SlugField(unique=True, verbose_name="technical name"),
                ),
                (
                    "inject_if",
                    models.TextField(
                        blank=True,
                        help_text="inject if cookie category is accepted",
                        verbose_name="inject if",
                    ),
                ),
                (
                    "inject_else",
                    models.TextField(
                        blank=True,
                        help_text="inject if cookie category is denied",
                        verbose_name="inject else",
                    ),
                ),
                (
                    "category",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="feincms3_cookiecontrol.cookiecategory",
                    ),
                ),
            ],
            options={
                "verbose_name": "cookie script",
                "verbose_name_plural": "cookie scripts",
                "ordering": ("name",),
            },
        ),
    ]