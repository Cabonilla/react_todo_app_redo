import 'bulma/css/bulma.css';
import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm(props) {
	const [input, setInput] = useState('')

	const handleChange = (e) => {
		setInput(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Date.now(),
			text: input
		})

		setInput('');
	}

	return (
		<form name="todo-form">
			<input className="input todo_input"  type="text" name="text" placeholder="What's next?" value={input} onChange={handleChange}></input>
			<button className="button" type="submit" onClick={handleSubmit}>Add Todo</button>
		</form>
	)
}

export default TodoForm
