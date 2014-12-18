/**
 * Created by zhaoyang on 14-7-16.
 */
$(function(){
//    列表滑过显示操作按钮图标
    $('.list_table tr').hover(function(){
        $this = $(this);
        $this.find('.MakeBtn').stop().animate({width:84},200);
    },function(){
        $this.find('.MakeBtn').stop().animate({width:0},300);
    });
//    二级菜单
    var $top_nav_a = $('.top_nav a');
    var $second_header = $('.second_header');
    $top_nav_a.click(function(){
        var $this = $(this);
        $this.addClass('current').siblings().removeClass('current');
        $second_header.stop().animate({
            top:40
        },300);
    });
//    home底部按钮划过展开
    var $bottom_nav_a = $('.bottom_nav a');
    var $bottom_nav_s = $('.bottom_nav a span');
    $bottom_nav_a.hover(function(){
        var $this = $(this);
        $this.stop().animate({bottom:-3},200);
        $this.find($bottom_nav_s).stop().show().animate({
            opacity:1,
            top:-45
        },350);
    },function(){
        var $this = $(this);
        $this.stop().animate({bottom:0},200);
        $this.find($bottom_nav_s).stop().animate({
            top:-35,
            opacity:0
        },300);
    });
  });

















