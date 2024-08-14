export function GalleryDetails({ stay }) {
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
