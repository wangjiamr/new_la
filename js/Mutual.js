/**
 * Created by zhaoyang on 14-7-16.
 */
$(function(){
//    列表滑过显示操作按钮图标
    $('.list_table tr').hover(function(){
        var $this = $(this);
        $this.find('.MakeBtn').stop().animate({width:40},200);
    },function(){
        var $this = $(this);
        $this.find('.MakeBtn').stop().animate({width:0},300);
    });
    $('.list_table_tj tr').hover(function(){
        var $this = $(this);
        $this.find('.MakeBtn').stop().animate({right:0},200);
    },function(){
        var $this = $(this);
        $this.find('.MakeBtn').stop().animate({right:-80},300);
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
//    switch开关
    var $switch = $('.switch');
    $switch.click(function(){
        var $this = $(this);
        if($this.hasClass('on')){
            $this.removeClass('on');
            $this.find('em').html('关');
        }else{
            $this.addClass('on');
            $this.find('em').html('开');
        }
    });
    //  流程管理滑动展示详细流程
    $ProcessOut = $('.ProcessOut');
    $ProcessOut.hover(function(){
       var $this = $(this);
       var width =0;
       var P_width =$this.width();
       $this.find('li').each(function(){
            width = width + $(this).width();
       });
       var M_width =P_width-width;
       if(M_width<0){
           if(Math.abs(M_width)>200){
                $this.find('.ProcessLi').stop().animate({marginLeft:M_width},4000);
           }else{
               $this.find('.ProcessLi').stop().animate({marginLeft:M_width},600);
           }
       }
    },function(){
        var $this = $(this);
        $this.find('.ProcessLi').stop().animate({marginLeft:0},1500);
    });
    //  角色列表滑过出操作按钮
    $('.UserList li').hover(function(){
        var $this = $(this);
        $this.find('.R-btns').stop().animate({right:0},200);
    },function(){
        var $this = $(this);
        $this.find('.R-btns').stop().animate({right:-40},200);
    });
  });

















