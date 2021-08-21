import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
	return (
		<Card className="expenses">
			{props.items.map((item) => (
				<ExpenseItem title={item.title} amount={item.amount} date={item.date} />
			))}
		</Card>
	);
}

export default Expenses;
