var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("rules-form-column");
for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
   });
}
// $("label")
//    .click(function () {
//       var nowBox = parseInt(this.htmlFor);
//       $("#" + nowBox + "box").prop("checked", false)
//       while (nowBox != 1) {
//          nowBox--;
//          $("#" + nowBox + "box").prop("checked", true)
//       }
//       nowBox = parseInt(this.htmlFor)
//       while (nowBox != 6) {
//          nowBox++;
//          $("#" + nowBox + "box").prop("checked", false)
//       }
//    })