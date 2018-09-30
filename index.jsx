import React from 'react';
import Swiper from 'swiper';
import './node_modules/swiper/dist/css/swiper.min.css';

class ReactAwesomeSwiper extends React.Component {
    swiper = null
    componentDidMount() {
        this.swiper = new Swiper('.swiper-container', this.props.config);
    }
    render() {
        return (
            <div className="swiper-container">
                {this.props.children}
            </div>
        );
    }
}

export default ReactAwesomeSwiper;