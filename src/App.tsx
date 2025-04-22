import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [SelectedCategory, SetSelectedCategory] = useState("");
  const [expenses, setExpense] = useState([
    { id: 1, description: "aaa", amount: 55, category: "Groceries" },
    { id: 12, description: "aa3a", amount: 535, category: "Utilities" },
    { id: 13, description: "aaga", amount: 545, category: "Rent" },
    { id: 14, description: "aaga", amount: 255, category: "Groceries" },
  ]);

  const visibleExpenses = SelectedCategory
    ? expenses.filter((e) => e.category === SelectedCategory)
    : expenses;
  return (
    <>
      <h1>Finance Tracker</h1>
      {/* <CountingButton /> */}
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpense([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        ></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => SetSelectedCategory(category)}
        ></ExpenseFilter>
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => setExpense(expenses.filter((e) => e.id !== id))}
        ></ExpenseList>
      </div>
    </>
  );
}
export default App;
