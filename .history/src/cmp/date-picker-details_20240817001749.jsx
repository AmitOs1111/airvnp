import { useState } from 'react'
import { DateRange } from 'react-date-range'

import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

export function DatePickerDetails() {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  })

  function handleSelect(ranges) {
    console.log(ranges)
    setSelectionRange({
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    })
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  }

  return (
    <section className="date-picker-details">
      <DateRange ranges={[selectionRange]} onChange={handleSelect()} />
    </section>
  )
}
