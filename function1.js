const calculatePaymentCost = (totalPayments) => {
  const transactionFee = 3;
  const interestFee = totalPayments * 0.01;
  const numberOfTransactions = Math.ceil(totalPayments / 1000); // Assuming each transaction is for $1000
  const totalCost = (numberOfTransactions * transactionFee) + interestFee;
  return totalCost;
};