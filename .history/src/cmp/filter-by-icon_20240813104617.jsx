export function FilterByIcon() {
  return (
    <section className="filter-by-icon">
      <ul className="flex" style={{ height: '40 px' }}>
        <li>
          <img src={require('../assets/img/filter-icons/icons.png')} alt="" />
        </li>
        <li>
          <img
            src={require('../assets/img/filter-icons/amazing-pools.png')}
            alt=""
          />
        </li>
        <li>
          <img
            src={require('../assets/img/filter-icons/amazing-views.png')}
            alt=""
          />
        </li>
        <li>
          <img src={require('../assets/img/filter-icons/camping.png')} alt="" />
        </li>
      </ul>
    </section>
  )
}
