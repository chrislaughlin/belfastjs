import * as React from "react"
import { Link } from "gatsby"

import { useOnClickOutside } from '../hooks/useOnClickOutside';

import Logo from '../components/logo'
import Yeeeoooo from '../components/yeeeooo'
import Burger from "./menu/burger"
import Menu from "./menu/menu"

const Layout = ({ location, title, children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside(node, () => setMenuOpen(false));

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <>
        <h1 className="main-heading">
          <Link to="/">
            <Logo />
          </Link>
        </h1>
        <Yeeeoooo />
      </>
    )
  } else {
    header = (
      <>
        <Link className="header-link-home" to="/">
          <Logo />
        </Link>
        <Yeeeoooo />
      </>

    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <div ref={node}>
        <Burger
          open={menuOpen}
          setOpen={setMenuOpen}
        />
        <Menu
          open={menuOpen}
          setOpen={setMenuOpen}
          isRootPath={isRootPath}
        />
      </div>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
