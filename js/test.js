$(function(){
	var count=localStorage.getItem("count");
	$(".content .middle .middle_list22 p span").text(localStorage.getItem("phone"+count));
	function generateCode(){
		var str="";
			for(var i=1;i<=4;i++){
				var n=Math.floor(Math.random()*62);
				if(n<10){
					str+=n;
				}else if(n<36){
					str+=String.fromCharCode(n+55);
				}else{
					str+=String.fromCharCode(n+61);
				}
			}
			return str;
	}
	$(".content .middle .middle_list23").text(generateCode());

	$(".content .middle .middle_list22 button").click(function(){
		if($(".content .middle .middle_list22 input").val().toLowerCase()==$(".content .middle .middle_list23").text().toLowerCase()){
			$(".content .middle .middle_list24").hide();
			$(".content .middle .middle_list22 input").removeClass("bod1");
			$(".content .middle .alert").hide();
			$(this).text("马上跳转。。。");
			setTimeout(function(){location="success.html"}, 3000);

			
		}else{
			$(".content .middle .middle_list24").show();
			$(".content .middle .middle_list22 input").addClass("bod1");
			$(".content .middle .alert").show();
		}
	})

	$(".content .middle .middle_list33 button").click(function(){
		n=30;
		timer=setInterval(countDown, 1000);
	})
	function countDown(){
		n--;
		if(n>=1){
			$(".content .middle .middle_list33 button span").text(n);
		}else{
			$(".content .middle .middle_list23").text(generateCode());
			$(".content .middle .middle_list33 button span").text(30);
			clearInterval(timer);
		}
	}
})