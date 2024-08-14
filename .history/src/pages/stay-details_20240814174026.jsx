import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dataService } from '../services/demo.data'

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
      <div className="details-header flex space-between">
        <div>{stay.name}</div>
        <div className="flex">
          <h3>Share</h3>
          <h3>Save</h3>
        </div>
      </div>
    </section>
  )
}
