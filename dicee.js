let randomNumber1 =Math.floor(((Math.random() *6 ) +1));
let randomNumber2 =Math.floor(((Math.random() *6 ) +1));

document.querySelector(".img1").setAttribute("src",
`dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src",
`dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2){
    document.querySelector(".change").innerHTML = "🚩 Player 1 wins"; 
} else if (randomNumber2 > randomNumber1){
    document.querySelector(".change").innerHTML = "🚩 Player 2 wins";
} else {
    document.querySelector(".change").innerHTML = "Draw!" ;
}
