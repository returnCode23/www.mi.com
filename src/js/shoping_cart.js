import { $ } from './library/jquery.js';
import cookie from './library/cookie.js';

let shop = cookie.get('shop');
if (shop) {
    shop = JSON.parse(shop);

    let idList = shop.map(el => el.id).join();

    $.ajax({
        type: "get",
        url: "../../interface/getItems.php",
        data: { idList: idList },
        dataType: "json",
        success: function (res) {
            let temp = '';

            res.forEach(elm => {
                let pic = JSON.parse(elm.pic);

                // 让ajax请求到的数据结果中遍历后的id与cookie中数据的id 相同
                let current = shop.filter(val => val.id == elm.id);

                temp += `
                <div class="item-box">
                <div class="col-check"><span class="iconfont icon-fuxuankuang"></span></div>
                <div class="col-img">
                    <img src="../${pic[0].src}" alt="">
                </div>
                <div class="col-name">${elm.title}</div>
                <div class="col-price">${parseFloat(elm.price).toFixed(2)}</div>
                <div class="col-num">
                    <div>
                        <a href="">-</a>
                        <input type="number" value="${current[0].num}" max="${elm.num}" min="1">
                        <a href="">+</a>
                    </div>
                </div>
                    <div class="col-total">${(elm.price * current[0].num).toFixed(2)}</div>
                    <a href="javascript:;" class="col-action" data-id="${elm.id}">&times</a>
                </div>
            `;
            });
            $('.cart').append(temp).find('.col-action').on('click', function () {
                let res = shop.filter(el => el.id != $(this).attr('data-id'));
                cookie.set('shop', JSON.stringify(res), 1);
                location.reload();
            });
        }
    });
}