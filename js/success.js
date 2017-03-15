$(function(){
	var count=localStorage.getItem("count");
	$(".content .middle .middle_second p span").text(localStorage.getItem("phone"+count));

	$(".aler ul li:first-child").addClass("over");
	$(".login").show();
	$(".aler ul li").each(function(index){
		$(this).click(function(){
			$(this).addClass("over").siblings().removeClass("over");
			$(".aler .wrap div").hide().eq(index).show();
		})
	})

	$(".middle_third").click(function(){
		$(".back").show();
		$(".aler").show();
	})
	$(".back").click(function(){
		$(".back").hide();
		$(".aler").hide();
	})

	
	$("#login-btn").click(function(){
		var count=localStorage.count;
		for(var i=1;i<=count;i++){
			var phone=localStorage.getItem("phone"+i);
			var pwd=localStorage.getItem("pwd"+i);
			if(($(".login #phone").val()==phone)&&($(".login #pwd").val()==pwd)){
				
				location="load.html";
			}else{
				$(".aler .login form .error").show();
				return false;
			}
		}
	})
})