import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToDoListItems from './ToDoListItems';

describe('<ToDoListItems />', () => {
  test('it should mount', () => {
    render(<ToDoListItems />);
    
    const toDoListItems = screen.getByTestId('ToDoListItems');

    expect(toDoListItems).toBeInTheDocument();
  });

  test("it should render a helpful message when no items are passed to it", () => {
    render(<ToDoListItems />);
    const message = screen.getByText("There are no items in your list.");

    expect(message).toBeInTheDocument();
  });

  test("it should render a set of ToDoListItem when items passed to it", () => {
    const todoItems = ['Mow my lawn', 'Take out the trash', 'Clean the bathrooms'];
    render(<ToDoListItems items={todoItems} />);
    const renderedItem1 = screen.getByText(todoItems[0]);
    const renderedItem2 = screen.getByText(todoItems[1]);
    const renderedItem3 = screen.getByText(todoItems[2]);

    expect(renderedItem1.innerHTML).toBe("Mow my lawn");
    expect(renderedItem2.innerHTML).toBe("Take out the trash");
    expect(renderedItem3.innerHTML).toBe("Clean the bathrooms");
  });

  test("it should not render a helpful message when items are passed to it", () => {
    const todoItems = ['Mow my lawn', 'Take out the trash', 'Clean the bathrooms'];
    render(<ToDoListItems items={todoItems} />);
    const message = screen.queryByText("There are no items in your list.");

    expect(message).toBeFalsy();
  });

  xtest("BONUS it should propagate a callback function with the item as an argument when deleting an item", () => {});
  xtest("BONUS it should propagate a callback function with the item as an argument when completing an item", () => {});

  // Copy these test placeholders to ToDoListItem.test.js
  xtest("it should render the item text passed to it", () => {});
  xtest("BONUS it should render a widget for deleting the item", () => {});
  xtest("BONUS it should render a widget for completing the item", () => {});
  xtest("BONUS it should execute a callback function with the item as an argument when deleting the item", () => {});
  xtest("BONUS it should execute a callback function with the item as an argument when completing the item", () => {});

});