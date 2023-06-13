import React, { useState } from 'react';

export default function TodoList() {
    
    const [todoItem, setTodoItem] = '';
    const [items, setItems] = ([]);

    const handleTodo = (event) => {
        setTodoItem(event.target.value)
    }

    const handleAddItem =() => {
        if (todoItem !== '') {
          setItems([...items, todoItem]);
        }
    }

    return (
        <div>
          <input type='text' value={todoItem} onChange={handleTodo} />
          <button onClick={handleAddItem}>Add Task</button>
          <ul>
          {items.map((item, index) => (
            <li key={index}> {item} </li>
            ))}
            
          </ul>
        </div>
    )
}