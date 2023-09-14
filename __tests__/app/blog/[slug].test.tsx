import { render, screen } from "@testing-library/react";
import Page from "@/app/blog/[slug]/page";
import { BLOG_CONTENT } from "../../../mockdata/blog-content";


describe("Slug/Blog Content", () => {
  
  it("Should have a Back to Home Page Link", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(BLOG_CONTENT),
    });
    const BlogContentPage = await Page();
    render(BlogContentPage);
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
  });

  it("Link should navigate back to blog page", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(BLOG_CONTENT),
    });
    const BlogContentPage = await Page();
    render(BlogContentPage);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/blog");
  });

  it("should render blog content with title", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(BLOG_CONTENT),
    });
    const BlogContentPage = await Page();
    const { container } = render(BlogContentPage);
    const blogTitleEl = container.querySelector("h1");
    expect(blogTitleEl).toBeInTheDocument();
  });

  it("should render blog content with sub-title", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(BLOG_CONTENT),
    });
    const BlogContentPage = await Page();
    render(BlogContentPage);
    const blogSubtitle = screen.getByTestId("blog-subtitle");
    expect(blogSubtitle).toBeInTheDocument();
  });

  it("should render author image", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(BLOG_CONTENT),
    });
    const BlogContentPage = await Page();
    render(BlogContentPage);
    const blogSubtitle = screen.getByTestId("blog-author-img");
    expect(blogSubtitle).toBeInTheDocument();
  });

  it("should render author name", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(BLOG_CONTENT),
    });
    const BlogContentPage = await Page();
    render(BlogContentPage);
    const blogSubtitle = screen.getByTestId("blog-author-name");
    expect(blogSubtitle).toBeInTheDocument();
  });

  it("should render blog image", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(BLOG_CONTENT),
    });
    const BlogContentPage = await Page();
    render(BlogContentPage);
    const blogSubtitle = screen.getByTestId("blog-img");
    expect(blogSubtitle).toBeInTheDocument();
  });

  it("should render blog date", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(BLOG_CONTENT),
    });
    const BlogContentPage = await Page();
    render(BlogContentPage);
    const blogSubtitle = screen.getByTestId("blog-date");
    expect(blogSubtitle).toBeInTheDocument();
  });

  it("should render blog description", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(BLOG_CONTENT),
    });
    const BlogContentPage = await Page();
    render(BlogContentPage);
    const blogSubtitle = screen.getByTestId("blog-description");
    expect(blogSubtitle).toBeInTheDocument();
  });

});
