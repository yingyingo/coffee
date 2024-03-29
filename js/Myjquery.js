// tabs选项卡功能
$.fn.extend({
	"tab": function() {
		$(this).children().click(function() {
			// 选项卡切换
			$(this).addClass("con").siblings().removeClass("con");
			// 获取target名称
			var target = $(this).parent().data("target"); //#mytabs
			// 获取当前位置
			var index = $(this).index();
			// 内容切换
			$(target).children().eq(index).addClass("con").siblings().removeClass("con");
			// $(target).children().eq(index).show().siblings().hide();
		});
	}
});



// 轮播图功能

$.fn.collapse = function() {

	var slide = $(this); //外边盒子
	var ul = slide.children().eq(0); //ul对象
	var picLi = ul.children(); //ul下所有li对象   //4 长度
	var imgW = picLi.eq(0).width(); //图片宽度


	var index = 1; //标记

	// 前后添加图片
	picLi.first().clone().appendTo(ul); //把第一张图片复制后添加ul后面
	picLi.last().clone().prependTo(ul); //把最后一张图片复制到ul第一张图片前面
	// ul宽度计算: 每张图片宽度 乘 ul下li个数
	ul.css({
		"width": ul.children().length * imgW,
		"left": "-" + imgW + "px"
	})


	// 创建小圆点
	var ol = $('<ol></ol>').appendTo(slide);
	// $.each(Array,fn) 前面只能是$,不是是对象
	// 遍历ul>li的个数
	$.each(picLi, function(i, el) {

		var className = i == 0 ? "con" : "";
		// ol>li添加li
		$("<li class='" + className + "'></li>")
			.appendTo(ol)
			.click(function() {
				//获取下一个图片位置
				index = $(this).index() + 1;
				//动画效果
				ul.stop().animate({
					"left": "-" + imgW * index + "px"
				}, 1000)
				//小圆点背景
				$(this).addClass("con").siblings().removeClass("con");
			})
	})

	var ols = slide.find("ol>li");



	// 创建左右按钮
	$('<div class="btn"><div class="Lbtn"></div><div class="Rbtn"></div></div>')
		.appendTo(slide) //添加按钮
		.find(".Lbtn") //左按钮 添加触发事件
		.click(function() {
			if (index == 1) {
				ul.css("left", "-" + (picLi.length + 1) * imgW + "px");
				index = picLi.length;
			} else {
				index--;
			}

			//动画效果
			ul.stop().animate({
				"left": "-" + imgW * index + "px"
			}, 1000)

			//小圆点背景
			ols.eq(index - 1).addClass("con").siblings().removeClass("con");

		})
		.next() //右按钮 添加触发事件
		.click(function() {
			if (index == picLi.length) {
				ul.css('left', '0px');
				index = 1;
			} else {
				index++;
			}

			//动画效果
			ul.stop().animate({
				"left": "-" + imgW * index + "px"
			}, 1000)

			//小圆点背景
			ols.eq(index - 1).addClass("con").siblings().removeClass("con");

		})
}


$(function(){
	$("[data-toggle='tabs']").tab();
	$("#slide").collapse();
	
	
	// 搜索框
	$("#search input").focus(function(){
		$(this).addClass("con").next().addClass("con").next().hide().next().slideDown();
	}).blur(function(){
		$(this).removeClass("con").next().removeClass("con").next().show().next().hide();
	})
	
	
	//导航下拉
	$("#header-nav ul li").mouseenter(function(){  //谁的动作就找谁，然后再设置样式
		var index = $(this).index();
		var xlBox = $(".header-nav-menu");
		$(this).find("a").eq(index).addClass("con").siblings().removeClass("con");
		if(index>6){
			xlBox.slideUp();
		}else{
			xlBox
			.slideDown()
			.find("ul")
			.eq(index)
			.show()
			.siblings()
			.hide()
			.parent()
			.parent()
			.hover(function(){
				xlBox.show();
			},function(){
				xlBox.slideUp();
			})
		}
		$(".header_top").mouseenter(function(){
			xlBox.slideUp();
		})
		
	})

	//导航条分类弹窗
	$(".category>ul>li").mouseenter(function(){
		$(this).find(".item").show().prev().addClass("con")
	}).mouseleave(function(){
		$(this).find(".item").hide().prev().removeClass("con")
	})
	
	
	//购物车下拉
	$(".header_top").find(".cart").mouseenter(function(){
		$(this).addClass("con").find("i").addClass("con");
		$(".shop-xiala").addClass("con");
	}).mouseleave(function(){
		$(this).removeClass("con").find("i").removeClass("con");
		$(".shop-xiala").removeClass("con");
	})
})

