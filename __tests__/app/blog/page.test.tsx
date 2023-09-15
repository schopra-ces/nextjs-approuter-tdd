import { render, screen } from "@testing-library/react";
import { CATEGORY } from "../../../mockdata/blog-categories";
import { BLOG_TEXT, BLOG_TITLE } from "../../../constants";
import Page from "@/app/blog/page";

describe("Blog Page", () => {
  it("should render blog page with correct title", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(CATEGORY),
    });
    const BlogPage = await Page();
    const { container } = render(BlogPage);
    const txt = container.querySelector("h2");
    expect(txt).toHaveTextContent(BLOG_TITLE);
  });

  it("should render blog page with correct description", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(CATEGORY),
    });
    const BlogPage = await Page();
    const { container } = render(BlogPage);
    const txt = container.querySelector("p");
    expect(txt).toHaveTextContent(BLOG_TEXT);
  });

  it("should render the blog card", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(CATEGORY),
    });
    const BlogPage = await Page();
    render(BlogPage);
    const blogCard = screen.getByTestId("blog-card");
    expect(blogCard).toBeInTheDocument();
  });
});
