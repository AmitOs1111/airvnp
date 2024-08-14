import React from 'react'
import Slider from 'react-slick'

export function ImgCarousel({ imgs }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {imgs.map((img, idx) => (
          <article key={'img' + idx}>
            <img src={stay.imgUrls[idx]} alt="idx" />
          </article>
        ))}
      </Slider>
    </div>
  )
}
