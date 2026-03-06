const text = document.getElementById("text");

document.getElementById("sizeBtn").addEventListener("click", function () {
    text.classList.toggle("big");
});

document.getElementById("colorBtn").addEventListener("click", function () {
    text.classList.toggle("red");
});

document.getElementById("styleBtn").addEventListener("click", function () {
    text.classList.toggle("italic");
});

document.getElementById("allBtn").addEventListener("click", function () {
    text.classList.toggle("big");
    text.classList.toggle("red");
    text.classList.toggle("italic");
});