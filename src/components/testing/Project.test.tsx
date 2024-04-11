import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Project from "../Project";

describe("Project component", () => {
  it("Should render the project component", () => {
    render(
      <Project
        name="Project name"
        description="Project description"
        type={true}
        category="category"
        index={0}
      />
    );

    const projectName = screen.getByText("Project name");
    const projectDescription = screen.getByText("Project description");
    const projectType = screen.getByText(
      "Generado por inteligencia artificial"
    );

    expect(projectName).toBeInTheDocument();
    expect(projectDescription).toBeInTheDocument();
    expect(projectType).toBeInTheDocument();
  });
});
