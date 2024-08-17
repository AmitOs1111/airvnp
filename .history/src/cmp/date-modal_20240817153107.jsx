import React, { useState } from 'react'
import { DateRangePicker } from 'react-date-range'

import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export function DateModal() {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  })

  function handleSelect(ranges) {
    console.log('ranges:', ranges)
    setSelectionRange({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
      key: 'selection',
    })
  }
  return (
    <section className="date-picker-details">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
    </section>
  )
}
