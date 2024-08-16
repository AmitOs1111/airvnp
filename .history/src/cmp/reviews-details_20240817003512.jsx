export function ReviewsDetails({ stay }) {
  return (
    <section className="reviews-details">
      {stay.reviews.map((review) => (
        <article key={review.by._id} className="review-card">
          <div className="user-details flex">
            <div>
              <img src={require(`${review.by.ingUrl}`)} alt="" />
              user
            </div>
            <div>
              <h3>{review.by.fullname}</h3>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}
