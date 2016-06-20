	// 简历特效
	$(function(){
		//图标大小
		$(".ct_tb li img").hover(function(){
			$(this).stop().animate({"width":"55px"},300).parent().siblings("p").show();
		},function(){
			$(this).stop().animate({"width":"38px"},300).parent().siblings("p").hide();
		})
		//切换
		$(".ct_tb li img").click(function(){
			var ind=$(".ct_tb li img").index(this);
			$(".ct_jl>li").eq(ind).show().siblings().hide();
		})
		//专业技能
		$(".qidong").click(function(){
			$(".zy_tu_1 ul li>div>div").css({"width":"0"});
			$(".tu_ps div").animate({"width":"90%"},6000);
			$(".tu_js div").animate({"width":"70%"},6000);
			$(".tu_hl div").animate({"width":"90%"},6000);
			$(".tu_css div").animate({"width":"80%"},6000);
			var x=1,i=1,o=1,n=1;
			setInterval(function(){
				if(x<90){
					x++;
					document.getElementById("ps").innerHTML=x;
				}
			},60)
			setInterval(function(){
				if(i<70){
					i++;
					document.getElementById("js").innerHTML=i;
				}
			},70)
			setInterval(function(){
				if(o<90){
					o++;
					document.getElementById("hl").innerHTML=o;
				}
			},60)
			setInterval(function(){
				if(n<80){
					n++;
					document.getElementById("css").innerHTML=n;
				}
			},80)
		})
		
		//旋转
			$(".zy_tu_1 li img").click(function(){
				$(this).addClass("xuanzhuan").parent().siblings().find("img")
							.removeClass();
				var $str=$(".zy_tu_1 li img").index(this);
				$(".zy_tu_2 li").eq($str).show().siblings().hide();
			})
		//我的经历
			$(".jiantou span").click(function(){
			var $str=$("#tu_wen");
			if($str.is(":visible")){
				$str.hide(1000).siblings(".tu_wen").show(1000);
				$(".wd_wen h3").text("南昌迈达科技有限公司");
			}else{
				$str.show(1000).siblings(".tu_wen").hide(1000);
				$(".wd_wen h3").text("森普工艺设计有限公司");
			}
		})
		
		//我的作品遮罩
		$(".ct_nr ul li").hover(function(){
			var width=$(this).find("img").width();
			var duibi=parseInt(width);
			var height=$(this).find("img").height();
			var zhezhao=$('<div class="zhezhao"></div>');
			var chuangkou=$(this).find("a").attr("href");
			if(duibi<300){
				var left="10px";
			}else{
				var left='14px';
			}
			zhezhao.appendTo(this);
			$(".zhezhao").css({
				"width":width,
				"height":height,
				"left":left
			});
			$(".zhezhao").click(function(){
				window.open(chuangkou);
			})
		},function(){
			$(".zhezhao").remove();
		})
		//轮播
		$(".you").click(function(){
			if(!$(".ct_nr li").is(":animated")){
				$(".ct_nr ul li:eq(0)").appendTo(".ct_nr ul");
				$(".xh").animate({
					"width":"230px",
					"height":'197px',
					"margin-top":"50px"
				},1000);
				$(".xh").find("img").animate({"width":'231px'},1000);
				$(".xh").find("p").animate({'font-size':'13px',"line-height":'18px'},1000);
				
				$(".xh").next().animate({
					"width":"334px",
					"height":'289px',
					"margin-top":"0"
				},1000);
				$(".xh").next().find("img").animate({"width":'326px',},1000);
				$(".xh").next().find("p").animate({'font-size':'17px',"line-height":'25px'},1000);
				$(".xh").removeClass("xh").next().addClass("xh");
			}
		})
		$(".zuo").click(function(){
			if(!$(".ct_nr li").is(":animated")){
				$(".ct_nr ul li:last").prependTo(".ct_nr ul");
				$(".xh").animate({
					"width":"230px",
					"height":'197px',
					"margin-top":"50px"
				},1000);
				$(".xh").find("img").animate({"width":'231px'},1000);
				$(".xh").find("p").animate({'font-size':'13px',"line-height":'18px'},1000);
				
				$(".xh").prev().animate({
					"width":"334px",
					"height":'289px',
					"margin-top":"0"
				},1000);
				$(".xh").prev().find("img").animate({"width":'326px'},1000);
				$(".xh").prev().find("p").animate({'font-size':'17px',"line-height":'25px'},1000);
				$(".xh").removeClass("xh").prev().addClass("xh");
			}
		})
		$(".qq").click(function(){
			window.location.href = 'tencent://message/?uin=564238258&Site=www.csdhui.com&Menu=yes';
		})
	})

	