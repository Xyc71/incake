$(document).ready(function(){
    //轮播图
    var $ball=$(".imgBox");
    var $i=0;
    var $flag=true;
    var $fx=1;

    //克隆
    var $new=$ball.children().eq(0).clone(true);
    $ball.append($new);
    //自动滚动
    var $timer=setTimeout(move,3000);
    function move(){
        $i+=$fx;
        if($i==$ball.children().size()){
            $i=1;
            $ball.css("left",0)
        }else if($i==-1){
            $i=$ball.children().size()-2;
            $ball.css("left",-($ball.children().size()-1)*$new.innerWidth())
        }
        $ball.stop().animate({
            "left":-$i*$new.innerWidth()
        },300,function(){
            clearTimeout($timer);
            if($flag){
                $timer=setTimeout(move,3000);
            }
        })
        //焦点跟随
        $(".iconBox").children().eq($i%($ball.children().size()-1)).addClass("bingo").siblings().removeClass("bingo")
    }
    $(".banner").hover(function(){
        clearTimeout($timer);
        $flag=false;
    },function(){
        $timer=setTimeout(move,3000);
        $flag=true;
    })
    //焦点点击
    $(".iconBox").on("click","li",function(){
        var $index=$(this).index();
        if($index==0&&$i==($ball.children().size()-1)){//当图片为最后一张 焦点为第一个点时
            $ball.css("left",0)
        }
        $i=$index;
        $ball.stop().animate({
            "left":-$i*$new.innerWidth()
        },300);
        $(this).addClass("bingo").siblings().removeClass("bingo")
    })

    $(".btnl").click(function(){
        $fx=-1;
        move();
    })
    $(".btnr").click(function(){
        $fx=1;
        move()
    })


    //ajax获取kind
    $.ajax({
        type:"get",
        url:"json/kind.json",
        success:function(data){
            $.each(data,function(index1,item1){
                var $kind=$("<div class='kind'></div>")
                $(".container").append($kind)
                console.log(item1.title)
                var $title=$("<div class='title'><p class='title_text'>"+item1.title+"</p><a href='"+item1.href+"'><img src='img/title_more.png'></a></div>")
                var $list=$("<div class='list'></div>")
                $kind.append($title);
                $kind.append($list);
                var $lists=item1.list
                $.each($lists,function(index,items){
                    var $dl=$("<dl class='item'><dt><a href='"+items.href+"'><img src='"+items.url+"'></a><p class='type'>"+items.taste+"</p></dt><dd><p class='zh'>"+items.name+"</p><p class='en'>"+items.en+"</p><p class='size'><span class='price'>￥"+items.price+"/</span><span class='pond'>"+items.pond+"磅</span></span></p></dd></dl>");
                    $list.append($dl)
                })
            })
            $(".item").hover(function(){
                $(this).find(".type").stop().show()
            },function(){
                $(this).find(".type").stop().hide()
            })
        }
    })


})
