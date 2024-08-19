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
      <div className="full-gallery-header flex align-center">
        <button onClick={() => navigate(`home/stay/${stay._id}`)}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <h1>Show all photos</h1>
      </div>
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
