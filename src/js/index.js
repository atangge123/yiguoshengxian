   //依赖配置
require(["config"], function(){
	// 依赖配置中各短名称的模块
	require(["jquery", "load"], function($){
		$(function(){
	/*	$(".ggg").hover(function(){
				// $(this).animate({opacity: 0.3}, 3000)
				console.log("nihao")
			}, function(){
				// $(this).animate({opacity: 1}, 3000)
				console.log("haolo")
			})*/
//		console.log($(".nav"));
		
			$("header").on("mouseenter","._phyiguo",function(){
				$(".pherwm").css({"display":"block"});
			});
			$("header").on("mouseleave",".pherwm",function(){
				$(".pherwm").css({"display":"none"});
			});
			$("header").on("mouseleave","body",function(){
				$(".pherwm").css({"display":"none"});
			});
			
			
			
			$("header").on("mouseenter","._myyiguo",function(){
				$(".myOrder").css({"display":"block"});
			});
			$("header").on("mouseleave",".myOrder",function(){
				$(".myOrder").css({"display":"none"});
			});
			$("header").on("mouseleave","body",function(){
				$(".myOrder").css({"display":"none"});
			});
			
			var lis=$(".ii");
			var len=lis.length;
			var cricles=$("#pointd").children();
			var currentIndex=0;
			var nextIndex=1;
			
			var timer=setInterval(move,2000);
				
			
			
			function move(){
				lis.eq(currentIndex).stop().fadeOut();					
				lis.eq(nextIndex).stop().fadeIn();
//				lis.eq(nextIndex).css({"transform":"scale(0.9,0.9)","transition":"all 2s"});
//				lis.eq(currentIndex).css("");
				cricles.eq(currentIndex).removeClass("pp");
				cricles.eq(nextIndex).addClass("pp");
				
				currentIndex=nextIndex;
				nextIndex++;
				if(nextIndex>len-1){
					nextIndex=0;
			}
			};
			
			
			$(".lunbo").hover(function(){
				clearInterval(timer);
				$(".prev").css({"display":"block"});
				$(".next").css({"display":"block"});
//				console.log("456");
			},function(){
				setInterval(move,2000);
//				console.log("123");
			});
			$(".prev").on("click",function(){
				nextIndex=currentIndex-1;
				if(nextIndex<0){
					nextIndex=len-1;
				}
				move();
			});
			$(".next").on("click",function(){
				move();
			});
			cricles.on("mouseenter",function(e){
				var _index=$(e.target).index();
				if(currentIndex==_index){
					return;
				}
				nextIndex=_index;
				move();
			});
			
			$(".allgoods").on("mouseenter",function(){
				$("#goodslist").css({"display":"block"});
			});
			$(".allgoods").on("mouseleave",function(){
				$("#goodslist").css({"display":"none"});
			});
			
			$("#goodslist").on("mouseenter",function(){
				$("#goodslist").css({"display":"block"});
			});
			$("#goodslist").on("mouseleave",function(){
				$("#goodslist").css({"display":"none"});
			});
			
			var goodsnum=$("#goodslist").children();
			goodsnum.eq(0).on("mouseenter",function(){
				$(".box1").css({"display":"block"});
				
			});
			goodsnum.eq(0).on("mouseleave",function(){
				$(".box1").css({"display":"none"});
			});
			$(".box1").on("mouseenter",function(){
				$(".box1").css({"display":"block"});
				$("#goodslist").css({"display":"block"});
			});
			$(".box1").on("mouseleave",function(){
				$(".box1").css({"display":"none"});
				$("#goodslist").css({"display":"none"});
			});
			
			
//		width:1193
		});
	});
});
