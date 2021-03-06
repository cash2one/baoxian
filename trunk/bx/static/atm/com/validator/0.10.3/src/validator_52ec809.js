define("com/validator/0.10.3:validator",["com/validator/0.10.3:core","lib/jquery/1.11.3:jquery"],function(t,e,s){var a=t("com/validator/0.10.3:core"),i=t("lib/jquery/1.11.3:jquery"),r=a.extend({events:{"mouseenter .{{attrs.inputClass}}":"mouseenter","mouseleave .{{attrs.inputClass}}":"mouseleave","mouseenter .{{attrs.textareaClass}}":"mouseenter","mouseleave .{{attrs.textareaClass}}":"mouseleave","focus .{{attrs.itemClass}} input,textarea,select":"focus","blur .{{attrs.itemClass}} input,textarea,select":"blur"},attrs:{explainClass:"ui-form-explain",itemClass:"ui-form-item",itemHoverClass:"ui-form-item-hover",itemFocusClass:"ui-form-item-focus",itemErrorClass:"ui-form-item-error",inputClass:"ui-input",textareaClass:"ui-textarea",showMessage:function(t,e){this.getExplain(e).html(t),this.getItem(e).addClass(this.get("itemErrorClass"))},hideMessage:function(t,e){this.getExplain(e).html(e.attr("data-explain")||" "),this.getItem(e).removeClass(this.get("itemErrorClass"))}},setup:function(){r.superclass.setup.call(this);var t=this;this.on("autoFocus",function(e){t.set("autoFocusEle",e)})},addItem:function(t){r.superclass.addItem.apply(this,[].slice.call(arguments));var e=this.query(t.element);return e&&this._saveExplainMessage(e),this},_saveExplainMessage:function(t){var e=t.element,s=e.attr("data-explain");void 0!==s||this.getItem(e).hasClass(this.get("itemErrorClass"))||e.attr("data-explain",this.getExplain(e).html())},getExplain:function(t){var e=this.getItem(t),s=e.find("."+this.get("explainClass"));return 0==s.length&&(s=i('<div class="'+this.get("explainClass")+'"></div>').appendTo(e)),s},getItem:function(t){t=i(t);var e=t.parents("."+this.get("itemClass"));return e},mouseenter:function(t){this.getItem(t.target).addClass(this.get("itemHoverClass"))},mouseleave:function(t){this.getItem(t.target).removeClass(this.get("itemHoverClass"))},focus:function(t){var e=t.target,s=this.get("autoFocusEle");if(s&&s.has(e)){var a=this;return void i(e).keyup(function(){a.set("autoFocusEle",null),a.focus({target:e})})}this.getItem(e).removeClass(this.get("itemErrorClass")),this.getItem(e).addClass(this.get("itemFocusClass")),this.getExplain(e).html(i(e).attr("data-explain")||"")},blur:function(t){this.getItem(t.target).removeClass(this.get("itemFocusClass"))}});s.exports=r});