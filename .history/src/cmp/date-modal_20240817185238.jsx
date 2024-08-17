import React, { useEffect, useState } from 'react'
import { DateRangePicker } from 'react-date-range'

import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { Value } from 'sass'

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export function DateModal({ onSetFilterByEdit }) {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  })

  useEffect(() => {
    const dateReservation = {
      checkIn: selectionRange.startDate,
      checkOut: selectionRange.endDate,
    }
    console.log('dateReservation', dateReservation)
    onSetFilterByEdit({ type: 'dateReservation', value: dateReservation })
  }, [selectionRange])

  function handleSelect(ranges) {
    console.log('ranges:', ranges)
    setSelectionRange({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
      key: 'selection',
    })
  }
  return (
    <section className="date-picker-modal">
      <DateRangePicker
        className="date-range-picker-modal"
        months={2}
        direction="horizontal"
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
    </section>
  )
}
