#coding:utf-8
__author__ = 'zhoukunpeng'
# --------------------------------
# Created by zhoukunpeng  on 2016/7/13.
# ---------------------------------
from django.conf.urls import  patterns,url
import  views
from django.conf import  settings
class SelfAuth(object):
    def __init__(self,name="myauth",app_name="myauth"):
        self.name=name
        self.app_name=app_name
    def get_urls(self):
        urlpatterns = patterns('',
            ("^%s$"%settings.LOGIN_URL.lstrip("/"),views.login),
            ("^%s$"%settings.LOGOUT_URL.lstrip("/"),views.logout),
                               (r"^register/",views.register),
                               (r"^register_valid_phone/",views.register_valid_phone),
                               (r"^register_send_sms/",views.register_send_sms),
                               (r"^forgotpwd/",views.forgotpwd),
                               (r"^forgotpwd_valid_phone",views.forgotpwd_valid_phone)
            )
        return urlpatterns
    @property
    def urls(self):
        return self.get_urls(),self.app_name,self.name
site=SelfAuth()