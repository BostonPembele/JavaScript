// Write code below 💖
let player = 0;
let computer = Math.floor(Math.random()*3);


console.log(player);
console.log(computer);

if (player === computer) {
  console.log("Draw");
}

else if (
  (player === 0 && computer === 2) ||
  (player === 1 && computer === 0) ||
  (player === 2 && computer === 1)
) {
  console.log("Player wins!");
}

else {
  console.log("Computer wins!");
}
