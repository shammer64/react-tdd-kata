import { render } from "@testing-library/react";
import React from "react";
import "./ToDoListItems.css";

const ToDoListItems = ({items = []}) => {

  
  return (
    <div className="ToDoListItems" data-testid="ToDoListItems">
      { (items.length > 0) 
        ? items.map((item) => <div>{item}</div>) 
        : <div>There are no items in your list.</div>
      }
    </div>
  );
}


export default ToDoListItems;
