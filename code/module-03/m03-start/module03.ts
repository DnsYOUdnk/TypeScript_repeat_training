/* Module 3: Implement interfaces in TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare the Loan interface. */

interface Loan {
    principal: number;
    interestRate: number;
}

/*  TODO: Declare the ConventionalLoan interface. */

interface ConvetionalLoan extends Loan {
    months: number;
}

/*  TODO: Update the calculateInterestOnlyLoanPayment function. */

function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    // Calculates the monthly payment of an interest only loan
    const {interestRate, principal} = loanTerms;
    let interest: number = interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment: number;
    payment = principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}

/*  TODO: Update the calculateConventionalLoanPayment function. */

function calculateConventionalLoanPayment(convetionalLoanTerms: ConvetionalLoan): string {
    // Calculates the monthly payment of a conventional loan
    const {interestRate, principal, months} = convetionalLoanTerms;
    let interest: number = interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment: number;
    payment = principal * interest / (1 - (Math.pow(1 / (1 + interest), months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

let interestOnlyPayment: string = calculateInterestOnlyLoanPayment({principal: 30000, interestRate: 5});
let conventionalPayment: string = calculateConventionalLoanPayment({principal: 30000, interestRate: 5, months: 180});

console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24" 
