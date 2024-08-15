export function PlaceModal() {
  const mapNames = [
    "I'm flexible",
    'Europe',
    'Italy',
    'United States',
    'Greece',
    'South America',
  ]

  return (
    <section className="place-modal">
      <div className="place-modal-header">
        <h2>Search by region</h2>
        <div className="place-modal-grid"></div>
      </div>
    </section>
  )
}
