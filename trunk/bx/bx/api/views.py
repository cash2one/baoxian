#coding:utf-8
__author__ = 'admin'
# --------------------------------
# Created by admin  on 2016/10/10.
# ---------------------------------

from gcutils.encrypt import  md5
from django.conf import  settings
import os
from django.http import  HttpResponse
import  json
from django.views.decorators.csrf import csrf_exempt
import  urllib
import urlparse
from models import Area
from bx.utils.sms import send_dayysms_validnumber
import random
from gcutils.encrypt import  md5
import  time

@csrf_exempt
def upload_img(request):
    assert  request.META["HTTP_HOST"]=="img.baoxiangj.com"
    postinfo= urlparse.parse_qs(request.body)
    _file=postinfo.get("file")[0]
    extname=request.POST["extname"]
    finger=md5(_file)
    filename=md5(_file)+str(extname)
    _flag=int(finger,16)
    try:
        os.mkdir(os.path.join(settings.MEDIA_ROOT,"img",str(_flag%100)))
    except:
        pass
    path=os.path.join(settings.MEDIA_ROOT,"img",str(_flag%100),filename)
    _u=open(path,"wb")
    _u.write(_file)
    _u.flush()
    _u.close()
    return HttpResponse(json.dumps({"status":True,"filename":filename,"imgurl":"/media/img/"+str(_flag%100)+"/"+filename}),
                        mimetype="application/javascript")

def area_list(request):
    getinfo=request.GET
    areaid=getinfo.get("areaid",None)
    callback=getinfo.get("callback")
    if areaid==None:
        info=Area.objects.filter(level=1)
    else:
        areaid=int(areaid)
        info=Area.objects.filter(parentid=areaid)
    info=info.order_by("id")
    data=[(i.id,i.shortname)  for i in info]
    result=json.dumps({"status":True,"data":data},ensure_ascii=True)
    if callback:
        result="%s(%s)"%(callback,result)
    return  HttpResponse(result,mimetype="application/javascript")

def send_sms_validnumer(request):
    getinfo=request.GET
    tel=getinfo.get("tel")
    tel=int(tel)
    numer="".join(random.sample(["1","2","3","4","5","6","7","8","9"],6))
    calback=getinfo.get("callback")
    try:
        result=send_dayysms_validnumber(phone=tel,content=numer)
        assert  result["alibaba_aliqin_fc_sms_num_send_response"]["result"]["success"]==True
        request.session.setdefault("sms_validnumer",numer)
        request.session.setdefault("sms_validtime",str(int(time.time())))
        _result={"status":True,"message":"success!","md5":md5(numer+"gc895316")}
    except:
        message="发送失败！稍后再试"
        _result={"status":False,"message":message}
    _result=json.dumps(_result,ensure_ascii=True)
    if calback:
        _result="%s(%s)"%(calback,_result)
    response=HttpResponse(_result,mimetype="application/javascript")
    return  response

def valid_sms_validnumer(request):
    getinfo=request.GET
    numer=getinfo.get("numer")
    md=getinfo.get("md5")
    callback=getinfo.get("callback")
    assert  numer and md
    if md5(numer+"gc895316")==md:
        result={"status":True}
    else:
        result={"status":False}
    result=json.dumps(result,ensure_ascii=True)
    if callback:
        result="%s(%s)"%(callback,result)
    return HttpResponse(result,mimetype="application/javascript")




