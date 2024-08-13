import { FilterByIcon } from '../cmp/filter-by-icon.jsx'
import { StayList } from '../cmp/stay-list.jsx'

export function HomePage() {
  return (
    <section className="home-page">
      <FilterByIcon />

      <div className="dream-stay">
        <StayList />
      </div>

      <div className="past-experiences">
        <h2>Past experiences</h2>
        <StayList />
      </div>
    </section>
  )
}
