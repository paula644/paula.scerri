// JavaScript for dynamic hover effect on the heading (if not handled by CSS)
document.getElementById("about-heading").addEventListener("mouseover", function() {
  this.style.color = "red";
});

document.getElementById("about-heading").addEventListener("mouseout", function() {
  this.style.color = "black";
});
