var random = Math.floor(Math.random()*6)+1

var randoml = ("dice" + random + ".png")

document.querySelectorAll("img")[0].setAttribute("src", randoml)



var random2 = Math.floor(Math.random()*6)+1

var randoml2 = ("dice" + random2 + ".png")

document.querySelectorAll("img")[1].setAttribute("src", randoml2)


if (random>random2){
    document.querySelector("h1").innerHTML="Player 1 won 🚩";

}

else if(random<random2){
    document.querySelector("h1").innerHTML="Player 2 won 🚩";

}

else{
    document.querySelector("h1").innerHTML="Draw ";

}