export function GuestModal() {
  return (
    <section className="gest-modal">
      <ul className="clean-list">
        <li className="flex space-between">
          <div>
            <h3></h3>
            <h4></h4>
          </div>
          <SimpleCounter />
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
