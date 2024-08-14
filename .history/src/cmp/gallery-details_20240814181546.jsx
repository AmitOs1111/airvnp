export function GalleryDetails({ stay }) {
  console.log('stay:', stay)
  if (!stay) return <section>loading...</section>
  console.log('stay:', stay)
  return (
    <section className="gallery-details">
      {stay.imgUrls.map((img, idx) => (
        <div key={'img' + idx} className={`${'div' + idx + 1}`}>
          <img src={img} alt="idx" />
        </div>
      ))}
    </section>
  )
}
