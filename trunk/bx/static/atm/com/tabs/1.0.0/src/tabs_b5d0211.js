define("com/tabs/1.0.0:tabs",["lib/jquery/1.11.3:jquery"],function(e){var a=e("lib/jquery/1.11.3:jquery"),l={type:"mouseover",menuNode:null,contNode:null,className:null,callback:null};a.fn.tabs=function(e){return e=a.extend({},l,e),this.each(function(){for(var l=a(this),n=a(e.menuNode,l),t=a(e.contNode,l),o=0,s=n.length;s>o;o+=1)n.eq(o).data("order",o);n.on(e.type,function(l){l.preventDefault(),e.callback&&e.callback(a(this));var o=a(this).data("order");n.removeClass(e.className).eq(o).addClass(e.className),t.hide().eq(o).show()})})}});