define("com/arale/1.2.0:base",["com/arale/1.2.0:class","com/arale/1.2.0:events","com/arale/1.2.0:aspect","com/arale/1.2.0:attribute"],function(t,a,e){function r(t,a){for(var e in a)if(a.hasOwnProperty(e)){var r="_onChange"+n(e);t[r]&&t.on("change:"+e,t[r])}}function n(t){return t.charAt(0).toUpperCase()+t.substring(1)}var s=t("com/arale/1.2.0:class"),i=t("com/arale/1.2.0:events"),o=t("com/arale/1.2.0:aspect"),c=t("com/arale/1.2.0:attribute");e.exports=s.create({Implements:[i,o,c],initialize:function(t){this.initAttrs(t),r(this,this.attrs)},destroy:function(){this.off();for(var t in this)this.hasOwnProperty(t)&&delete this[t];this.destroy=function(){}}})});