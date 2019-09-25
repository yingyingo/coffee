// 轮播图功能
$(function(){
	var slide = $("#slide");
	var ul = slide.children().eq(0);
	var lis = ul.children();
	var picW = lis.eq(0).width();
	var index = 1;
	
	lis.first().clone().appendTo(ul);
	lis.last().clone().prependTo(ul);
	ul.css({
		"width":ul.children().length * picW,
		"left":"-"+picW + "px"
	})
	
	var ol = $('<ol></ol>').appendTo(slide);
	$.each(lis,function(i,el){
		var className =i == 0? "con" : "";
		
		$("<li class='"+className + "'></li>")
		.appendTo(ol)
		.click(function(){
			index = $(this).index + 1;
			ul.stop().animate({
				"left":"-"+picW*index+"px"
			},1000)
			
			$(this).addClass("con").siblings().removeClass("con");
		})
	})
})







// $.fn.collapse = function() {
// 
// 	var slide = $(this); //外边盒子
// 	var ul = slide.children().eq(0); //ul对象
// 	var picLi = ul.children(); //ul下所有li对象   //4 长度
// 	var imgW = picLi.eq(0).width(); //图片宽度
// 
// 
// 	var index = 1; //标记
// 
// 	// 前后添加图片
// 	picLi.first().clone().appendTo(ul); //把第一张图片复制后添加ul后面
// 	picLi.last().clone().prependTo(ul); //把最后一张图片复制到ul第一张图片前面
// 	// ul宽度计算: 每张图片宽度 乘 ul下li个数
// 	ul.css({
// 		"width": ul.children().length * imgW,
// 		"left": "-" + imgW + "px"
// 	})
// 
// 
// 	// 创建小圆点
// 	var ol = $('<ol></ol>').appendTo(slide);
// 	// $.each(Array,fn) 前面只能是$,不是是对象
// 	// 遍历ul>li的个数
// 	$.each(picLi, function(i, el) {
// 		var className = i == 0 ? "con" : "";
// 		// ol>li添加li
// 		$("<li class='" + className + "'></li>")
// 			.appendTo(ol)
// 			.click(function() {
// 				//获取下一个图片位置
// 				index = $(this).index() + 1;
// 				//动画效果
// 				ul.stop().animate({
// 					"left": "-" + imgW * index + "px"
// 				}, 1000)
// 				//小圆点背景
// 				$(this).addClass("con").siblings().removeClass("con");
// 			})
// 	})
// 
// 	var ols = slide.find("ol>li");
// 
// 
// 
// // 	// 创建左右按钮
// // 	$('<div class="btn"><div class="Lbtn"></div><div class="Rbtn"></div></div>')
// // 		.appendTo(slide) //添加按钮
// // 		.find(".Lbtn") //左按钮 添加触发事件
// // 		.click(function() {
// // 			if (index == 1) {
// // 				ul.css("left", "-" + (picLi.length + 1) * imgW + "px");
// // 				index = picLi.length;
// // 			} else {
// // 				index--;
// // 			}
// // 
// // 			//动画效果
// // 			ul.stop().animate({
// // 				"left": "-" + imgW * index + "px"
// // 			}, 1000)
// // 
// // 			//小圆点背景
// // 			ols.eq(index - 1).addClass("con").siblings().removeClass("con");
// // 
// // 		})
// // 		.next() //右按钮 添加触发事件
// // 		.click(function() {
// // 			if (index == picLi.length) {
// // 				ul.css('left', '0px');
// // 				index = 1;
// // 			} else {
// // 				index++;
// // 			}
// // 
// // 			//动画效果
// // 			ul.stop().animate({
// // 				"left": "-" + imgW * index + "px"
// // 			}, 1000)
// // 
// // 			//小圆点背景
// // 			ols.eq(index - 1).addClass("con").siblings().removeClass("con");
// // 
// // 		})
// }
// 
// 
// $(function(){
// 	$("#slide").collapse();
// })