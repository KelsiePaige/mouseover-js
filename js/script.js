var fans = document.querySelector(".fans");
//console.log(fans);
var fish = document.querySelector(".fish");
//console.log(spanFish);
var pets = document.querySelector(".pets");
//console.log(spanPets);

fans.addEventListener("mouseover", function() {
    fans.innerText = "123K";
});

fish.addEventListener("mouseover", function() {
    fish.innerText = "47K";
});

pets.addEventListener("mouseover", function() {
    pets.innerText = "20K";
});