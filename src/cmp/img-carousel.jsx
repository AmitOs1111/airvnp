import React from 'react'
import Slider from 'react-slick'

export function ImgCarousel({ stay }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {stay.imgUrls.map((img, idx) => (
          <article key={'img' + idx}>
            <img src={img} alt="idx" />
          </article>
        ))}
      </Slider>
    </div>
  )
}
