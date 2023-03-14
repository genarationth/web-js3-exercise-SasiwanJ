
function calculatePaymentCost(amount) {
  const fixedFee = 3;
  const interestRate = 0.01;
  const interestFee = amount * interestRate;
  const totalCost = amount + fixedFee + interestFee;
  return totalCost;
}

// Example usage
const amount = 1000;
const paymentCost = calculatePaymentCost(amount);
console.log(paymentCost);