import Home from "@/app/page";
import { render, screen, waitFor } from "@testing-library/react";
import { NAV_BLOG_TEXT, WELCOME_TEXT } from "../../constants";

describe("Home Page", () => {
  it("Should render the section", async () => {
    const HomePage = await Home();
    render(HomePage);
    const welcomePage = screen.getByTestId("welcome-text");
    expect(welcomePage).toBeInTheDocument();
  });

  it("Should render Welcome Text", async () => {
    const HomePage = await Home();
    render(HomePage);
    const welcomePage = screen.getByText(WELCOME_TEXT);
    expect(welcomePage).toBeInTheDocument();
  });

  it("Should have a Link", async () => {
    const HomePage = await Home();
    render(HomePage);
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
  });

  it("Link should navigate to blog page", async () => {
    const HomePage = await Home();
    render(HomePage);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/blog");
  });

  it("Should render navigation text", async () => {
    const HomePage = await Home();
    render(HomePage);
    const navigationText = screen.getByText(NAV_BLOG_TEXT);
    expect(navigationText).toBeInTheDocument();
  });
});
