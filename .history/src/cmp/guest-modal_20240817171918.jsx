import { useEffect, useState } from 'react'

export function GuestModal({ onSetFilterByEdit }) {
  const [filterByGuest, setFilterByGuest] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  })

  useEffect(() => {
    console.log('onSetFilterByEdit')
  }, [filterByGuest])

  function onSetFilterByGuest(val) {}

  return (
    <section className="guest-modal">
      <ul className="clean-list">
        <li>
          <div>
            <h3>Adults</h3>
            <h4>Ages 13 or above</h4>
          </div>
          <SimpleCounter
            type="adults"
            count={filterByGuest.adults}
            onSetFilterByGuest={onSetFilterByGuest}
          />
        </li>
        <li>
          <div>
            <h3>Children</h3>
            <h4>Ages 2 – 12</h4>
          </div>
          <SimpleCounter
            type="children"
            count={filterByGuest.children}
            onSetFilterByGuest={onSetFilterByGuest}
          />
        </li>
        <li>
          <div>
            <h3>Infants</h3>
            <h4>Under 2</h4>
          </div>
          <SimpleCounter
            type="infants"
            count={filterByGuest.infants}
            onSetFilterByGuest={onSetFilterByGuest}
          />
        </li>
        <li>
          <div>
            <h3>Pets</h3>
            <h4>Bringing a service animal?</h4>
          </div>
          <SimpleCounter
            type="pets"
            count={filterByGuest.pets}
            onSetFilterByGuest={onSetFilterByGuest}
          />
        </li>
      </ul>
    </section>
  )
}

function SimpleCounter({ count = 0, onSetFilterByGuest, type }) {
  return (
    <section className="simple-counter flex align-center">
      <button onClick={() => onSetFilterByGuest({ type, val: -1 })}>-</button>
      <div className="count">{count}</div>
      <button onClick={() => onSetFilterByGuest({ type, val: 1 })}>+</button>
    </section>
  )
}
