// function enterBookMyShow() {
//   return new Promise((resolve) => {
//     console.log("Entered BookMyShow app.");
//     setTimeout(() => resolve("Date Selected"), 1000); // Simulating async operation
//   });
// }

// function selectDate() {
//   return new Promise((resolve) => {
//     console.log("Date selection in progress...");
//     setTimeout(() => resolve("Theatre Selected"), 1000); 
//   });
// }

// function selectTheatre() {
//   return new Promise((resolve) => {
//     console.log("Theatre selection in progress...");
//     setTimeout(() => resolve("Movie Selected"), 1000); 
//   });
// }

// function selectMovie() {
//   return new Promise((resolve) => {
//     console.log("Movie selection in progress...");
//     setTimeout(() => resolve("Seat Selected"), 1000); 
//   });
// }

// function selectSeat() {
//   return new Promise((resolve) => {
//     console.log("Seat selection in progress...");
//     setTimeout(() => resolve("Redirected to PhonePe"), 1000); 
//   });
// }

// function payMoney() {
//   return new Promise((resolve) => {
//     console.log("Payment processing via PhonePe...");
//     setTimeout(() => resolve("Payment Successful"), 2000); 
//   });
// }


// enterBookMyShow()
//   .then((result) => {
//     console.log(result);
//     return selectDate();
//   })
//   .then((result) => {
//     console.log(result);
//     return selectTheatre();
//   })
//   .then((result) => {
//     console.log(result);
//     return selectMovie();
//   })
//   .then((result) => {
//     console.log(result);
//     return selectSeat();
//   })
//   .then((result) => {
//     console.log(result);
//     return payMoney();
//   })
//   .then((result) => {
//     console.log(result); 
//   })
//   .catch((error) => {
//     console.error("Error:", error); 
//   });



function bookUber() {
    return new Promise((resolve) => {
        console.log("Uber booked successfully.");
        setTimeout(() => resolve("Rider is coming"), 1000); 
    });
}

function riderComing() {
    return new Promise((resolve) => {
        console.log("Rider is on the way...");
        setTimeout(() => resolve("Rider has reached the pickup point"), 2000); 
    });
}

function pickUp() {
    return new Promise((resolve) => {
        console.log("Rider has picked you up...");
        setTimeout(() => resolve("15-minute journey started"), 1000); 
    });
}

function journey() {
    return new Promise((resolve) => {
        console.log("Journey in progress...");
        setTimeout(() => resolve("You have been dropped off at your destination"), 1500); 
    });
}

bookUber()
    .then((result) => {
        console.log(result);
        return riderComing();
    })
    .then((result) => {
        console.log(result);
        return pickUp();
    })
    .then((result) => {
        console.log(result);
        return journey();
    })
    .then((result) => {
        console.log(result); 
    })
    .catch((error) => {
        console.error("Error:", error); 
    });
