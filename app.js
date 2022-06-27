let gas = [10, 20, 30];
let food = [20, 300, 500];

function allOf(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    if (total < 300) {
        console.log("you are so good to spend");
        return;
    }
    console.log('you are too bad');

    return total;
}

let gasTotal = allOf(gas);
let foodTotal = allOf(food);
console.log({gas: gasTotal, food: foodTotal});