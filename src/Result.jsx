import React from 'react';
import { calculateInvestmentResults, formatter } from './util/investment';
const Result = ({userInputs}) => {
    const resultTableData = calculateInvestmentResults(userInputs);
    console.log(resultTableData)

  return (
    <table id="result">
      <thead>
        <tr>
          <th className="center">Year</th>
          <th className="center">Interest (Year)</th>
          <th className="center">valueEndOfYear</th>
          <th className="center">AnnualInvestment</th>
        </tr>
      </thead>
      <tbody>
        {resultTableData.map((resultData) => {
            return (
                <tr>
                    <td>{resultData.year}</td>
                    <td>{formatter.format(resultData.interest)}</td>
                    <td>{formatter.format(resultData.valueEndOfYear)}</td>
                    <td>{formatter.format(resultData.annualInvestment)}</td>
                </tr>
            )
        })}
      </tbody>
    </table>
  );
};

export default Result;
