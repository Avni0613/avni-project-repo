import React, { useState } from "react";

const Form = ({ addTransaction }) => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("income");

    const handleSubmit = (e) => {
        e.preventDefault();

        const transaction = {
            id: Date.now(),
            text: text,
            amount: Number(amount),
            type: type,
        };

        addTransaction(transaction);

        // Reset form
        setText("");
        setAmount("");
        setType("income");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter description"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />

            <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />

            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>

            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default Form;