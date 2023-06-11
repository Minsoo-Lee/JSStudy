const player = {
    name: "nico",
    age: 98,
}

console.log(player, console);

player.name = "nicolas";
console.log(player);
player.sexy = "soon";
console.log(player);

function plus(potato, salad) {
    console.log(potato + salad);
}

plus(5, 10);
plus(1.33453, 9898);
plus(9898, 1.33453);

const calculator = {
    add: function(a, b) {
        console.log(a, b);
    },
};

calculator.add(5, 1);