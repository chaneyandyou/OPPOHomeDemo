/**
 * Created by chaney on 2016/11/8.
 */
$(function () {
    new WOW().init();
    /*
     * banner图轮播
     * */
    var cur_index = 0;
    var timer = null;
    var imgWid = $('.banner_ul img').width();
    var liImgs = $('.banner_nav ul li')
    function autoPlay() {
        timer = setInterval(function () {
            cur_index++;
            if(cur_index == liImgs.length){
                $('banner_ul').css({
                    left:0
                });
                cur_index = 0;
            }
            $('.banner_ul').css({
                left:-(cur_index * imgWid)
            });
            liImgs.eq(cur_index).children('span').addClass('cur').end().siblings().children('span').removeClass('cur');
        },1600);

    }
    autoPlay();

    liImgs.hover(function () {
        clearInterval(timer);
        $(this).children('span').addClass('cur').end().siblings().children('span').removeClass('cur');
        index = $(this).index();
        $('.banner_ul').css({
            left:-(index * imgWid)
        });
    },function () {
        autoPlay();
    });

    /*
     * 探索oppo板块的tab切换
     * */
    $('ul.tab li').click(function () {
        var $tSpan = $('<span></span>');
        var index = $(this).index();
        $(this).addClass('cur').siblings().removeClass('cur');
        $(this).prepend($tSpan).siblings().children('span').remove();
        $('div.news').eq(index).addClass('active').siblings().removeClass('active');
    })
});
