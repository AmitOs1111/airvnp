import * as React from 'react'

export function AppHeader() {
  return (
    <section className="app-header flex column">
      <div className="main-header flex">
        <div className="app-logo">Airvnp</div>
        <div className="main-header-small-search">
          <button>Anywhere</button>
          <button>Any week</button>
          <button>Add guests</button>
          <button>💡</button>
        </div>
        <div className="container-user-header">User</div>
      </div>
      <div className="main-header-large-search flex justify-center"></div>
    </section>
  )
}
