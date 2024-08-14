import { useState } from 'react'
import { StayList } from '../cmp/stay-list.jsx'
import { dataService } from '../services/demo.data.js'

export function Explore() {
  const [stays, setStay] = useState(dataService.getDataStays())
  return (
    <section className="explore">
      <StayList stays={stays} />
    </section>
  )
}
