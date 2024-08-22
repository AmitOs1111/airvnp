import { useState } from 'react'
import { FilterCarousel } from '../cmp/filter-carousel.jsx'
import { StayList } from '../cmp/stay-list.jsx'
import { dataStayService } from '../services/demo.data.js'

export function HomePage() {
  const [stays, setStays] = useState(dataService.getDataStays())
  return (
    <section className="home-page">
      <FilterCarousel />

      <div className="dream-stay">
        <StayList stays={stays} />
      </div>

      <div className="past-experiences">
        <h2>Past experiences</h2>
        <StayList stays={stays} />
      </div>
    </section>
  )
}
