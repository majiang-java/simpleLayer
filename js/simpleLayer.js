;(function(){
    var Layer = function(ele,opt){
        this.$element = ele,
            this.targetEle,
            this.defaults = {
                'position':'absolute',
                'z-index':999
            },
            this.options = $.extend({},this.defaults,opt)
    }
    Layer.prototype = {
        beauty:function(){

            var height = this.$element.height(),
                offset = this.$element.offset();
            this.targetEle =  $("#"+this.options.target);
            this.targetEle.css({
                "position":"absolute",
                "top": offset.top + height + 5,
                "left":offset.left-10,
                "z-index":999
            });
            return  this.targetEle;

        },
        showLayer:function(){

            this.targetEle.show();
        },
        closeLayer:function(){
            this.targetEle.hide();
        }

    }
    $.fn.layer = function(option){
        var  target = new Layer(this,option);
        target.beauty();
        return target;
    }

})();
