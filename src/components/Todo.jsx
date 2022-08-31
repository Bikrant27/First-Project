import React from 'react'
import './Todo.css'

const Todo = () => {
  return (
        <div class="container">
            <h3 class="logo">Todo App</h3>
            <input type="text" class ="input" placeholder='Enter the Items'></input>
            <button class="button">Add Todo</button>
            <h3 class="todo-list">To Do Lists</h3>
            <ul class="list">
                <li>Hello 1</li>
                <li>Task 2</li>
                <li>Task 3</li>
            </ul>
            <button class="remove">Remove All</button>
        </div>
    )
}

export default Todo