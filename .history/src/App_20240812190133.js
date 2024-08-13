import { NavLink, Route, Routes } from 'react-router-dom'

import { AppHeader } from './cmp/app-header.jsx'
// import { HomePage } from './pages/home-page'
import { AboutUs } from './pages/about-us'
import { AppFooter } from './cmp/app-footer.jsx'
// import { BookIndex } from './pages/book-index.jsx'
// import { BookDetails } from './pages/book-details.jsx'
// import { Blog } from './pages/blog.jsx'

import { UserMsg } from './cmp/user-msg'
// import { DarkScreen } from './pages/dark-screen.jsx'
// import { BookEdit } from './cmp/book-edit.jsx'
// import { LoginSignUp } from './pages/login-signup.jsx'

import { useSelector } from 'react-redux'
import routes from './routes.js'

export default function App() {
  return (
    <div className="App">
      <AppHeader />
      <main>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact={true}
              element={route.component}
              to={route.path}
            />
          ))}
          {/* <Route exact={true} element={<UserDetails />} path="/user/:id" /> */}
        </Routes>
      </main>
      <AppFooter />
    </div>
  )
}
