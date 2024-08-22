import { useEffect, useState } from 'react'

import { setFilterBy } from '../store/stay.action.js'
import { useNavigate } from 'react-router-dom'
import { AirbnbButton } from './airbnb-button.jsx'
import { SearchModal } from './search-modal.jsx'
import { stayService } from '../services/stay.service.js'

export function FilterBar({
  setIsOpenLargeSearch,
  selectedSearch,
  selectSearch,
}) {
  const navigate = useNavigate()
  const [filterByEdit, setFilterByEdit] = useState(stayService.getEmptyFilter())

  useEffect(() => {
    console.log('filterByEdit:', filterByEdit)
  }, [filterByEdit])

  function onSetFilterByEdit(val) {
    const field = val.type
    const value = val.value

    setFilterByEdit((prevFilterByEdit) => ({
      ...prevFilterByEdit,
      [field]: value,
    }))
  }

  function counterGuest() {
    const valuesArray = Object.values(filterByEdit.guest)
    return valuesArray.reduce((acc, currentValue) => {
      return acc + currentValue
    }, 0)
  }

  function doSearchStay() {
    // console.log('doSearchStay', filterByEdit)
    setFilterBy(filterByEdit).then(() => {
      setIsOpenLargeSearch(false)
      // const queryString = new URLSearchParams(filterByEdit).toString()
      // console.log('queryString:', queryString)
      navigate('/explore')
    })
  }

  return (
    <section className="filter-bar ">
      <div className="filter-bar-content  flex align-center">
        <div
          className="filter-bar-item where-search  btn-border"
          onClick={() => selectSearch('place')}
        >
          <h3>where</h3>
          <h4>
            {filterByEdit.place ? filterByEdit.place : 'search destinations'}
          </h4>
        </div>

        <div
          className=" check-in-out-search flex align-center space-around"
          onClick={() => selectSearch('date')}
        >
          <div className="check-in  filter-bar-item btn-border">
            <h3>check in</h3>
            <h4>
              {' '}
              {filterByEdit.dateReservation
                ? filterByEdit.dateReservation.checkIn.getDate() +
                  ',' +
                  filterByEdit.dateReservation.checkIn.getMonth()
                : 'add dates'}
            </h4>
          </div>
          <div className="check-out filter-bar-item btn-border">
            <h3>check out</h3>
            <h4>
              {filterByEdit.dateReservation
                ? filterByEdit.dateReservation.checkOut.getDate() +
                  ',' +
                  filterByEdit.dateReservation.checkOut.getMonth()
                : 'add dates'}
            </h4>
          </div>
        </div>

        <div
          className="filter-bar-item who-search flex  space-between align-center"
          onClick={() => selectSearch('guest')}
        >
          <div className="who-search-content ">
            <h3>who</h3>
            <h4>{counterGuest() ? counterGuest() : 'add guests'}</h4>
          </div>
          <AirbnbButton
            content={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: 'block',
                  fill: 'none',
                  height: '16px',
                  width: '16px',
                  stroke: 'currentcolor',
                  strokeWidth: '4',
                  overflow: 'visible',
                }}
              >
                <path
                  fill="none"
                  d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
                ></path>
              </svg>
            }
            func={doSearchStay}
          />
        </div>

        {selectedSearch && (
          <SearchModal
            onSetFilterByEdit={onSetFilterByEdit}
            selectedSearch={selectedSearch}
          />
        )}
      </div>
    </section>
  )
}
