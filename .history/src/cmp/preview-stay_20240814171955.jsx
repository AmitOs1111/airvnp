import { ImgCarousel } from '../cmp/img-carousel.jsx'
export function PreviewStay({ stay }) {
  function openDetails() {
    console.log('openDetails()')
  }

  return (
    <section className="preview-card-stay">
      <div className="preview-img">
        <ImgCarousel stay={stay} />
      </div>
      <div
        className="preview-content"
        onClick={() => {
          openDetails()
        }}
      >
        <div className="preview-content-where-rate flex space-between">
          <h3>
            <span>{stay.loc.country},</span>
            <span> {stay.loc.city}</span>
          </h3>
          <h3 className="flex">
            <i className="fa-solid fa-star"></i>
            <span>{` ${4.9}`}</span>
          </h3>
        </div>
        <h3>
          <span>$</span>
          <span>{stay.price}</span>
          <span> night</span>
        </h3>
      </div>
    </section>
  )
}
