import { Repeat } from '@mui/icons-material'

export function ReviewsDetails({ stay }) {
  return (
    <section className="reviews-details">
      {stay.reviews.map((review, idx) => (
        <article key={review.by._id} className="review-card ">
          <div className="user-details flex align-center">
            <div>
              <img
                className="img-user"
                src={require(`../assets/img/img-user/user${(idx % 3) + 1}.png`)}
                alt="user"
              />
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
              <li>
                <h4>Stayed with kids</h4>
              </li>
            </ul>
          </div>

          <div className="txt-review">
            <p>{review.txt}</p>
          </div>
        </article>
      ))}
    </section>
  )
}
