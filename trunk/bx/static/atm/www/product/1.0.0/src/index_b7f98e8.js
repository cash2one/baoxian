define("www/product/1.0.0:index",["www/product/1.0.0:common","com/global/1.0.0:dollar"],function(a){function e(){d.removeClass("active").filter('[data-key="all"]').addClass("active"),i.show()}function t(a){d.removeClass("active").filter('[data-key="'+a+'"]').addClass("active"),i.hide().filter('[data-belong="'+a+'"]').show()}a("www/product/1.0.0:common");var l=a("com/global/1.0.0:dollar"),o=l(".letter-filter"),d=o.find("[data-key]"),i=o.find("[data-belong]");o.on("click","[data-key]",function(a){a.preventDefault();var o=l(this).data("key");"all"===o?e():t(o)})});