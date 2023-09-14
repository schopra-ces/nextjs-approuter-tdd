import Image from "next/image";
import Link from "next/link";
import { classNames } from "./blogClassNames";
import { Blogs } from "../../../../models/blog";
import { BACK_TO_HOME } from "../../../../constants";

export interface BlogItemProps {
    params: { slug: string };
  }

export default async function Page({ params }: BlogItemProps) {
  const { slug } = params;
  const contentRes = await fetch(
    "http://demo0206776.mockable.io/getContent"
  );
//   let data:Blogs[] = await contentRes.json();
//   let currentPost = data.filter(
//     (blog: Blogs) => blog.slug === urlSlug
//   );
//   let blogPost = currentPost[0];
  let blogPost = await contentRes.json();
  if (!blogPost) return null;
    console.log(blogPost)
  return (
    <>
      <div className={classNames.hero}>
        <Link className={classNames.backToHome} href="/blog">
          {BACK_TO_HOME}
        </Link>
        <div className={classNames.heroContent}>
          <div className="lg:w-3/4">
            <h1 className={classNames.title}>{blogPost.title}</h1>
            <p className={classNames.subtitle}>
              {blogPost.description.slice(0, 100)}...
            </p>
            <div className={classNames.author}>
              <Image
                width="200"
                height="200"
                className={classNames.authorAvatar}
                src={blogPost.author.image}
                alt={blogPost.author.name}
              />
              <p className={classNames.authorName}>{blogPost.author.name}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classNames.blogContentWrapper}>
        <div className={classNames.blogImageWrapper}>
          <Image
            width="200"
            height="200"
            src={blogPost.image}
            alt={blogPost.title}
            className={classNames.blogImage}
          />
        </div>
        <div className={classNames.blogMainContent}>
          <h2 className={classNames.blogTitle}>{blogPost.title}</h2>
          <p className={classNames.blogDate}>{blogPost.date}</p>
          <p className={classNames.blogText}>{blogPost.description}</p>
        </div>
      </div>
    </>
  );
}
