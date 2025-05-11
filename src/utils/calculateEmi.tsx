export default function calculateEmi({
  loanAmount,
  interestRate,
  term,
}: {
  loanAmount: number;
  interestRate: number;
  term: number;
}): {
  emi: number;
  totalPayableAmount: number;
  interestAmount: number;
} {
  const principal = loanAmount;
  const monthlyInterestRate = interestRate / 12 / 100;
  const numberOfMonths = term * 12;

  if (principal <= 0 || numberOfMonths <= 0) {
    return {
      emi: 0,
      totalPayableAmount: 0,
      interestAmount: 0,
    };
  }

  if (monthlyInterestRate === 0) {
    return {
      emi: principal / numberOfMonths,
      totalPayableAmount: principal,
      interestAmount: 0.0,
    };
  }

  const emi =
    (principal *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
    (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

  const totalPayableAmount = emi * numberOfMonths;
  const interestAmount = totalPayableAmount - principal;

  return {
    emi: parseFloat(emi.toFixed(2)),
    totalPayableAmount: parseFloat(totalPayableAmount.toFixed(2)),
    interestAmount: parseFloat(interestAmount.toFixed(2)),
  };
}
