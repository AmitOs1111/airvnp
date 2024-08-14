import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dataService } from '../services/demo.data'

import { GalleryDetails } from '../cmp/gallery-details.jsx'
import { AmenitiesDetails } from '../cmp/amenities-details.jsx'
import { ReservationCard } from '../cmp/reservation-card.jsx'

export function StayDetails() {
  const [stays, setStays] = useState(dataService.getDataStays())
  const [stay, setStay] = useState(null)
  const params = useParams()
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
    <section className="stay-details">
      <div className="details-header flex space-between align-center">
        <div>{stay.name}</div>
        <div className="flex">
          <h3>Share</h3>
          <h3>Save</h3>
        </div>
      </div>
      <section className="container-gallery-details">
        <GalleryDetails stay={stay} />
      </section>
      <div className="container-reservation-details flex">
        <div className="left">
          <section className="amenities-details">
            <AmenitiesDetails amenities={stay.amenities} />
          </section>
        </div>

        <div className="right">
          <ReservationCard />
        </div>
      </div>
    </section>
  )
}
