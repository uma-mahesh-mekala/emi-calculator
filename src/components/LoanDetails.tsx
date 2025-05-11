import { ChangeEvent } from "react";
import Input from "./Input";

interface LoanDetailsProps {
  loanAmount: number;
  interestRate: number;
  term: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export default function LoanDetails({
  loanAmount,
  interestRate,
  term,
  onChange,
}: LoanDetailsProps) {
  return (
    <div className="loan-details">
      <h2>Loan Details</h2>
      <Input
        title="Loan Amount"
        type="number"
        name="loanAmount"
        id="loanAmount"
        min={1}
        max={100000000}
        required={true}
        value={loanAmount}
        onChange={onChange}
      />
      <Input
        title="Interest Rate"
        type="number"
        name="interestRate"
        id="loanAmount"
        min={0}
        max={100}
        required={true}
        value={interestRate}
        onChange={onChange}
      />
      <Input
        title="Term(in years)"
        type="number"
        name="term"
        id="term"
        min={1}
        required={true}
        value={term}
        onChange={onChange}
      />
    </div>
  );
}
