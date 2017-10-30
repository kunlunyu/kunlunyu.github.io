/*
* @Author: MACHENIKE
* @Date:   2017-08-21 17:45:43
* @Last Modified by:   MACHENIKE
* @Last Modified time: 2017-08-24 11:39:37
*/
$(function () {
    var app=$('#app');
    $('#first .tree').on('click',function () {
       app.animate({left:'-8.04rem'},2000,'linear')
    });
    $('#sec .arrow').on('click',function () {
        $(this).addClass('drops');
        $('#sec .tips').delay(6000).animate({right:'1rem',top:'7rem'},1000,'linear',function () {
            $('#sec .door').on('click',function () {
                app.animate({left:'-16.08rem'},2000,'linear')
            })
        });

    })
    $('#third .funny').on('click',function () {
        app.animate({left:'-40.2rem'},6000,'linear',function () {
            app.delay(500).animate({left:'-32.16rem'},2000,'linear',function () {
                $('#fth .tips').show();
                $('#fth .door').on('click',function () {
                    $('.doorin').animate({width:'7.5rem',height:'13.34rem',top:0,left:0},5000)
                })

            })
        })
    })
   $('#fith .door').on('click',function () {
       $('#first').add($('#sec')).add($('#third')).add($('#fth')).hide();
       app.css('left',0);
       $('#f-wraper').animate({width:'1500%',height:'1500%',top:'-470%',left:'-57%'},5000);
           $('#fith .box').delay(3000).animate({width:'2rem',height:'2rem'},1000,function () {
               $(this).animate({width:'100%',height:'100%',borderRadius:0},150,function () {
                   $(this).hide();
                   $('#sixth').delay(500).show();
               })

           });

   })
    $('#fith .go').on('click',function () {
        $('#fith').fadeOut();
        $('#seven').delay(500).fadeIn();
        $('#seven .car').addClass('active');
        $('#seven').delay(3000).fadeOut();
        $('#eight').delay(3500).fadeIn();
    })
});