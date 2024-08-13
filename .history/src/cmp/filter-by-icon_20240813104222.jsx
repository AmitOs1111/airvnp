import { icons } from '../../assets/img/filter-icons/icons.png'

export function FilterByIcon() {
  return (
    <section className="filter-by-icon">
      <ul>
        {/* <li>
          <img
            src={require('../../assets/img/filter-icons/icons.png')}
            alt=""
          />
        </li> */}
        <li>
          <img src={icons} alt="" />
        </li>
      </ul>
    </section>
  )
}
