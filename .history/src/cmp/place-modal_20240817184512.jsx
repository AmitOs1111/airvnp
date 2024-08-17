export function PlaceModal({ onSetFilterByEdit }) {
  const mapNames = [
    "I'm flexible",
    'Europe',
    'Italy',
    'United States',
    'Greece',
    'South America',
  ]

  return (
    <section className="place-modal ">
      <div className="place-modal-header">
        <h2>Search by region</h2>
        <div className="place-modal-grid">
          {mapNames.map((name) => (
            <article
              key={name}
              className="flex column"
              onClick={() => onSetFilterByEdit({ type: 'place', value: name })}
            >
              <img
                src={require(`../assets/img/img-map-filter/${name}.gif`)}
                alt="map"
              />
              <h3>{name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
