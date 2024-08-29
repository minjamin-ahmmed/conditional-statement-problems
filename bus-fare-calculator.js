let age = 30;
let fare = 500;

let discount;

if (age <= 12) {
    // Children will get 100% Discount
    discount = fare * 100 / 100;
    fare = fare - discount;

    console.log("You have to pay:", fare)
}

else if (age > 12 && age <= 25) {
    //12-25 Count as Student and Student got 50% Discount

    discount = fare * 50 / 100;
    fare = fare - discount;

    console.log("You have to pay: ", fare);

}

else if (age >= 60) {
    //Counted As Senior Citizen
    discount = fare * 15 / 100;
    fare = fare - discount;

    console.log("You have to pay: ", fare);
}

else {
    console.log("Regular ticket price ", fare);
}