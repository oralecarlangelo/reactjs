import React from "react";
import ExpensiveComponent from "./ExpensiveComponent";
import ParentComponent from "./ParentComponent";
import ParentMemoComponent from "./MemoizedComponent";

const App = () => {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <ExpensiveComponent data={data} />
      <ParentComponent />
      <ParentMemoComponent />
    </div>
  );
};

export default App;
