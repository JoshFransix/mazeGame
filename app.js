// svg mazes
const levelOne = document.querySelector("level-one");
const levelTwo = document.querySelector("level-two");

window.addEventListener("mousemove", (e) => {
  let check = e.target.classList.value;
  collisionCheck(check);
});

const collisionCheck = (value) => {
  if (value === "maze-border") alert("You lost...try again");
};
