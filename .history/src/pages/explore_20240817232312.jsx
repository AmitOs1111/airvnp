import { useEffect, useState } from 'react'
import { StayList } from '../cmp/stay-list.jsx'
import { dataService } from '../services/demo.data.js'
import { FilterCarousel } from '../cmp/filter-carousel.jsx'
import { useParams } from 'react-router-dom'
import { stayService } from '../services/stay.service.js'
import { useSelector } from 'react-redux'

export function Explore() {
  const [stays, setStays] = useState(null)
  const { type } = useParams()
  const { filterBy } = useSelector((state) => state.stayModule)
  const [filterByExplore, setFilterByExplore] = useState(filterBy)

  useEffect(() => {
    if (type) {
      setFilterByExplore((prevFilterBy) => ({ ...prevFilterBy, type }))
    }
    console.log('filterByExplore:', filterByExplore)
  }, [type, filterByExplore])

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
