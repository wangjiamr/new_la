/**
 * Created by zhaoyang on 14-7-16.
 */
$(function(){
//鼠标滑过展开下拉
    $('.DropDown').click(function(){
       var $this = $(this);
        if($this.hasClass('current')){
            $this.removeClass('current');
            $this.find('.DropList').stop().fadeOut();
        }else{
            $this.addClass('current');
            $this.find('.DropList').stop().fadeIn();
        }
        $this.next('.DropDown').removeClass('current').find('.DropList').stop().fadeOut();
        $this.prev('.DropDown').removeClass('current').find('.DropList').stop().fadeOut();
    });
    function D_hide(){
        $DropDown = $('.DropDown');
        $DropDown.removeClass('current');
        $DropDown.find('.DropList').stop().fadeOut();
    }
    $(document).bind('click.area',function(e){
        if($(e.target).closest('.DropDown').length == 0){
            D_hide();
        }
    });
//    nav 滑动线条移动
    $NavA=$('.nav a');
    $Current = $('.nav a.current');
    $CurNum = $Current.index()-1;
    function BorderBt(){
        $('.borderBt').animate({left:$CurNum*80},200);
    }
    BorderBt();
    $NavA.click(function(){
        BorderBt();
    });
    $NavA.hover(function(){
       var  $this = $(this);
        var thisNum = $this.index()-1;
        $('.borderBt').stop().animate({left:thisNum*80},200);
    },function(){
        $('.borderBt').stop().animate({left:$CurNum*80},200);
    });
//    选择表单页面左侧导航小箭头滑动
    $LeftNavA = $('.LeftNav a');
    $arrow = $('.LeftNav .ico-arrow');
    $CurrentA = $('.LeftNav a.current');
    $CurNumA =$CurrentA.index();
    function Arrow(){
        $arrow.animate({top:$CurNumA*97-35},200);
    }
    Arrow();
    $LeftNavA.click(function(){
        var $this = $(this);
        $this.addClass('current').siblings().removeClass('current');
        var thisNum = $this.index()-1;
        $arrow.animate({top:thisNum*97+60},200);
    });

//    申请列表单挑滑过显示审批操作按钮图标
    $('.ListTitle').hover(function(){
        $this = $(this);
        $this.find('.MakeBtn').stop().animate({right:0},200);
    },function(){
        $this.find('.MakeBtn').stop().animate({right:-200},300);
    });
//    点击选择人
    var $contact_list = $('.contact-list');
    var $contact_list_li = $contact_list.find('li');
    $contact_list_li.click(function(){
        var $this = $(this);
        if($this.hasClass('current')){
            $this.removeClass('current');
        }else{
            $this.addClass('current');
        }
    });
//   点击记录右侧滑出详情
    $ListMainOne = $('.ListMain').find(' .ListTitle');
    $rightBar = $('.rightBar');
    $AppDetail = $('.AppDetail');
    $content = $('.content');
    $ListMainOne.click(function(){
        var $this = $(this);
        $rightBar.stop().animate({marginLeft:-130},300);
        $AppDetail.stop().animate({right:0},300);
        $rightBar.addClass('rightMove');
        $('.LeftBar').addClass('NewBar');
    });
    function A_hide(){
        $rightBar.stop().animate({marginLeft:0},200);
        $AppDetail.stop().animate({right:-805},300);
        $rightBar.removeClass('rightMove');
        $('.LeftBar').removeClass('NewBar');
    }

//  角色列表滑过出操作按钮
    $('.UserList li,.FormIco li').hover(function(){
        var $this = $(this);
        $this.find('.R-btns').stop().animate({right:5},200);
    },function(){
        var $this = $(this);
        $this.find('.R-btns').stop().animate({right:-35},200);
    });
//  左侧菜单展开二级
    $('.LeftBar li').click(function(){
        var $this = $(this);
        $this.addClass('current').siblings().removeClass('current');
    });
//  展开下拉菜单
    $('.select').hover(function(){
        $(this).addClass('current');
    },function(){
        $(this).removeClass('current');
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
//    选择流程

    $(".Item tr").hover(function(){
        var $this = $(this);
        var $Btn_item = $this.find('.Btn_item');
        $Btn_item.stop().animate({right:0},200);
    },function(){
        var $this = $(this);
        var $Btn_item = $this.find('.Btn_item');
        $Btn_item.stop().animate({right:-100},200);
    });
//  点击选择check
    $('.radio').click(function(){
        var $this = $(this);
        $this.addClass('checked').siblings().removeClass('checked');
        return false;
    });
    $('.check').click(function(){
        var $this = $(this);
        if($this.hasClass('checked')){
            $this.removeClass('checked')
        }else{
            $this.addClass('checked');
        }
    });
    $LeftNav = $('.LeftNav');
    $right_scroll =$('#right_scroll');
    function setH(){
        $window = $(window);
        $H = $window.height();
        $LeftNav.css('min-height',$H-65-77);
        $rightBar.css('min-height',$H-84);
        $right_scroll.css('height',$H-140);
    }
    setH();
    $(window).resize(function(){
         setH();
    });
//    左右切换流程列表
    $go_left = $('.go_left');
    $go_right = $('.go_right');
    $process_in = $('.process-in');
    var processlist_num = $process_in.find('.processlist').length;
    var allWidth = processlist_num * 318;
    if(processlist_num>3){
        $go_right.click(function(){
            var $this = $(this);
            var p_left = parseInt($process_in.css('left'));
            if(allWidth-(-p_left+920)<=200){
                $this.fadeOut();
                return false;
            }else{
                if($this.hasClass('current')){
                    return false
                }else{
                    $this.addClass('current');
                    $process_in.stop().animate({left:p_left-318},300,function(){
                        $this.removeClass('current');
                    });
                }
            }
        });
        $go_left.click(function(){
            var $this = $(this);
            var p_left = parseInt($process_in.css('left'));
            if($this.hasClass('current')){
                return false
            }else{
                if(p_left!==0){
                    $this.addClass('current');
                    $process_in.stop().animate({left:p_left+318},300,function(){
                        $this.removeClass('current');
                    });
                }
            }
        });
    }
//点击选择图标样式
    $('.Icon-box').hover(function(){
        var $this = $(this);
        $this.addClass('current');
    },function(){
        var $this = $(this);
        $this.removeClass('current');
    });
//    右侧控件列表收起展开
    $Collapse = $('#Collapse');
    $Expand = $('#Expand');
    $demo = $Collapse.parents('.module').find('.module_li');
    $demo_s = $Expand.parents('.module').find('.module_li');
    $Collapse.click(function(){
        var $this = $(this);
        if($demo.is(":visible")){
            $demo.slideUp();
            $this.text('展开');
        }else{
            $demo_s.slideUp();
            $demo.slideDown();
            $this.text('收起');
            $Expand.text('展开');
        }
    });
    $Expand.click(function(){
        var $this = $(this);
        if($demo_s.is(":visible")){
            $demo_s.slideUp();
            $this.text('展开');
        }else{
            $demo.slideUp();
            $demo_s.slideDown();
            $this.text('收起');
            $Collapse.text('展开');
        }
    });
//    申请表单切换
    $window = $(window);
    $WH = 0.7*$window.height();
    $WT = 0.5*$window.height();
    $mask = $('.mask');
    $commit = $('.commit');
    $next_step = $('#next_step');
    $prev_step = $('#prev_step');
    $before = $('.before');
    $behind = $('.behind');
    $commit.click(function(){
        $mask.show();
        $before.find('.form-main').css('height',$WH);
        var isChrome = window.navigator.userAgent.indexOf("Chrome") !== -1;
        if (isChrome) {
            $before.fadeIn().addClass('go_mid');
            $next_step.click(function(){
                $before.stop().addClass('go_up').removeClass('go_mid');
            });
            $prev_step.click(function(){
                $before.stop().addClass('go_mid').removeClass('go_up');
            });
            $prev_step.click(function(){
                $before.stop().addClass('go_down').removeClass('go_mid');
            });
        }else {
            $before.fadeIn().animate({
                top:$WT,
                marginTop:-$WH*0.5
            },300);
            $next_step.click(function(){
                $before.fadeIn().animate({
                    top:-$WT,
                    marginTop:-$WH*0.5
                },300);
            });
            $prev_step.click(function(){
                $before.fadeIn().animate({
                    top:1.5*$WT,
                    marginTop:$WH*0.5
                },300);
            });
        }
    });
//    切换订购试用和订购
    var $choose_li = $('.choose_main ul li');
    var $choose_one= $('.choose_one');
    var $choose_two= $('.choose_two');
    $choose_li.click(function(){
        var $this = $(this);
        var $Num = $this.attr('name');
        if($Num == 1){
            $this.addClass('add').siblings().removeClass('add');
            $choose_two.hide();
            $choose_one.show();
        }else{
            $this.addClass('add').siblings().removeClass('add');
            $choose_one.hide();
            $choose_two.show();
        }
    });
//    切换table
    $arrow_l = $('.arrow-l');
    $arrow_r = $('.arrow-r');
    $table_list = $('.table_list');
    $arrow_l.click(function(){
        var tab_left = parseInt($table_list.css('margin-left'));
        var tab_width = $table_list.width();
        if(tab_left != (-tab_width+750)){
            $table_list.stop().animate({
                marginLeft:tab_left-150
            },500);
        }
    });
    $arrow_r.click(function(){
        var tab_left = parseInt($table_list.css('margin-left'));
        var tab_width = -$table_list.width();
        if(tab_left != 0){
            $table_list.stop().animate({
                marginLeft:tab_left+150
            },500);
        }
    });
//    home页唤出搜索框
    var $ico_search = $('.ico-search');
    var $new_search = $('.new_search');
    $ico_search.click(function(){
        $new_search.animate({top:40},300)
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

















