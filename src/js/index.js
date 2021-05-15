import { $ } from './library/jquery.js';
import cookie from './library/cookie.js';
import querystring from './library/qs.js';
import "../js/library/jquery.lazyload.js";


$.ajax({
    type: "get",
    url: "../../interface/getData.php",
    dataType: "json",
    success: function (res) {
        let temp = '';
        res.forEach((elm, i) => {
            let picture = JSON.parse(elm.pic);
            temp += `
            <a href="./details.html?id=${elm.id}"><img class="lazy" data-original="../${picture[0].src}" alt="">
                <h3>
                    ${elm.title}
                </h3>
                <p>${elm.details}</p>
                <p class="price"><span>${elm.price}元</span> <del>xxx</del></p>
            </a>
            `;
        });
        $('.jd-right>.display').html(temp);
        $("img.lazy").lazyload({ effect: "fadeIn" });

    }
});

$(function () {


    $('#reg').on('click', function () {
        $('.Agreement-statement-bg').css('display', 'block');
    });
    $('.close').on('click', function () {
        $('.Agreement-statement-bg').css('display', 'none');
    });
    $('.no').on('click', function () {
        $('.Agreement-statement-bg').css('display', 'none');
    });

    $('.logo-nav>.version_heart>div>img').on('mousedown', function () {
        $('.logo-nav>.version_heart>div>img').css({ 'width': '50px', 'height': '50px' });
        $('.logo-nav>.version_heart>div>img').on('mouseup', function () {
            $('.logo-nav>.version_heart>div>img').css({ 'width': '56px', 'height': '56px' });
        })
    });


    $('.menu-list>a').on('mouseover', function () {
        $('.menu').stop().animate({
            'height': '230px'
        }, 100);
        let index = $('.menu-list>a').index(this);
        console.log(index)
        $('.menu ul').eq(index).css('display', 'block').siblings().css('display', 'none');
        $('.menu').on('mouseout', function () {
            $('.menu').stop().animate({
                'height': '0'
            }, 100);
        })
        $('.menu').on('mouseover', function () {
            $('.menu').stop().animate({
                'height': '230px'
            }, 100);

        });
    });



    //秒杀倒计时
    let futrue, current, ms, h, m, s, d, sec;
    setInterval(function () {
        current = new Date();
        futrue = new Date(2021, 5, 12, 16, 0, 0);
        d = new Date();
        ms = futrue - current;
        s = ms / 1000;
        h = parseInt(s % 86400 / 3600);
        m = parseInt(s % 3600 / 60);
        sec = parseInt(s % 60);
        if (h < 10 || h == 0) {
            $('.time>:last-child>:first-child>span').text('0' + h);
        } else {
            $('.time>:last-child>:first-child>span').text(h);
        }

        if (m < 10 || m == 0) {
            $('.time>:last-child>:nth-child(3)>span').text('0' + m)
        } else {
            $('.time>:last-child>:nth-child(3)>span').text(m)
        }
        if (sec < 10 || sec == 0) {
            $('.time>:last-child>:last-child>span').text('0' + sec);
        } else {
            $('.time>:last-child>:last-child>span').text(sec);
        }
    }, 1000);

   
    let box=$('.kill-commodity>div'),
    btnl=$('.glyphicon-menu-left'),
    btnr=$('.glyphicon-menu-right'),
    left = parseInt(box.css('left')),
    boxWidth = box.innerWidth(),
    width = $('.kill-commodity>div').innerWidth(),
    index = 0,
    timer;
    console.log(boxWidth)
    btnl.on('click', function () {
        prev();
    })
    btnr.on('click', function () {
        next();
    })
    function next() {
        left = left - width - 14;
        index++;
        if (left < -boxWidth + width) {
            left = -boxWidth + width + 14;
            index = -1;
        };
        box.stop().animate({
            'left': left
        }, 1000);
    }
    function prev() {
        index--;
        left = left + width + 14;
        if (left > 0) {
            left = 0;
            index = 0;
        };
        box.stop().animate({
            'left': left
        }, 1000);
    }
    timer = setInterval(function () {
        if (index != -1) {
            next();
        } else if (index == -1) {
            left = 0;
            box.stop().animate({
                'left': left
            }, 1000);
            index = 0;
        }
    }, 5000);
    $('.btns>div>a').on('mouseover', function () {
        clearInterval(timer);
    })
    $('.btns>div>a').on('mouseout', function () {
        timer = setInterval(function () {
            if (index != -1) {
                next();
            } else if (index == -1) {
                left = 0;
                box.stop().animate({
                    'left': left
                }, 1000);
                index = 0;
            }
        }, 5000);
    })
    box.on('mouseover', function () {
        clearInterval(timer);
    })

    box.on('mouseout', function () {
        timer = setInterval(function () {
            if (index != -1) {
                next();
            } else if (index == -1) {
                left = 0;
                box.stop().animate({
                    'left': left
                }, 1000);
                index = 0;
            }
        }, 5000);
    })
    });
    console.log($('.kill-commodity>div').offset().left)
    console.log($('.kill-commodity>div>:first-child').offset().left)
    console.log($('.kill-commodity>div>:nth-child(5)').offset().left)
    console.log($('.kill-commodity>div>:last-child').offset().left)
    //切换
    $('.toggle>a').on('mouseover', function () {
        let index = $('.toggle>a').index(this);
        $(this).addClass('active').siblings().removeClass('active');
        $('.jd-right>div').eq(index).addClass('display').siblings().removeClass('display');
    });


    setInterval(function () {
        $('.green-img').css('display', 'none').siblings().css('display', 'block');
        $('.green-img').removeClass('green-img').siblings().addClass('green-img');
    }, 2000);


