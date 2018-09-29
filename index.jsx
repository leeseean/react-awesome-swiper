import React from 'react';
import Swiper from 'swiper';
import './node_modules/swiper/dist/css/swiper.min.css';

class ReactAwesomeSwiper extends React.Component {
    swiperRef = null
    componentDidMount() {
        new Swiper(this.swiperRef, this.props.config);
    }
    render() {
        return (
            <div className="swiper-container" ref={ref => this.swiperRef = ref}>
                {this.props.children}
            </div>
        );
    }
}

export default ReactAwesomeSwiper;