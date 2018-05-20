   //依赖配置
require(["config"], function(){
	// 依赖配置中各短名称的模块
	require(["jquery", "load"], function($){
		$(function(){
		$("._myyiguo").hover(function(){
				// $(this).animate({opacity: 0.3}, 3000)
				console.log("nihao")
			}, function(){
				// $(this).animate({opacity: 1}, 3000)
				console.log("haolo")
			})
		});
	});
});

