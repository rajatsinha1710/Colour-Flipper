const colors = ["red", "green", "rgba(133,122,200)", "#808080"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
 // putting random numbers for the colors (0 to 3)

 const RandomNumbers = getRandomNumber();
 console.log(RandomNumbers);

 document.body.style.backgroundColor = colors[RandomNumbers];
 color.textContent = colors[RandomNumbers];
});

function getRandomNumber(){
 return Math.floor(Math.random()* colors.length);
};
