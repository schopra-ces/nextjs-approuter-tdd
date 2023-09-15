import { render, screen } from "@testing-library/react";
import BlogCategoryCard from "@/components/BlogCategoryCard";
import { MOCK_CATEGORY } from "../../../mockdata/blog-categories";
import { Category } from "../../../models/category";

describe("Individual Blog Card ", () => {
  const props: Category = MOCK_CATEGORY;

  it("Should render the link", async () => {
    render(
      <BlogCategoryCard
        name={props.name}
        image={props.image}
        description={props.description}
        _id={props._id}
        slug={props.slug}
      />
    );
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
  });

  it("Should render the category name", async () => {
    render(
      <BlogCategoryCard
        name={props.name}
        image={props.image}
        description={props.description}
        _id={props._id}
        slug={props.slug}
      />
    );
    const categoryName = screen.getByTestId("category-name");
    expect(categoryName).toBeInTheDocument();
  });

  it("Should render the category image", async () => {
    render(
      <BlogCategoryCard
        name={props.name}
        image={props.image}
        description={props.description}
        _id={props._id}
        slug={props.slug}
      />
    );
    const categoryName = screen.getByTestId("category-img");
    expect(categoryName).toBeInTheDocument();
  });

  it("Should render the category description", async () => {
    render(
      <BlogCategoryCard
        name={props.name}
        image={props.image}
        description={props.description}
        _id={props._id}
        slug={props.slug}
      />
    );
    const categoryName = screen.getByTestId("category-desc");
    expect(categoryName).toBeInTheDocument();
  });
});
