export function ReviewsDetails({ stay }) {
  return (
    <section className="reviews-details">
      {stay.reviews.map((review) => (
        <article key={review.by._id} className="review-card">
          <div className="user-details flex">
            <div>
              <img src={stay.by.ingUrl} alt="" />
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}
