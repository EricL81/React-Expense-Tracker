import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
		setFormIsOpen(false);
	};

	const [formIsOpen, setFormIsOpen] = useState(false);

	function formIsOpenHandler() {
		setFormIsOpen(true);
	}

	function cancelFormHandler() {
		setFormIsOpen(false);
	}
	return (
		<div className="new-expense">
			{!formIsOpen && <button onClick={formIsOpenHandler}>Add New Expense</button>}
			{formIsOpen && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelFormHandler} />}
		</div>
	);
}

export default NewExpense;
