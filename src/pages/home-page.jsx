import { FilterByIcon } from '../cmp/filter-by-icon.jsx'
import { StayList } from '../cmp/stay-list.jsx'
import { dataService } from '../services/demo.data.js'

export function HomePage() {
  const stays = dataService.getDataStays()
  return (
    <section className="home-page">
      <FilterByIcon />

      <div className="dream-stay">
        <StayList stays={stays} />
      </div>

      <div className="past-experiences">
        <h2>Past experiences</h2>
        <StayList stays={stays} />
      </div>
    </section>
  )
}
