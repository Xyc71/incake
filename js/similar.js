$(document).ready(function(){
    //副标题部分
    var $lis=$(".nav").children("li")
    $lis.hover(function(){
        $(this).addClass("active").siblings().removeClass("active")
        $(this).find(".subnav").stop(true,true).slideDown()
    },function(){
        $(this).find(".subnav").stop(true,true).slideUp()
    })
})
