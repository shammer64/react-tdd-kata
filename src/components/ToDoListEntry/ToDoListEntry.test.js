import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToDoListEntry from './ToDoListEntry';
import userEvent from '@testing-library/user-event';

describe('<ToDoListEntry />', () => {
  test('it should mount', () => {
    render(<ToDoListEntry />);
    
    const toDoListEntry = screen.getByTestId('ToDoListEntry');

    expect(toDoListEntry).toBeInTheDocument();
  });

  test("it should render a text input field", () => {
    render(<ToDoListEntry />);
    const textInput = screen.getByRole("textbox", {text: /New Item/i})

    expect(textInput).toBeInTheDocument();
  });

  test("it should render a submit button", () => {
    render(<ToDoListEntry />);
    const submitButton = screen.getByRole("button", {text: /Add Todo/i})

    expect(submitButton).toBeInTheDocument();
  });

  test("it should disable the submit button when no text is present", () => {
    render(<ToDoListEntry />);
    const submitButton = screen.getByRole("button", { text: /Add Todo/i });

    expect(submitButton).toBeDisabled()
  });

  test("it should enable the submit button when text is present", () => {
    render(<ToDoListEntry />);
    const submitButton = screen.getByRole("button", { text: /Add Todo/i });
    const textInput = screen.getByRole("textbox", { text: /New Item/i });
    
    userEvent.type(textInput, 'Mow the Lawn');

    expect(submitButton).toBeEnabled();
  });

  test("it should execute a callback function with the input value as an argument when the submit button is pressed", () => {
    const callback = jest.fn((entry) => {});
    render(<ToDoListEntry onNewItem={callback} />);
    const submitButton = screen.getByRole("button", { text: /Add Todo/i });
    const textInput = screen.getByRole("textbox", { text: /New Item/i });

    userEvent.type(textInput, "Mow the Lawn");
    expect(submitButton).toBeEnabled();
    userEvent.click(submitButton);

    expect(callback).toBeCalledTimes(1);
  });

});