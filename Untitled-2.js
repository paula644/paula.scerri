// JavaScript to handle greeting hover effect (if not already in CSS)
document.getElementById("greeting").addEventListener("mouseover", function() {
    this.style.color = "red";
});

document.getElementById("greeting").addEventListener("mouseout", function() {
    this.style.color = "black";
});
