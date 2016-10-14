$(document).ready(function(){
    //实现tab切换
    $(".showlist").children("li").eq($(".activeb").index()).show().siblings("li").hide();
    $(".ball").on("mouseenter","li",function(){
        $(this).addClass("activeb").siblings().removeClass("activeb");
        $(".showlist").children("li").eq($(".activeb").index()).show().siblings("li").hide();
        var $url=$(".showlist").children("li").eq($(".activeb").index()).find("img").attr("src");
        $(".bigImg").find("img").attr("src",$url)
    })
    //点击上下箭头
    $(".down").click(function(){
        $(".ball").css("top",-110)
    })
    $(".up").click(function(){
        $(".ball").css("top",0)
    })
    //放大镜
    var $filter=$(".filter");
    var $showlist=$(".showlist");
    $showlist.mousemove(function(e){
        $(".filter").stop().show();
        $(".bigImg").stop().show();
        var ev=window.event||e;
        var $posX=(ev.offsetX||ev.layerX)-$filter.innerWidth()/2;
        var $posY=(ev.offsetY||ev.layerY)-$filter.innerHeight()/2;
        if($posX<=0){
            $posX=0
        }else if($posX>=$showlist.innerWidth()-$filter.innerWidth()){
            $posX=$showlist.innerWidth()-$filter.innerWidth()
        }
        if($posY<=0){
            $posY=0
        }else if($posY>=$showlist.innerHeight()-$filter.innerHeight()){
            $posY=$showlist.innerHeight()-$filter.innerHeight()
        }

        $filter.css({
            "left":$posX,
            "top":$posY
        })
        $(".imgr").css({
            "left":-$posX*2,
            "top":-$posY*2
        })
    })
})
