import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function StayDetails() {
  // const [params,setParams]=useState()
  const params = useParams()
  useEffect(() => {
    console.log('params:', params)
  }, [])
  return <section className="stay-details">StayDetails</section>
}
