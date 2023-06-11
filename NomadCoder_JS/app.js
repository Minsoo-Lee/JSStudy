const playerName = "nico";
const playerPoint = 121212;
const playerHandsome = false;
const playerFat = "little bit";

// playerArray[0] == name
// playerArray[1] == points
// ...
const playerArray = ["minsoo", 1212, false, "little bit"];

const player = {
    name: "minsoo",
    points: 10,
    handsome: false,
    fat: "little bit"
}

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.handsome = true;
console.log(player);

player.lastName = "potato";
console.log(player);

player.points = player.points + 15;
console.log(player.points);