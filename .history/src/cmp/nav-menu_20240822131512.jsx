import { useNavigate } from 'react-router-dom'

export function NavMenu({ openNavMenu }) {
  const navigate = useNavigate()

  function doLogin() {
    openNavMenu()
    navigate('/login')
  }

  return (
    <section className="nav-menu">
      <ul className="clean-list">
        <li>Sign up</li>
        <li>Log in</li>
        <li>Airbnb your home</li>
        <li>help center</li>
      </ul>
    </section>
  )
}
