import React, { useState } from 'react'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'

export function DateModal() {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [focusedInput, setFocusedInput] = useState(null)

  return (
    <section className="date-modal">
      <DateRangePicker
        startDate={startDate} // The start date of the range
        startDateId="start_date_id" // The ID for the start date input
        endDate={endDate} // The end date of the range
        endDateId="end_date_id" // The ID for the end date input
        onDatesChange={({ startDate, endDate }) => {
          setStartDate(startDate)
          setEndDate(endDate)
        }} // Callback to handle date changes
        focusedInput={focusedInput} // Input field that is currently focused
        onFocusChange={(focusedInput) => setFocusedInput(focusedInput)} // Callback to handle focus changes
        showClearDates={true} // Option to show a clear date button
        numberOfMonths={2} // Number of months to show in the calendar
      />
    </section>
  )
}
