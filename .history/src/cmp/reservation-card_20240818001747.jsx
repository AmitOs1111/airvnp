import { useSelector } from 'react-redux'

export function ReservationCard() {
  const { filterBy } = useSelector((state) => state.stayModule)
  const { checkIn, checkOut } = filterBy.dateReservation

  function counterGuest() {
    const valuesArray = Object.values(filterBy.guest)
    return valuesArray.reduce((acc, currentValue) => {
      return acc + currentValue
    }, 0)
  }

  return (
    <section className="reservation-card flex column space-between">
      <div className="reserve-header">
        <h3>
          $327 <span>night</span>
        </h3>
      </div>
      <div className="container-data-reservation">
        <div className="data-reservation-check-in-out flex align-center space-between">
          <div className="check-in">
            <h3>check-in</h3>
            <h4>
              {checkIn
                ? checkIn.getDate() +
                  '/' +
                  checkIn.getMonth() +
                  '/' +
                  checkIn.getFullYear()
                : 'add date'}
            </h4>
          </div>
          <div className="check-out">
            <h3>check-out</h3>
            <h4>
              {checkIn
                ? checkOut.getDate() +
                  '/' +
                  checkOut.getMonth() +
                  '/' +
                  checkOut.getFullYear()
                : 'add date'}
            </h4>
          </div>
        </div>
        <div className="data-reservation-guest flex align-center space-between">
          <div className="count-guest ">
            <h3>guests</h3>
            <h4>
              <span>{counterGuest()}</span> guest
            </h4>
          </div>
          <div>⌄</div>
        </div>
      </div>

      <div className="container-btn-reservation">
        <button>Reserve</button>
        <h4>You won't be charged yet</h4>
      </div>

      <div className="reserve-footer flex space-between">
        <h3>Total</h3>
        <h3>$600</h3>
      </div>
    </section>
  )
}
