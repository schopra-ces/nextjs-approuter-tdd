import Link from "next/link";

import headerClassNames from "./headerClassNames";
import { BLOG_NAV, HOME_NAV, WELCOME_USER } from "../../constants";

const Header = () => {
  const { container, header, link, welcomeText, ul } = headerClassNames;

  return (
    <header data-testid="app-header" className={header}>
      <div className={container}>
        <Link data-testid="welcome-nav" className={welcomeText} href="/">
          <h3>{WELCOME_USER}</h3>
        </Link>

        <nav>
          <ul className={ul}>
            <li>
              <Link data-testid="home-nav" className={link} href="/">
                {HOME_NAV}
              </Link>
            </li>
            <li>
              <Link data-testid="blog-nav" className={link} href="/blog">
                {BLOG_NAV}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
