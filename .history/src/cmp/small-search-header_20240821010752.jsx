export function SmallSearchHeader() {
  return (
    <section className="container-top-main-header">
      {!isOpenLargeSearch && (
        <div
          className="main-header-small-search flex space-between"
          // onClick={() => toggleSearchHeader()}
        >
          <button onClick={() => selectSearch('place')} className="border-end">
            Anywhere
          </button>
          <button onClick={() => selectSearch('date')} className="border-end">
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
    </section>
  )
}
