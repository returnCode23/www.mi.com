import { $ } from './library/jquery.js';

$(function(){
    $('.pne-input>input').focus(function(){
        $('.pne-input').css('border','1px solid #ff6700');
    });
    $('.pne-input>input').blur(function(){
        $('.pne-input').css('border','0');
        if($('.pne-input>input').val()!=""){
            $('.ms').css('display','none');
        }else{
            $('.ms').css('display','block');
        }
    });
    
})
