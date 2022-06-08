import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToDoList from './ToDoList';
import userEvent from '@testing-library/user-event';

describe('<ToDoList />', () => {
  test('it should mount', () => {
    render(<ToDoList />);
    
    const toDoList = screen.getByTestId('ToDoList');

    expect(toDoList).toBeInTheDocument();
  });

  test("it should have a title", () => {
    render(<ToDoList />);
    const title = screen.getByText('To-Do List');

    expect(title).toBeInTheDocument();
  });
  
  test("it should contain a ToDoListEntry component", () => {
    render(<ToDoList />);
    const component = screen.getByTestId("ToDoListEntry");

    expect(component).toBeInTheDocument();
  });

  test("it should contain a ToDoListItems component", () => {
    render(<ToDoList />);
    const component = screen.getByTestId("ToDoListItems");

    expect(component).toBeInTheDocument();
  });

  test("it should update state when a new item is received from ToDoListEntry", () => {
    render(<ToDoList />);
    const submitButton = screen.getByRole("button", { text: /Add Item/i });
    const textInput = screen.getByRole("textbox");

    userEvent.type(textInput, 'Mow the lawn');
    userEvent.click(submitButton);

    const todoItem = screen.getByText("Mow the lawn");

    expect(todoItem).toBeInTheDocument();

  });

  xtest("BONUS it should update state when an item is cancelled from ToDoListItems", () => {});
  xtest("BONUS it should update state when an item is completed from ToDoListItems", () => {});

});