import * as React from "react"
import { Link } from "gatsby"

import Logo from '../components/logo'
import Yeeeoooo from '../components/yeeeooo'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <>
        <h1 className="main-heading">
          <Link to="/">
            <Logo/>
          </Link>
        </h1>
        <Yeeeoooo/>
      </>
    )
  } else {
    header = (
      <>
        <Link className="header-link-home" to="/">
          <Logo/>
        </Link>
        <Yeeeoooo/>
      </>
      
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
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
