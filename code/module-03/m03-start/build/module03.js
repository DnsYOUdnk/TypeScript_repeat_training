"use strict";
/* Module 3: Implement interfaces in TypeScript
   Lab Start  */
/*  TODO: Update the calculateInterestOnlyLoanPayment function. */
function calculateInterestOnlyLoanPayment(loanTerms) {
    // Calculates the monthly payment of an interest only loan
    const { interestRate, principal } = loanTerms;
    let interest = interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
/*  TODO: Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(convetionalLoanTerms) {
    // Calculates the monthly payment of a conventional loan
    const { interestRate, principal, months } = convetionalLoanTerms;
    let interest = interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = principal * interest / (1 - (Math.pow(1 / (1 + interest), months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
let interestOnlyPayment = calculateInterestOnlyLoanPayment({ principal: 30000, interestRate: 5 });
let conventionalPayment = calculateConventionalLoanPayment({ principal: 30000, interestRate: 5, months: 180 });
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24" 
console.log('----------------------------------------------------------------------------')

async function fn() {
    let start = Date.now();
    
    console.log('Starting operation');
    
    let onePromise = await fetch('https://httpbin.org/delay/3');
    let twoPromise = await fetch('https://httpbin.org/delay/2');
    
    console.log('Other work');
    console.log('Please wait ... ');
    
    const oneResponse = await onePromise;
    const twoResponse = await twoPromise;
    
    const finishTime = Date.now() - start;

    console.log(`Operation took ${finishTime} seconds`);
    
}

fn();
