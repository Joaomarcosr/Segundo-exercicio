const accordeon = document.querySelectorAll(".question");
let i;

for (i = 0; i < accordeon.length; i++) {
  accordeon[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
      
    }
  });
}
