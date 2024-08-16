import { useEffect, useState } from 'react'
import { StayList } from '../cmp/stay-list.jsx'
import { dataService } from '../services/demo.data.js'
import { FilterCarousel } from '../cmp/filter-carousel.jsx'
import { useParams } from 'react-router-dom'
import { stayService } from '../services/stay.service.js'

export function Explore() {
  const [stays, setStays] = useState(null)
  const { type } = useParams()
  const [filterBy, setFilterBy] = useState({
    type,
  })

  useEffect(() => {
    setFilterBy((prev) => ({ ...prev, type }))
    // loadStays()
  }, [type])

  useEffect(() => {
    loadStays()
  }, [filterBy])

  function loadStays() {
    stayService.query(filterBy).then((stays) => {
      console.log('stays:', stays)
      setStays(stays)
    })
  }

  if (!stays) return <section>Loading...</section>
  return (
    <section className="explore">
      <FilterCarousel />
      <StayList stays={stays} />
    </section>
  )
}
