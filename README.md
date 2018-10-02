# react-awesome-swiper

>Swiper4 component for React, support pc and mobile

# install

```npm install react-awesome-swiper```

# Recommendation

>Swiper stylesheet file is required

### Use Swiper stylesheet file from CDN

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.css">
```

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css">
```

### OR
Import stylesheet file from style/  folder 

# useage
>config is as the same as Swiper.js, see the document [Swiper](http://www.idangero.us/swiper/get-started/) 
```javascript
import React from 'react';
import AwesomeSwiper from 'react-awasome-swiper';

const config = {
  width: 800,
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
      <AwesomeSwiper ref={this.swiperRef = ref} config={config}>
        <div class="swiper-wrapper">
          <div class="swiper-slide">slider1</div>
          <div class="swiper-slide">slider2</div>
          <div class="swiper-slide">slider3</div>
        </div>
        <div class="swiper-button-prev"></div><!--左箭头-->
        <div class="swiper-button-next"></div><!--右箭头-->
        <div class="swiper-pagination"></div>
      </AwesomeSwiper>
    )
  }
}

export default Example;
```
