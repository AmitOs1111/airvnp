import { PlaceModal } from '../cmp/place-modal.jsx'
import { DateModal } from '../cmp/date-modal.jsx'
import { GuestModal } from '../cmp/guest-modal.jsx'
import { useState } from 'react'

export function SearchModal({ selectedSearch }) {
  const [filterByEdit, setFilterByEdit] = useState({
    place: '',
    checkIn: '',
    checkOut: '',
    guest: {
      adults: 0,
      childrens: 0,
      infants: 0,
      pets: 0,
    },
  })

  return (
    <section
      className={`header-search-modal ${selectedSearch} flex align-center justify-center`}
    >
      <DynamicCmp cmpType={selectedSearch} />
    </section>
  )
}

function DynamicCmp(props) {
  switch (props.cmpType) {
    case 'place':
      return <PlaceModal />

    case 'date':
      return <DateModal />

    case 'guest':
      return <GuestModal />
  }
}
