# Generated by Django 3.1.4 on 2021-01-08 15:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0002_article_reporter'),
    ]

    operations = [
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('answer', models.CharField(max_length=256, null=True)),
                ('value', models.IntegerField(null=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='article',
            name='reporter',
        ),
        migrations.RemoveField(
            model_name='question',
            name='answer',
        ),
        migrations.AlterField(
            model_name='question',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
        migrations.DeleteModel(
            name='Answers',
        ),
        migrations.DeleteModel(
            name='Article',
        ),
        migrations.DeleteModel(
            name='Reporter',
        ),
        migrations.AddField(
            model_name='answer',
            name='question',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='questions.question'),
        ),
    ]