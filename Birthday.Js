// Birthday Countdown. For every day, print how many days left.

// If it's more than 30 days, print a sad message.

// If it's less than 30 days, print a message that sounds excited!

// If it's less than 5 days, SCREAM IT!

// ONCE IT'S YOUR BIRTHDAY HAVE PARTY!

function bdayCntDwn() {

    for (var days = 60; days > 0; days--) {
        if (days <= 60 && days > 30) {
            console.log("It's " + days + " days until my Bday. Sad Days.");
        } else {
            if (days <= 30 && days > 5) {
                console.log("It's " + days + " days until my Bday. Let's plan my party!");
            } else {
                if (days <= 5 && days > 1) {
                    console.log("ONLY " + days + " days until my Bday. Party time!");
                } else {
                    console.log("It's My Bday! Woohoo!");
                }
            }
        }
    }
}

bdayCntDwn();