import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export function FilterCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <section className="filter-carousel" style={{ width: '500 px' }}>
      <Slider {...settings}>
        <div>
          <img
            src={require('../assets/img/filter-icons/amazing-pools.png')}
            alt=""
          />
        </div>
        <div>
          <img
            src={require('../assets/img/filter-icons/amazing-pools.png')}
            alt=""
          />
        </div>
        <div>
          <img
            src={require('../assets/img/filter-icons/amazing-pools.png')}
            alt=""
          />
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
