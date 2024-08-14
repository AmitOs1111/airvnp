import { StayList } from '../cmp/stay-list.jsx'

export function Explore() {
  const [stays, setStay] = useState(dataService.getDataStays())
  return (
    <section className="explore">
      <StayList stays={stays} />
    </section>
  )
}
