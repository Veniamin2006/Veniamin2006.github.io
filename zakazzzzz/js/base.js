function setWidthClass() {
	var $html = $('html');
	var html_W = $('html').width();
	if (html_W <= 600)	{$html.removeClass('w68 wl6 w810 wg10').addClass('wl6');}
	else if (html_W > 600 && html_W <= 800) {$html.removeClass('w68 wl6 w810 wg10').addClass('w68')}
	else if (html_W > 800 && html_W <= 1000) {$html.removeClass('w68 wl6 w810 wg10').addClass('w810')}
	else if (html_W > 1000) {$html.removeClass('w68 wl6 w810 wg10').addClass('wg10')}
	//alert($('html').attr('class'));
};

$(function(){

// width & height classes
var $html = $('html'),
		htmlW = $html.width(),
		htmlH = $html.height();		

/* */	

function setHeightClass() {
	var html_W = $('html').height();
											if (html_W <= 500) {$html.removeClass('hl4 h56 h67 h78 hg8 h445 h555 h665 h775').addClass('h45')}
	else if (html_W > 500 && html_W <= 550) {$html.removeClass('h45 h56 h67 h78 hg8 h445 h555 h665 h775').addClass('h555')} 
	else if (html_W > 550 && html_W <= 600) {$html.removeClass('h45 hl4 h67 h78 hg8 h445 h555 h665 h775').addClass('h56')}
	else if (html_W > 600 && html_W <= 650) {$html.removeClass('h45 h56 hl4 h78 hg8 h445 h555 h665 h775').addClass('h665')}
	else if (html_W > 650 && html_W <= 700) {$html.removeClass('h45 h56 hl4 h78 hg8 h445 h555 h665 h775').addClass('h67')}
	else if (html_W > 700 && html_W <= 750) {$html.removeClass('h45 h56 h67 hl4 hg8 h445 h555 h665 h775').addClass('h775')}
	else if (html_W > 750 && html_W <= 800) {$html.removeClass('h45 h56 h67 hl4 hg8 h445 h555 h665 h775').addClass('h78')}
									else if (html_W > 800) {$html.removeClass('h45 h56 h67 h78 hl4 h445 h555 h665 h775').addClass('hg8')}
};

setHeightClass();
setWidthClass();

$(window).resize(function(){
	setWidthClass();
	setHeightClass();
});


var is_touch_device = 'ontouchstart' in document.documentElement;
var is_windows_touch = window.navigator.msPointerEnabled;
if (is_touch_device || is_windows_touch) {$('html').addClass('touch');}var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
	if(isAndroid) {$('html').addClass('android');}









// adaptive
var isPhoneV;
function isPhone() {
	if ($html.width() <= 800) {isPhoneV = true;}
	else {isPhoneV = false;}
};

function isTouch() {
	if('ontouchstart' in document.documentElement) {$html.addClass('touch')}
};

isPhone();
isTouch();

$(window).resize(function(){
	isPhone();
});






// wow-effect
// Pelevin would be glad

function wowEffect() {
	
	var $elem = $('#all:not(.mainpage)');
	
	if (is_touch_device || isAndroid) {
		$('.preloader').hide();
		return false;
	}
	
	$elem.addClass('rotated');
	$('body').addClass('animtd');
	
	var intr = setInterval(function(){
		$(window).scrollTop(0);
		$('html, body').scrollTop(0);
	}, 100);
	
	//$(window).load(function(){	
	$(document).ready(function(){
		setTimeout(function(){
			clearInterval(intr);
			$('.preloader').fadeOut(200);
			$elem.removeClass('rotated');
			
			setTimeout(function(){
				$elem.removeClass('rotated');
				$('body').removeClass('animtd');
			}, 600);
		}, 500);
	});
	
};

wowEffect();



// zoom on main page

function zoom() {
	
	var $zoomSlide = $('.main-slide1, .main-slide7');
	if (!$zoomSlide.length) {return false;}
	
	$zoomSlide.each(function(){
		$(this).prepend('<div class="main-slide--bg zoomed"></div>');
		var bgIm = $(this).css('background-image');
		$(this).find('.main-slide--bg').css({'background-image':bgIm});
	});	
	
	
	$('.main-slide1 .main-slide--bg').removeClass('zoomed');
	
};

zoom();




	
// menu
var $menuEl = $('.mainmenu');

function openMenu(menuEl) {
	menuEl.find('.mainmenu-ul li').css({'opacity':'0', 'margin-top':'-50px'});
	menuEl.fadeIn(100);
	menuEl.find('.mainmenu-ul li').animate({'opacity':'1', 'margin-top':'0'}, 600);
};

function closeMenu(menuEl) {
	menuEl.fadeOut(200);
};

$('.header-menu').on('click', function(e){
	e.preventDefault();
	openMenu($menuEl);
});
$('.mainmenu-closer').on('click', function(e){
	e.preventDefault();
	closeMenu($menuEl);
});


// menu compress
function isIE () {
	  var myNav = navigator.userAgent.toLowerCase();
	  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
	}

if (is_windows_touch) {$('html').addClass('grateie')}

function menuCompress() {
	
	if (is_touch_device || isAndroid) {return false;}
	
	var hoverred = false,
			$menu = $('header:not(".main")'),
			$helper = $('.header-strut');
	if (!$menu.length) {return false;}
	
	
	var $screen = $('.screen'),
			screenHeight = $screen.height() - $menu.height();
	
	var compressedClass = 'cmprsd';
	
	function compress() {
		if (!hoverred && !$('html').hasClass('wl6') && !$('html').hasClass('w68')) {
			$menu.addClass(compressedClass);
			$helper.addClass(compressedClass);
		}
	};
	
	function decompress() {
		$menu.removeClass(compressedClass);
		$helper.removeClass(compressedClass);
	};
	
	
	$(window).scroll(function(){
		/*if ($(window).scrollTop() > 90) {compress();}
		else {decompress();}*/
		
		if ($(window).scrollTop() >= screenHeight) {compress();$menu.addClass('bgtrnsprnt');}
		else {$menu.removeClass('bgtrnsprnt'); decompress();}
	});
	
	$(window).resize(function(){
		screenHeight = $screen.height() - $menu.height();
	});
	
	$menu
		.on('mouseenter', function(){
			decompress();
			hoverred = true;
		})
		.on('mouseleave', function(){
			hoverred = false;
			if ($(window).scrollTop() > 90) {compress();}
		});
	
	$('.mainmenu').on('mouseenter', function(){
		decompress();
		hoverred = true;
	});
	
	$('.mainmenu-closer').on('click', function(e){
		hoverred = false;
	});
	
};

menuCompress();


// scroll
function coverFixedBlock(fixedBlock) {
	if (isPhoneV) {return false;}
	var scrolled = $(window).scrollTop()/2.5;
	$(fixedBlock).css('margin-top', '-'+scrolled+'px');
};

$(window).scroll(function(){
	coverFixedBlock('.screen');
});


// toUp
function scrollToUp() {
	$('html, body').animate({scrollTop: 0}, 500);
};
$('.toUp').on('click',function(e){
	e.preventDefault();
	scrollToUp();
});


if (is_touch_device || isAndroid) {
	$('body').removeClass('animtd');
}
	
});