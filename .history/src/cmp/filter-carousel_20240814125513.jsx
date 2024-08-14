import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { dataIconsCarouselService } from '../services/icons-carousel.data'

export function FilterCarousel() {
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

  if (!icons) return
  console.log(icons)
  return (
    <section className="filter-carousel flex align-center justify-center">
      <Slider {...settings}>
        {icons.map((icon, idx) => {
          return (
            <article key={icons.label + idx}>
              <img src={require(icon.imgUrl)} alt="icon" />
              {/* <img
              src={require('../assets/img/filter-icons/Icons.gif')}
              alt="icon"
            /> */}
              {/* <img src={require(`${icon.imgUrl}`)} alt="icon" /> */}
              <h3>{icon.label}</h3>
            </article>
          )
        })}
      </Slider>
    </section>
  )
}
