;/*!work/user/1.0.0:login*/
define("work/user/1.0.0:login",[],function(){});
;/*!work/user/1.0.0:register*/
define("work/user/1.0.0:register",["com/global/1.0.0:dollar"],function(e){var i=e("com/global/1.0.0:dollar"),a=i("#Register"),n={init:function(){this.roleTab()},roleTab:function(){a.find('.role input[type="radio"]').on("change",function(){if(i(this).prop("checked")){var e=i(this).parent(),n=a.find("select");e.addClass("active").siblings("label").removeClass("active"),e.hasClass("agency")?n.show():n.hide()}})}};n.init()});