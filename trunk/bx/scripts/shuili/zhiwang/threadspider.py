#coding:utf-8
__author__ = 'admin'
# --------------------------------
# Created by admin  on 2016/8/25.
# ---------------------------------


from Queue import  Queue
from threading import  Thread
import  urllib2
import  time
import  traceback
import  sys
import  datetime
import  random
_queue=Queue(1000000)
_size=0

_url_max_num=0
_proxy_list=[]
def spider_init(poolsize,url_maxnum,proxy_list=None):
    print datetime.datetime.now(),"[Spider]:init...."
    global  _size,_queue,_url_max_num,_proxy_list
    if proxy_list:
        _proxy_list=proxy_list
    if _size==0:
        _size=poolsize
        _url_max_num=url_maxnum
        def run():
            def work():
                while 1:
                    fun=_queue.get()
                    fun()
                    _queue.task_done()

            for i in range(0,_size):
                thread=Thread(target=work)
                thread.setDaemon(True)
                thread.start()
        run()
def spider_join():
    global  _queue
    _queue.join()

def urllib2_get_httpproxy(ip,port):
    proxy=urllib2.ProxyHandler({'http': 'http://%s:%s'%(ip,port)})
    opener=urllib2.build_opener(proxy)
    return  opener
    #urllib2.install_opener(opener)

def urllib2_get_httpsproxy(ip,port):
    proxy=urllib2.ProxyHandler({'https': 'https://%s:%s'%(ip,port)})
    opener=urllib2.build_opener(proxy)
    return  opener
    #urllib2.install_opener(opener)
class Spider(object):
    _url_buff=set()
    def __init__(self,url,code=None,data=None,cookie=None,handle=None,timeout=3,retry_times=30,retry_delta=3,proxy=False,with_header=False):
        '''
            url   目标url
            data   post的数据
            timeout  超时时间
            retry_times 重试次数
            retry_delta   重试间隔
            handle        结果处理函数
        '''

        global  _queue
        if url not in Spider._url_buff and len(Spider._url_buff)<_url_max_num:
            Spider._url_buff.add(url)
            self.url=url
            self.data=data
            self.timeout=timeout
            self.retry_times=retry_times
            self.retry_delta=retry_delta
            self.handle=handle
            self.code=code
            self.cookie=cookie
            self.proxy=proxy
            self.with_header=with_header
            _queue.put(self._go)

    def _go(self):
        retry_times=self.retry_times
        url=self.url
        postdata=self.data
        timeout=self.timeout
        retry_delta=self.retry_delta
        for i in range(0,retry_times):
            try:
                if self.proxy:
                    urllib2.install_opener(random.sample(_proxy_list,1)[0])
                request=urllib2.Request(url)
                if self.cookie:
                    request.headers["Cookie"]=self.cookie
                if self.code:
                    response=urllib2.urlopen(request,data=postdata,timeout=timeout)
                    data=response.read().decode(self.code)
                    headers=response.info().dict

                else:
                    response=urllib2.urlopen(request,data=postdata,timeout=timeout)
                    data=response.read()
                    headers=response.info().dict

                if self.handle:
                    if not self.with_header:
                        self.handle(data)
                    else:
                        self.handle(data,headers)
            except Exception as e :
                print datetime.datetime.now(),"[Spider]:%s Exception:%s"%(url,e)
                #traceback.print_exc()
                time.sleep(retry_delta)
            else:
                print datetime.datetime.now(),"[Spider]:%s Success!"%url
                break