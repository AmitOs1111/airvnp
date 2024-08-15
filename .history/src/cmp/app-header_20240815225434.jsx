import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { DarkScreen } from '../pages/dark-screen.jsx'
import { SearchModal } from '../cmp/search-modal.jsx'

export function AppHeader() {
  const [isOpenLargeSearch, setIsOpenLargeSearch] = useState(true)
  const [isOpenDarkScreen, setIsOpenDarkScreen] = useState(false)
  const [selectedSearch, setSelectedSearch] = useState(null)

  let lastKnownScrollPosition = useRef(0)
  document.addEventListener('scroll', (event) => {
    lastKnownScrollPosition.current = window.scrollY
    if (lastKnownScrollPosition.current === 0) setIsOpenLargeSearch(true)
    else if (lastKnownScrollPosition !== 0 && isOpenLargeSearch) {
      setIsOpenLargeSearch(false)
      setIsOpenDarkScreen(false)
      setSelectedSearch(null)
    }
  })

  useEffect(() => {
    if (selectedSearch) toggleSearchHeader()
  }, [selectedSearch])

  function selectSearch(label) {
    setSelectedSearch(label)
  }

  function toggleSearchHeader() {
    if (lastKnownScrollPosition.current === 0) {
      setIsOpenDarkScreen(false)
    } else {
      setIsOpenLargeSearch((prevIsOpenLargeSearch) => !prevIsOpenLargeSearch)
      setIsOpenDarkScreen((prevIsOpenDarkScreen) => !prevIsOpenDarkScreen)
    }
  }

  return (
    <section className="app-header full main-layout flex column ">
      <div className="main-header flex space-between align-center">
        <NavLink to={'home'}>
          <div className="app-logo flex align-center">
            <div className="logo-brands">
              <i className="fa-brands fa-airbnb"></i>
            </div>
            <div className="txt-brands"> airvnp</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="display: block; height: 100%; width: 100%; fill: currentcolor;"
              >
                <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"></path>
              </svg>
            </div>
          </div>
        </NavLink>

        <div className="container-top-main-header">
          {!isOpenLargeSearch && (
            <div
              className="main-header-small-search flex space-between"
              // onClick={() => toggleSearchHeader()}
            >
              <button
                onClick={() => selectSearch('place')}
                className="border-end"
              >
                Anywhere
              </button>
              <button
                onClick={() => selectSearch('date')}
                className="border-end"
              >
                Any week
              </button>
              <button onClick={() => selectSearch('guest')}>Add guests</button>
              <button>
                <i className="fa-solid fa-magnifying-glass flex justify-center align-center"></i>
              </button>
            </div>
          )}

          {isOpenLargeSearch && (
            <div className="main-header-top-large-search flex align-center space-around">
              <h3 className="active">Stays</h3>
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

      {isOpenLargeSearch && (
        <div className="main-header-large-search flex justify-center align-center">
          <div className="main-header-large-search-content flex ">
            <div className="where-search" onClick={() => selectSearch('place')}>
              <h3>where</h3>
              <h4>search destinations</h4>
            </div>

            <div
              className="check-in-out-search flex space-around"
              onClick={() => selectSearch('date')}
            >
              <div className="check-in">
                <h3>check in</h3>
                <h4>add dates</h4>
              </div>
              <div className="check-out">
                <h3>check out</h3>
                <h4>add dates</h4>
              </div>
            </div>

            <div
              className="who-search flex space-between"
              onClick={() => selectSearch('guest')}
            >
              <div className="who-search-content">
                <h3>who</h3>
                <h4>add guests</h4>
              </div>
              <button>Search</button>
            </div>
            {selectedSearch && <SearchModal selectedSearch={selectedSearch} />}
          </div>
        </div>
      )}

      {isOpenDarkScreen && (
        <DarkScreen toggleSearchHeader={toggleSearchHeader} />
      )}
    </section>
  )
}
