import { NavLink, Route, Routes } from 'react-router-dom'

import { AppHeader } from './cmp/app-header.jsx'
import { HomePage } from './pages/home-page'
import { AboutUs } from './pages/about-us'
import { Footer } from './cmp/footer.jsx'
import { BookIndex } from './pages/book-index.jsx'
import { BookDetails } from './pages/book-details.jsx'

import { UserMsg } from './cmp/user-msg'

import { useSelector } from 'react-redux'

export default function App() {
  return (
    <div className="App">
      <AppHeader />
      <DarkScreen />
      <main>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<AboutUs />} path="/about" />
          <Route element={<BookDetails />} path="/book/:bookId" />
        </Routes>
      </main>
      <UserMsg />
      <Footer />
    </div>
  )
}
