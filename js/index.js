$(function () {
   var tjEl=$('.title .tj'); //选择推荐的按钮
   var rmEl=$('.title .rm'); //选择热门的按钮
   var xxEl=$('.title>div'); //选择所有的按钮
   var rmbox=$('.content .rmbox'); //选中热门内容盒子
   var tjbox=$('.content .tjbox'); //选中推荐内容盒子
   var xxbox=$('.content>div'); //选中所有内容盒子
   tjEl.on('click',function () {   //给推荐按钮添加点击事件
       xxEl.removeClass('active'); // 让所有的按钮都没有active类名
        $(this).addClass('active'); //给推荐添加active类名
        xxbox.hide(); // 让所有内容盒子消失
        tjbox.show(); //让推荐内容盒子展示
   });
   rmEl.on('click',function () {
       xxEl.removeClass('active');
       $(this).addClass('active');
       xxbox.hide();
       rmbox.show();  //让热门盒子内容展示
   })

});