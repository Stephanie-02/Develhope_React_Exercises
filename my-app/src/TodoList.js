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

    const handleReset = () => {
      setItems([]);
    }

    const handleRemove = (itemId) => {
      setItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
    }

    return (
        <div>
          <input type='text' value={todoItem} onChange={handleTodo} />
          <button onClick={handleAddItem}>Add Task</button>
          <button onClick={() => {
            handleReset();
          }}>Reset</button>
          <ul>
          {items.map((item) => (
            <li key={item.id}> {item.text}
            <button onClick={() => {
              handleRemove(item.id)
            }}>Remove</button> 
            </li>
          ))}
            
          </ul>
        </div>
    )
}