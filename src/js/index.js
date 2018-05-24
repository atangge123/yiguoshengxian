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
		
		$(function(){
			var fl=$(".floor");
			var lis=$(".menu").children();
			var a=[1,2,3,4,5];
			var _fltop=Math.floor($(fl[0]).offset().top);
			var winHeight=$(window).height();
			
			
			//鼠标滚动事件变换楼层
			$(window).scroll(function(){
				var _scrollTop = document.documentElement.scrollTop;
				if(_scrollTop>_fltop-winHeight/2){
					$(".menu").css({"display":"block"});
				}else{
					$(".menu").css({"display":"none"});
				}
				Array.from(fl).forEach(function(floor,index){
					var _top=$(floor).offset().top;
//					console.log(_top);
					
					if(_scrollTop>=_top){
						
						for(var i=0;i<lis.length;i++){
							
//							$(lis[i]).removeClass()
							lis[i].className="";
//							console.log(lis[i]+"ll");
						}
						$(lis[index]).addClass("curr");
//							lis[index].className="curr";
//						console.log($(lis[index])+"ldd");
							
					}
				});
			});
			
			
			
			
			$(".menu").on("click",function(e){
				var _index=$(e.target).index();
				console.log(_index);
				//—top为终点
				var tp=Math.floor($(fl[_index]).offset().top);
				console.log(tp);
				//从当前滚动距离开始
				var starts=document.documentElement.scrollTop;
				var ranges=tp-starts;
				var speed=3000;
				
			
				var tm=+new Date();
				var timer=setInterval(function(){
					var tmz=Math.min(+new Date()-tm,speed);
					
					
					var luc=tmz*ranges/speed+starts;
					
					document.documentElement.scrollTop=luc;
					if(tmz==speed){
						clearInterval(timer);
					}
				},1000/60);
			});
//			
		});
		
	});
});
