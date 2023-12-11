import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./index";

describe("Navbar Component", () => {
  test('renders name "Rafael Masselli"', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>
    );

    expect(getByText("Rafael Masselli")).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>
    );

    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Work")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
  });
});
