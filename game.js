let winning_count = 0;
function choose(user_item) {
    const computer_item = ["Rock", "Paper", "Scissors"];
    const numChoices = computer_item.length;
    const random = Math.floor(Math.random() * numChoices);
    const computerChoice = computer_item[random];
    const red = "\x1b[31m%s\x1b[0m"; // Red color
    const green = "\x1b[32m%s\x1b[0m"; // Green color

    if (user_item === computerChoice) {
        console.log("You have had a draw with the computer; you both chose " + user_item);
    } else if (user_item !== computerChoice) {
        if (user_item === "Rock" && computerChoice === "Paper") {
            console.log(red, "You lost");
        } else if (user_item === "Scissors" && computerChoice === "Rock") {
            console.log(red, "You lost");
        } else if (user_item === "Paper" && computerChoice === "Rock") {
            console.log(green, "You won");
            winning_count += 1;
        } else if (user_item === "Rock" && computerChoice === "Scissors") {
            console.log(green, "You won");
            winning_count += 1;
        } else {
            console.log("Make sure you have chosen from the following and be aware of case sensitivity: 'Rock', 'Paper', 'Scissors'");
        }
    }

    console.log("Good luck on your game!");
}

choose("Rock");
console.log(winning_count)
