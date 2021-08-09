let accordionButtons = document.getElementsByClassName('faq-item-button');


for (let i = 0; i < accordionButtons.length; i++) {
	accordionButtons[i].addEventListener('click', function () {
		this.classList.toggle('active');
		let accordionContent = this.nextElementSibling;

		if (accordionContent.style.maxHeight) {
			accordionContent.style.maxHeight = null;
		}
		else {
			accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
		}
	});
};


const isMobile = {
	Andriod: function () {
		return navigator.userAgent.match(/Andriod/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Andriod() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

// Меню Бургер
const iconMenu = document.querySelector('.header-burger-icon');
if (iconMenu) {
	const menuBody = document.querySelector('.header-burger-body');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}
