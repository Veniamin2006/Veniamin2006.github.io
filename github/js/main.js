const allTabs = document.querySelectorAll('.faq-wrapper-item');
const allAnswer = document.querySelector('.faq-wrapper-item-answer');

allTabs.forEach(tab => tab.addEventListener('click', openTabs));

function openTabs(e) {
    let elem = e.target.closest('.faq-wrapper-item');
    document.querySelectorAll('.faq-wrapper-item').forEach(item => {
        item.classList.remove('opened-accord');
    })
    elem.classList.add('opened-accord');
}
const menuBurger = document.querySelector('.top-bar-burger');
const menu = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu-item-link');
console.log(menuLink);

menuBurger.addEventListener('click', openMenu);
menuLink.forEach(link => link.addEventListener('click', closeMenu))

function openMenu() {
menuBurger.classList.toggle('menu-open');
menu.classList.toggle('menu-open');
}

function closeMenu() {
    menuBurger.classList.remove('menu-open');
    menu.classList.remove('menu-open');
}





const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

// slider actions

const actionSlider = new Swiper('.actions-slider', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 'auto',
    autoHeight: false,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
    }
});

// slider reviews 

const reviewSlider = new Swiper('.reviews-slider', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29yZGlvbi5qcyIsIm1lbnUuanMiLCJvcHRpb25zLmpzIiwic2xpZGVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWxsVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXEtd3JhcHBlci1pdGVtJyk7XHJcbmNvbnN0IGFsbEFuc3dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXEtd3JhcHBlci1pdGVtLWFuc3dlcicpO1xyXG5cclxuYWxsVGFicy5mb3JFYWNoKHRhYiA9PiB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuVGFicykpO1xyXG5cclxuZnVuY3Rpb24gb3BlblRhYnMoZSkge1xyXG4gICAgbGV0IGVsZW0gPSBlLnRhcmdldC5jbG9zZXN0KCcuZmFxLXdyYXBwZXItaXRlbScpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhcS13cmFwcGVyLWl0ZW0nKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbmVkLWFjY29yZCcpO1xyXG4gICAgfSlcclxuICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnb3BlbmVkLWFjY29yZCcpO1xyXG59IiwiY29uc3QgbWVudUJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtYmFyLWJ1cmdlcicpO1xyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcclxuY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtLWxpbmsnKTtcclxuY29uc29sZS5sb2cobWVudUxpbmspO1xyXG5cclxubWVudUJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5NZW51KTtcclxubWVudUxpbmsuZm9yRWFjaChsaW5rID0+IGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnUpKVxyXG5cclxuZnVuY3Rpb24gb3Blbk1lbnUoKSB7XHJcbm1lbnVCdXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1vcGVuJyk7XHJcbm1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1vcGVuJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlTWVudSgpIHtcclxuICAgIG1lbnVCdXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1vcGVuJyk7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtb3BlbicpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCJjb25zdCBzZWxlY3RTaW5nbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuX19zZWxlY3QnKTtcclxuY29uc3Qgc2VsZWN0U2luZ2xlX3RpdGxlID0gc2VsZWN0U2luZ2xlLnF1ZXJ5U2VsZWN0b3IoJy5fX3NlbGVjdF9fdGl0bGUnKTtcclxuY29uc3Qgc2VsZWN0U2luZ2xlX2xhYmVscyA9IHNlbGVjdFNpbmdsZS5xdWVyeVNlbGVjdG9yQWxsKCcuX19zZWxlY3RfX2xhYmVsJyk7XHJcblxyXG4vLyBUb2dnbGUgbWVudVxyXG5zZWxlY3RTaW5nbGVfdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgaWYgKCdhY3RpdmUnID09PSBzZWxlY3RTaW5nbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJykpIHtcclxuICAgIHNlbGVjdFNpbmdsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCAnJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNlbGVjdFNpbmdsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCAnYWN0aXZlJyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIENsb3NlIHdoZW4gY2xpY2sgdG8gb3B0aW9uXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0U2luZ2xlX2xhYmVscy5sZW5ndGg7IGkrKykge1xyXG4gIHNlbGVjdFNpbmdsZV9sYWJlbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XHJcbiAgICBzZWxlY3RTaW5nbGVfdGl0bGUudGV4dENvbnRlbnQgPSBldnQudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgc2VsZWN0U2luZ2xlLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsICcnKTtcclxuICB9KTtcclxufVxyXG4iLCIvLyBzbGlkZXIgYWN0aW9uc1xyXG5cclxuY29uc3QgYWN0aW9uU2xpZGVyID0gbmV3IFN3aXBlcignLmFjdGlvbnMtc2xpZGVyJywge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICBhdXRvSGVpZ2h0OiBmYWxzZSxcclxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gc2xpZGVyIHJldmlld3MgXHJcblxyXG5jb25zdCByZXZpZXdTbGlkZXIgPSBuZXcgU3dpcGVyKCcucmV2aWV3cy1zbGlkZXInLCB7XHJcbiAgbG9vcDogdHJ1ZSxcclxuICBzcGFjZUJldHdlZW46IDMwLFxyXG4gIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICB9LFxyXG59KTsiXX0=
