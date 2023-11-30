import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Header from "./Header";

describe("Header", () => {
  const history = createMemoryHistory();

  render(
    <Router location={history.location} navigator={history}>
      <Header />
    </Router>
  );

  test("The header renders", () => {
    expect(screen.getByText(/products/i)).toBeInTheDocument();
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/cat couture/i)).toBeInTheDocument();
  });
});
