$(function(){
	// banner轮播
	var box=$("#banner");
	var img=$(".img1");
	var min1=$(".min1");
	var left=$("#left");
	var right=$("#right");
	var bj=$(".bannerbj");
	var n=0;
	var flag=true;
	var time=setInterval(con,2000);
	function con(){
		n++;
		if(n>=img.length){
			n=0;
		}
		for(var i=0;i<min1.length;i++){
			// img[i].style.display="none";
			animate(img[i],{opacity:0},500);
			animate(bj[i],{opacity:0},500);
			min1[i].style.backgroundColor="gray";
		}
		// img[n].style.display="block";
		animate(img[n],{opacity:1},500);
		animate(bj[n],{opacity:1},500);
		min1[n].style.backgroundColor="red";
	}
		box.onmouseover=function(){
			clearInterval(time);
		}
		box.onmouseout=function(){
			time=setInterval(con,2000);
		}
	
	for(var i=0;i<min1.length;i++){
		min1[i].index=i;
		min1[i].onclick=function(){
			for(var i=0;i<min1.length;i++){
				min1[i].style.backgroundColor="gray";
				animate(img[i],{opacity:0},500);
				animate(bj[i],{opacity:0},500);
			}
			min1[this.index].style.backgroundColor="red";
			animate(bj[this.index],{opacity:1},500);
			animate(img[this.index],{opacity:1},500);
			n=this.index;
		}
	}
	left.onclick=function(){
		n--;
		if(n<0){
			n=img.length-1;
		}
		for(var i=0;i<min1.length;i++){
			animate(img[i],{opacity:0},500);
			animate(bj[i],{opacity:0},500);
			min1[i].style.backgroundColor="gray";
		}
		min1[n].style.backgroundColor="red";
		animate(bj[n],{opacity:1},500);
		animate(img[nhj],{opacity:1},500);

	}
	right.onclick=function(){
		con();
	}
	left.onmouseover=function(){
		left.style.backgroundColor="#F85069";
	}
	left.onmouseout=function(){
		left.style.backgroundColor="";
	}
	right.onmouseover=function(){
		right.style.backgroundColor="#F85069";
	}
	right.onmouseout=function(){
		right.style.backgroundColor="";
	}	
	// 最上面的鼠标移入移出效果
	var weix=$(".weix")[0];
	var weixin=$(".weixin")[0];
	var shouji=$(".shouji")[0];
	var phone=$(".phone")[0];
	var wx_height=$("img",weixin)[0].offsetHeight;
	var sj_height=$("img",phone)[0].offsetHeight;
	var louceng=$(".louceng");
	var text=$(".text");
	var img539=$(".img539")[0];
	var img5391=$(".img539")[1];
	var img5392=$(".img539")[2];
	hover(weix,function(){
		weix.style.backgroundColor="#fff";
		img539.style.transform="rotate(180deg)";
		// animate(weixin,{height:wx_height},500)
		weixin.style.display="block";
	},function(){
		weix.style.backgroundColor="";
		img539.style.transform="rotate(0deg)";
		// animate(weixin,{height:0},500)
		weixin.style.display="none";
	})
	hover(shouji,function(){
		shouji.style.backgroundColor="#fff";
		img5391.style.transform="rotate(180deg)";
		phone.style.display="block";
	},function(){
		shouji.style.backgroundColor="";
		img5391.style.transform="rotate(0deg)";
		phone.style.display="none";
	})
	var _yintaika=$(".yintaika")[0];
	var _shoucang=$(".shoucang",_yintaika)[0];
		hover(_yintaika,function(){
			img5392.style.transform="rotate(180deg)";
			_yintaika.style.backgroundColor="#fff";
			_yintaika.style.cssText="background:#fff;border-right:1px solid #ccc;border-left:1px solid #ccc;"
			_shoucang.style.display="block";
		},function(){
			img5392.style.transform="rotate(0deg)";
			_yintaika.style.backgroundColor="";
			_yintaika.style.cssText="border-right:0;border-left:0;"
			_shoucang.style.display="none";
		})
//楼层跳转
	var fashion=$(".fashion");
	var lou=$(".lou")[0];
	var left_lou=$(".left-lou");
	var cHeight=document.documentElement.clientHeight;
	var backTop=$(".back-lou")[0];
	var nHeight;
	var a=true;
	var b=true;
	var now;
	// 拿到每层楼到顶部的距离并保存
	for(var i=0;i<fashion.length;i++){
		fashion[i].h=fashion[i].offsetTop;
	}

	window.onscroll=function(){
		var obj=document.body.scrollTop?document.body:document.documentElement;
		var top=obj.scrollTop;
		if(top>=fashion[0].h-400){
			lou.style.display="block";
			nHeight=lou.offsetHeight;
			lou.style.top=(cHeight-nHeight)/2+"px";
			
		}
		if(top<fashion[0].h-300){
			lou.style.display="none";
		}
		for(var i=0;i<fashion.length;i++){
			if(top>=fashion[i].h){
				for(var j=0;j<left_lou.length;j++){
					left_lou[j].style.background="#fff";
					text[j].style.display="none";
					louceng[j].style.display="block";
				}
				
				louceng[i].style.display="none";
				text[i].style.display="block";
				left_lou[i].style.background="#E5004F";
				// for(var k=0;k<Arr.length;k++){
				// 	operateText(left_lou[i],Arr[k]);
				// }
				now=i;
			}
		}
	}
	for(var j=0;j<left_lou.length;j++){
		left_lou[j].index=j;
		left_lou[j].onclick=function(){
			animate(document.body,{scrollTop:fashion[this.index].h});
			animate(document.documentElement,{scrollTop:fashion[this.index].h});
			now=this.index;
		}
		left_lou[j].onmouseover=function(){
			this.style.background="#E5004F";
			text[this.index].style.display="block";
			louceng[this.index].style.display="none";
		}
		left_lou[j].onmouseout=function(){
			if(this.index==now){
				return;
			}
			this.style.background="";
			text[this.index].style.display="none";
			louceng[this.index].style.display="block";
		}
	}
	backTop.onclick=function(){
		animate(document.body,{scrollTop:0},400);
		animate(document.documentElement,{scrollTop:0},400);
	}
	// 小轮播
	var bar_left=$(".bar-left")[0];
	var bar_right=$(".bar-right")[0];
	var summer=$(".summer");
	var n=0;
	var small=$(".small");
	//封装的小函数
	function onClick(obj,left,right,val){
		var btn_left=left;
		var btn_right=right;
		var img1=obj;
		var circle1=val
		btn_right.onclick=function(){
			animate(img1[0],{left:-390},500)
			animate(img1[1],{left:0},500)
			circle1[0].style.background="#211616"
			circle1[1].style.background='#E5004F'
		}
		btn_left.onclick=function(){
			animate(img1[1],{left:390},500)
			animate(img1[0],{left:0},500)
			circle1[1].style.background="#211616"
			circle1[0].style.background='#E5004F'
		}
		circle1[1].onclick=function(){
			animate(img1[0],{left:-390},500)
			animate(img1[1],{left:0},500)
			circle1[0].style.background="#211616"
			circle1[1].style.background='#E5004F'
		}
		circle1[0].onclick=function(){
			animate(img1[1],{left:390},500)
			animate(img1[0],{left:0},500)
			circle1[1].style.background="#211616"
			circle1[0].style.background='#E5004F'
		}
	
		btn_left.onmouseover=function(){
			left.style.backgroundColor="#F85069";
		}
		btn_left.onmouseout=function(){
			left.style.backgroundColor="";
		}
		btn_right.onmouseover=function(){
			right.style.backgroundColor="#F85069";
		}
		btn_right.onmouseout=function(){
			right.style.backgroundColor="";
		}
	}
	var xiexue=$(".xiexue");
	var zuo=$(".zuo")[0];
	var you=$(".you")[0];
	var xiaoyuan=$(".xiaoyuan");
	var bag=$(".bag");
	var bag_zuo=$(".bag-zuo")[0];
	var bag_you=$(".bag-you")[0];
	var bag_yuan=$(".bag-yuan");
	var hufu=$(".hufu");
	var hufu_zuo=$(".hufu-zuo")[0];
	var hufu_you=$(".hufu-you")[0];
	var hufu_yuan=$(".hufu-yuan");
	var yundong=$(".yundong");
	var yundong_zuo=$(".yundong-zuo")[0];
	var yundong_you=$(".yundong-you")[0];
	var yundong_yuan=$(".yundong-yuan");
	var neiyi=$(".neiyi");
	var neiyi_zuo=$(".neiyi-zuo")[0];
	var neiyi_you=$(".neiyi-you")[0];
	var neiyi_yuan=$(".neiyi-yuan");
	onClick(summer,bar_left,bar_right,small);
	onClick(xiexue,zuo,you,xiaoyuan);
	onClick(bag,bag_zuo,bag_you,bag_yuan);
	onClick(hufu,hufu_zuo,hufu_you,hufu_yuan);
	onClick(yundong,yundong_zuo,yundong_you,yundong_yuan);
	onClick(neiyi,neiyi_zuo,neiyi_you,neiyi_yuan);
// 全部分类选项卡
	var all=getClass("all");
	var girl=getClass("girl");
	var min_2=getClass("min2")
	var min_3=getClass("min3")
	// 遍历
	for(var i=0;i<girl.length;i++){
		// 赋值
		girl[i].index=i;
		hover(girl[i],function(){
			for(var j=0;j<min_3.length;j++){
				min_3[j].style.display="none";
			}
			min_3[this.index].style.display="block";
		},function(){
			for(var j=0;j<min_3.length;j++){
				min_3[j].style.display="none";
			}
		})
	}
//儿童选项卡 
	var chaozhi=$(".chaozhi");
	var phone1=$(".phone1");
	var sanjiao=$(".sanjiao");
	// 遍历
	for(var i=0;i<chaozhi.length;i++){
		// 赋值
		chaozhi[i].index=i;
		chaozhi[i].onmouseover=function(){
			// 导航点击事件
			for(var i=0;i<chaozhi.length;i++){
				chaozhi[i].style.cssText="border-bottom:5px solid #333333;"
				sanjiao[i].style.display="none";
			}
			chaozhi[this.index].style.cssText="border-bottom:5px solid #E5004F;"
			sanjiao[this.index].style.display="block";
			for(var j=0;j<phone1.length;j++){
				phone1[j].style.display="none";
			}
			phone1[this.index].style.display="block";
		}
	}
//热门选项卡
	var hotLeft=$(".hot-left");
	var picture=$(".picture");
	// 遍历
	for(var i=0;i<hotLeft.length;i++){
		// 赋值
		hotLeft[i].index=i;
		hotLeft[i].onmouseover=function(){
			// 导航点击事件
			for(var i=0;i<hotLeft.length;i++){
				hotLeft[i].style.cssText="border-bottom:3px solid #333333;"
			}
			hotLeft[this.index].style.cssText="border-bottom:3px solid #E5004F;"
			// 图片点击事件；不点击时图片消失。none
			for(var j=0;j<picture.length;j++){
				picture[j].style.display="none";
			}
			// 点击事件发生后，图片点击的这张显示。block
			picture[this.index].style.display="block";
		}
	} 
	//边框缓慢出来
	function moveBorder(obj,val){
		var child=obj;
		var cheap=val;
		var border_left=$('.border-left',obj);
		var border_top=$('.border-top',obj);
		var border_right=$('.border-right',obj);
		var border_bottom=$('.border-bottom',obj);
		for(var i=0;i<cheap.length;i++){
			cheap[i].index=i;
			hover(cheap[i],function(){
				var cheap_width=cheap[this.index].offsetWidth;
				var cheap_heigt=cheap[this.index].offsetHeight;
				border_left[this.index].style.display='block';
				border_top[this.index].style.display='block';
				border_right[this.index].style.display='block';
				border_bottom[this.index].style.display='block';
				animate(border_left[this.index],{height:cheap_heigt+2},600)
				animate(border_right[this.index],{height:cheap_heigt+2},600)
				animate(border_top[this.index],{width:cheap_width+2},600)
				animate(border_bottom[this.index],{width:cheap_width+2},600)
			},function(){
				animate(border_left[this.index],{height:0},600)
				animate(border_right[this.index],{height:0},600)
				animate(border_top[this.index],{width:0},600)
				animate(border_bottom[this.index],{width:0},600)
			})
		}
	}
	moveBorder($(".child")[0],$(".cheap"));
	moveBorder($(".picture")[1],$(".txu"));
	var fashion=$(".fashion");
	for(var i=0;i<fashion.length;i++){
		var right1=$(".right1",fashion[i]);
		moveBorder(fashion[i],right1)
	}
	
	// 时尚名品轮播
	function nodeLun(obj,left,right,box,img1){
		var lunbo=obj;
		var left=left;
		var right=right;
		var box=box;
		var img1=img1;
		var width=parseInt(getStyle(img1,"width"));
		function move(){
			animate(box,{left:-width},1000,function(){
				var imgfirst=getFirst(box);     //拿到第一张图片并放到最后
				box.appendChild(imgfirst);
				box.style.left="0";   //因为浮动起来后，会往前挤，所以把盒子拿回来
			})
		}
		left.onclick=function(){
			var last=getLast(box);
			var first=getFirst(box);
			insertBefore(last,first);
			box.style.left=-width+"px";
			animate(box,{left:0},1000);
		}
		right.onclick=function(){
			move();
		}
	}
	nodeLun($(".bottom-img")[0],$(".img-left")[0],$(".img-right")[0],$(".nodelun")[0],$(".img")[0]);
	nodeLun($(".bottom-img")[1],$(".img-left")[1],$(".img-right")[1],$(".nodelun")[1],$(".img")[1]);
	nodeLun($(".bottom-img")[2],$(".img-left")[2],$(".img-right")[2],$(".nodelun")[2],$(".img")[2]);
	nodeLun($(".bottom-img")[3],$(".img-left")[3],$(".img-right")[3],$(".nodelun")[3],$(".img")[3]);
	nodeLun($(".bottom-img")[4],$(".img-left")[4],$(".img-right")[4],$(".nodelun")[4],$(".img")[4]);
	nodeLun($(".bottom-img")[5],$(".img-left")[5],$(".img-right")[5],$(".nodelun")[5],$(".img")[5]);
	nodeLun($(".bottom-img")[6],$(".img-left")[6],$(".img-right")[6],$(".nodelun")[6],$(".img")[6]);
	nodeLun($(".bottom-img")[7],$(".img-left")[7],$(".img-right")[7],$(".nodelun")[7],$(".img")[7]);
	nodeLun($(".bottom-img")[8],$(".img-left")[8],$(".img-right")[8],$(".nodelun")[8],$(".img")[8]);
	// 遮罩
	var pic=$(".pic");	var zhezhao=$(".zhezhao");
	for(var i=0;i<pic.length;i++){
		pic[i].index=i;
		hover(pic[i],function(){
			for(var j=0;j<zhezhao.length;j++){
				zhezhao[this.index].style.display="block";
			}
		},function(){
			zhezhao[this.index].style.display="none";
		})
	}
	var photo=$(".photo")[0];
	var photo1=$("a",photo);
	var zhezhaoa=$(".zhezhaoa");
	for(var i=0;i<photo1.length;i++){
		photo1[i].index=i;
		hover(photo1[i],function(){
			for(var j=0;j<zhezhaoa.length;j++){
				zhezhaoa[this.index].style.display="block";
			}
		},function(){
			zhezhaoa[this.index].style.display="none";
		})
	}
	var lee=$(".lee")[0];
	hover(lee,function(){
		animate(lee,{right:10},500);
	},function(){
		animate(lee,{right:0},400);
	})
})