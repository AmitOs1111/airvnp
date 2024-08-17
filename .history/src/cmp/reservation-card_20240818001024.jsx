import { useSelector } from 'react-redux'

export function ReservationCard() {
  const { filterBy } = useSelector((state) => state.stayModule)
  const { checkIn, checkOut } = filterBy.dateReservation

  console.log('filterBy:', filterBy)
  console.log('checkIn, checkOut:', checkIn, checkOut)
  return (
    <section className="reservation-card flex column space-between">
      <div className="reserve-header">
        <h3>
          $327 <span>night</span>
        </h3>
      </div>
      <div className="container-data-reservation">
        <div className="data-reservation-check-in-out">
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
        </div>
      </div>

      <button>Reserve</button>

      <div className="reserve-footer flex space-between">
        <h3>Total</h3>
        <h3>$600</h3>
      </div>
    </section>
  )
}
