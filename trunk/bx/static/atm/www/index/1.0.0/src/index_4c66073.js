define("www/index/1.0.0:index",["www/common/1.0.0:common","lib/slick/1.6.0:slick","com/global/1.0.0:dollar"],function(o){o("www/common/1.0.0:common"),o("lib/slick/1.6.0:slick");var i=o("com/global/1.0.0:dollar");i(".regular").slick({dots:!0,infinite:!0,arrows:!1,slidesToShow:1,slidesToScroll:1,centerMode:!0,centerPadding:0}).on("setPosition",function(){var o=i(".slider-item").width(),l=(o-1890)/2+"px";i(".slider-helper").css({left:l})})});