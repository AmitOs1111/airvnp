import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { loadStayById } from '../store/stay.action'
import { useEffect, useState } from 'react'

export function SummaryReserve() {
  const { filterBy } = useSelector((state) => state.stayModule)
  const [stay, setStay] = useState(null)
  const params = useParams()

  useEffect(() => {
    console.log('params:', params)
    loadStayById(params.id).then((stay) => setStay(stay))
  }, [])

  //   function loadStay() {
  //     const currStay = stays.find((stay) => stay._id === params.id)

  //     if (currStay) setStay(currStay)
  //   }
  if (!stay) return <section>Loading...</section>

  return <section className="summary-reserve ">SummaryReserve</section>
}
