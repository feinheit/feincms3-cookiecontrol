import json
from pathlib import Path

from django.core.serializers.json import DjangoJSONEncoder
from django.http import HttpResponse
from django.views.decorators.cache import cache_page

from feincms3_cookiecontrol.models import COOKIECONTROL_CACHE_TIMEOUT, panel_data


BASE = Path(__file__).parent / "static" / "feincms3_cookiecontrol"


def read_staticfile(filename):
    return (BASE / filename).read_text()


@cache_page(COOKIECONTROL_CACHE_TIMEOUT)
def inject(request):
    content = f""";(function() {{
window.f3ccData = {json.dumps(panel_data(), cls=DjangoJSONEncoder)}

let el = document.createElement("div")
el.id = "f3cc"
document.body.appendChild(el)

el = document.createElement("style")
el.textContent = `{read_staticfile('build.main.css')}`
document.body.appendChild(el)

;{read_staticfile('build.main.js')}

}})()
"""

    response = HttpResponse(content, content_type="text/javascript; charset=UTF-8")
    return response
