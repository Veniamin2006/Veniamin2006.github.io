$(function(){
	
// process slider	
var time = 5000,
		reverseTime = 150,
		allow = true,
		clickAllow = true;
		
var size = $('.process-slidePointer').size() - 1;

function createCommiters() {
	$('.process-slidePointer').after('<div class="process-slideCommiter"><div class="fill"></div></div>');
	$('.process-slideCommiter').width(45);
	$('.process-slideCommiter:last').detach();
	var k = 1;
	$('.process-slideCommiter').each(function(){
		$(this).addClass('process-slideCommiter-'+k);
		k++;
	});
};

function fillCommiters(commiter, time) {
	commiter.find('.fill').animate({width:'100%'}, time);
};

function setHeights() {
	var max = 0;
	$('.process-slide').each(function(){
		if ($(this).height() >= max) {max = $(this).height();}
	});
	$('.process-sliderBg').height(max);
};

function fadeInFirstSlide() {
	$('.process-slide-active').fadeIn(0);
	$('.process-slideCommiter:first .fill').animate({width:'100%'}, time);
};

function interval() {
	if (allow) {
		var current = $('.process-slide-active').index();
		var next = current + 1;
		if (current === size) {
			next = 0;
			$('.process-slideCommiter .fill').width('0%');
			$('.process-slidePointer-happened').removeClass('process-slidePointer-happened');
		}
		$('.process-slide-active').fadeOut(reverseTime).removeClass('process-slide-active');
		$('.process-slide:eq('+next+')').delay(reverseTime+100).fadeIn(reverseTime).addClass('process-slide-active');
		$('.process-slidePointer:eq('+next+')').delay(time).addClass('process-slidePointer-happened');
		$('.process-slideCommiter:eq('+next+') .fill').animate({width:'100%'}, time);
	}
};

function onClick(elem) {
	var current = $('.process-slide-active').index('.process-slide');	
	var next = elem.index('.process-slidePointer');
	
	if (next === current) {return false;}
	else {allow = false;setTimeout(function(){allow = true;}, time);}
	
	if (next < current) {
		var delta = current - next;
		$('.process-slidePointer').removeClass('process-slidePointer-happened');
		$('.process-slideCommiter .fill').stop().width('0%');
			for (var i = 0; i<next; i++) {
				$('.process-slideCommiter:eq('+i+') .fill').width('100%');
				$('.process-slidePointer:eq('+i+')').addClass('process-slidePointer-happened');	
			}
		$('.process-slide-active').fadeOut(reverseTime).removeClass('process-slide-active');
		$('.process-slide:eq('+next+')').delay(reverseTime+100).fadeIn(reverseTime).addClass('process-slide-active');
		$('.process-slidePointer:eq('+next+')').addClass('process-slidePointer-happened');	
		$('.process-slideCommiter:eq('+next+') .fill').delay(reverseTime).animate({width:'100%'}, time);		
	}
	else if (next > current) {
		var delta = next - current;
		$('.process-slidePointer').removeClass('process-slidePointer-happened');
		$('.process-slideCommiter .fill').stop().width('0%');
			for (var i = 0; i<next; i++) {
				$('.process-slideCommiter:eq('+i+') .fill').stop().width('100%');
				$('.process-slidePointer:eq('+i+')').addClass('process-slidePointer-happened');	
			}
		$('.process-slide-active').fadeOut(reverseTime).removeClass('process-slide-active');
		$('.process-slide:eq('+next+')').delay(reverseTime+100).fadeIn(reverseTime).addClass('process-slide-active');
		$('.process-slidePointer:eq('+next+')').addClass('process-slidePointer-happened');
		$('.process-slideCommiter:eq('+next+') .fill').delay(reverseTime).animate({width:'100%'}, time);
	}
	
};
	
createCommiters();
setHeights();
$(window).resize(function(){setHeights();});
fadeInFirstSlide();

setInterval(function(){interval()}, time);
$('.process-slidePointer').on('click', function(e){e.preventDefault();onClick($(this))});


// process bg feature
var htmlH = $('html').height(),
		coordinates = [],
		coordSize;
		
function setCoords() {
	var i = 0;
	$('.pipe').each(function(){
		coordinates[i] = $(this).offset().top;
		i++;
	});
	coordSize = coordinates.length;
};

function checkCoords() {
	var t = $(window).scrollTop() + htmlH/2;
	for (var k = 0; k < coordSize; k++) {
		if (t >= coordinates[k]) {$('.pipe:eq('+k+')').addClass('active');}
		else {$('.pipe:eq('+k+')').removeClass('active');}
	}
};

function resetHtmlHeight() {
	htmlH = $('html').height();
};

setCoords();
$(window).scroll(function(){checkCoords();});
$(window).resize(function(){
	resetHtmlHeight();
	setCoords();
});


// process cols equal height
function setEqualHeights() {
	var max = 0;
	$('.process-colBg').removeAttr('style');
	$('.process-colBg').each(function(){
		if ($(this).height() >= max) {max = $(this).height();}
	});
	if (!$('html').hasClass('wl6')) {$('.process-colBg').height(max);}
};

setEqualHeights();
$(window).resize(function(){setEqualHeights();});
	

//	limit of process
var limit = 5;

function setLimit() {
	$('.process-limit').each(function(){
		var h = parseInt($(this).css('padding-top')) || 0;
		for (var i = 0; i < limit; i++) {
			var $elem = $(this).find('.process-limit-pointer:eq('+i+')');
			h += $elem.height() + parseInt($elem.css('padding-top')) + parseInt($elem.css('padding-bottom'));
		}
		$(this).height(h);
	});
};

function removeLimit() {
	$('.process-limit').removeAttr('style');
};

function showAll(session, elem) {
	$('.process-limit[data-session="'+session+'"]').removeAttr('style');
	elem.html('Свернуть').on('click', function(){
		hideAll(elem.attr('data-session'), elem);
	});
};

function hideAll(session, elem) {
	$('.process-limit[data-session="'+session+'"]').removeAttr('style');
	elem.html('Показать все').on('click', function(){
		showAll(elem.attr('data-session'), elem);
	});
	var h = parseInt($('.process-limit[data-session="'+session+'"]').css('padding-top')) || 0;
		for (var i = 0; i < limit; i++) {
			var $elem = $('.process-limit[data-session="'+session+'"]').find('.process-limit-pointer:eq('+i+')');
			h += $elem.height() + parseInt($elem.css('padding-top')) + parseInt($elem.css('padding-bottom'));
		}
	$('.process-limit[data-session="'+session+'"]').height(h);
};

function checkLimitNeed() {
	if ($('html').hasClass('wl6')) {setLimit();}
	else {removeLimit();}
};

checkLimitNeed();
$(window).resize(function(){checkLimitNeed();});
$('.process-showAll').on('click', function(){
	showAll($(this).attr('data-session'), $(this));
});
	
});