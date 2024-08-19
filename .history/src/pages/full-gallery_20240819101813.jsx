import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { loadStayById } from '../store/stay.action'
import { Article } from '@mui/icons-material'

export function FullGallery() {
  const [stay, setStay] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    console.log('params:', params)
    loadStayById(params.id).then((stay) => setStay(stay))
  }, [])

  if (!stay) return <section>Loading...</section>

  return (
    <section className="full-gallery ">
      <button onClick={() => navigate(`/details/${stay._id}`)}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <div className="container-gallery">
        {stay.imgUrls.map((img, idx) => (
          <article key={idx}>
            <img src={img} alt="stay image" />
          </article>
        ))}
      </div>
    </section>
  )
}
