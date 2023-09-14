import { Category } from "../../../models/category";
import { BLOG_TEXT, BLOG_TITLE } from "../../../constants";
import BlogCategoryCard from "@/components/BlogCategoryCard";

export default async function Page() {
  const categoriesRes = await fetch(
    "http://demo0206776.mockable.io/getBlogCategory"
  );
  let categories = await categoriesRes.json();
  if (!categories) return null;

  return (
    <>
      <section className="pb-8 pt-40 text-primary-dark px-4 lg:px-36">
        <h2 className="text-4xl font-bold mb-6">{BLOG_TITLE}</h2>
        <p className="text-black-200 text-lg mb-12">{BLOG_TEXT}</p>

        <div
          data-testid="blog-card"
          className="flex flex-col lg:flex-row gap-8 justify-between items-center"
        >
          {categories?.map((blogCategory: Category) => (
            <BlogCategoryCard
              key={blogCategory.name}
              description={blogCategory.description}
              image={blogCategory.image}
              name={blogCategory.name}
              slug={blogCategory.name}
              _id={blogCategory._id}
            />
          ))}
        </div>
      </section>
    </>
  );
}
