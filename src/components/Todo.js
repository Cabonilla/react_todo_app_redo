import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { BiTrashAlt } from 'react-icons/bi'
import './Todo.css'
import TodoForm from './TodoForm'

function Todo({ todos, completeTodo, removeTodo, updateTodo, }) {
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
			className={todo.isComplete ? 'box done' : 'box'}
			id="todo-list"
			key={index}>
			{/* <div key={todo.id} onClick={() => completeTodo(todo.id)}>
					{todo.text}
				</div> */}
			<input className={todo.isComplete ? 'inputdone' : 'inputlive'} value={todo.text} id={todo.id} edit={edit} onChange={(e) => {
				setEdit({ id: todo.id, text: e.target.value })
				// inputUpdate( todo.id, e.target.value )
				inputUpdate({ id: todo.id, text: e.target.value })
			}}>
			</input>
			<div className="icons">
				{/* <BiEditAlt
					onClick={() => setEdit({ id: todo.id, value: todo.text })}
					className='edit-icon'
				/> */}
				<AiOutlineCheck
					onClick={() => completeTodo(todo.id)}
					className='delete-icon'
				/>
				<BiTrashAlt
					onClick={() => removeTodo(todo.id)}
					className='delete-icon'
				/>


			</div>
		</div>
	))
}

export default Todo
