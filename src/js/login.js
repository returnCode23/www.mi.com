import { $ } from './library/jquery.js';
import cookie from './library/cookie.js';
import querystring from './library/qs.js';
$(function () {
    $('.lr>:nth-child(2)>a').on('click', function () {
        let index = $('.lr>:nth-child(2)>a').index(this);
        $('.lr>:nth-child(2)>a').eq(index).addClass('click').siblings().removeClass('click');
        $('.un-line').css('left', '52px').eq(index).css('left', '0');
        if (index == 0) {
            $('.content').animate({
                'left': '0'
            }, 100);
            $('.content-r').animate({
                'left': '500px'
            }, 100);
        }
        if (index == 1) {
            $('.content').animate({
                'left': '-500px'
            }, 100);
            $('.content-r').animate({
                'left': '46px'
            }, 100);
        }
    });

    $('.username>input').focus(function () {
        $('.username>input').css('outline', '2px solid #ff6700');
        $('.username>label').css('font-size', '12px').css('top', '10px');
        $('.username').css('background', '#ffe')
        $('.username>input').blur(function () {
            $('.username>input').css('outline', 'none');
            if ($('.username>input').val() != '') {
                $('.username').css('background', 'rgba(249, 249, 249, .9)');
                $('.username>label').css('font-size', '12px').css('top', '10px');
                $('.msg1').css('display', 'none');
            } else {
                $('.username').css('background', '#f99');
                $('.username>label').css('font-size', '17px').css('top', '20px');
                $('.msg1').css('display', 'block');
            }

        })
    });
    $('.pwd>input').focus(function () {
        $('.pwd>input').css('outline', '2px solid #ff6700');
        $('.pwd>label').css('font-size', '12px').css('top', '10px');
        $('.pwd>input').blur(function () {
            $('.pwd>input').css('outline', 'none');
            if ($('.pwd>input').val() != '') {
                $('.pwd').css('background', 'rgba(249, 249, 249, .9)');
                $('.pwd>label').css('font-size', '12px').css('top', '10px');
                $('.msg2').css('display', 'none');
            } else {
                $('.pwd').css('background', '#f99');
                $('.pwd>label').css('font-size', '17px').css('top', '20px');
                $('.msg2').css('display', 'block');
            }
        })
    });

    $('.local>input').focus(function () {
        $('.select-country').css('display', 'block');
        $('.icon-xiala').css('transform', 'rotateZ(180deg)').css('transition', 'all .3s linear');
        $('.select-country>div li').on('click', function () {
            $('.country').html($(this).children().val());
        });
        $('.local>input').blur(function () {
            $('.select-country').css('display', 'none');
            $('.icon-xiala').css('transform', 'rotateZ(0deg)').css('transition', 'all .3s linear');
        });
    })


    $('.iconfont').on('click', function () {
        if ($(this).hasClass('icon-yanjing1')) {
            $(this).addClass('icon-yanjing').removeClass('icon-yanjing1').parent().siblings('input').attr('type', 'text');
        } else if ($(this).hasClass('icon-yanjing')) {
            $(this).addClass('icon-yanjing1').removeClass('icon-yanjing').parent().siblings('input').attr('type', 'password');
        }
    })
});