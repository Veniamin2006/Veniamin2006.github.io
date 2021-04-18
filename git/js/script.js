const checkLine = document.querySelector(".check-line");
const progress = document.querySelector(".block__progress div");

checkLine.addEventListener("click", (e) => {
   e.preventdefault;

   if (e.target.dataset.radio) {
      console.log(e.target.dataset.radio);
      progress.style.width = e.target.dataset.radio + "%";
   }
});

console.log(checkLine);


var jsTriggers = document.querySelectorAll('.js-tab-trigger');

jsTriggers.forEach(function (item, i) {
   item.addEventListener('click', function () {
      var tabName = this.dataset.tab,
         tabContent = document.querySelector('.js-tab-content[data-tab="' + tabName + '"]');

      document.querySelectorAll('.js-tab-content.active').forEach(function (item, i) {
         item.classList.remove('active');
      });

      document.querySelectorAll('.js-tab-trigger.active').forEach(function (item, i) {
         item.classList.remove('active');
      });

      tabContent.classList.add('active');
      this.classList.add('active');
   });
})
