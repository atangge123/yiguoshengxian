$(function(){
	var rundom=Math.floor(Math.random()*8999)+1000;
	$(".textcode").val(rundom);
	
	
	$(".btncode").on("click",function(){
		var rundom=Math.floor(Math.random()*8999)+1000;
		$(".textcode").val(rundom);
	});
	
	
	var curre={name:"123",passwords:"456"};
	$.cookie.json=true;
	$.cookie("curret",curre,{expires:7,path:"/"});
	console.log(_current);
	var _current=$.cookie("curret")||[];
	$(".btnlogon").on("click",function(e){
		e=e||event;
		e.preventDefault();
		
		
		var code=$(".code").val();
		
		var username=$(".usernames").val();
		var userword=$(".usernamew").val();
		var curret={name:username,passwords:userword};
		console.log(curret.name);
//		&&curret.name===_current.name&&curret.passwords===_current.passwords
		
		if(code!=$(".textcode").val()){
			$(".promptyz").css({"display":"block"});
			$(".code").val("");
//			alert("验证码输入错误");
		}
		
		else if(curret.name!==_current.name&&curret.passwords!==_current.passwords){
			$(".prompt").css({"display":"block"});
			$(".usernames").val("");
			$(".usernamew").val("");
		}else{
			$(".prompt").css({"display":"none"});
			$(".promptyz").css({"display":"none"});
			window.location.href="index.html";
		}
		var rundom=Math.floor(Math.random()*8999)+1000;
		$(".textcode").val(rundom);
	});
	
	
	
});
