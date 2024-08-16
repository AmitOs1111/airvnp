import { useNavigate } from 'react-router-dom'
import { ImgCarousel } from '../cmp/img-carousel.jsx'
export function PreviewStay({ stay }) {
  const navigate = useNavigate()

  function openDetails() {
    navigate(`stay/${stay._id}`)
  }

  return (
    <section className="preview-card-stay">
      <div className="preview-img">
        <ImgCarousel stay={stay} openDetails={openDetails} />
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
