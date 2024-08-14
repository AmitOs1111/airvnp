import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { dataIconsCarouselService } from '../services/icons-carousel.data'
import { NavLink, useNavigate } from 'react-router-dom'

export function FilterCarousel() {
  const navigate = useNavigate()
  var settings = {
    className: 'carousel',
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 12,
    slidesToScroll: 2,
  }

  const [icons, setIcons] = useState(
    dataIconsCarouselService.getDataIconsCarousel()
  )

  function Doit() {
    console.log('Doit!')
    navigate('explore')
  }

  if (!icons) return

  return (
    <section className="filter-carousel flex column align-center justify-center">
      <button
        onClick={() => {
          Doit()
        }}
      >
        click me!
      </button>
      <Slider {...settings}>
        {icons.map((icon) => {
          return (
            <NavLink to={`explore/${icon.label}`} key={icon.label}>
              <div className="icon-carousel">
                <img
                  src={require(`../assets/img/filter-icons/${icon.label}.gif`)}
                  alt="icon"
                />
                <h3>{icon.label}</h3>
              </div>
            </NavLink>
          )
        })}
      </Slider>
    </section>
  )
}
