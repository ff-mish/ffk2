/**
 * Created by aaron.jin on 15/5/13.
 */
$(function () {
    var percent=0,
        $sall=$(".s_all"),
        $loadding=$("#loadding");
    function loadding(){
        percent=percent+Math.floor(Math.random()*20);
        if(percent>100){
            percent=100;
            $loadding.width(percent+"%");
            $loadding.fadeOut(300);
            $sall.css('opacity', 1);
            return false;
        };
        $loadding.width(percent+"%");
        setTimeout(loadding,500);
    }
    loadding();

    //mapCircle
    function mapCircle(){
        var $mapW = $('.bigMap').width();
        var $mapH = $('.bigMap').height();
        $('.circle1').css({ "left": (445 / 1600) * $mapW, "top": (275 / 876) * $mapH });
        $('.circle2').css({ "left": (785 / 1600) * $mapW, "top": (255 / 876) * $mapH });
        $('.circle3').css({ "left": (1113 / 1600) * $mapW, "top": (383 / 876) * $mapH });
        $('.circle4').css({ "left": (1173 / 1600) * $mapW, "top": (313 / 876) * $mapH });
        $('.circle5').css({ "left": (1180 / 1600) * $mapW, "top": (330 / 876) * $mapH });
        $('.circle6').css({ "left": (1300 / 1600) * $mapW, "top": (275 / 876) * $mapH });
        $('.circle7').css({ "left": (1330 / 1600) * $mapW, "top": (290 / 876) * $mapH });
    }
    $('.bigMap img').load(function(){
        mapCircle();
    });


    $('.hotspots').tabSwitch();

    $(window).resize(function(){
        mapCircle();

        $('.indexMap').css('height', $(window).height() + 'px');
    });

    $('#slideAlink').click(function (){
        $('html,body').stop().animate({
            scrollTop:  $('.indexMap').height()
        }, 500);
    });

    //animate
    var $win=$(window),$header=$(".indexMapLinks"),height=$win.height(),st;
    var indexAdMT=141;
    if($win.width()<321){
        indexAdMT=90;
    }
    $win.scroll(function(e){
        st=$win.scrollTop();

        if(st<height && st>1){
            //$header.fadeOut();
            $('.indexAd').css('margin-top', -(st*0.3+indexAdMT) );
            $('.indexMapImg').css('margin-top', -st*0.5 );
        }else{
            //$header.fadeIn();
        }
        if(st<height-92){
            $header.removeClass('fcActive');
        }else{
            $header.addClass('fcActive');
        }
    });
    //animate

    //fI
    var controller = $.superscrollorama({
        triggerAtCenter: false,
        playoutAnimations: true
    });
    controller.addTween('#indexCon',
        TweenMax.from($('#fade1'), .5, {css:{opacity:0}}),0,-100)
        .addTween('#fade1',
        TweenMax.from($('#fade2'), .5, {css:{opacity:0}}),0,-100)
        .addTween('#fade2',
        TweenMax.from($('#fade3'), .5, {css:{opacity:0}}),0,-300)
        .addTween('#fade3',
        TweenMax.from($('#fade4'), .5, {css:{opacity:0}}),0,-100)
        .addTween('#fade4',
        TweenMax.from($('#fade5'), .5, {css:{opacity:0}}),0,-100)
        .addTween('#fade5',
        TweenMax.from($('#fade6'), .5, {css:{opacity:0}}),0,-100)
        .addTween('#fade6',
        TweenMax.from($('#fade7'), .5, {css:{opacity:0}}),0,-100)
        .addTween('#fade7',
        TweenMax.from($('#fade8'), .5, {css:{opacity:0}}),0,-300)
        .addTween('#fade8',
        TweenMax.from($('#fade9'), .5, {css:{opacity:0}}),0,-300)
        .addTween('#fade9',
        TweenMax.from($('#fade10'), .5, {css:{opacity:0}}),0,-100)
        .addTween('#fade10',
        TweenMax.from($('#showcase'), .5, {css:{opacity:0}}),0,-100)
        .addTween('#showcase',
        TweenMax.from($('#fade12'), .5, {css:{opacity:0}}),0,-100)
        .addTween('#fade12',
        TweenMax.from($('#contact'), .5, {css:{opacity:0}}),0,-100)
    ;

    myBrowser();

    $('.indexMapLinks1').click(function (){
        var b = $('.companys').offset().top;
        $('html,body').animate({scrollTop:b},500);
    });
    $('.indexMapLinks2').click(function (){
        var b = $('#fade4').offset().top;
        $('html,body').animate({scrollTop:b},500);
    });
    $('.indexMapLinks3').click(function (){
        var b = $('#showcase').offset().top;
        $('html,body').animate({scrollTop:b},500);
    });
    $('.indexMapLinks4').click(function (){
        var b = $('#contact').offset().top;
        $('html,body').animate({scrollTop:b},500);
    });

});

//mapHover
$.fn.tabSwitch=function ()
{
    var aBtn = this.find('.circleWrap a');
    var aDiv=this.find('.circleLinks a');
    aBtn.mouseover(function (){
        // marginleft/top 圆心居中执行
        aBtn.css( {'width':'8px', 'height':'8px','marginTop':'0px','marginLeft':'0px'} );
        $(this).stop().animate({ width:'16px', height:'16px','marginTop':'-4px','marginLeft':'-4px'});
        aDiv.removeClass('current');
        aDiv.eq($(this).index()).addClass('current');
    });
    aBtn.mouseout(function (){
        aBtn.css( {'width':'8px', 'height':'8px','marginTop':'0px','marginLeft':'0px'} );
        aDiv.removeClass('current');
    });
    aDiv.mouseover(function (){
        aDiv.removeClass('current');
        $(this).addClass('current');
        aBtn.css( {'width':'8px', 'height':'8px','marginTop':'0px','marginLeft':'0px'} );
        aBtn.stop();
        aBtn.eq($(this).index()).animate({ width:'16px', height:'16px','marginTop':'-4px','marginLeft':'-4px'});
    });
    aDiv.mouseout(function (){
        aDiv.removeClass('current');
        aBtn.css( {'width':'8px', 'height':'8px','marginTop':'0px','marginLeft':'0px'} );
    });
};


$(function () {
    $(window).resize(function () {
        var height = $(window).width()*1.0 / (1600/726);
        $('#myvideo').height(height);
        //contact模块一屏
        var contactHeight=$(window).height()-parseInt($('.video').css('marginBottom'));
        $('.contact').height(contactHeight>300?contactHeight:300);
        $('.contacttitle').css({marginTop:(contactHeight-300)/2});

    }).trigger('resize');
});
videojs("myvideo", { "controls": true, "autoplay": false, "preload": "auto", "poster": "img/page1video.jpg" })
    .on('play',function(){
        $('.tvp_overlay_poster').hide();
    })
    .on('pause',function(){
        $('.tvp_overlay_poster').show();
    })
    .on('ended', function (){
        $('.tvp_overlay_poster').show();
        $('.vjs-poster').show();
    }
);
$('.tvp_overlay_poster').appendTo('#myvideo');

//判断移动端横屏

var orientLayer = document.getElementById("orientLayer");
//判断横屏竖屏
function checkDirect() {
    if (document.documentElement.clientHeight >= document.documentElement.clientWidth) {
        return "portrait";
    } else {
        return "landscape";
    }
}
//显示屏幕方向提示浮层
function orientNotice() {
    var orient = checkDirect();
    if (orient == "portrait") {
        orientLayer.style.display = "none";
    } else {
        orientLayer.style.display = "block";
    }
}
function init() {
    orientNotice();
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
        setTimeout(orientNotice, 200);
    })
}

//是否为移动端
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    // document.writeln("您的浏览设备为：");
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        //console.log("phone");
        $('.indexMapImg,.indexAd').css({position:'absolute'});
        $('.circleLinks a').unbind();
        $('.circleWrap a').unbind();
0
        //contact模块一屏

        $(window).resize(function () {
            var contactHeight=$(window).height();
            //$('.contact').height(contactHeight>530?contactHeight:530);
            $('.contact').height(contactHeight>440?contactHeight:440);
            $('.contacttitle').css({marginTop:(contactHeight-360)/2});
        }).trigger('resize');

        return true;
    } else {
        //console.log("pc");
        return false;
    }
}

$(function () {
    if(browserRedirect()){
        init();
        $('.indexMapLinks').css('opacity','0');
        $('.circleWrap a').css( {'width':'4px', 'height':'4px'} );
        //禁视差
        var $win=$(window),$header=$(".indexMapLinks"),height=$win.height(),st;
        $win.scroll(function(e){
            st=$win.scrollTop();
            if(st<height && st>1){
                $('.indexAd').css('margin-top', -90 );
                $('.indexMapImg').css('margin-top', 0 );
            }
        });
        //禁视差
    };
});
//判断移动端横屏

//----------------------------- 判断浏览器 -------------------------
function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") < 1 ; //判断是否Safari
    if(isSafari){
        $('.contact_links a').css('font-weight', '300');
    }
}
//myBrowser() end
