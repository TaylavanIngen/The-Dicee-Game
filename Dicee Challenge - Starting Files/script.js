//RANDOM NUMBER


const createRandomDice1 = function() {

  let randomNumber1 = Math.floor((Math.random() * 6) + 1);

  document.querySelector(".img1").src = `images/dice${randomNumber1}.png`;

  return randomNumber1;

}

const createRandomDice2 = function() {

  let randomNumber2 = Math.floor((Math.random() * 6) + 1);

  document.querySelector(".img2").src = `images/dice${randomNumber2}.png`;

  return randomNumber2;

}


//WHO WINS?

let randomDice1 = createRandomDice1();
let randomDice2 = createRandomDice2();

if (randomDice1 > randomDice2) {

  document.querySelector("h1").innerHTML = "Player 1 wins!";

} else if (randomDice1 < randomDice2) {

  document.querySelector("h1").innerHTML = "Player 2 wins!";
} else if (randomDice1 === randomDice2) {
  document.querySelector("h1").innerHTML = "Draw";
}
