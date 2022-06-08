import React, {useState} from 'react';
import './ToDoListEntry.css';

const ToDoListEntry = ({onNewItem}) => {
  const [newItem, setNewItem] = useState("");

  return (
    <div className="ToDoListEntry" data-testid="ToDoListEntry">
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        onClick={() => onNewItem(newItem)}
        disabled={newItem.length === 0}
      >
        Add Item
      </button>
    </div>
  );
}

export default ToDoListEntry;
