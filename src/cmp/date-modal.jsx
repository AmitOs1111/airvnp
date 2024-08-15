import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export function DateModal() {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <section className="date-modal">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </section>
  )
}
