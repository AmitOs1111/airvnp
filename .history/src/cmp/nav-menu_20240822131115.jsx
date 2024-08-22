import { Link } from 'react-router-dom'

export function NavMenu() {
  return (
    <section className="nav-menu">
      <ul className="clean-list">
        <li>
          <Link to={'/login'}> Sign up</Link>
        </li>
        <li>
          <Link to={'/login'}> Log in</Link>
        </li>
        <li>Airbnb your home</li>
        <li>help center</li>
      </ul>
    </section>
  )
}
