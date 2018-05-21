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
			
			var num=$(".ii");
			var len=num.length;
			var circles="";
			var=lis="";
			for(var i=0;i<len;i++){
				lis+=`<li ${i==0?'style="display:block;"':''}>
						<a href="${im}">
						</a>
					</li>`;
			}
			
			$("#lunbotu").innerHTML=circles;
		});

	});
});
