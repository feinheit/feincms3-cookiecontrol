from django.conf import settings
from django.core.cache import cache
from django.core.exceptions import ValidationError
from django.db import models
from django.db.models import signals
from django.utils.html import format_html
from django.utils.translation import (
    get_language,
    gettext,
    gettext_lazy as _,
    pgettext_lazy,
)


COOKIECONTROL_DEFAULTS = {
    "heading": pgettext_lazy("f3cc", "Cookies on Our Website"),
    "description": pgettext_lazy(
        "f3cc",
        "We use cookies to enhance the user experience on our website. Read our {link_start}privacy policy{link_end} to find out more about how we use cookies and protect your data.",
    ),
    "buttonAccept": pgettext_lazy("f3cc", "Accept all cookies"),
    "buttonReject": pgettext_lazy("f3cc", "Refuse non-essential cookies"),
    "buttonModify": pgettext_lazy("f3cc", "Modify cookie settings"),
    "domain": None,
    "ppu": None,
}
COOKIECONTROL_CACHE_TIMEOUT = 300


def clobber_cookiecontrol_data(**kwargs):
    for code, _name in settings.LANGUAGES:
        cache.delete(f"feincms3_cookiecontrol_settings_{code}")


def cookiecontrol_data(*, privacy_policy_url):
    cache_key = f"feincms3_cookiecontrol_settings_{get_language()}"

    data = cache.get(cache_key)
    if not data:
        data = (
            COOKIECONTROL_DEFAULTS
            | getattr(settings, "COOKIECONTROL", {})
            | {
                "cookies": [script.serialize() for script in Script.objects.all()],
            }
        )
        cache.set(cache_key, data, timeout=COOKIECONTROL_CACHE_TIMEOUT)

    if privacy_policy_url:
        data["description"] = data["description"].format(
            link_start=format_html('<a href="{}">', privacy_policy_url),
            link_end="</a>",
        )
        data["ppu"] = privacy_policy_url
    else:
        data["description"] = data["description"].format(link_start="", link_end="")

    return data


class Script(models.Model):
    name = models.SlugField(_("technical name"), unique=True)
    script = models.TextField(
        _("script"),
        blank=True,
        help_text=_("HTML code to inject if cookies are accepted."),
    )

    class Meta:
        ordering = ["name"]
        verbose_name = _("script")
        verbose_name_plural = _("scripts")

    def __str__(self):
        return self.name

    def clean(self):
        super().clean()

        msg = gettext(
            "This doesn't look right. Please start with a HTML tag (e.g. <script>, <div>)."
        )
        errors = {}

        if (stripped := self.script.strip()) and stripped[0] != "<":
            errors["script"] = msg

        msg = gettext("Entering <noscript> tags doesn't make sense.")
        if "<noscript" in self.script:
            errors["script"] = msg

        if errors:
            raise ValidationError(errors)

    def serialize(self):
        return {
            "name": self.name,
            "script": self.script,
        }


signals.post_save.connect(clobber_cookiecontrol_data, sender=Script)
signals.post_delete.connect(clobber_cookiecontrol_data, sender=Script)
