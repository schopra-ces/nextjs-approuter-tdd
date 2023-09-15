import Image from "next/image";
import Link from "next/link";
import { classNames } from "./blogClassNames";
import { BACK_TO_HOME } from "../../../../constants";
import { fetchBlogsContent } from "@/api/blog/blogContentService";

export default async function Page() {
 
  let blogPost = await fetchBlogsContent(process.env.BLOG_CONTENT_URL)
  if (!blogPost) return null;

  return (
    <>
      <div className={classNames.hero}>
        <Link
          data-testid="nav-back"
          className={classNames.backToHome}
          href="/blog"
        >
          {BACK_TO_HOME}
        </Link>
        <div className={classNames.heroContent}>
          <div className="lg:w-3/4">
            <h1 data-testid="blog-title" className={classNames.title}>
              {blogPost.title}
            </h1>
            <p data-testid="blog-subtitle" className={classNames.subtitle}>
              {blogPost.description.slice(0, 100)}...
            </p>
            <div data-testid="blog-author-img" className={classNames.author}>
              <Image
                width="200"
                height="200"
                className={classNames.authorAvatar}
                src={blogPost.author.image}
                alt={blogPost.author.name}
              />
              <p
                data-testid="blog-author-name"
                className={classNames.authorName}
              >
                {blogPost.author.name}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classNames.blogContentWrapper}>
        <div data-testid="blog-img" className={classNames.blogImageWrapper}>
          <Image
            width="200"
            height="200"
            src={blogPost.image}
            alt={blogPost.title}
            className={classNames.blogImage}
          />
        </div>
        <div className={classNames.blogMainContent}>
          <p data-testid="blog-date" className={classNames.blogDate}>
            {blogPost.date}
          </p>
          <p data-testid="blog-description" className={classNames.blogText}>
            {blogPost.description}
          </p>
        </div>
      </div>
    </>
  );
}
