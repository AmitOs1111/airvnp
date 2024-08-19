import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { loadStayById } from '../store/stay.action'

export function FullGallery() {
  const [stay, setStay] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    console.log('params:', params)
    loadStayById(params.id).then((stay) => setStay(stay))
  }, [])

  if (!stay) return <section>Loading...</section>

  return <section className="full-gallery">FullGallery</section>
}
