













$(function(){
	var time = 4000; //设置向上滚动时间间隔
	var IsAutoScroll = false;	//设置是否自动滚动
	var speed = 600;	//设置滚动速度
	var listHeight = $(".xn_c_9_list").outerHeight(true)
    var index = $(".xn_c_9_wbox").outerHeight(true) / listHeight;
    var indexSlied = Math.ceil($(".xn_c_9_list").length / index);
    var boxHeight = $(".xn_c_9_wbox").outerHeight(true);
    var UpOrDown = true;
    if(IsAutoScroll)
    	setInterval(scroll,time);
    function scroll () {
    	if(UpOrDown){	
       		if($(".xn_c_9_wbox").scrollTop() < (indexSlied-1)*boxHeight){
            	$(".xn_c_9_wbox").animate({"scrollTop":listHeight+$(".xn_c_9_wbox").scrollTop()},speed);
       		}
       		if($(".xn_c_9_wbox").scrollTop() == (indexSlied-1)*boxHeight)
       			UpOrDown = false;
    	}else{
       		if($(".xn_c_9_wbox").scrollTop() > "0"){
            	$(".xn_c_9_wbox").animate({"scrollTop":$(".xn_c_9_wbox").scrollTop()-listHeight},speed);
        	}
       		if($(".xn_c_9_wbox").scrollTop() == "0")
       			UpOrDown = true;
    	}
    };
    $(".xn_c_9_UpControl").bind("click",function(){
        if($(".xn_c_9_wbox").scrollTop() > "0"){
            $(".xn_c_9_wbox").animate({"scrollTop":$(".xn_c_9_wbox").scrollTop()-listHeight},speed);
        }
   });
   $(".xn_c_9_DownControl").bind("click",function(){
       if($(".xn_c_9_wbox").scrollTop() < (indexSlied-1)*boxHeight){
            $(".xn_c_9_wbox").animate({"scrollTop":listHeight+$(".xn_c_9_wbox").scrollTop()},speed);
       }
   });
});




$(function(){
    var  dHi = $("#n_content_right_name_r"),
         dUl = dHi.children("ul"),
         dLi = dUl.children("li"),
         dDt_1 = dLi.children(".n_r_wz3"),
         dDt_2 = dLi.children(".n_r_wz5");
         dDt_1.html(">");
         dDt_2.html(">");
});


$(function(){
	$("#xn_c_prodv_22_cont").children("div").eq(0).show();	
	$("#xn_c_prodv_22_hUl li").click(function(){
		$(this).addClass("xn_c_prodv_22_hLiHover").siblings().removeClass("xn_c_prodv_22_hLiHover");
		$("#xn_c_prodv_22_cont").children("div").eq($("#xn_c_prodv_22_hUl li").index($(this))).slideDown(300).siblings().slideUp(300);
	});
});













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






