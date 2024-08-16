import { Repeat } from '@mui/icons-material'

export function ReviewsDetails({ stay }) {
  return (
    <section className="reviews-details">
      {stay.reviews.map((review) => (
        <article key={review.by._id} className="review-card">
          <div className="user-details flex">
            <div>
              {/* <img src={require(`${review.by.ingUrl}`)} alt="" /> */}
              user
            </div>
            <div>
              <h3>{review.by.fullname}</h3>
            </div>
          </div>

          <div className="date-rate-review">
            <ul className="flex">
              <li>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>{review.at}</li>
              <li>Stayed with kids</li>
            </ul>
          </div>
        </article>
      ))}
    </section>
  )
}
