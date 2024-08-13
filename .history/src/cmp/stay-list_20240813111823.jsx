import { PreviewStay } from '../cmp/preview-stay.jsx'

export function StayList({ stays }) {
  return (
    <section className="stay-list">
      {stays.map((stay) => (
        <article key={stay._id}>
          <PreviewStay stay={stay} />
        </article>
      ))}
    </section>
  )
}
