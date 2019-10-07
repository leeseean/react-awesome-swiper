# react-awesome-swiper

>Swiper4 component for React, support pc and mobile

# install

```npm install react-awesome-swiper```

# useage
>config is as the same as [Swiper.js](http://www.idangero.us/swiper/get-started/)，API document [Swiper](https://swiperjs.com/api/)，[demos](https://swiperjs.com/demos/)
```javascript
import React from 'react';
import AwesomeSwiper from 'react-awesome-swiper';
//this config is same as idangrous swiper
const config = {
  loop : true,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    bulletElement : 'li',
    hideOnClick :true,
    clickable :true,
  },
  on: {
    slideChange: function () {
      console.log(this.activeIndex);
    },
  },
};
class Example extends React.Component {
  swiperRef = null
  goNext = () => {//use `this.swiperRef.swiper` to get the instance of Swiper
    this.swiperRef.swiper.slideNext();
  }
  render() {

    return (
      <AwesomeSwiper ref={ref => (this.swiperRef = ref)} config={config} className="your-classname">
        <div className="swiper-wrapper">
          <div className="swiper-slide">slider1</div>
          <div className="swiper-slide">slider2</div>
          <div className="swiper-slide">slider3</div>
        </div>
        <div className="swiper-button-prev"></div><!--左箭头-->
        <div className="swiper-button-next"></div><!--右箭头-->
        <div className="swiper-pagination"></div>
      </AwesomeSwiper>
    )
  }
}

export default Example;
```
