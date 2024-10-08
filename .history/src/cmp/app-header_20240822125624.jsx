import { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { DarkScreen } from '../pages/dark-screen.jsx'
import { MobileHeader } from '../cmp/mobile-header.jsx'
import { FilterBar } from './FilterBar.jsx'
import { SmallSearchHeader } from '../cmp/small-search-header.jsx'
import { NavMenu } from '../cmp/nav-menu.jsx'

export function AppHeader() {
  const [isOpenLargeSearch, setIsOpenLargeSearch] = useState(true)
  const [isOpenDarkScreen, setIsOpenDarkScreen] = useState(false)
  const [selectedSearch, setSelectedSearch] = useState(null)
  const [OpenNavMenu, setOpenOpenNavMenu] = useState(false)

  const navigate = useNavigate()

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

  function openNavSide() {
    console.log('openNavSide')
    setOpenNavSide((prevOpenOpenNavMenu) => !prevOpenOpenNavMenu)
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
          </div>
        </NavLink>

        <SmallSearchHeader
          isOpenLargeSearch={isOpenLargeSearch}
          selectSearch={selectSearch}
        />

        <div className="container-user-header flex space-between">
          <button>Airbnb your home</button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: 'block',
                height: '16px',
                width: '16px',
                fill: 'currentcolor',
              }}
            >
              <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path>
            </svg>
          </button>
          <button
            className="hamburger-user flex "
            onClick={() => openNavSide()}
          >
            <div className="svg-hamburger flex align-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: 'block',
                  fill: 'none',
                  height: '16px',
                  width: '16px',
                  stroke: 'currentcolor',
                  strokeWidth: '3',
                  overflow: 'visible',
                }}
              >
                <g fill="none">
                  <path d="M2 16h28M2 24h28M2 8h28"></path>
                </g>
              </svg>
            </div>
            <div className="svg-user">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: 'block',
                  height: '100%',
                  width: '100%',
                  fill: 'currentcolor',
                }}
              >
                <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>

      {isOpenLargeSearch && (
        <FilterBar
          selectedSearch={selectedSearch}
          selectSearch={selectSearch}
          setIsOpenLargeSearch={setIsOpenLargeSearch}
        />
      )}

      <MobileHeader />

      {OpenNavMenu && <NavMenu />}

      {isOpenDarkScreen && (
        <DarkScreen toggleSearchHeader={toggleSearchHeader} />
      )}
    </section>
  )
}
