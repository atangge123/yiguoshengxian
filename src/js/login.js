require(["config"], function(){
	// 依赖配置中各短名称的模块
	require(["jquery","load","cookie"], function($){
		
	$(function(){
	var suserw=0;
	var regizy=0;
	var rundom=Math.floor(Math.random()*8999)+1000;
	$(".textcode").val(rundom);
	
	
	$(".btncode").on("click",function(){
		var rundom=Math.floor(Math.random()*8999)+1000;
		$(".textcode").val(rundom);
	});
	
	
	
	$.cookie.json=true;
	
	var _current=$.cookie("curret")||[];
	
	console.log(_current);
	$(".btnlogon").on("click",function(e){
		e=e||event;
		e.preventDefault();
		var code=$(".code").val();
		
		var username=$(".usernames").val();
		var userword=$(".usernamew").val();
		var curret={name:username,passwords:userword};
		
//		&&curret.name===_current.name&&curret.passwords===_current.passwords
		
		if(code!=$(".textcode").val()){
			$(".promptyz").css({"display":"block"});
			$(".code").val("");
//			alert("验证码输入错误");
		}else{
			$(".promptyz").css({"display":"none"});
			regizy=1;
		}
		
		if(curret.name!==_current.name||curret.passwords!==_current.passwords){
			$(".prompt").css({"display":"block"});
			$(".usernames").val("");
			$(".usernamew").val("");
		}else{
			$(".prompt").css({"display":"none"});
			suserw=1;
			
		}
		if(regizy==1&&suserw==1){
			window.location.href="/";
		}
		var rundom=Math.floor(Math.random()*8999)+1000;
		$(".textcode").val(rundom);
	});
});
		
	});
});



