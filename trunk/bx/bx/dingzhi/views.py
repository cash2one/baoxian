#coding:utf-8
__author__ = 'admin'
# --------------------------------
# Created by admin  on 2016/10/18.
# ---------------------------------
from django.shortcuts import  render_to_response
from django.http import  HttpResponse
from django.template.context import  RequestContext
import  json
from ..models import  DingZhi


def add(request):
    if request.method=="POST":
        name=request.POST.get("name")
        tel=request.POST.get("contact")
        time_type=request.POST.get("type")
        try:
            tel=int(tel)
        except:
            data={"errorCode":500,"formError":{"fields":[{"contact":"手机号格式不正确！"}]}}
        time_type=int(time_type)
        assert  time_type in (0,1,2,3)
        if  time_type==0:
            start_time=0
            endtime=0
        if time_type==1:
            start_time=6
            endtime=14
        if time_type==2:
            start_time=14
            endtime=16
        if time_type==3:
            start_time=16
            endtime=22
        try:
            DingZhi.objects.get(contact=str(tel))
        except DingZhi.DoesNotExist:
            _=DingZhi(realname=name,contact=str(tel),start_hour=start_time,end_hour=endtime)
            _.save()
        data={"errorCode":0,"msg":"预约成功！","formSuccess":{},"data":{}}
        return HttpResponse(json.dumps(data),mimetype="application/javascript")




