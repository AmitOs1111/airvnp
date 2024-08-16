import { DateRange } from 'react-date-range'

export function DatePickerDetails() {
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }

  function handleSelect(ranges) {
    console.log(ranges)
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  }

  return (
    <section className="date-picker-details">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
    </section>
  )
}
