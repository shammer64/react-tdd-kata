import { render, screen } from '@testing-library/react';
import App from './App';

test("it should render a ToDoList", () => {
    render(<App />);
    const component = screen.getByTestId("ToDoList");

  expect(component).toBeInTheDocument();
});