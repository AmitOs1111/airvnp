import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { loadStayById } from '../store/stay.action'
import { useEffect, useState } from 'react'

export function SummaryReserve() {
  const { filterBy } = useSelector((state) => state.stayModule)
  const [stay, setStay] = useState(null)
  const params = useParams()

  useEffect(() => {
    // console.log('params:', params)
    loadStayById(params.id).then((stay) => setStay(stay))
  }, [])

  if (!stay) return <section>Loading...</section>
  return (
    <section className="summary-reserve flex ">
      <div className="right">
        <h1>Request to book</h1>

        <div className="dates flex space-between">
          <div>
            <h3>Dates</h3>
            <h4>Aug 28 -Sep 2</h4>
          </div>
          <button>Edit</button>
        </div>

        <div className="guests flex space-between">
          <div>
            <h3>Guests</h3>
            <h4>1 guest</h4>
          </div>
          <button>Edit</button>
        </div>
      </div>

      <div className="left">
        <div>
          <img src={stay.imgUrls[0]} alt="" />
        </div>
        <h3>Price details</h3>
      </div>
    </section>
  )
}
