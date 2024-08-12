import * as React from 'react'
import { useRef, useEffect, useState } from 'react'
import { Logout } from '@mui/icons-material'
import { logout } from '../store/user.action'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'

import { NavBarHeader } from '../cmp/nav-bar-header.jsx'
import { SearchHeader } from '../cmp/search-header.jsx'

export function AppHeader() {
  const navigate = useNavigate()
  let { user, isConnected } = useSelector((state) => state.userModule)
  const { targetHeroRef } = useSelector((state) => state.bookModule)
  const headerRef = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { threshold: 0.1 } // Adjust threshold as needed
    )

    if (targetHeroRef.current) {
      observer.observe(targetHeroRef.current)
    }

    return () => {
      if (targetHeroRef.current) {
        observer.unobserve(targetHeroRef.current)
      }
    }
  }, [])

  return (
    <section
      className="main-header full flex space-between align-center"
      ref={headerRef}
      style={{
        backgroundColor: isIntersecting ? '' : '#fff',
        transition: 'background-color 0.3s',
      }}
    >
      <div className="header-logo-hamburger-cart flex align-center">
        <div className="app-logo">
          <NavLink to="/">Book Shop</NavLink>
        </div>
        <div className="hamburger-menu">
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="header-cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>

      <div className="main-header-nav">
        <NavBarHeader />
      </div>

      <div className="header-login">
        <div className="main-login-header">
          <NavLink className="btn" to="/login">
            Login
          </NavLink>
        </div>
        <div className="icon-login">
          <NavLink to="/login">
            <i
              style={{ color: 'black' }}
              className="fa-regular fa-circle-user"
            ></i>
          </NavLink>
        </div>
      </div>
    </section>
  )
}
