import { faker } from "@faker-js/faker";
import { Blogs } from "../models/blog";

function createRandomBlogContent(): Blogs {
  return {
    _id: faker.string.uuid(),
    title: faker.string.alpha(),
    description: faker.string.sample(100),
    date: faker.string.alphanumeric(),
    author: {
      name: faker.internet.userName(),
      image: faker.image.avatar(),
    },
    image: faker.image.avatar(),
    slug: faker.string.alphanumeric(),
  };
}

const CONTENT: Blogs[] = faker.helpers.multiple(createRandomBlogContent, {
  count: 1,
});

export const BLOG_CONTENT = CONTENT[0];
