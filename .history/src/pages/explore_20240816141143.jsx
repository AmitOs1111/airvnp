import { useEffect, useState } from 'react'
import { StayList } from '../cmp/stay-list.jsx'
import { dataService } from '../services/demo.data.js'
import { FilterCarousel } from '../cmp/filter-carousel.jsx'
import { useParams } from 'react-router-dom'
import { stayService } from '../services/stay.service.js'

export function Explore() {
  const [filterBy, setFilterBy] = useState({
    type: '',
  })
  const { type } = useParams()

  useEffect(() => {
    if (type) {
      setFilterBy((prevFilterBy) => ({
        ...prevFilterBy,
        type,
      }))
    }
    loadStays()
  }, [])

  function loadStays() {
    stayService.query(filterBy).then((stays) => console.log('stays:', stays))
  }

  return (
    <section className="explore">
      <FilterCarousel />
      <StayList stays={stays} />
    </section>
  )
}
