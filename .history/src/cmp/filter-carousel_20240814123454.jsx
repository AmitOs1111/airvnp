import React from 'react'
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

  const icons = dataIconsCarouselService.getDataIconsCarousel()

  return (
    <section className="filter-carousel flex align-center justify-center">
      <Slider {...settings}>
        {icons.map((icon) => (
          <article key={icons.label} className="flex column">
            <img src={icon.imgUrl} alt="icon" />
            {/* <img src={require(`${icon.imgUrl}`)} alt="icon" /> */}
            <h3>{icon.label}</h3>
          </article>
        ))}
        {/* <div className="icon-carousel  ">
          <img src={require('../assets/img/filter-icons/icons.png')} alt="" />
          <h3>icons</h3>
        </div>
        <div className="icon-carousel ">
          <img
            src={require('../assets/img/filter-icons/amazing-pools.png')}
            alt=""
          />{' '}
          <h3>icons</h3>
        </div>
        <div className="icon-carousel ">
          <img
            src={require('../assets/img/filter-icons/amazing-views.png')}
            alt=""
          />
          <h3>icons</h3>
        </div>
        <div className="icon-carousel ">
          <img src={require('../assets/img/filter-icons/camping.png')} alt="" />
          <h3>icons</h3>
        </div>
        <div className="icon-carousel ">
          <img src={require('../assets/img/filter-icons/camping.png')} alt="" />
          <h3>icons</h3>
        </div>
        <div className="icon-carousel ">
          <img src={require('../assets/img/filter-icons/camping.png')} alt="" />
          <h3>icons</h3>
        </div>
        <div className="icon-carousel ">
          <img src={require('../assets/img/filter-icons/camping.png')} alt="" />
          <h3>icons</h3>
        </div>
        <div className="icon-carousel ">
          <img src={require('../assets/img/filter-icons/camping.png')} alt="" />
          <h3>icons</h3>
        </div>
        <div className="icon-carousel ">
          <img src={require('../assets/img/filter-icons/camping.png')} alt="" />
          <h3>icons</h3>
        </div> */}
      </Slider>
    </section>
  )
}

{
  /* <section className="filter-by-icon ">
<ul className="flex justify-center" style={{ height: '40 px' }}>
  <li>
    <img src={require('../assets/img/filter-icons/icons.png')} alt="" />
  </li>
  <li>
    <img
      src={require('../assets/img/filter-icons/amazing-pools.png')}
      alt=""
    />
  </li>
  <li>
    <img
      src={require('../assets/img/filter-icons/amazing-views.png')}
      alt=""
    />
  </li>
  <li>
    <img src={require('../assets/img/filter-icons/camping.png')} alt="" />
  </li>
</ul>
</section> */
}
