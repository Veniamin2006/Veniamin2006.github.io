function burgerMenu() {
  let burger = document.querySelector(".burger");
  let menu = document.querySelector(".header__menu-list");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active-burger");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
    }
  });
}
$(document).ready(function () {
  //E-mail Ajax Send
  $("form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize(),
    }).done(function () {
      alert("Дякуем!");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});
burgerMenu();

function fixedNav() {
  const nav = document.querySelector("nav");
  const breakpoint = 500;
  if (window.scrollY >= breakpoint) {
    nav.classList.add("fixed__nav");
  } else {
    nav.classList.remove("fixed__nav");
  }
}
const swiper = new Swiper(".Swiper", {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  speed: 600,

  autoplay: {
    delay: 3000,
  },

  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    560: {
      slidesPerView: 3,
    },
    990: {
      slidesPerView: 4,
    },
  },
});
const boxer = boxercontainer.querySelector("img"),
  maxMove = boxercontainer.offsetWidth / 30,
  boxerCenterX = boxer.offsetLeft + boxer.offsetWidth / 2,
  boxerCenterY = boxer.offsetTop + boxer.offsetHeight / 2,
  fluidboxer = window.matchMedia("(min-width: 726px)");

function getMousePos(xRef, yRef) {
  let panelRect = boxercontainer.getBoundingClientRect();
  return {
    x:
      (Math.floor(xRef - panelRect.left) / (panelRect.right - panelRect.left)) *
      boxercontainer.offsetWidth,
    y:
      (Math.floor(yRef - panelRect.top) / (panelRect.bottom - panelRect.top)) *
      boxercontainer.offsetHeight,
  };
}

document.body.addEventListener("mousemove", function (e) {
  let mousePos = getMousePos(e.clientX, e.clientY),
    distX = mousePos.x - boxerCenterX,
    distY = mousePos.y - boxerCenterY;
  if (Math.abs(distX) < 500 && distY < 200 && fluidboxer.matches) {
    boxer.style.transform =
      "translate(" + (-1 * distX) / 12 + "px," + (-1 * distY) / 12 + "px)";
    boxercontainer.style.backgroundPosition = `calc(50% + ${
      distX / 50
    }px) calc(50% + ${distY / 50}px)`;
  }
});
