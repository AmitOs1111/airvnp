import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dataService } from '../services/demo.data'

export function StayDetails() {
  const [stays, setStays] = useState(dataService.getDataStays())
  const [stay, setStay] = useState(null)
  const params = useParams()
  useEffect(() => {
    console.log('params:', params)
  }, [])

  function loadStay() {
    const currStay = stays.find((stay) => stay._id === params)
    if (currStay) {
      console.log('currStay:', currStay)
      setStay(currStay)
    }
  }

  if (!stay) return

  return <section className="stay-details">StayDetails</section>
}
