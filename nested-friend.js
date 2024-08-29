let myScore = 80;
let friendScore = 32;

if (myScore >= 80) {
    if (friendScore >= 80) {
        console.log("Go For a Lunch!")
    }

    else if (friendScore < 80 && friendScore >= 60) {
        console.log("Good Luck Next Time!")
    }

    else if (friendScore < 60 && friendScore >= 40) {
        console.log("Keep Your Friend's message unseen")
    }

    else if (friendScore < 40) {
        console.log("Block your Friend!!!")
    }
}

else if (myScore < 80) {
    console.log("Go to Home and Sleep and act sad");
}
