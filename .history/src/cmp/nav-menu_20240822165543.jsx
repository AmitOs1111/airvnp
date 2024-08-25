import { useNavigate } from 'react-router-dom'
import { logout } from '../store/user.action'
import { useSelector } from 'react-redux'

export function NavMenu({ openNavMenu }) {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.userModule)

  function doLogin() {
    openNavMenu()
    navigate('/login')
  }
  function doSignup() {
    openNavMenu()
    navigate('/signup')
  }

  function doLogout() {
    logout()
    openNavMenu()
    navigate('/home')
  }

  function doAirbnbHome() {
    if (!user) return
    openNavMenu()
    navigate('/home')
  }

  return (
    <section className="nav-menu">
      <ul className="clean-list">
        <li onClick={() => doSignup()}>Sign up</li>
        {!user && <li onClick={() => doLogin()}>Log in</li>}
        {user && <li onClick={() => doLogout()}>Log out</li>}
        <li onClick={() => doAirbnbHome()}>Airbnb your home</li>
        <li>help center</li>
      </ul>
    </section>
  )
}
