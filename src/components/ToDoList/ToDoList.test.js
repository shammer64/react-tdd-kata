import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToDoList from './ToDoList';

describe('<ToDoList />', () => {
  test('it should mount', () => {
    render(<ToDoList />);
    
    const toDoList = screen.getByTestId('ToDoList');

    expect(toDoList).toBeInTheDocument();
  });

  xtest("it should have a title", () => {});
  xtest("title should contain text", () => {});
  xtest("it should contain a ToDoListEntry component", () => {});
  xtest("it should contain a ToDoListItems component", () => {});
  xtest("it should render items in ToDoListItems when state is updated", () => {});
  xtest("it should update state when a new item is received from ToDoListEntry", () => {});
  xtest("BONUS it should update state when an item is cancelled from ToDoListItems", () => {});
  xtest("BONUS it should update state when an item is completed from ToDoListItems", () => {});

});