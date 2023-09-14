import { render, screen } from "@testing-library/react";
import { BLOG_NAV, HOME_NAV, WELCOME_USER } from "../../../constants";
import Header from "@/components/Header";

describe("Header", () => {
  it("should render the component", () => {
    render(<Header />);
    const header = screen.getByTestId("app-header");
    expect(header).toBeInTheDocument();
  });

  it("Should render 3 links in nav bar", () => {
    render(<Header />);
    const link = screen.getAllByRole("link");
    expect(link).toHaveLength(3);
  });

  it("Welcome Link should navigate to home page", () => {
    render(<Header />);
    const welcomeNav = screen.getByTestId("welcome-nav");
    expect(welcomeNav).toHaveAttribute("href", "/");
  });

    it("Should render welcome text", () => {
    render(<Header />);
    const welcomeText = screen.getByText(WELCOME_USER);
    expect(welcomeText).toBeInTheDocument();
  });

  it("Home Link should navigate to home page", () => {
    render(<Header />);
    const homeNav = screen.getByTestId("home-nav");
    expect(homeNav).toHaveAttribute("href", "/");
  });

  it("Should render Home nav text", () => {
    render(<Header />);
    const HomeNavText = screen.getByText(HOME_NAV);
    expect(HomeNavText).toBeInTheDocument();
  });

  it("Blog link should navigate to blog page", () => {
    render(<Header />);
    const blogNav = screen.getByTestId("blog-nav");
    expect(blogNav).toHaveAttribute("href", "/blog");
  });

  it("Should render Blog nav text", () => {
    render(<Header />);
    const blogNavText = screen.getByText(BLOG_NAV);
    expect(blogNavText).toBeInTheDocument();
  });

});
