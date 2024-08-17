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
      children: 0,
      infants: 0,
      pets: 0,
    },
  })

  function onSetFilterByEdit(guest) {
    console.log('guest:', guest)
    const field = guest.type
    const value = filterByEdit[field]

    if (value === 0 && guest.val < 0) return

    value += guest.val

    setFilterByEdit((prevFilterByEdit) => ({
      ...prevFilterByEdit,
      [field]: value,
    }))
  }

  return (
    <section
      className={`header-search-modal ${selectedSearch} flex align-center justify-center`}
    >
      <DynamicCmp
        cmpType={selectedSearch}
        onSetFilterByEdit={onSetFilterByEdit}
      />
    </section>
  )
}

function DynamicCmp(props) {
  switch (props.cmpType) {
    case 'place':
      return <PlaceModal onSetFilterByEdit={props.onSetFilterByEdit} />

    case 'date':
      return <DateModal onSetFilterByEdit={props.onSetFilterByEdit} />

    case 'guest':
      return <GuestModal onSetFilterByEdit={props.onSetFilterByEdit} />
  }
}
