




var xn_ba_js_1_autoPlay = true;
var xn_ba_js_1_interval = 4000;
var bannerW = "100%";
var xn_ba_js_1_nextfunc;
var xn_ba_js_1_timer;
$(document).ready(function () {
    if ($("#xn_ba_js_1_banner").length>0) {
        xn_ba_js_1_start();
    };
});
var xn_ba_js_1_start = function () {
    var maxLen = 0;
    var index = 0;
    var prev = -1;
    var imgW, imgH, sizeW, sizeH = 0;
    var running = false;
    maxLen = $(".xn_ba_js_1_element").length;
    imgW = $(".xn_ba_js_1_bigImg").find("img").eq(0).width();
    imgH = $(".xn_ba_js_1_bigImg").find("img").eq(0).height();
    for (var i = 0; i < $(".xn_ba_js_1_element").length; i++) {
        var ele = $(".xn_ba_js_1_element").eq(i).find("img");
        ele.attr("src", ele.attr("data-original"));
    }
    var btnData = "";
    for (var i = 0; i < maxLen; i++) btnData += '<li class="xn_ba_js_1_element_btn">';
    $(".xn_ba_js_1_btn").html(btnData);
    var btn = $(".xn_ba_js_1_btn").find("li").eq(0);
    var btnW = btn.width() + Math.round(btn.css("margin-left").replace(/[a-zA-Z]/g, ""));
    $(".xn_ba_js_1_btn").css("width", maxLen * btnW*2);
    btn.attr("class", "xn_ba_js_1_element_btn_on");
    $(".xn_ba_js_1_banner").css("visibility", "visible");
    for (var i = 0; i < maxLen; i++) {
        $(".xn_ba_js_1_element").eq(i).attr("id", "ea_ba_no_b_" + i);
        var _pos = Math.round(imgW * (i - index) + sizeW / 2 - imgW / 2);
        if (i == index) _opa = 1;
        if (_pos > sizeW) {
            _pos -= maxLen * imgW
        } else if (_pos < -imgW) {
            _pos += maxLen * imgW
        }
        $(".xn_ba_js_1_element").eq(i).css({
            left: _pos,
            opacity: 0
        }).animate({
            opacity: _opa
        }, {
            duration: 400,
            easing: 'linear'
        })
    }
    onResize();
    $(window).resize(onResize);
    function onResize() {
        for (var i = 0; i < maxLen; i++) {
            if (bannerW == "100%") {
                sizeW = $(window).width();
            } else {
                sizeW = parseInt(bannerW);
            }
            var _pos = Math.round(imgW * (i - index) + sizeW / 2 - imgW / 2);
            var _opa = 1;
            if (i == index) _opa = 1;
            if (_pos > sizeW) {
                _pos -= maxLen * imgW
            }
            $(".xn_ba_js_1_element").eq(i).stop().css({
                left: _pos,
                opacity: _opa
            })
        }
    };
    $(".xn_ba_js_1_btn li").each(function (i) {
        $(this).click(function () {
            skipHandler((i));
        });
    });
    timerRepeat();
    function skipHandler(target) {
        if (target == index) return;
        var d = 1;
        var pure = index;
        if (target < pure) d = -1;
        var btn = $(".xn_ba_js_1_btn").find("li");
        btn.eq(pure).attr("class", "xn_ba_js_1_element_btn");
        btn.eq(target).attr("class", "xn_ba_js_1_element_btn_on");
        var len;
        if (d == 1) {
            len = target - pure;
            if (len <= 1) {
                index = target;
                nextPage();
            } else {
                for (var k = pure; k <= target; k++) {
                    index = k;
                    nextPage();
                }
            }
        } else {
            len = index - target;
            if (len <= 1) {
                index = target;
                prevPage();
            } else {
                for (var k = index; k >= target; k--) {
                    index = k;
                    prevPage();
                }
            }
        }
    }
    function timerRepeat() {
        if (!xn_ba_js_1_autoPlay) return;
        xn_ba_js_1_nextfunc = isPause;
        xn_ba_js_1_timer = setInterval(xn_ba_js_1_nextfunc, xn_ba_js_1_interval);
    }
    function isPause() {
        var isRun = true;
        if (typeof parent.runonce != 'undefined') {
            isRun = parent.runonce;
        }
        if (isRun) {
            var cur = index;
            cur++;
            if (cur > maxLen - 1) cur = 0;
            skipHandler(cur);
            return false;
        } else {
            return true;
        }
    }
    function nextPage() {
        if (xn_ba_js_1_timer) {
            clearInterval(xn_ba_js_1_timer);
            timerRepeat();
        }
        if ($(window.parent.bannerparam).length > 0) {
            window.parent.bannerparam.cur_ba_index = index;
        }
        _pict = $(".xn_ba_js_1_element");
        for (var i = 0; i < maxLen; i++) {
            var _pos = Math.round(imgW * (i - index) + sizeW / 2 - imgW / 2);
            var _opa = 1;
            if (i == index) _opa = 1;
            if (_pos > sizeW) {
                _pos -= maxLen * imgW
            } else if (_pos < -imgW * 2) {
                _pos += maxLen * imgW
            }
            _pict.eq(i).stop().css({
                left: _pos + imgW
            }).animate({
                left: _pos,
                opacity: _opa
            }, {
                duration: 700,
                easing: 'easeOutQuint'
            })
        }
    }
    function prevPage() {
        if (xn_ba_js_1_timer) {
            clearInterval(xn_ba_js_1_timer);
            timerRepeat();
        }
        if ($(window.parent.bannerparam).length > 0) {
            window.parent.bannerparam.cur_ba_index = index;
        }
        for (var i = 0; i < maxLen; i++) {
            var _pos = Math.round(imgW * (i - index) + sizeW / 2 - imgW / 2);
            if (_pos < -imgW) {
                _pos += maxLen * imgW
            } else if (_pos > sizeW + imgW) {
                _pos -= maxLen * imgW
            }
            $(".xn_ba_js_1_element").eq(i).stop().css({
                left: _pos - imgW
            }).animate({
                left: _pos
            }, {
                duration: 700,
                easing: 'easeOutQuint'
            })
        }
    }
}
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuint',
    swing: function (x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    }, easeOutQuint: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    }
});



    $(function(){
        if($("#xn_c_index_75_wrap").length > 0){
            var speed = 300;
            var currClass = "xn_c_index_75_colLiCurr";
            $(".xn_c_index_75_cwrap").first().show();
            $(".xn_c_index_75_colLi").first().addClass(currClass).siblings().removeClass(currClass);
            $(".xn_c_index_75_colLi").click(function(){
                var _this = $(this);
                _this.addClass(currClass).siblings().removeClass(currClass);
                $(".xn_c_index_75_cwrap").eq(_this.index()).slideDown(speed).siblings().slideUp(speed);
            });
        }
    });


$(function(){
    if(document.getElementById("mq") != null){      
        var oMarquee = document.getElementById("mq"); //滚动对象
        var iLineHeight = 42; //单行高度，像素
        var iLineCount = 10; //实际行数
        var iScrollAmount = 1; //每次滚动高度，像素
        function run() {
            oMarquee.scrollTop += iScrollAmount;
            if ( oMarquee.scrollTop == iLineCount * iLineHeight )
            oMarquee.scrollTop = 0;
            if ( oMarquee.scrollTop % iLineHeight == 0 ) {
            window.setTimeout( run, 3000 );
            } else {
                window.setTimeout( run, 10 );
            }
        }
        oMarquee.innerHTML += oMarquee.innerHTML;
        window.setTimeout( run, 3000 );
        // JavaScript Document  - 首页间隔滚动新闻结束    
    }
});




$(function () {
    var options = {
      useEasing : true, 
      useGrouping : true, 
      separator : ',', 
      decimal : '.', 
      prefix : '', 
      suffix : '' 
    };
    var n1=$(".n1").html();
    var n2=parseInt($(".n2").html());
    var n3=$(".n3").html();
    var n4=$(".n4").html();
    var num1 = new CountUp("myNum1", 0, n1, 0, 2.5, options);
    var num2 = new CountUp("myNum2", 0, n2, 0, 5, options);
    var num3 = new CountUp("myNum3", 0, n3, 0, 2.5, options);
    var num4 = new CountUp("myNum4", 0, n4, 0, 5, options);
    $(window).scroll(function(){
        var h=$(window).scrollTop();
        if(h>600){
            num1.start();
            num2.start();
            num3.start();
            num4.start();
        }
    })
})

 
$(function(){
    var $ul = $('#xn_c_index_245_ul');
    var $li=$ul.children("li");
    var len=$li.length;
    $('#xn_c_index_245_left_top a').attr('href',$('#xn_c_index_245_ul li:nth-child(1)').find('span').attr("value"));
    $('#xn_c_index_245_left_top img').attr('src',$('#xn_c_index_245_ul li:nth-child(1)').find('img').attr("data-original"));
    $('#xn_c_index_245_left_title a')[0].innerHTML = $('#xn_c_index_245_ul li:nth-child(1)').find('.title1')[0].innerHTML;
    $('#xn_c_index_245_left_title a').attr('href',$('#xn_c_index_245_ul li:nth-child(1)').find('span').attr("value"));
    $('#xn_c_index_245_left_cnt1')[0].innerHTML = $('#xn_c_index_245_ul li:nth-child(1)').find('.title2')[0].innerHTML;
    $('#xn_c_index_245_left_cnt2')[0].innerHTML = $('#xn_c_index_245_ul li:nth-child(1)').find('.title3')[0].innerHTML;
    //CLICK
    $li.click(function(){
        $('#xn_c_index_245_left_top a').attr('href',$(this).find('span').attr("value"));
        $('#xn_c_index_245_left_top img').attr('src',$(this).find('img').attr("data-original"));
        $('#xn_c_index_245_left_title a')[0].innerHTML = $(this).find('.title1')[0].innerHTML;
        $('#xn_c_index_245_left_title a').attr('href',$(this).find('span').attr("value"));
        $('#xn_c_index_245_left_cnt1')[0].innerHTML = $(this).find('.title2')[0].innerHTML;
        $('#xn_c_index_245_left_cnt2')[0].innerHTML = $(this).find('.title3')[0].innerHTML;
    })
    $("#xn_c_index_245_ul").children("li").eq(0).addClass("xn_c_index_245_li1");
    $("#xn_c_index_245_ul").children("li").eq(4).addClass("xn_c_index_245_li4");
})


$(function(){
    if($("#xn_c_index_507_wrap").length > 0) {
        var isAutoPlay = false;   //是否自动
        var speed = 600;        //速度
        var cul = $(".xn_c_index_507_ul");
        var cli = $(".xn_c_index_507_li");
        var nums = $(".xn_c_index_507_nums");
        var count = cli.length;
        var index = 0;
        var curr_index = 0;
        var pn_index = 0;
        //初始化
        cli.each(function(){
            $(this).attr("mark",$(this).index());
            $(this).addClass("xn_c_index_507_li"+$(this).index());
            nums.append("<span></span>");
            if($(this).index() == 0){
                $(this).addClass("iscurr");
            }
            if($(this).index() == (count-1)){
                $(this).addClass("islast");
            }
            if($(this).index() == 1){
                $(this).addClass("isnext");
            }
        });
        nums.find("span:first").addClass("curr");
        //获取相关参数
        var cbox_w = $(".xn_c_index_507_cbox").width();
        var iscurr = cul.children(".iscurr");
        var iscurr_w = iscurr.width();
        var iscurr_h = iscurr.height();
        var iscurr_left = parseInt(iscurr.css("left"));
        var cli_w = cli.eq(index+1).width();
        var cli_h = cli.eq(index+1).height();
        var cli_left = parseInt(cli.eq(index+1).css("left"));
        var cli_top = parseInt(cli.eq(index+1).css("top"));
        var name=cli.eq(0).find('.xn_c_index_507_title a').html()
        var href=cli.eq(0).find('.xn_c_index_507_title a').attr('href')
        var intro=cli.eq(0).find('.xn_c_index_507_cont').html()
        $('.xn_c_index_507_name').html(name)
        $('.xn_c_index_507_intro').html(intro)
        $('.xn_c_index_507_link').attr('href',href)
        cli.eq(curr_index).find(".sh").show()
        cli.eq(curr_index).siblings().find(".sh").hide()
        //左右切换
        function movePrev(){
            curr_index = index;
            index--;
            if(index < 0){
                index = count-1;
            }
            //当前元素
            cli.eq(curr_index).stop().animate({"width":cli_w,"height":cli_h,"left":cli_left,"top":cli_top,"z-index":"24"},speed).next().css("z-index","23");
            //切换后当前元素
            cli.eq(index).stop().animate({"width":iscurr_w,"height":iscurr_h,"left":iscurr_left,"top":"0px","z-index":"25"},speed);
            cli.eq(index).find(".sh").show()
            cli.eq(index).siblings().find(".sh").hide()
            //切换后当前元素下一个元素
            cli.eq(index-1).css({"left":"-100%","z-index":"22"}).stop().animate({"left":"0px","z-index":"23"},speed);
            //焦点元素切换
            nums.find("span").eq(index).addClass("curr").siblings().removeClass("curr");
            name=cli.eq(index).find('.xn_c_index_507_title a').html()
            href=cli.eq(index).find('.xn_c_index_507_title a').attr('href')
            intro=cli.eq(index).find('.xn_c_index_507_cont span').html()
            $('.xn_c_index_507_name').html(name)
            $('.xn_c_index_507_intro').html(intro)
            $('.xn_c_index_507_link').attr('href',href)
        }
        function moveNext(){
            curr_index = index;
            index++;
            if(index > (count-1)){
                index = 0;
            }
            if(curr_index == 0){
                pn_index = count-1;
            }else{
                pn_index = curr_index-1;
            }
            //当前元素
            if(index == (count-1)){
                cli.eq(0).stop().animate({"left":cli_left,"z-index":"24"},speed);
            }else{
                cli.eq(index+1).stop().animate({"left":cli_left,"z-index":"24"},speed);
            }
            //切换后当前元素
            cli.eq(index).stop().animate({"width":iscurr_w,"height":iscurr_h,"left":iscurr_left,"top":"0px","z-index":"25"},speed,function(){
                cli.eq(pn_index).css({"left":cbox_w-cli_w,"z-index":"23"});
            });
            cli.eq(index).find(".sh").show()
            cli.eq(index).siblings().find(".sh").hide()
            //切换后当前元素下一个元素
            cli.eq(curr_index).stop().animate({"width":cli_w,"height":cli_h,"left":"0px","top":cli_top,"z-index":"23"},speed);
            //焦点元素切换
            nums.find("span").eq(index).addClass("curr").siblings().removeClass("curr");
            name=cli.eq(index).find('.xn_c_index_507_title a').html()
            href=cli.eq(index).find('.xn_c_index_507_title a').attr('href')
            intro=cli.eq(index).find('.xn_c_index_507_cont span').html()
            $('.xn_c_index_507_name').html(name)
            $('.xn_c_index_507_intro').html(intro)
            $('.xn_c_index_507_link').attr('href',href)
        }
        $(".xn_c_index_507_prev").bind("click",function(){
            movePrev();
        });
        $(".xn_c_index_507_next").bind("click",function(){
            moveNext();
        });
        //是否自动切换
        if(isAutoPlay){
            var isAuto = setInterval(moveNext,3000);
            $(".xn_c_index_507_inner").hover(function(){
                clearInterval(isAuto);
            },function(){
                isAuto = setInterval(moveNext,3000);
            });
        }
    }
});


$(function(){
    var $ul = $('#xn_c_index_244_ul');
    var $li=$ul.children("li");
    var len=$li.length;
    $('#xn_c_index_244_left_top a').attr('href',$('#xn_c_index_244_ul li:nth-child(1)').find('span').attr("value"));
    $('#xn_c_index_244_left_top img').attr('src',$('#xn_c_index_244_ul li:nth-child(1)').find('img').attr("data-original"));
    $('#xn_c_index_244_left_title a')[0].innerHTML = $('#xn_c_index_244_ul li:nth-child(1)').find('.title1')[0].innerHTML;
    $('#xn_c_index_244_left_title a').attr('href',$('#xn_c_index_244_ul li:nth-child(1)').find('span').attr("value"));
    $('#xn_c_index_244_left_cnt1')[0].innerHTML = $('#xn_c_index_244_ul li:nth-child(1)').find('.title2')[0].innerHTML;
    $('#xn_c_index_244_left_cnt2')[0].innerHTML = $('#xn_c_index_244_ul li:nth-child(1)').find('.title3')[0].innerHTML;
    //CLICK
    $li.click(function(){
        $('#xn_c_index_244_left_top a').attr('href',$(this).find('span').attr("value"));
        $('#xn_c_index_244_left_top img').attr('src',$(this).find('img').attr("data-original"));
        $('#xn_c_index_244_left_title a')[0].innerHTML = $(this).find('.title1')[0].innerHTML;
        $('#xn_c_index_244_left_title a').attr('href',$(this).find('span').attr("value"));
        $('#xn_c_index_244_left_cnt1')[0].innerHTML = $(this).find('.title2')[0].innerHTML;
        $('#xn_c_index_244_left_cnt2')[0].innerHTML = $(this).find('.title3')[0].innerHTML;
    })
    $("#xn_c_index_244_ul").children("li").eq(0).addClass("xn_c_index_244_li1");
    $("#xn_c_index_244_ul").children("li").eq(4).addClass("xn_c_index_244_li4");
})





$(function () {
    var idx=0
    $('.xn_c_index_39_nrboxsmall').eq(idx).find('.xn_c_index_39_ritbox').show()
    $('.xn_c_index_39_num').html(idx+1)
    $('.xn_c_index_39_nrboxsmall').each(function () {
        $(this).find('.xn_c_index_39_lftbox').click(function () {
            idx=$(this).parent().index()
            $('.xn_c_index_39_num').html(idx+1)
            $('.xn_c_index_39_nrboxsmall').eq(idx).find('.xn_c_index_39_ritbox').fadeIn()
            $('.xn_c_index_39_nrboxsmall').eq(idx).siblings().find('.xn_c_index_39_ritbox').fadeOut()
        })
    })
    $('.xn_c_index_39_left').click(function () {
        idx--;
        if(idx<0){
            idx=3
        }
        $('.xn_c_index_39_num').html(idx+1)
        $('.xn_c_index_39_nrboxsmall').eq(idx).find('.xn_c_index_39_ritbox').fadeIn()
        $('.xn_c_index_39_nrboxsmall').eq(idx).siblings().find('.xn_c_index_39_ritbox').fadeOut()
    })
    $('.xn_c_index_39_right').click(function () {
        idx++;
        if(idx>3){
            idx=0
        }
        $('.xn_c_index_39_num').html(idx+1)
        $('.xn_c_index_39_nrboxsmall').eq(idx).find('.xn_c_index_39_ritbox').fadeIn()
        $('.xn_c_index_39_nrboxsmall').eq(idx).siblings().find('.xn_c_index_39_ritbox').fadeOut()
    })
})


$(function(){
    $('.xn_c_index_138_typeList').each(function () {
        for (var i = 0; i < 2; i++) {
            $(this).find('.xn_c_index_138_contleft').append($(this).find(".xn_c_index_138_headUl").children().eq(0))
        }
    })
    $(".xn_c_index_138_typeName").first().addClass("xn_c_index_138_typeName_cur");
    $(".xn_c_index_138_contType").first().addClass("xn_c_index_138_contType_cur");
    $(".xn_c_index_138_typeName").hover(function(){
        $(this).addClass("xn_c_index_138_typeName_cur");
        $(this).next(".xn_c_index_138_contType").addClass("xn_c_index_138_contType_cur");
        $(this).parent().siblings().children(".xn_c_index_138_typeName").removeClass("xn_c_index_138_typeName_cur");
        $(this).parent().siblings().children(".xn_c_index_138_contType").removeClass("xn_c_index_138_contType_cur");
    });
});


$(function () {
    var options = {
      useEasing : true, 
      useGrouping : true, 
      separator : ',', 
      decimal : '.', 
      prefix : '', 
      suffix : '' 
    };
    var n1=$(".n1").html();
    var n2=parseInt($(".n2").html());
    var n3=$(".n3").html();
    var n4=$(".n4").html();
    var num1 = new CountUp("myNum1", 0, n1, 0, 2.5, options);
    var num2 = new CountUp("myNum2", 0, n2, 0, 5, options);
    var num3 = new CountUp("myNum3", 0, n3, 0, 2.5, options);
    var num4 = new CountUp("myNum4", 0, n4, 0, 5, options);
    $(window).scroll(function(){
        var h=$(window).scrollTop();
        if(h>600){
            num1.start();
            num2.start();
            num3.start();
            num4.start();
        }
    })
})













$(function () {
    var timer=setTimeout(function () {
        $('.qq_box').show()
    },10000)
    $('.qq_close').click(function () {
        $('.qq_box').hide()
    })
    $('.qq_later').click(function () {
        $('.qq_box').hide()
    })
})





var oMarketJosn = {"aUpOrDown":"","aLeftOrRight":"","aUpOrDownVal":"","aLeftOrRightVal":""}
function  marketing2(aUpOrDown,aLeftOrRight,aUpOrDownVal,aLeftOrRightVal,show){ 
        var oMarket=$("#xn_m_6_wrap");
        var oClose=$("#xn_m_6_close");
        var oSmallBut=$("#xn_m_6_small_but");
        var iWm=oMarket.width();
        //初始参数
        var initUOrDVal = "";
        var initLOrRVal = "";
        //追加
        oMarket.css({'top':'','left':'','right':''});
        var iWm_h = oMarket.outerHeight(true);
        var win_h = $(window).outerHeight(true);
        var win_w = $(window).outerWidth(true);
        var srollTop = 0;
        if (self.frameElement && self.frameElement.tagName == "IFRAME") {
            win_h=$(window.parent).height();
            win_w=$(window.parent).outerWidth(true);
            srollTop = $(window.parent).scrollTop();
        }
        var midd_top = (win_h-iWm_h)/2;     //居中参数值
        var ck_zb = iWm_h/win_h;     //营销窗口占浏览器比例参数值
        //以top的形式进行定位
        var ud_val = aUpOrDownVal.slice(-1);
        var lr_val = aLeftOrRightVal.slice(-1);
        if(ud_val == "%"){
            initUOrDVal = aUpOrDownVal;
            //将百分比转换为小数
            aUpOrDownVal = aUpOrDownVal.replace(/([0-9.]+)%/, function (a, b) {return +b / 100;});      
            if(aUpOrDownVal == 0.5){
                aUpOrDownVal = midd_top;
            }else{
                if(ck_zb > 1){
                    aUpOrDownVal = 0;
                }else{
                    var count_val = 1-Number(ck_zb);
                    aUpOrDownVal = parseInt(count_val*win_h*aUpOrDownVal);
                }
            }
        }else{
            aUpOrDownVal = aUpOrDownVal.slice(0,-2);
            if(aUpOrDownVal > (win_h-iWm_h)){
                aUpOrDownVal = (win_h-iWm_h);
                initUOrDVal = parseInt((aUpOrDownVal/win_h)*100)+"%";
            }else{
                initUOrDVal = parseInt((aUpOrDownVal/win_h)*100)+"%";
            }
        }
        if(lr_val != "%"){
            aLeftOrRightVal = parseInt(aLeftOrRightVal);//.slice(0,-2);
            initLOrRVal = parseInt((aLeftOrRightVal/win_w)*100)+"%";
        }else{
            initLOrRVal = aLeftOrRightVal;
        }
        oMarket.css('top',(parseInt(aUpOrDownVal)+srollTop)+"px");
        oMarket.css(aLeftOrRight,initLOrRVal);
        
        if (self.frameElement && self.frameElement.tagName == "IFRAME"&& aLeftOrRight=='right') {
            oMarket.css('margin-right','30px');
        }
        else{
            oMarket.css('margin-right','');
        }
        oSmallBut.css("display","none");
        //Json数值
        oMarketJosn = {"aUpOrDown":aUpOrDown,"aLeftOrRight":aLeftOrRight,"aUpOrDownVal":initUOrDVal,"aLeftOrRightVal":initLOrRVal}
        if (aLeftOrRight == 'right') {
            
            oSmallBut.css({'left':-oSmallBut.outerWidth(true)+'px','right':''});
            oClose.css({'margin-right':iWm-oClose.width(),'margin-left':''});
            }
        else {
            
            oSmallBut.css({'right':-oSmallBut.outerWidth(true)+'px','left':''});
            oClose.css({'margin-left':iWm-oClose.width(),'margin-right':''});
            }
        oClose.unbind("click").bind("click",function(){
            if(aLeftOrRight=='right'){
                 oMarket.animate({right:-iWm +'px'},500); 
                 oSmallBut.css("display","block");
                }
             else{
                 oMarket.animate({left:-iWm +'px'},500); 
                 oSmallBut.css("display","block");
                 }
             })
        oSmallBut.unbind("click").bind("click",function(){ 
            if(aLeftOrRight=='right'){
                oMarket.animate({right:initLOrRVal},500);
                oSmallBut.css("display","none");
                }
            else{
                oMarket.animate({left:initLOrRVal},500);
                oSmallBut.css("display","none");
                }
            })
    }
$(function(){
    $(".xn_m_6_mbox").each(function(index, element) {
        var childHtml = $(this).children("ul").html() + "";
        if(childHtml.replace(/(^\s+)|(\s+$)/g,"")==""){ $(this).css('display','none'); }
    });
    //orderId传递
    $(".xn_m_6_mbox").each(function(){        
        $(this).attr("id","xn_m_6_orderBox_"+$(this).find(".xn_m_6_orderId span").text());
    });
    var divTestJQ = $("#xn_m_6_cent"); //取得容器对象 
    var divJQ = $(".xn_m_6_mbox", divTestJQ); //取容器需要重排的对象 
    var EntityList = []; //定义一个数组用于存放要排序的对象 
    divJQ.each(function () {
        var thisJQ = $(this);
        EntityList.push({ Id: parseInt(thisJQ.attr("id").split('_')[4], 10), JQ: thisJQ }); //把要排序的对象和排序的值一起放到一个新的对象里，并存入到数组 
    });
    EntityList.sort(function (a, b) { //利用数组的排序方法重新排序对象 
        //return b.Name - a.Name; //从大到小        
        return a.Id - b.Id; //从小到大 
    });
    for (var i = 0; i < EntityList.length; i++) {
        EntityList[i].JQ.appendTo(divTestJQ); //把排序完的对象重新插入到容器对象 
    };
    $(".xn_m_6_foot").click(function(){                     
        $("html,body").animate({"scrollTop":0});
    });
})




