import React, { useMemo } from "react";

function ExpensiveComponent({ data }) {
  const expensiveValue = useMemo(() => computeExpensiveValue(data), [data]);

  return <div>{expensiveValue}</div>;
}

function computeExpensiveValue(data) {
  // Simulating an expensive computation
  console.log("Performing an expensive computation...");
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    result += data[i];
  }
  return result;
}

export default ExpensiveComponent;