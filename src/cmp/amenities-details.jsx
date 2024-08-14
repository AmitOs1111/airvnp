export function AmenitiesDetails({ amenities }) {
  if (!amenities) return <section>Loading...</section>
  return (
    <section className="amenities">
      <h1>What this place offers</h1>
      <div className="amenities-grid">
        {amenities.map((item) => (
          <article key={item}>{item}</article>
        ))}
      </div>
      <button>Show all 48 amenities</button>
    </section>
  )
}
