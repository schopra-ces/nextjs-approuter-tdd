import Link from "next/link";
import { HOME_BTN_TEXT, NAV_BLOG_TEXT, WELCOME_TEXT } from "../../constants";

export default async function Home() {
  return (
    <div data-testid="welcome-text" className="max-w-3xl py-40 mx-auto">
      <section>
        <p>
          <span className="text-5xl">{WELCOME_TEXT}</span>
          <br />
          <Link className="hover:text-gray-400 text-blue-400" href="/blog">
            {HOME_BTN_TEXT}
          </Link>{" "}
          {NAV_BLOG_TEXT}
        </p>
      </section>
    </div>
  );
}
