// JavaScript for dynamic hover effect on the portfolio heading
document.getElementById("portfolio-heading").addEventListener("mouseover", function() {
  this.style.color = "red";
});

document.getElementById("portfolio-heading").addEventListener("mouseout", function() {
  this.style.color = "black";
});
