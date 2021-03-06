#coding:utf-8
__author__ = 'admin'
# --------------------------------
# Created by admin  on 2016/10/18.
# ---------------------------------
from django.http import  HttpResponse
from django.shortcuts import  render_to_response
from ..models import *
from django.template.context import  RequestContext

def index(request):
    baike_info=Consult.objects.filter(type=1,status=1).order_by("-addtime")[:8]
    anli_info=Consult.objects.filter(type=2,status=1).order_by("-addtime")[:8]
    guahua_info=Consult.objects.filter(type=3,status=1).order_by("-addtime")[:8]
    xinwen_info=Consult.objects.filter(type=4,status=1).order_by("-addtime")[:8]
    dongtai_info=Consult.objects.filter(type=5,status=1).order_by("-addtime")[:8]
    citiao_info=Consult.objects.filter(type=6,status=1).order_by("-addtime")[:8]
    return  render_to_response("zixun_index.html",locals(),context_instance=RequestContext(request))


def detail(request,zid):
    info=Consult.objects.get(zid=int(zid))
    try:
        next_id=Consult.objects.filter(zid__gt=zid,status=1).order_by("zid")[0].zid
    except:
        next_id=0
    try:
        last_id=Consult.objects.filter(zid__lt=zid,status=1).order_by("-zid")[0].zid
    except:
        last_id=0
    _infos=Consult.objects.filter(type=info.type,status=1).order_by("-addtime")[:16]
    hot_infos=_infos[:8]
    relate_infos=_infos[8:]
    return  render_to_response("zixun_detail.html",locals(),context_instance=RequestContext(request))