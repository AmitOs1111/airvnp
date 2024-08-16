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
            <div className="main-header-top-large-search flex align-center justify-center">
              <h3 className="active">Stays</h3>
              <h3>Experiences</h3>
            </div>
          )}
        </div>

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
          <button className="hamburger-user flex ">
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
        <div className="main-header-large-search flex justify-center align-center">
          <div className="main-header-large-search-content flex align-center">
            <div
              className="where-search btn-border"
              onClick={() => selectSearch('place')}
            >
              <h3>where</h3>
              <h4>search destinations</h4>
            </div>

            <div
              className="check-in-out-search flex  space-around"
              onClick={() => selectSearch('date')}
            >
              <div className="check-in  btn-border">
                <h3>check in</h3>
                <h4>add dates</h4>
              </div>
              <div className="check-out btn-border">
                <h3>check out</h3>
                <h4>add dates</h4>
              </div>
            </div>

            <div
              className="who-search flex  space-between align-center"
              onClick={() => selectSearch('guest')}
            >
              <div className="who-search-content">
                <h3>who</h3>
                <h4>add guests</h4>
              </div>
              <button className="btn-search flex align-center justify-center">
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
                    strokeWidth: '4',
                    overflow: 'visible',
                  }}
                >
                  <path
                    fill="none"
                    d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
                  ></path>
                </svg>
              </button>
            </div>
            {selectedSearch && <SearchModal selectedSearch={selectedSearch} />}
          </div>
        </div>
      )}

      <div className="main-header-mobile flex align-center">
        <div className="header-mobile-btn-search flex">
          <div className="spotlight">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: 'block',
                height: '20px',
                width: '20px',
                fill: 'currentcolor',
              }}
            >
              <path d="M13 0a13 13 0 0 1 10.5 20.67l7.91 7.92-2.82 2.82-7.92-7.91A12.94 12.94 0 0 1 13 26a13 13 0 1 1 0-26zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"></path>
            </svg>
          </div>
          <div className="header-mobile-txt">
            <h3>Where to?</h3>
            <ul className="flex">
              <li>Anywhere</li>
              <li>Any week</li>
              <li>Add guest</li>
            </ul>
          </div>
        </div>

        <div className="header-mobile-btn-filter flex ">
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
              strokeWidth: '4',
              overflow: 'visible',
            }}
          >
            <path
              fill="none"
              d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"
            ></path>
          </svg>
        </div>
      </div>

      {isOpenDarkScreen && (
        <DarkScreen toggleSearchHeader={toggleSearchHeader} />
      )}
    </section>
  )
}
