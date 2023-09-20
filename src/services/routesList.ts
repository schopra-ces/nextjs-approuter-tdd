const BLOG_URL = process.env.BLOG_SERVICE_URL;
export const routesList = {
  Blog: {
    getCategory: BLOG_URL + "/getBlogCategory",
    getContent: BLOG_URL + "/getContent"
  }
};