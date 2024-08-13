import * as React from 'react'

export function AppHeader() {
  return (
    <section className="app-header flex column">
      <div className="main-header flex space-between">
        <div className="app-logo flex">
          <div>
            <i className="fa-brands fa-airbnb"></i>
          </div>
          <div> Airvnp</div>
        </div>
        <div className="main-header-small-search">
          <button>Anywhere</button>
          <button>Any week</button>
          <button>Add guests</button>
          <button>💡</button>
        </div>
        <div className="container-user-header">
          <button>Airbnb your home</button>
          <button>
            <i className="fa-thin fa-globe"></i>
          </button>
          <button>
            <div>
              <i className="fa-solid fa-bars"></i>
            </div>
            <div>
              <i className="fa-solid fa-user"></i>
            </div>
          </button>
        </div>
      </div>
      <div className="main-header-large-search flex justify-center">
        <div className="main-header-large-search-content flex">
          <div className="where-search">
            <h3>where</h3>
            <h4>search destinations</h4>
          </div>
          <div className="check-in-out-search">
            <div className="check-in">
              <h3>check in</h3>
              <h4>add dates</h4>
            </div>
            <div className="check-out">
              <h3>check out</h3>
              <h4>add dates</h4>
            </div>
          </div>
          <div className="who-search flex">
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
