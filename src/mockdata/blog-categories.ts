import { faker } from "@faker-js/faker";
import { Category } from "../models/category";

function createRandomCategories(): Category {
  return {
    _id: faker.string.uuid(),
    description: faker.string.sample(100),
    name: faker.internet.userName(),
    image: faker.image.avatar(),
    slug: faker.string.alphanumeric(),
  };
}

export const CATEGORY: Category[] = faker.helpers.multiple(
  createRandomCategories,
  {
    count: 3,
  }
);

export const SINGLE_CATEGORY: Category[] = faker.helpers.multiple(
  createRandomCategories,
  {
    count: 1,
  }
);

export const MOCK_CATEGORY = SINGLE_CATEGORY[0];
