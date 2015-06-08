/**
 * Created by aaron.jin on 15/5/13.
 */
$(function () {
    var percent = 0,
        $sall = $(".s_all"),
        $loadding = $("#loadding");
    //function loadding(){
    //    Old loading
    //    percent=percent+Math.floor(Math.random()*20);
    //    if(percent>100){
    //        percent=100;
    //        $loadding.width(percent+"%");
    //        $loadding.fadeOut(300);
    //        $sall.css('opacity', 1);
    //        return false;
    //    };
    //    $loadding.width(percent+"%");
    //    setTimeout(loadding,500);
    //}
    //loadding();

    //mapCircle
    function mapCircle() {
        var $mapW = $('.bigMap').width();
        var $mapH = $('.bigMap').height();
        $('.circle1').css({"left": (426 / 1600) * $mapW, "top": (347 / 876) * $mapH});
        $('.circle2').css({"left": (744 / 1600) * $mapW, "top": (316 / 876) * $mapH});
        $('.circle3').css({"left": (1226 / 1600) * $mapW, "top": (438 / 876) * $mapH});
        $('.circle5').css({"left": (1258 / 1600) * $mapW, "top": (401 / 876) * $mapH});
        $('.circle4').css({"left": (1225 / 1600) * $mapW, "top": (354 / 876) * $mapH});
        $('.circle6').css({"left": (1287 / 1600) * $mapW, "top": (368 / 876) * $mapH});
        $('.circle7').css({"left": (1343 / 1600) * $mapW, "top": (373 / 876) * $mapH});
    }

    $('.bigMap img').load(function () {
        mapCircle();
    });


    $('.hotspots').tabSwitch();

    $(window).resize(function () {
        mapCircle();

        $('.indexMap').css('height', $(window).height() + 'px');

        $('.low-browser').css('height', $(window).height() + 'px');
    });

    $('#slideAlink').click(function () {
        $('html,body').stop().animate({
            scrollTop: $('.indexMap').height()
        }, 500);
    });

    //animate
    var $win = $(window), $header = $(".indexMapLinks"), height = $win.height(), st;
    $win.resize(function () {
        height = $win.height()
    });
    var indexAdMT = 141;
    if ($win.width() < 1300) {
        indexAdMT = 90;
    }
    $win.scroll(function (e) {
        st = $win.scrollTop();
        if (st < height && st > 1) {
            //$header.fadeOut();
            $('.indexAd').css('margin-top', -(st * 0.3 + indexAdMT));
            $('.indexMapImg').css('margin-top', -st * 0.5);
        } else {
            //$header.fadeIn();
        }
        if (st < height - 92) {
            $header.removeClass('fcActive');
        } else {
            $header.addClass('fcActive');
        }
        if (st < height) {
            $('body').css({background: '#fff'});
            $('#loadding').css({background: '#000'});

            $('.indexMap').css({background:'#fff'});
            $('.indexMap>.indexMapImg').css({opacity:1});
        } else {
            $('body').css({background: '#000'});
            $('#loadding').css({background: '#fff'});
            $('.indexMap').css({background:'#000'});
            $('.indexMap>.indexMapImg').css({opacity:0});
        }
    });
    //animate


    //$('.transition').hover(function () {
        //var transH =  $(this).height();
    //    $(this).stop().animate({marginTop: '-150px'});
    //}, function () {
    //    $(this).stop().animate({marginTop: '0px'});
    //});


    myBrowser();

    $('.indexMapLinks1').click(function () {
        var b = $('.companys').offset().top;
        $('html,body').animate({scrollTop: b}, 500);
    });
    $('.indexMapLinks2').click(function () {
        var b = $('#fade4').offset().top;
        $('html,body').animate({scrollTop: b}, 500);
    });
    $('.indexMapLinks3').click(function () {
        var b = $('#showcase').offset().top;
        $('html,body').animate({scrollTop: b}, 500);
    });
    $('.indexMapLinks4').click(function () {
        var b = $('#contact').offset().top;
        $('html,body').animate({scrollTop: b}, 500);
    });

});

//mapHover
$.fn.tabSwitch = function () {
    var aBtn = this.find('.circleWrap a');
    var aDiv = this.find('.circleLinks a');
    aBtn.mouseover(function () {
        // marginleft/top 圆心居中执行
        aBtn.css({'width': '8px', 'height': '8px', 'marginTop': '0px', 'marginLeft': '0px'})
            .stop().animate({opacity:'0'},200);
        $(this).stop().animate({width: '16px', height: '16px', 'marginTop': '-4px', 'marginLeft': '-4px',opacity:'1'},200);
        aDiv.removeClass('current');
        aDiv.eq($(this).index()).addClass('current');
    });
    aBtn.mouseout(function () {
        aBtn.stop().css({'width': '8px', 'height': '8px', 'marginTop': '0px', 'marginLeft': '0px'})
            .animate({opacity:'1'},200);
        aDiv.removeClass('current');
    });
    aDiv.mouseover(function () {
        aDiv.removeClass('current');
        $(this).addClass('current');
        aBtn.css({'width': '8px', 'height': '8px', 'marginTop': '0px', 'marginLeft': '0px'});
        aBtn.stop().animate({opacity:'0'},200);;
        aBtn.eq($(this).index()).stop().animate({width: '16px', height: '16px', 'marginTop': '-4px', 'marginLeft': '-4px',opacity:'1'},200);
    });
    aDiv.mouseout(function () {
        aDiv.removeClass('current');
        aBtn.stop().css({'width': '8px', 'height': '8px', 'marginTop': '0px', 'marginLeft': '0px'})
            .stop().animate({opacity:'1'},200);
    });
};


$(function () {
    $(window).scrollTop($(window).scrollTop()+1);
    $(window).resize(function () {
        var height = $(window).width() * 1.0 / (1280 / 720);
        $('#myvideo').height(height);
        //contact模块一屏
        //var contactHeight = $(window).height();
        //$('.contact').height(contactHeight > 600 ? contactHeight : 600);
        //$('.contacttitle').css({marginTop: (contactHeight - 300) / 2});

        if($(window).width()>1450){
            var conttactlinksWidth = 0;
            $('.contact_links').children().each(function () {
                conttactlinksWidth += $(this).width() + parseInt($(this).css("marginLeft")) +  parseInt($(this).css("marginRight"));
            });
            $('.contact_links').width(conttactlinksWidth);
        }else{
            $('.contact_links').width('90%');
        }

    }).trigger('resize');
});
videojs("myvideo", {"controls": true, "autoplay": false, preload:"none",  "poster": "http://cdn.ffk2.com/img/cover.jpg"})
    .on('play', function () {
        $('.tvp_overlay_poster').hide();
    })
    .on('pause', function () {
        //$('.tvp_overlay_poster').show();
        if (browserRedirect()) {
            $('.vjs-big-play-button').hide();
        }
    })
    .on('ended', function () {
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
        return true;
    } else {
        return false;
    }
}

$(function () {
    if (browserRedirect()) {
        console.log('phone');

        //console.log("phone");
        $('.indexMapImg,.indexAd').css({position: 'absolute'});
        $('.indexMapImg').css({position: 'relative'});
        $('.circleLinks a').unbind();
        $('.circleWrap a').unbind();
        //contact模块一屏

        $('#sfmap').attr('src','http://cdn.ffk2.com/img/bigMap_mobile_copy_(1).jpg');

        $(window).resize(function () {
            var contactHeight = $(window).height();
            //$('.contact').height(contactHeight>530?contactHeight:530);
            //$('.contact').height(contactHeight > 440 ? contactHeight : 440);
            //$('.contacttitle').css({marginTop: (contactHeight - 360) / 2});
        }).trigger('resize');


        init();
        $('.indexMapLinks').css('opacity', '0');
        $('.circleWrap a').css({'width': '4px', 'height': '4px'});
        //禁视差
        var $win = $(window), $header = $(".indexMapLinks"), height = $win.height(), st;
        $win.scroll(function (e) {
            st = $win.scrollTop();
            if (st < height && st > 1) {
                $('.indexAd').css('margin-top', -70);
                $('.indexMapImg').css('margin-top', 0);
            }
        });
        //禁视差
        $('.contact_links a strong').removeClass('transition-wrap');
        $('.contact_links a div').removeClass('transition');
        $('.companyBox strong').removeClass('transition-wrap');
        $('.companyBox div').removeClass('transition');

        $('#myvideo_html5_api').attr({'src':'http://cdn.ffk2.com/video/mobile.mp4'});
        $('#myvideo_html5_api').children('source').attr({'src':'http://cdn.ffk2.com/video/mobile.mp4'});
        console.log($('#myvideo_html5_api').html());
    }else{


        //console.log("pc");
        var controller = $.superscrollorama({
            triggerAtCenter: false,
            playoutAnimations: true
        });
        controller.addTween('#indexCon',
            TweenMax.fromTo($('#fade1'), .5, {css: {opacity: 0}},{css:{opacity:1}}), 0, -100)
            .addTween('#fade1',
            TweenMax.fromTo($('#fade2'), .5, {css: {opacity: 0}},{css:{opacity:1}}), 0, -100)
            .addTween('#fade2',
            TweenMax.fromTo($('#fade3'), .5, {css: {opacity: 0}},{css:{opacity:1}}), 0, -300)
            .addTween('#fade3',
            TweenMax.fromTo($('#fade4'), .5, {css: {opacity: 0}},{css:{opacity:1}}), 0, -100)
            .addTween('#fade4',
            TweenMax.fromTo($('#subheading'), .5, {css: {opacity: 0}},{css:{opacity:1}}), 0, -100)
            .addTween('#fade4',
            TweenMax.fromTo($('#fade5'), .5, {css: {opacity: 0}},{css:{opacity:1}}), 0, -100)
            .addTween('#fade5',
            TweenMax.fromTo($('#fade6'), .5, {css: {opacity: 0}},{css:{opacity:1}}), 0, -100)
            .addTween('#fade6',
            TweenMax.fromTo($('#fade7'), .5, {css: {opacity: 0}},{css:{opacity:1}}), 0, -100)
            .addTween('#fade7',
            TweenMax.fromTo($('#fade12'), .5, {css: {opacity: 0}},{css:{opacity:1}}), 0, -100)
            .addTween('#fade12',
            TweenMax.fromTo($('#fade8'), .5, {css: {opacity: 0}},{css:{opacity:1}}), 0, -300)
            .addTween('#fade8',
            TweenMax.fromTo($('#fade9'), .5, {css: {opacity: 0}},{css:{opacity:1}}), 0, -300)
            .addTween('#fade9',
            TweenMax.fromTo($('#fade10'), .5, {css: {opacity: 0}},{css:{opacity:1}}), 0, -100)
            .addTween('#fade10',
            TweenMax.fromTo($('#showcase'), .5, {css: {opacity: 0}},{css:{opacity:1}}), 0, -100)
            .addTween('#showcase',
            TweenMax.fromTo($('#contact'), .5, {css: {opacity: 0}},{css:{opacity:1}}), 0, -500)
        ;
    }
    ;
});
//判断移动端横屏

//----------------------------- 判断浏览器 -------------------------
function myBrowser() {

    var browser = navigator.appName;
    var b_version = navigator.appVersion;
    var version = parseFloat(b_version);
    if ((browser == "Microsoft Internet Explorer")
        && (version < 5)) {
        $('.s_all').css({
            'display': 'none'
        });
        $('.low-browser').css({
            'display': 'block'
        });
    }
    else {

        var percent = 0,
            $sall = $(".s_all"),
            $loadding = $("#loadding");

        var preload;
        function loadimg() {
            // Create a new queue.
            preload = new createjs.LoadQueue(true, "http://cdn.ffk2.com/img/");

            // Use this instead to favor xhr loading
            //preload = new createjs.LoadQueue(true, "assets/");

            manifest = [
                "ff.jpg",
                "k2.jpg",
                "indexImg_FFK2.jpg",
                "indexMap.gif",
                //"aaa.png",
                //"indeximg_polygon.jpg",
                //"showcase3.jpg",
                //"arrow.png",
                //"indeximg_polygon1.jpg",
                //"showcase4.jpg",
                //"bigMap.jpg",
                //"indeximg_triangle.jpg",
                //"slider_line.gif",
                //"trustedLogo1.jpg",
                //"icon_video_play.png",
                //"logo.png",
                //"trustedLogo2.jpg",
                //"icon_video_play1.png",
                //"page1video.jpg",
                //"video_mute.png",
                //"showcase1.jpg",
                //"video_pause.png",
                //"showcase2.jpg",
                "showcase5.jpg",
                "showcase6.jpg",
                "showcase7.jpg",
                "showcase8.jpg"
            ];
            preload.on("progress", handleOverallProgress);
            preload.on("complete", handleComplete);
            preload.loadManifest(manifest, true, "http://cdn.ffk2.com/img/");

            function handleOverallProgress(event) {
                $loadding.stop().animate({width: (1-preload.progress) * 100 + "%"}, 500);
            }

            function handleComplete(event) {
                $loadding.stop().animate({width: (1-preload.progress) * 100 + "%"}, 500, function () {
                    $(this).fadeOut(300);
                    $sall.css('opacity', 1);
                });
            }

        }

        loadimg();
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") < 1; //判断是否Safari
        if (isSafari) {
            $('.contact_links a').css('font-weight', '300');
        }
    }
}
//myBrowser() end
