import { render, screen } from "@testing-library/react";
import PerfectToDo from "./ToDoCheckbox";

test("renders learn react link", () => {
  render(<PerfectToDo />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
