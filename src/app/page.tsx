"use client";
import { ChangeEvent, useState } from "react";
import LoanDetails from "@/components/LoanDetails";
import LoanSummary from "@/components/LoanSummary";
import calculateEmi from "@/utils/calculateEmi";

export default function Page() {
  const [loanDetails, setLoanDetails] = useState({
    loanAmount: 0,
    interestRate: 0.0,
    term: 0,
  });

  const [loanSummary, setLoanSummary] = useState({
    totalPayableAmount: 0,
    interestAmount: 0,
    emi: 0,
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setLoanDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    const { totalPayableAmount, interestAmount, emi } =
      calculateEmi(loanDetails);
    setLoanSummary((prev) => ({
      ...prev,
      totalPayableAmount,
      interestAmount,
      emi,
    }));
  }

  return (
    <>
      <h1>EMI Calculator</h1>
      <div className="calculator">
        <LoanDetails
          loanAmount={loanDetails.loanAmount}
          interestRate={loanDetails.interestRate}
          term={loanDetails.term}
          onChange={handleChange}
        />
        <LoanSummary
          totalPayableAmount={loanSummary.totalPayableAmount}
          interestAmount={loanSummary.interestAmount}
          emi={loanSummary.emi}
        />
      </div>
      <input
        type="button"
        value="Calculate"
        className="styled"
        onClick={handleClick}
      />
    </>
  );
}
