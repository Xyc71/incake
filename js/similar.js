$(document).ready(function(){
    //�����ⲿ��
    var $lis=$(".nav").children("li")
    $lis.hover(function(){
        $(this).addClass("active").siblings().removeClass("active")
        $(this).find(".subnav").stop(true,true).slideDown()
    },function(){
        $(this).find(".subnav").stop(true,true).slideUp()
    })
})
