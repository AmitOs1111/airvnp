export function GalleryDetails({ stay }) {
  console.log('stay:', stay)
  if (!stay) return <section>loading...</section>
  console.log('stay:', stay)
  return (
    <section className="gallery-details">
      {stay.imgUrl.map((img, idx) => (
        <div key={'img' + idx} className={`${'div' + idx}`}>
          <img src={img} alt="idx" />
        </div>
      ))}
    </section>
  )
}
