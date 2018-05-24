require(["config"], function(){
	// 依赖配置中各短名称的模块
	require(["jquery","load","cookie"], function($){
		
		$(function(){
			//刷新验证码
			
			var r=0;
			var p=0;
			var c=0;
			var current="";
			var usertel="123";
			var userpassword="mi12";
			
			var numzy=Math.floor(Math.random()*8999)+1000;
			$(".numyz").val(numzy);
			
			
			//点击按钮刷新验证码
			$(".yiz").on("click",function(){
				var numzy=Math.floor(Math.random()*8999)+1000;
				$(".numyz").val(numzy);
			});
			
			//填写完信息提交验证；
			$(".regissub").on("click",function(){
				//获取验证码；
				var picthyz=$(".picthyz").val();
				if(picthyz!=$(".numyz").val()){
					$(".tuyz").css({"display":"block"});
				}else{
					$(".tuyz").css({"display":"none"});
					
					r=1;
					
				}
			
//				//验证手机号
				var a=/^1\d{10}$/;			
				var tel=$(".tel").val();
				if(!a.test(tel)){
					$(".telgs").css({"display":"block"});
				}else{
					$(".telgs").css({"display":"none"});
					usertel=tel;
					p=1;
				}

			
				//验证6-20位的数字字符字母；
				
				var b=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
				var mm=$(".passwords").val();
				var mm1=$(".passwords1").val();
				if(mm!=mm1||!b.test(mm)){
					if(mm!=mm1){
						$(".mima2").css({"display":"block"});
					}
					else if(!b.test(mm)){
						$(".mima6").css({"display":"block"});
					}
				}else{
					$(".mima2").css({"display":"none"});
					$(".mima6").css({"display":"none"});
					userpassword=mm1;
					c=1;
				}
				
				
				var status=$(".chbtn").prop("checked");
				
				
				if(p==1&&r==1&&c==1&&status==true){
					current={"name":usertel,"passwords":userpassword};
					$.cookie.json=true;
					$.cookie("curret",current,{expires:7,path:"/"});
//					window.location.href="login.html";
				}
				
				var numzy=Math.floor(Math.random()*8999)+1000;
				$(".numyz").val(numzy);
			});
			
		});
		
	});
});
