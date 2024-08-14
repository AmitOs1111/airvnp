import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dataService } from '../services/demo.data'

export function StayDetails() {
  const [stays, setStay] = useState(dataService.getDataStays())
  const params = useParams()
  useEffect(() => {
    console.log('params:', params)
  }, [])

  function loadStay() {}
  return <section className="stay-details">StayDetails</section>
}
