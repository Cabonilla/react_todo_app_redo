import React, { useState } from 'react'
import { BiEditAlt, BiTrashAlt } from 'react-icons/bi'
import './Todo.css'
import TodoForm from './TodoForm'

function Todo({todos, completeTodo, removeTodo, updateTodo, }) {
	const [edit, setEdit] = useState({
		id: null,
		value: ''
	})

	const submitUpdate = value => {
		updateTodo(edit.id, value)
		setEdit({
			id: null,
			value: ''
		})
	}

	const inputUpdate = value => {
		updateTodo(value.id, value)
		setEdit({
			id: null,
			value: ''
		})
	}

	if (edit.id) {
		return <TodoForm edit={edit} onSubmit={submitUpdate} />
		// return
	}

	return todos.map((todo, index) => (
		<div
			className={todo.inComplete ? 'box' : 'box error'}
			key={index}>
				{/* <div key={todo.id} onClick={() => completeTodo(todo.id)}>
					{todo.text}
				</div> */}
				<input value={todo.text} id={todo.id} edit={edit} onClick={() => completeTodo(todo.id)} onChange={(e) => {
					setEdit({ id: todo.id, text: e.target.value })
					// inputUpdate( todo.id, e.target.value )
					inputUpdate({ id: todo.id, text: e.target.value })
				}}>
				</input>
				<div className="icons">
					<BiTrashAlt 
						onClick={() => removeTodo(todo.id)}
						className='delete-icon'
					/>
					<BiEditAlt
						onClick={() => setEdit({ id: todo.id, value: todo.text })}
						className='edit-icon'
					/>
				</div>
		</div>
	))
}

export default Todo
