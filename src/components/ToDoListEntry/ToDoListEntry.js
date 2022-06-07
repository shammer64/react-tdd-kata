import React, {useState} from 'react';
import './ToDoListEntry.css';

const ToDoListEntry = ({onNewItem}) => {
  const [newItem, setNewItem] = useState("");
  
  return (
    <div className="ToDoListEntry" data-testid="ToDoListEntry">
      <input type="text" placeholder='New Item' onChange={(e) => setNewItem(e.target.value)}/>
      <button type='submit' disabled={!newItem} onSubmit={() => onNewItem(newItem)} >Add Item</button>
    </div>
  )
};

export default ToDoListEntry;
