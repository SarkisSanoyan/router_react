import { Outlet, NavLink } from "react-router-dom";


export function Layout() {

  return (
    <div className="Layout">
      <header>
        <nav className="header">
          <NavLink to='/' className="navlink">HOME</NavLink>
          <NavLink to='/about' className="navlink">ABOUT</NavLink>
          <NavLink to='/contact' className="navlink">CONTACT</NavLink>
          <NavLink to='/post' className="navlink">BLOG</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        FOOTER
      </footer>
    </div>
  )
}
