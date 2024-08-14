export function ReservationCard() {
  return (
    <section className="reservation-card flex column justify-center">
      <div className="reserve-header">
        <h3>
          $327 <span>night</span>
        </h3>
      </div>
      <button>Reserve</button>
      <div className="reserve-footer flex space-between">
        <h3>Total</h3>
        <h3>$600</h3>
      </div>
    </section>
  )
}
