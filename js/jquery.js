$(document).ready(function(){
	var n=0;
	var next=0;
	var flag=true;
	var t=setInterval(move,3000);
	function move(){
		if(!flag){
			flag=true
			return;
		}
		flag=false;
		next=n+1;
		if(next>$(".banner .img1").length-1){
			next=0;
		}
		$(".banner .img1").eq(n).animate({opacity:0},600).end().eq(next).animate({opacity:1},600,function(){
			flag=true;
		});
		$(".beijingtu .bannerbj").eq(n).animate({opacity:0},600).end().eq(next).animate({opacity:1},600,function(){
			flag=true;
		});
		$(".min .min1").removeClass("frist").eq(next).addClass("frist")
		n=next;
	}
	$("#left").on("click",function(){
		if(!flag){
			return;
		}
		flag=false;
		next=n-1;
		if(next<0){
			next=$(".banner .img1").length-1;
		}
		$(".banner .img1").eq(n).animate({opacity:0},600).end().eq(next).animate({opacity:1},600,function(){
			flag=true;
		});
		$(".beijingtu .bannerbj").eq(n).animate({opacity:0},600).end().eq(next).animate({opacity:1},600,function(){
			flag=true;
		});
		$(".min .min1").removeClass("frist").eq(next).addClass("frist")
		n=next;
	})
	$("#right").on("click",function(){
		move();
	})
	$("#banner").on("mouseover",function(){
		clearInterval(t);
	})
	$("#banner").on("mouseout",function(){
		var t=setInterval(move,3000);
	})
	$(".chaozhi").on("mouseover",function(){
		var index=$(this).index();
		$(".chaozhi").removeClass("chaozhi1").eq(index).addClass("chaozhi1");
		$(".sanjiao").removeClass("sanjiao1").eq(index).addClass("sanjiao1");
		$(".phone1").removeClass("phone2").eq(index).addClass("phone2");
	})
	$(".hot-left").on("mouseover",function(){
		var index=$(this).index();
		$(".hot-left").removeClass("hot-left1").eq(index).addClass("hot-left1");
		$(".picture").removeClass("picture1").eq(index).addClass("picture1");
	})
	$(".weix").hover(function(){
		$(".img539").eq(0).css("transform","rotate(180deg)");
		$(".weixin").css("display","block")
	},function(){
		$(".img539").eq(0).css("transform","rotate(0deg)");
		$(".weixin").css("display","none")
	})
	$(".shouji").hover(function(){
		$(".img539").eq(1).css("transform","rotate(180deg)");
		$(".phone").css("display","block")
	},function(){
		$(".img539").eq(1).css("transform","rotate(0deg)");
		$(".phone").css("display","none")
	})
	$(".yintaika").hover(function(){
		$(".img539").eq(2).css("transform","rotate(180deg)");
		$(".yintaika").css("background","#fff");
		$(".shoucang").css("display","block")
	},function(){
		$(".img539").eq(2).css("transform","rotate(0deg)");
		$(".yintaika").css("background","");
		$(".shoucang").css("display","none")
	})
	$(".girl").hover(function(){
		var index=$(this).index();
		$(".min3").eq(index).css("display","block")
	},function(){
		var index=$(this).index();
		$(".min3").eq(index).css("display","none")
	})
})