
//  IE6 placeholder
(function($) {
  var placeholderfriend = {
    focus: function(s) {
      s = $(s).hide().prev().show().focus();
      var idValue = s.attr("id");
      if (idValue) {
        s.attr("id", idValue.replace("placeholderfriend", ""));
      }
      var clsValue = s.attr("class");
   if (clsValue) {
        s.attr("class", clsValue.replace("placeholderfriend", ""));
      }
    }
  }

  //判断是否支持placeholder
  function isPlaceholer() {
    var input = document.createElement('input');
    return "placeholder" in input;
  }
  //不支持的代码
  if (!isPlaceholer()) {
    $(function() {

      var form = $(this);

      //遍历所有文本框，添加placeholder模拟事件
      var elements = form.find("input[type='text'][placeholder]");
      elements.each(function() {
        var s = $(this);
        var pValue = s.attr("placeholder");
  var sValue = s.val();
        if (pValue) {
          if (sValue == '') {
            s.val(pValue);
          }
        }
      });

      elements.focus(function() {
        var s = $(this);
        var pValue = s.attr("placeholder");
  var sValue = s.val();
        if (sValue && pValue) {
          if (sValue == pValue) {
            s.val('');
          }
        }
      });

      elements.blur(function() {
        var s = $(this);
        var pValue = s.attr("placeholder");
  var sValue = s.val();
        if (!sValue) {
          s.val(pValue);
        }
      });

      //遍历所有密码框，添加placeholder模拟事件
      var elementsPass = form.find("input[type='password'][placeholder]");
      elementsPass.each(function(i) {
        var s = $(this);
        var pValue = s.attr("placeholder");
  var sValue = s.val();
        if (pValue) {
          if (sValue == '') {
            //DOM不支持type的修改，需要复制密码框属性，生成新的DOM
            var html = this.outerHTML || "";
            html = html.replace(/\s*type=(['"])?password\1/gi, " type=text placeholderfriend")
              .replace(/\s*(?:value|on[a-z]+|name)(=(['"])?\S*\1)?/gi, " ")
              .replace(/\s*placeholderfriend/, " placeholderfriend value='" + pValue
              + "' " + "onfocus='placeholderfriendfocus(this);' ");
            var idValue = s.attr("id");
            if (idValue) {
              s.attr("id", idValue + "placeholderfriend");
            }
            var clsValue = s.attr("class");
   if (clsValue) {
              s.attr("class", clsValue + "placeholderfriend");
            }
            s.hide();
            s.after(html);
          }
        }
      });

      elementsPass.blur(function() {
        var s = $(this);
        var sValue = s.val();
        if (sValue == '') {
          var idValue = s.attr("id");
          if (idValue) {
            s.attr("id", idValue + "placeholderfriend");
          }
          var clsValue = s.attr("class");
    if (clsValue) {
            s.attr("class", clsValue + "placeholderfriend");
          }
          s.hide().next().show();
        }
      });

    });
  }
  window.placeholderfriendfocus = placeholderfriend.focus;
})(jQuery);
$(function () {
    // 注册协议弹窗
    $('#xieyi').bind('click', function(){
        layer.open({
            title: ['', 'height:30px; background: #f5f5f5;'],
            type: 1,
            area: ['800px', '500px'],
            closeBtn: 1,
            content: $('.xieyi'),
            success: function(layero, index){
               $('.xieyi').find('.xieyi-huidiao').data('xieyiindex', index);
             }
        })
    });

    $('.xieyi-huidiao').bind('click', function(){
        var xieyi_index = $(this).data('xieyiindex')
        layer.close(xieyi_index); 
    });
// 登录弹窗
    $('.denglu').on('click', function(){
        layer.open({
            title: false,
            type: 1,
            area: ['400px', '300px'],
            closeBtn: false,
            content: $('.denglu-box'),
            success: function(layero, index){
               $('.denglu-box').find('.closeBtn,.denglu-huidiao').data('layerindex', index);
            }
        });
    });
    $('.closeBtn,.denglu-huidiao').on('click', function(){
        var layer_index = $(this).data('layerindex')
        layer.close(layer_index); 
    }); 
    $('.error-btn').click(function (){
      $('.error').css({
        display: 'block'
      });
    });
    // 注册弹窗
    $('.zhuce').on('click', function(){
        layer.open({
            title: '注册',
            type: 1,
            area: ['400px', '345px'],
            closeBtn: 1,
            content: $('.zhucu-box'),
            success: function(layero, index){
               $('.zhucu-box').find('.zhuce-huidiao').data('zhuceindex', index);
            }
        })
    });
    $('.zhuce-huidiao').on('click', function(){
        var zhuce_index = $(this).data('zhuceindex')
        layer.close(zhuce_index); 
    });
    $('.fail-btn').click(function (){
      $('.fail').css({
        display: 'block'
      });
    });
    // 注册成功
    $('.success').on('click', function(){
        layer.open({
            title:[' ','height:20px;'],
            type: 1,
            area: ['400px', '120px'],
            closeBtn: 1,
            content: $('.success-box'),
            success: function(layero, index){
               $('.success-box').find('.success-huidiao').data('successindex', index);
               $('.layui-layer-title').css('border-bottom','none')
            }
        })
    });
    //支付弹窗
    $('.btn').on('click', function(){
        layer.open({
            title: false,
            type: 1,
            area: ['440px', '150px'],
            closeBtn: false,
            content: $('.zhifu-box'),
            success: function(layero, index){
               $('.zhifu-box').find('.zhifu-huidiao').data('zhifuindex', index);
            }
        })
    });
    $('.zhifu-huidiao').on('click', function(){
        var zhuce_index = $(this).data('zhifuindex')
        layer.close(zhifu_index); 
    });
    // 在线客服
    $('.kefu').on('click', function(){
        layer.open({
            title: '请确认',
            type: 1,
            area: ['440px', '150px'],
            closeBtn: 1,
            btn:['确定','取消'],
            content: $('.kefu-box'),
            yes: function(layero, index){
                layer.msg('<div class="div_orr">操作失败，请重新操作</div>',{time:2000});
                layer.close(index); //如果设定了yes回调，需进行手工关闭
            }
        })
    });
    $('.kefu-huidiao').on('click', function(){
        var zhuce_index = $(this).data('kefuindex')
        layer.close(kefu_index); 
    });
    $(function(){ //二维码
        $('.scan').click(function(event) {
            $('.erweima').show();
            event.stopPropagation();
        });
        $(document).click(function(){
            $('.erweima').fadeOut(500);
        });  
    });

    $(function() { // 头部二级菜单
        $('.hover-wddd').hover(function() {
            $('.hover-div').css("display","block");
            $(this).css({
                'background-color': '#404040'
                // 'background-image': 'url(images/xiala-1.png)'
            });
        },function() {
            $('.hover-div').css("display","none");
            $(this).css({
                'background-color': '#313131'
                // 'background-image': 'url(images/xiala.png)'
            });
        });
        $('.hover-wdtw').hover(function() {
            $('.hover-ul').css("display","block");
            $(this).css({
                'background-color': '#404040'
                // 'background-image': 'url(images/xiala-1.png)'
            });
        },function() {
            $('.hover-ul').css("display","none");
            $(this).css({
                'background-color': '#313131'
                // 'background-image': 'url(images/xiala.png)'
            });
        });
        $('.account').hover(function() {
            $(this).children('a').addClass('acc_name');
            $('.hover-account').css("display","block");
            $(this).parent().css({
                'background-color': '#404040'
            });
            // $(this).children('i').css({
            //     'background-image': 'url(images/xiala-1.png)'
            // });
        },function() {
            $('.hover-account').css("display","none");
            $(this).parent().css({
                'background-color': '#313131'
            });
            // $(this).children('i').css({
            //     'background-image': 'url(images/xiala.png)'
            // });
        });
        $('.message').hover(function() {
            $(this).children('a').addClass('acc_name');
            $('.hover-message').css("display","block");
            $(this).css({
                'background-color': '#404040'
            });
        },function() {
            $('.hover-message').css("display","none");
            $(this).css({
                'background-color': '#313131'
            });
            
        });
    });
    $(function() { // 网银TAB
        $('#click_nav li').click(function() {
            $(this).addClass('add').siblings().removeClass('add');
        });
    });
    $(function (){
        $('.blue').bind('click', function(){
            layer.open({
                title: '银行限额表',
                type: 1,
                area: ['760px', '500px'],
                closeBtn: 1,
                content: $('.quota'),
                success: function(layero, index){
                   $('.quota').find('.quota-huidiao').data('quotaindex', index);
                 }
            })
        });
        $('.quota-huidiao').bind('click', function(){
            var quota_index = $(this).data('quotaindex')
            layer.close(quota_index); 
        });
    });
    $('.touzi-dian').on('click', function(){
        layer.open({
          type: 2,
          title: ['', 'height:30px; background: #f5f5f5;'],
          area: ['800px', '500px'],
          fix: false, //不固定
          maxmin: false,
          content: 'aletr.html'
        });
    });// 合同弹窗
     var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
    //关闭iframe
    $('.closeIframe').click(function(){
        parent.layer.close(index);
    });

    // 风险弹窗
    $(function (){
        $('#fengxian').bind('click', function(){
            layer.open({
                title: ['', 'height:30px; background: #f5f5f5;'],
                type: 1,
                area: ['800px', '500px'],
                closeBtn: 1,
                content: $('.fengxian'),
                success: function(layero, index){
                   $('.fengxian').find('.fengxian-huidiao').data('fengxianindex', index);
                 }
            })
        });
        $('.fengxian-huidiao').bind('click', function(){
            var fengxian_index = $(this).data('fengxianindex')
            layer.close(fengxian_index); 
        });
        $('.touzi_orr').bind('click', function(){
            layer.msg('<div class="div_orr">操作失败，请重新操作</div>',{time:200000});
        });
        $('.ckbox_click2').change(function (){
            if ($('.ckbox_click2').is(':checked')) {
                $('.submit-btn').removeClass("toggle-add2");
            }else{
                $('.submit-btn').addClass('toggle-add2');
            };   
        });
    });
    $('.password-submit').click(function (){ // 修改密码正确，错误提示
        $('.password-form').addClass('dn');
        $('.password-success').removeClass('dn');
    });
    $('ul li input:text').blur(function () {// 我的资料正确，错误提示
        $(this).parent().find('.yitian').remove();
        var th = $(this).val();
        if (th != "") {
            $(this).siblings('.yi').removeClass('dn');
            $(this).siblings('.cuowu').addClass('dn');
        }else{
            $(this).siblings('.cuowu').removeClass('dn');  
            $(this).siblings('.yi').addClass('dn');
        };
    });
    $('.data-submit').click(function (){
        $('.data-form').addClass('dn');
        $('.data-success').removeClass('dn');
    });
    var jiShi; //倒计时
    function timing(start) {
        var time = 60;
        if (start) {
            time = 59;
            jiShi = setInterval(function () {
                if (time <= 0) {
                    clearInterval(jiShi);
                    return;
                }
                $('#ti').text(time);
                time--;
            }, 1000);
        } else {
            time = 60;
            $('#ti').text(time);
            if (jiShi) {
                clearInterval(jiShi);
            }
        }
    }

    $(function(){  // 点击开始倒计时
        $("#td").toggle(
            function () {
                $(this).removeClass("correct").addClass('correct1');
                timing(true);
            }, 
            function () {  // 点击取消倒计时
                $(this).removeClass("correct1").addClass('correct'); 
                timing(false);
            }
        );
    });
    $('.ckbox_click1').change(function (){ // 点击复选框 注册按钮变换。
        if ($('.ckbox_click1').is(':checked')) {
            $('.zhuce-but').removeClass("toggle-add1");
        }else{
            $('.zhuce-but').addClass('toggle-add1');
        };   
    });
    $('.find-submit').click(function (){ // 忘记密码 正确提示。
          $('.find-form').addClass('dn');
          $('.find-success').removeClass('dn');
      });
});



