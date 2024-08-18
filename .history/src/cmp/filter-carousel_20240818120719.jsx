import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { dataIconsCarouselService } from '../services/icons-carousel.data'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export function FilterCarousel() {
  var settings = {
    className: 'carousel',
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 12,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 18,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 50,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  }

  const [icons, setIcons] = useState(
    dataIconsCarouselService.getDataIconsCarousel()
  )

  if (!icons) return

  return (
    <section className="filter-carousel flex align-center justify-center">
      <Slider {...settings}>
        {icons.map((icon) => {
          return (
            // <Link to="/explore" key={icon.label}>
            <NavLink to={`/home/explore/${icon.label}`} key={icon.label}>
              <div className="icon-carousel">
                <img
                  src={require(`../assets/img/filter-icons/${icon.label}.gif`)}
                  alt="icon"
                />
                <h3>{icon.label}</h3>
              </div>
              {/* // </Link> */}
            </NavLink>
          )
        })}
      </Slider>
    </section>
  )
}
