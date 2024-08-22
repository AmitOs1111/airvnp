import { useNavigate } from 'react-router-dom'

export function NavMenu({ openNavMenu }) {
  const navigate = useNavigate()

  function doLogin() {
    openNavMenu()
    navigate('/login')
  }
  function doSignup() {
    openNavMenu()
    navigate('/signup')
  }

  return (
    <section className="nav-menu">
      <ul className="clean-list">
        <li onClick={() => doSignup()}>Sign up</li>
        <li onClick={() => doLogin()}>Log in</li>
        <li>Airbnb your home</li>
        <li>help center</li>
      </ul>
    </section>
  )
}
