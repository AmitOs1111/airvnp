import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function AppHeader() {
  const [isOpenLargeSearch, setIsOpenLargeSearch] = useState(false)

  return (
    <section className="app-header full main-layout flex column ">
      <div className="main-header flex space-between align-center">
        <NavLink to={'home'}>
          <div className="app-logo flex align-center">
            <div className="logo-brands">
              <i className="fa-brands fa-airbnb"></i>
            </div>
            <div className="txt-brands"> airvnp</div>
          </div>
        </NavLink>

        <div className="container-top-main-header">
          {!isOpenLargeSearch && (
            <div className="main-header-small-search flex space-between">
              <button className="border-end">Anywhere</button>
              <button className="border-end">Any week</button>
              <button>Add guests</button>
              <button>
                <i className="fa-solid fa-magnifying-glass flex justify-center align-center"></i>
              </button>
            </div>
          )}

          {isOpenLargeSearch && (
            <div className="main-header-top-large-search flex align-center space-around">
              <h2>Stays</h2>
              <h3>Experiences</h3>
            </div>
          )}
        </div>

        <div className="container-user-header flex">
          <button>Airbnb your home</button>
          <button>
            <i className="fa-solid fa-globe"></i>
          </button>
          <button className="flex hamburger-user">
            <div>
              <i className="fa-solid fa-bars"></i>
            </div>
            <div>
              <i className="fa-solid fa-user"></i>
            </div>
          </button>
        </div>
      </div>

      <div className="main-header-large-search flex justify-center align-center">
        <div className="main-header-large-search-content flex ">
          <div className="where-search">
            <h3>where</h3>
            <h4>search destinations</h4>
          </div>

          <div className="check-in-out-search flex space-around">
            <div className="check-in">
              <h3>check in</h3>
              <h4>add dates</h4>
            </div>
            <div className="check-out">
              <h3>check out</h3>
              <h4>add dates</h4>
            </div>
          </div>

          <div className="who-search flex space-between">
            <div className="who-search-content">
              <h3>who</h3>
              <h4>add guests</h4>
            </div>
            <button>Search</button>
          </div>
        </div>
      </div>
    </section>
  )
}
