
// problem-1

function calculateTax(income, expenses) {

    if(income < expenses || income <0 || expenses <0){
        return "Invalid Input"
    }
    
    return (income - expenses) * .20;
  
}

// const tax = calculateTax(6000, -1500);
// console.log(tax)





// problem -2


function sendNotification(email) {
    
    if (email.indexOf('@') === -1) {
        return "Invalid Email";
    }

    let parts = email.split('@');
    let username = parts[0];
    let domainName = parts[1];

    return username + " sent you an email from " + domainName;
}


// const result = sendNotification("zihad.phgmail.com");
// console.log(result)






// problem-3

function checkDigitsInName(name) {

    if (typeof name !== 'string') {
        return "Invalid Input";
    }

    for (let i = 0; i < name.length; i++) {
        if (!isNaN(name[i]) && name[i] !== ' ') {
            return true;
        }
    }

    return false;
}

// কিছু উদাহরণ
// console.log(checkDigitsInName("Raj123"));      // Output: true
// console.log(checkDigitsInName("n9ayeem"));     // Output: true
// console.log(checkDigitsInName("e1mu3"));       // Output: true
// console.log(checkDigitsInName("Suman"));       // Output: false
// console.log(checkDigitsInName("Name2024"));    // Output: true
// console.log(checkDigitsInName("!@#"));         // Output: false
// console.log(checkDigitsInName(["Raj"]));       // Output: Invalid Input




// ---------------------------------

// function checkDigitsInName(name) {
   
//     if (typeof name !== 'string') {
//         return "Invalid Input";
//     }
    
   
//     const hasDigits = /\d/.test(name);
    
//     return hasDigits;
// }

// // Test cases
// console.log(checkDigitsInName("Raj123"));  
// console.log(checkDigitsInName("n9ayeem")); 
// console.log(checkDigitsInName("Suman"));   
// console.log(checkDigitsInName(["Raj"]));   
// console.log(checkDigitsInName("!@#"));     



// problem-4

function calculateFinalScore(obj) {
   
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        return "Invalid Input";
    }
    
    const { name, testScore, schoolGrade, isFFamily } = obj;
    
   
    if (typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFFamily !== 'boolean') {
        return "Invalid Input";
    }

    
    if (testScore > 50 || schoolGrade > 30) {
        return "Invalid Input";
    }

   
    let finalScore = testScore + schoolGrade;
    
    
    if (isFFamily) {
        finalScore += 20;
    }
    
    
    return finalScore >= 80;
}



// // Test cases
// console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }));  // true
// console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false })); // false
// console.log(calculateFinalScore("hello")); // Invalid Input
// console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true }));  // false



// problem-5

function waitingTime(waitingTimes, serialNumber) {
    
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    let sum = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        sum += waitingTimes[i];
    }
    let averageTime = Math.round (sum / waitingTimes.length);

    let remainingPeople = serialNumber - waitingTimes.length - 1;

    let waitingTime = remainingPeople * averageTime;

    if (remainingPeople <= 0) {
        return 0;
    }

    return waitingTime;
}

// কিছু উদাহরণ
// console.log(waitingTime([3, 5, 7, 11, 6], 10));  // Output: 24
// console.log(waitingTime([13, 2], 6));            // Output: 24
// console.log(waitingTime([13, 2, 6, 7, 10], 6));  // Output: 0
// console.log(waitingTime([6], 4));                // Output: 12
// console.log(waitingTime(7, 10));                 // Output: Invalid Input
// console.log(waitingTime("[6,2]", 9));            // Output: Invalid Input
// console.log(waitingTime([7, 8, 3, 4, 5], "9"));  // Output: Invalid Input

