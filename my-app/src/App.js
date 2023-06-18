import React from 'react';
import { Welcome } from './Welcome'
import { Counter } from './Counter'
import ClickCounter from './ClickCounter'
import ClickTracker from './ClickTracker';
import InteractiveWelcome from './InteractiveWelcome';
import Login from './Login';
import TodoList from './TodoList';
import { LanguageProvider } from './LanguageContext';

export function App () {
    const handleRender = (items, handleRemove) => {
        return (
          <ul>
            {items.map((item) => (
              <li key={item.id}> {item.text}
              <button onClick={() => {
                handleRemove(item.id)
              }}>Remove</button> 
              </li>
            ))}
          </ul>
        )
    }
        return (
            <div>
                <h1>Hello</h1>
                <Welcome name="Stephano" age= {21}/>
                <Counter initialValue={5} incrementAmount={1} incrementInterval={1000} />
                <ClickCounter />
                <ClickTracker />
                <InteractiveWelcome />
                <Login />
                <TodoList render={handleRender}/>
                <LanguageProvider />
            </div>
        )
}
