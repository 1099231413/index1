
$(function(){

    //我的淘宝选项卡
    (function(){
        var oLi=$('.my ul li');

        oLi.hover(function(){
            //console.log($(this).find('div').length);
            if($(this).find('div').length>0){
                $(this).addClass("my-active");
                $(this).children('a').css('text-decoration','underline');
                $(this).find('div').show();
            }
        },function(){
            if($(this).find('div')){
                $(this).removeClass("my-active");
                $(this).children('a').css('text-decoration','normal');
                $(this).find('div').hide();
            }
        });

    })();

    //搜索获得焦点
    (function(){
        var oInput=$('.search-con .text');

        oInput.click(function(){
            //console.log($(this).val());
            if($(this).val()=='原装进口全世界'){
                $(this).val('');
            }else if($(this).val().length!=0){
                oInput.attr('placeholder','')
            }
        }).blur(function(){
            if($(this).val().length==0){
                $(this).val('原装进口全世界');
                oInput.attr('placeholder','原装进口全世界');
            }
        });

    })();

    //红色字体选择
    (function(){
        var oA=$('.search-con p a');

        a();
        function a(){
            oA.eq(1).css('color','#c40000');
            oA.eq(3).css('color','#c40000');
        }

    })();

    //显示猫头
    (function(){
        var oLi=$('.nav-menu li');

        oLi.hover(function(){
            $(this).find('.hover-pic').stop().animate({'top':'-10px'},300);
        },function(){
            $(this).find('.hover-pic').stop().animate({'top':0},100);
        });

    })();

    //幻灯
    (function(){
        var oLi=$('.menu-img ul li');
        var oMenu=$('#menu');
        var timer=null;
        var iNow=0;
        var arrData=[
            {'color':'#e8e8e8','url':'images/tm-bg1.jpg'},
            {'color':'#e8e8e8','url':'images/tm-bg2.jpg'},
            {'color':'#e8e8e8','url':'images/tm-bg1.jpg'},
            {'color':'#e8e8e8','url':'images/tm-bg2.jpg'},
            {'color':'#e8e8e8','url':'images/tm-bg1.jpg'},
            {'color':'#e8e8e8','url':'images/tm-bg2.jpg'}
        ];

        oLi.hover(function(){
            clearInterval(timer);
            iNow=$(this).index();
            doMove();
        },function(){
            autoPlay();
        });

        function autoPlay(){
            oLi.css('background','#a2a2a2').eq(iNow).css('background','#fff');
            oMenu.css('background',arrData[iNow].color);
            oMenu.find('.wrap').css('background','url("'+arrData[iNow].url+'") no-repeat');
            timer=setInterval(function(){
                doMove();
                iNow++;
            },3000);
        }
        autoPlay();

        function doMove(){
            if(iNow<0){
                iNow=oLi.length-1;
            }else if(iNow>(oLi.length-1)){
                iNow=0;
            }
            oLi.css('background','#a2a2a2').eq(iNow).css('background','#fff');
            oMenu.css('background',arrData[iNow].color);
            oMenu.find('.wrap').css('background','url("'+arrData[iNow].url+'") no-repeat');
        }

    })();

    //热门点击进入
    (function(){
        var oLi=$('.hot-menu li');
        var oDiv=$('.hot-c');

        oLi.hover(function(){
            $(this).find('.hot-c').stop().fadeIn();
        },function(){
            $(this).find('.hot-c').stop().fadeOut();
        });
    })();

    //移入变色
    (function(){
        var oLi=$('.hot-side li');

        oLi.hover(function(){
            $(this).find('.hot-text1').css('color','red');
            $(this).find('.hot-text2').css('color','red');
        },function(){
            $(this).find('.hot-text1').css('color','#000');
            $(this).find('.hot-text2').css('color','#999999');
        });
    })();

    //图片变大
    (function(){
        var oDiv=$('.trend div');

        oDiv.hover(function(){
            $(this).find('img').stop().animate({'padding-top':'10px','height':'120px'});
        },function(){
            $(this).find('img').stop().animate({'padding-top':'20px','height':'100px'});
        });
    })();

    //文字滚动
    (function(){
        var oDiv=$('.main-sc');
        var oUl=oDiv.find('ul');
        var oLi=oUl.find('li');
        var iH=0;
        var str='';
        var iNow=0;
        var timer=null;

        var arrData=[
            {'title':'一方有难 八方支援>','url':'#'},
            {'title':'每成交一笔捐献1元>','url':'#'},
            {'title':'女装商家万众一心>','url':'#'},
            {'title':'那些灿烂华美的瞬间1','url':'#'},
            {'title':'那些灿烂华美的瞬间2','url':'#'}
        ];

        for(var i=0;i<arrData.length;i++){
            str+='<li><a href='+arrData[i].url+'>'+arrData[i].title+'</a></li>';
        }

        oUl.html(str);
        iH=oUl.find('li').height();

        oDiv.hover(function(){
            clearInterval(timer);

        },autoPlay);

        function autoPlay(){
            timer=setInterval(function(){
                doMove(-1);
            },3000);
        }
        autoPlay();

        function doMove(num){
            iNow+=num;
            if(Math.abs(iNow)>arrData.length-1){
                iNow=0;
            }
            if(iNow>0){
                iNow=-(arrData.length-1);
            }
            oUl.stop().animate({'top':iH*iNow},500);
        }
    })();

    //图片左右移动
    (function(){
        var oLi=$('.main-con2 ul li');
        var oLi1=$('.main-con3 ul li');

        oLi.hover(function(){
            $(this).find('img').stop().animate({'right':'10px'},300);
        },function(){
            $(this).find('img').stop().animate({'right':0},300);
        });

        oLi1.hover(function(){
            $(this).find('img').stop().animate({'right':'10px'},300);
        },function(){
            $(this).find('img').stop().animate({'right':0},300);
        });
    })();

});