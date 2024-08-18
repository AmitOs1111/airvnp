export function GeneralInfo() {
  return (
    <section className="general-info">
      <ul>
        <li className="flex">
          <div>⚛️</div>
          <div>
            <h3>Dedicated workspace</h3>
            <h4>A common area with wifi that’s well-suited for working.</h4>
          </div>
        </li>
        <li className="flex">
          <div>⚛️</div>
          <div>
            <h3>Self check-in</h3>
            <h4>You can check in with the building staff.</h4>
          </div>
        </li>
        <li className="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: 'block',
                height: '24px',
                width: '24px',
                fill: 'currentcolor',
              }}
            >
              <path d="M11.67 0v1.67h8.66V0h2v1.67h6a2 2 0 0 1 2 1.85v16.07a2 2 0 0 1-.46 1.28l-.12.13L21 29.75a2 2 0 0 1-1.24.58H6.67a5 5 0 0 1-5-4.78V3.67a2 2 0 0 1 1.85-2h6.15V0zm16.66 11.67H3.67v13.66a3 3 0 0 0 2.82 3h11.18v-5.66a5 5 0 0 1 4.78-5h5.88zm-.08 8h-5.58a3 3 0 0 0-3 2.82v5.76zm-18.58-16h-6v6h24.66v-6h-6v1.66h-2V3.67h-8.66v1.66h-2z"></path>
            </svg>
          </div>
          <div>
            <h3>Free cancellation before 1:00 PM on Aug 20</h3>
            <h4>Get a full refund if you change your mind.</h4>
          </div>
        </li>
      </ul>
    </section>
  )
}
