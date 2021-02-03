$(function () {

	$('.header__menu-btn').on('click', function () {
		 $('.header__menu-list').slideToggle();
	});
	$('.questions__accordion-item__tridder').click(function() {
		$(this).next('.questions__accordion-item__content').slideToggle();
	});
});