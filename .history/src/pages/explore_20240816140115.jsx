import { useEffect, useState } from 'react'
import { StayList } from '../cmp/stay-list.jsx'
import { dataService } from '../services/demo.data.js'
import { FilterCarousel } from '../cmp/filter-carousel.jsx'
import { useParams } from 'react-router-dom'

export function Explore() {
  const [stays, setStays] = useState(dataService.getDataStays())
  const { type } = useParams()

  useEffect(() => {
    if (type) loadStays()
  }, [])

  function loadStays() {}

  return (
    <section className="explore">
      <FilterCarousel />
      <StayList stays={stays} />
    </section>
  )
}
