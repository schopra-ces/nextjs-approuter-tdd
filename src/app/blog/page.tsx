import { Category } from "../../../models/category";
import { BLOG_TEXT, BLOG_TITLE } from "../../../constants";
import BlogCategoryCard from "@/components/BlogCategoryCard";
import { fetchBlogsList } from "@/api/blog/blogService";

export default async function Page() {
  let categories: Category[] = await fetchBlogsList(
    process.env.BLOG_LIST_URL as string
  );
  if (!categories) return null;

  return (
    <>
      <section className="pb-8 pt-20 text-primary-dark px-4 lg:px-36">
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

