import * as React from 'react'

export function AppHeader() {
  return (
    <section className="app-header flex column">
      <div className="main-header flex space-between">
        <div className="app-logo">Airvnp</div>
        <div className="main-header-small-search">
          <button>Anywhere</button>
          <button>Any week</button>
          <button>Add guests</button>
          <button>💡</button>
        </div>
        <div className="container-user-header">
          <button>Airbnb your home</button>
          <button>🌍</button>
          <button>User</button>
        </div>
      </div>
      <div className="main-header-large-search flex justify-center"></div>
    </section>
  )
}
