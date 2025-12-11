import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("renders the welcome heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      name: /Welcome to Next.js 14/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders feature cards", () => {
    render(<Home />);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Tailwind CSS")).toBeInTheDocument();
    expect(screen.getByText("UI Primitives")).toBeInTheDocument();
  });
});
