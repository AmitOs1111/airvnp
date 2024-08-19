import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dataService } from '../services/demo.data'

import { GalleryDetails } from '../cmp/gallery-details.jsx'
import { AmenitiesDetails } from '../cmp/amenities-details.jsx'
import { ReservationCard } from '../cmp/reservation-card.jsx'
import { GeneralInfo } from '../cmp/general-info.jsx'
import { AboutStay } from '../cmp/about-stay.jsx'
import { DatePickerDetails } from '../cmp/date-picker-details.jsx'
import { ReviewsDetails } from '../cmp/reviews-details.jsx'

export function StayDetails() {
  const [stays, setStays] = useState(dataService.getDataStays())
  const [stay, setStay] = useState(null)
  const params = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    console.log('params:', params)
    loadStay()
  }, [])

  function loadStay() {
    const currStay = stays.find((stay) => stay._id === params.id)

    if (currStay) setStay(currStay)
  }

  if (!stay) return

  return (
    <section className="stay-details main-layout-details">
      <div className="details-header flex space-between align-center">
        <div>{stay.name}</div>
        <div className="flex">
          <h3>Share</h3>
          <h3>Save</h3>
        </div>
      </div>

      <section className="container-gallery-details">
        <GalleryDetails stay={stay} />
        <div
          className="btn-show-all-imgs flex align-center"
          onClick={() => navigate(`/gallery/${stay._id}`)}
        >
          <div className="svg-grid ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: 'block',
                height: '16px',
                width: '16px',
                fill: 'currentcolor',
              }}
            >
              <path
                fill-rule="evenodd"
                d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
              ></path>
            </svg>
          </div>
          <div>
            <h3>Show all photos</h3>
          </div>
        </div>
      </section>

      <div className="container-reservation-details flex">
        <div className="left">
          <section className="mini-info-stay">
            <h3>
              <span>{stay.name}</span> in <span>{stay.loc.city}</span>,
              <span>{stay.loc.country}</span>
            </h3>
            <ul className="flex">
              <li>{stay.capacity} guest</li>
              <li>{stay.bedrooms} bedrooms</li>
              <li>{stay.bedrooms} bedrooms</li>
              <li>{stay.bathrooms} bathrooms</li>
            </ul>
            <ul className="flex">
              <li>
                <i className="fa-solid fa-star"></i>5.0
              </li>
              <li>{stay.reviews.length} reviews</li>
            </ul>
          </section>

          <section className="mini-info-host flex align-center">
            <div>
              <img
                className="img-user"
                src={require('../assets/img/img-user/user1.png')}
                alt="host"
              />
            </div>
            <div>
              <h3>
                Hosted by <span>{stay.host.fullname}</span>
              </h3>
              <h4>8 years hosting</h4>
            </div>
          </section>

          <section className="general-info">
            <GeneralInfo />
          </section>

          <section className="about-stay">
            <AboutStay />
          </section>

          <section className="amenities-details">
            <AmenitiesDetails amenities={stay.amenities} />
          </section>

          <section className="date-picker">
            <DatePickerDetails />
          </section>
        </div>

        <div className="right ">
          <ReservationCard stay={stay} />
        </div>
      </div>

      <section className="reviews-details">
        <ReviewsDetails stay={stay} />
      </section>

      <section className="map-location">map</section>
    </section>
  )
}
