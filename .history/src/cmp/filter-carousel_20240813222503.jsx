import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export function FilterCarousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
  }
  return (
    <section className="filter-carousel flex align-center justify-center">
      <Slider {...settings}>
        <div className="icon-carousel flex  align-center justify-center">
          <img src={require('../assets/img/filter-icons/icons.png')} alt="" />
          <h3>icons</h3>
        </div>
        <div className="icon-carousel flex column align-center justify-center">
          <img
            src={require('../assets/img/filter-icons/amazing-pools.png')}
            alt=""
          />{' '}
          <h3>icons</h3>
        </div>
        <div className="icon-carousel flex column align-center justify-center">
          <img
            src={require('../assets/img/filter-icons/amazing-views.png')}
            alt=""
          />
          <h3>icons</h3>
        </div>
        <div className="icon-carousel flex column align-center justify-center">
          <img src={require('../assets/img/filter-icons/camping.png')} alt="" />
          <h3>icons</h3>
        </div>
        <div className="icon-carousel flex column align-center justify-center">
          <img src={require('../assets/img/filter-icons/camping.png')} alt="" />
          <h3>icons</h3>
        </div>
        <div className="icon-carousel flex column align-center justify-center">
          <img src={require('../assets/img/filter-icons/camping.png')} alt="" />
          <h3>icons</h3>
        </div>
        <div className="icon-carousel flex column align-center justify-center">
          <img src={require('../assets/img/filter-icons/camping.png')} alt="" />
          <h3>icons</h3>
        </div>
        <div className="icon-carousel flex column align-center justify-center">
          <img src={require('../assets/img/filter-icons/camping.png')} alt="" />
          <h3>icons</h3>
        </div>
        <div className="icon-carousel flex column align-center justify-center">
          <img src={require('../assets/img/filter-icons/camping.png')} alt="" />
          <h3>icons</h3>
        </div>
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
