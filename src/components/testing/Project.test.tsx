import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Project from "../Project";

describe("Project Component", () => {
  it("renders correctly", () => {
    render(
      <Project
        index={1}
        name="Test Project"
        description="This is a test project"
        type={true}
        category="frontend"
      />
    );
    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("This is a test project")).toBeInTheDocument();
    expect(
      screen.getByText("Generado por inteligencia artificial")
    ).toBeInTheDocument();
  });
});
