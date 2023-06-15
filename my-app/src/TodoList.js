import React, { useState } from 'react';

export default function TodoList() {
    
    const [todoItem, setTodoItem] = useState('');
    const [items, setItems] = useState([]);

    const handleTodo = (event) => {
        setTodoItem(event.target.value)
    }

    const handleAddItem =() => {
        if (todoItem.trim() !== '') {
          const newTodo = {
            id: Date.now(),
            text: todoItem.trim(),
          };

          setItems((prevItems) => [...prevItems,newTodo]);
          setTodoItem('');
        }
    }

    return (
        <div>
          <input type='text' value={todoItem} onChange={handleTodo} />
          <button onClick={handleAddItem}>Add Task</button>
          <ul>
          {items.map((item) => (
            <li key={item.id}> {item.text} </li>
          ))}
            
          </ul>
        </div>
    )
}