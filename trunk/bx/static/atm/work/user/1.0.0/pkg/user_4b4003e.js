;/*!work/user/1.0.0:common*/
define("work/user/1.0.0:common",["work/common/1.0.0:common"],function(o){o("work/common/1.0.0:common")});
;/*!work/user/1.0.0:login*/
define("work/user/1.0.0:login",["work/user/1.0.0:common"],function(o){o("work/user/1.0.0:common")});
;/*!work/user/1.0.0:register*/
define("work/user/1.0.0:register",["work/user/1.0.0:common","com/global/1.0.0:dollar"],function(e){e("work/user/1.0.0:common");var o=e("com/global/1.0.0:dollar"),i=o("#Register"),n={init:function(){this.roleTab()},roleTab:function(){i.find('.role input[type="radio"]').on("change",function(){if(o(this).prop("checked")){var e=o(this).parent(),n=i.find("select");e.addClass("active").siblings("label").removeClass("active"),e.hasClass("agency")?n.show():n.hide()}})}};n.init()});