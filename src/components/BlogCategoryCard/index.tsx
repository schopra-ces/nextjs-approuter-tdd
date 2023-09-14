import Image from "next/image";
import Link from "next/link";
// import { FC } from "react";
import { blogCategoryCardClassNames } from "./blogCategoryClassNames";
import { Category } from "../../../models/category";

// const BlogCategoryCard: FC<Category> = (props) => {
export default async function BlogCategoryCard(props: Category) {
  const { image, name, slug, description } = props;

  return (
    <Link href={{ pathname: `/blog/${slug}` }}>
      <div className={blogCategoryCardClassNames.categoryCard}>
        <Image
          width={100}
          height={100}
          data-testid="category-img"
          className={blogCategoryCardClassNames.categoryImage}
          src={image}
          alt={name}
        />
        <h3 data-testid="category-name" className={blogCategoryCardClassNames.categoryName}>{name}</h3>
        <p data-testid="category-desc" className={blogCategoryCardClassNames.categoryDescription}>
          {description.slice(0, 100)}...
        </p>
      </div>
    </Link>
  );
}

// export default BlogCategoryCard;
