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
        <div className="hosted-by">
          <h3>
            Hosted by <span>{stay.host.fullname}</span>
          </h3>
        </div>
        <div className="price-line">
          <h3>
            <span>$</span>
            <span>{stay.price}</span>
            <span> night</span>
          </h3>
        </div>
      </div>

      <div className="sent-like-stay-card flex align-center justify-center">
        <button className="like-stay-card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: 'block',
              // fill: 'red',
              fill: 'rgba(0, 0, 0, 0.5)',
              height: '24px',
              width: '24px',
              stroke: 'var(--linaria-theme_palette-icon-primary-inverse)',
              strokeWidth: '2',
              overflow: 'visible',
              stroke: 'white',
            }}
          >
            <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
          </svg>
        </button>
      </div>
    </section>
  )
}
