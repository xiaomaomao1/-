$(function(){

	//手机号验证
	var flag1=false;
	$("#phone").blur(function() {
		var pattern=/^1\d{10}$/;
		var phone=$("#phone").val();
		if(pattern.test(phone)){
			var count=localStorage.count;
				for(var i=1;i<=count;i++){
					var phone=localStorage.getItem("phone"+i);
					if(phone==$("#phone").val()){
						$("#phonereError").show();
						$("#phone").addClass("bod");
						flag1=false;
					}
				}
			$("#phoneInfo").show();
			$("#ale1").hide();
			$("#phoneError").hide();
			$("#phonereError").hide();
			$("#phone").removeClass("bod");
			flag1=true;
		}else{
			$("#phoneError").show();
			$("#ale1").show();
			$("#phone").addClass("bod");
			flag1=false;
		}
	});

	//密码验证
	var flag2=false;
	$("#pwd").blur(function(){
		var pattern=/^[a-zA-Z\d]{6,8}$/;
		var pwd=$("#pwd").val();
		if(pattern.test(pwd)){
			$("#pwdInfo").show();
			$("#pwdError").hide();
			$("#ale2").hide();
			$("#pwd").removeClass("bod");
			flag2=true;
		}else{
			$("#pwdError").show();
			$("#ale2").show();
			$("#pwd").addClass("bod");
			flag2=false;
		}
	});

	//确认密码验证
	var flag3=false;
	$("#repwd").blur(function(){
		var pwd=$("#pwd").val();
		var repwd=$("#repwd").val();
		if(pwd==repwd){
			$("#repwdInfo").show();
			$("#repwdError").hide();
			$("#ale3").hide();
			$("#repwd").removeClass("bod");
			flag3=true;
		}else{
			$("#repwdError").show();
			$("#ale3").show();
			$("#repwd").addClass("bod");
			flag3=false;
		}
	});

	//邮箱验证
	var flag4=false;
	$("#email").blur(function(){
		var pattern=/^\w+@\w+(\.[a-z]{2,3}){1,2}$/;
		var email=$("#email").val();
		if(pattern.test(email)){
			$("#emailInfo").show();
			$("#ale4").hide();
			$("#emailError").hide();
			$("#email").removeClass("bod");
			flag4=true;
		}else{
			$("#emailError").show();
			$("#ale4").show();
			$("#email").addClass("bod");
			flag4=false;
		}
	})

	//验证码
	var flag5=false;
	$("#picture").blur(function(){
		var str="nodick";
		var picturetureture=$("#picture").val();
		if(picturetureture==str){
			$("#pictureInfo").show();
			$("#ale5").hide();
			$("#pictureError").hide();
			$("#picture").removeClass("bod");
			flag5=true;
		}else{
			$("#pictureError").show();
			$("#ale5").show();
			$("#picture").addClass("bod");
			flag5=false;
		}
	})

	//底边按钮同意阅读
	$(".content .middle_list2 form button").prop("disabled",true).addClass("backg");
	$(".checkbox").click(function(){
		if($(".checkbox").prop("checked")){
			$(".content .middle_list2 form button").prop("disabled",false).addClass("backg1");
		}else{
			$(".content .middle_list2 form button").prop("disabled",true).addClass("backg");
			$(".content .middle_list2 form button").removeClass("backg1");
		}
	})

	$(".content .middle_list2 form button").click(function(){
		if(!(flag1 && flag2 && flag3 && flag4 && flag5)){
			return false;
		} 
		var count=localStorage.count;
			if(!count){
				count=1;
			}else{
				count++;
			}
			localStorage.setItem("phone"+count,$("#phone").val());
			localStorage.setItem("pwd"+count,$("#pwd").val());
			localStorage.setItem("email"+count,$("#email").val());
			localStorage.setItem("count",count);

			$(this).text("马上跳转。。。");
			setTimeout(function(){location="test.html"}, 3000);
				
		})


	})


