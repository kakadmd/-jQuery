 var s = $('.recommend').offset().top
 var flag = true  //节流阀
 $(window).scroll(function() {
    // 当我们滚到recommed模块时，就让电梯导航显示
   if($(document).scrollTop() >= s) {
    $('.fixedtool').fadeIn()
   }else {
    $('.fixedtool').fadeOut()
   }


   if(flag == true){
    $.each( $('.floor .w ') ,function(index,ele){
        // console.log($(ele)) //打印出来的是电梯导航的四个li
           var a = $(ele).offset().top
           // console.log(a)
           if($(document).scrollTop() >= a) {
               $('.fixedtool li').eq(index).addClass('current').siblings().removeClass('current')
           }
       })
   }
 })


//  点击电梯导航跳到指定位置
$('.fixedtool li').click(function(){
    flag = false //节流阀

    var index = $(this).index()
    // console.log(index)

    var b = $('.floor .w').eq(index).offset().top

    $('html').stop().animate({
        scrollTop: b
    },function(){
        flag = true //节流阀
    })
    
    $(this).addClass('current').siblings().removeClass('current')
})
