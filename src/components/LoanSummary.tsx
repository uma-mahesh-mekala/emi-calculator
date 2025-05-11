import Input from "./Input";

export interface LoanSummaryProps {
  totalPayableAmount: number;
  interestAmount: number;
  emi: number;
}
export default function LoanSummary({
  totalPayableAmount,
  interestAmount,
  emi,
}: LoanSummaryProps) {
  return (
    <div className="loan-summary">
      <h2>Loan Summary</h2>
      <Input
        title="Total Payable Amount"
        type="number"
        name="totalPayableAmount"
        id="totalPayableAmount"
        value={totalPayableAmount}
        readOnly={true}
      />
      <Input
        title="Interest Amount"
        type="number"
        name="interestAmount"
        id="interestAmount"
        value={interestAmount}
        readOnly={true}
      />
      <Input
        title="EMI"
        type="number"
        name="emi"
        id="emi"
        value={emi}
        readOnly={true}
      />
    </div>
  );
}
