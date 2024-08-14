import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { dataIconsCarouselService } from '../services/icons-carousel.data'
import { useNavigate } from 'react-router-dom'

export function FilterCarousel() {
  const navigate = useNavigate()
  var settings = {
    className: 'carousel',
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 6,
    slidesToScroll: 2,
  }

  const [icons, setIcons] = useState(
    dataIconsCarouselService.getDataIconsCarousel()
  )

  function onExplore(label) {
    console.log('label:', label)
    navigate(label)
  }

  if (!icons) return

  return (
    <section className="filter-carousel flex align-center justify-center">
      <Slider {...settings}>
        {icons.map((icon) => {
          return (
            <article
              key={icon.label}
              className="icon-carousel"
              onClick={() => onExplore(icon.label)}
            >
              <img
                src={require(`../assets/img/filter-icons/${icon.label}.gif`)}
                alt="icon"
              />
              <h3>{icon.label}</h3>
            </article>
          )
        })}
      </Slider>
    </section>
  )
}
