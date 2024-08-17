import { useState } from 'react'

export function GuestModal() {
  const [filterByGuest, setFilterByGuest] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  })

  return (
    <section className="gest-modal">
      <ul className="clean-list">
        <li className="flex space-between">
          <div>
            <h3>Adults</h3>
            <h4>Ages 13 or above</h4>
          </div>
          <SimpleCounter count={filterByGuest.adults} />
        </li>
        <li className="flex space-between">
          <div>
            <h3>Children</h3>
            <h4>Ages 2 – 12</h4>
          </div>
          <SimpleCounter count={filterByGuest.children} />
        </li>
        <li className="flex space-between">
          <div>
            <h3>Infants</h3>
            <h4>Under 2</h4>
          </div>
          <SimpleCounter count={filterByGuest.infants} />
        </li>
        <li className="flex space-between">
          <div>
            <h3>Pets</h3>
            <h4>Bringing a service animal?</h4>
          </div>
          <SimpleCounter count={filterByGuest.pets} />
        </li>
      </ul>
    </section>
  )
}

function SimpleCounter({ count = 0 }) {
  return (
    <section className="simple-counter flex">
      <button>-</button>
      <div>{count}</div>
      <button>+</button>
    </section>
  )
}
