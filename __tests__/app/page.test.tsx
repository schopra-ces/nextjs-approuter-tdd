import Home from "@/app/page";
import { render, screen, waitFor } from "@testing-library/react";
import { NAV_BLOG_TEXT, WELCOME_TEXT } from "../../constants";

describe("Home Page", () => {
  it("Should render the section", async () => {
    const HomePage = await Home();
    render(HomePage);
    const welcomePage = screen.getByTestId("welcome-text");
    await waitFor(() => {
      expect(welcomePage).toBeInTheDocument();
    });
  });

  it("Should render Welcome Text", async () => {
    const HomePage = await Home();
    render(HomePage);
    const welcomePage = screen.getByText(WELCOME_TEXT);
    await waitFor(() => {
      expect(welcomePage).toBeInTheDocument();
    });
  });

  it("Should have a Link", async () => {
    const HomePage = await Home();
    render(HomePage);
    const link = screen.getByRole("link");
    await waitFor(() => {
      expect(link).toBeInTheDocument();
    });
  });

  it("Link should navigate to blog page", async () => {
    const HomePage = await Home();
    render(HomePage);
    const link = screen.getByRole("link");
    await waitFor(() => {
      expect(link).toHaveAttribute("href", "/blog");
    });
  });

  it("Should render navigation text", async () => {
    const HomePage = await Home();
    render(HomePage);
    const navigationText = screen.getByText(NAV_BLOG_TEXT);
    await waitFor(() => {
      expect(navigationText).toBeInTheDocument();
    });
  });
});
