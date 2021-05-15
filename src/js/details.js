import { $ } from './library/jquery.js';
import cookie from './library/cookie.js';

// 通过search 获得到商品id
let id = location.search.split('=')[1];

$.ajax({
    type: "get",
    url: "../../interface/getItem.php",
    data: {
        id: id
    },
    dataType: "json",
    success: function (res) {
        let picture = JSON.parse(res.pic);
        let temp = `
        <div>
                <img src="../${picture[0].src}">
                </div>
                <div>
                    <h2>${res.title}</h2>
                    <p class="Features">${res.details}</p>
                    <p class="store-info">小米自营</p>
                    <span class="price-info">${res.price} 元</span>
                    <div class="line"></div>
                    <div class="address">
                        <div>
                            <span class="iconfont icon-Frame1"></span>
                            <span>北京</span>
                            <span>北京市</span>
                            <span>海淀区</span>
                            <span>清河街道</span>
                            <a href="">修改</a>
                        </div>
                        <div>
                            <span>有现货</span>
                        </div>
                    </div>
                    <div class="select-color">
                        <span>选择颜色</span>
                        <a>银色</a>
                    </div>
                    <div class="select-list">
                        <div>
                            <span>${res.title}</span>
                            <span>${res.price}元</span>
                        </div>
                        <div>
                            总计：${res.price}元
                        </div>
                    </div>
                    <div class="Notice-info">
                    <a href="./shoping_cart.html"  id="additem">加入购物车</a>
                    <a href=""><span class="iconfont icon-02"></span>喜欢</a>
                </div>
                <div class="Logistics">
                    <div>
                        <span class="iconfont icon-quangou"></span><span>小米自营</span>
                        <span class="iconfont icon-quangou"></span><span>小米发货</span>
                        <span class="iconfont icon-quangou"></span><span>7天无理由退货</span>
                        <span class="iconfont icon-quangou"></span><span>运费说明</span>
                        <span class="iconfont icon-quangou"></span><span>企业信息</span>
                    </div>
                    <div>
                        <span class="iconfont icon-quangou"></span><span>售后服务政策</span>
                        <span class="iconfont icon-quangou"></span><span>7天价格保护</span>
                    </div>
                </div>
        `;
        $('.page-info>.version_heart').html(temp).find('.add-cart').on('click',function(){
          addItem(res.id,res.price);
        });
    }
});



function addItem(id, price, num) {
    
    let shop = cookie.get('shop');
console.log(shop)
    let product = {
        id,
        price,
        num
    }
    // 判断当前cookie中是否有购物数据
    if (shop) { // 如果有数据 取出是一个字符串
        shop = JSON.parse(shop);

        // 添加之前先要判断数据中有没有该商品
        if (shop.some(el => el.id === id)) {
            let _index = shop.findIndex(elm => elm.id == id);
            let count = parseInt(shop[_index].num);
            count += parseInt(num);
            shop[_index].num = count;
        } else {
            shop.push(product);
        }


    } else { // 第一次没有数据的情况 创建一个新数据
        shop = [];
        shop.push(product);
    }

    cookie.set('shop', JSON.stringify(shop), 1);
}

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

$('.times').on('click',function(){
    $('.login-msg').css('display','none');
});