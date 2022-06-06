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

  xtest("it should render a helpful message when no items are passed to it", () => {});
  xtest("it should render a set of ToDoListItem when items passed to it", () => {});
  xtest("BONUS it should propagate a callback function with the item as an argument when deleting an item", () => {});
  xtest("BONUS it should propagate a callback function with the item as an argument when completing an item", () => {});

  // Copy these test placeholders to ToDoListItem.test.js
  xtest("it should render the item text passed to it", () => {});
  xtest("BONUS it should render a widget for deleting the item", () => {});
  xtest("BONUS it should render a widget for completing the item", () => {});
  xtest("BONUS it should execute a callback function with the item as an argument when deleting the item", () => {});
  xtest("BONUS it should execute a callback function with the item as an argument when completing the item", () => {});

});