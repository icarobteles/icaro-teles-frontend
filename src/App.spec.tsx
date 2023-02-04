import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { App } from "@/App";

describe("App", () => {
  it("should render a App component in main route", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/HomePage/)).toBeInTheDocument();
  });
});
