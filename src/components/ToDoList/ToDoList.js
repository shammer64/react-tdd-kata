import React, { useState } from 'react';
import ToDoListEntry from '../ToDoListEntry/ToDoListEntry';
import ToDoListItems from '../ToDoListItems/ToDoListItems';
import './ToDoList.css';

const ToDoList = () => {
  const [todoItems, setTodoItems] = useState([]);

  const addItem = (newItem) => {
    setTodoItems([...todoItems, newItem]);
  }

  return (
    <div className="ToDoList" data-testid="ToDoList">
      <h1>To-Do List</h1>
      <ToDoListEntry onNewItem={addItem} />
      <ToDoListItems items={todoItems} />
    </div>
  );

}


export default ToDoList;
