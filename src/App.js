import ExpensiveComponent from "../ExpensiveComponent";
import ParentMemoComponent from "../MemoizedComponent";
import ParentComponent from "../ParentComponent";

function App() {
  return (
    <div>
      <ExpensiveComponent />
      <ParentComponent />
      <ParentMemoComponent />
    </div>
  );
}

export default App;
