import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToDoListEntry from './ToDoListEntry';

describe('<ToDoListEntry />', () => {
  test('it should mount', () => {
    render(<ToDoListEntry />);
    
    const toDoListEntry = screen.getByTestId('ToDoListEntry');

    expect(toDoListEntry).toBeInTheDocument();
  });

  xtest("it should render a text input field", () => {});
  xtest("it should render a submit button", () => {});
  xtest("it should disable the submit button when no text is present", () => {});
  xtest("it should enable the submit button when text is present", () => {});
  xtest("it should execute a callback function with the input value as an argument when the submit button is pressed", () => {});

});