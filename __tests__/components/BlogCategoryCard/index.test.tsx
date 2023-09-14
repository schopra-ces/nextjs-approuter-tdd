import { render, screen, waitFor } from "@testing-library/react";
import { NAV_BLOG_TEXT, WELCOME_TEXT } from "../../../constants";
import BlogCategoryCard from "@/components/BlogCategoryCard";
import { MOCK_CATEGORY } from "../../../mockdata/blog-categories";
import { Category } from "../../../models/category";

describe("Individual Blog Card ", () => {
  const props: Category = MOCK_CATEGORY;

  it("Should render the link", async () => {
    const BlogCard = await BlogCategoryCard(props);
    render(BlogCard);
    const link = screen.getByRole("link");
    await waitFor(() => {
      expect(link).toBeInTheDocument();
    });
  });

  it("Should render the category name", async () => {
    const BlogCard = await BlogCategoryCard(props);
    render(BlogCard);
    const categoryName = screen.getByTestId("category-name");
    await waitFor(() => {
      expect(categoryName).toBeInTheDocument();
    });
  });

  it("Should render the category image", async () => {
    const BlogCard = await BlogCategoryCard(props);
    render(BlogCard);
    const categoryName = screen.getByTestId("category-img");
    await waitFor(() => {
      expect(categoryName).toBeInTheDocument();
    });
  });

  it("Should render the category description", async () => {
    const BlogCard = await BlogCategoryCard(props);
    render(BlogCard);
    const categoryName = screen.getByTestId("category-desc");
    await waitFor(() => {
      expect(categoryName).toBeInTheDocument();
    });
  });
});
