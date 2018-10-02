import React from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

class ReactAwesomeSwiper extends React.Component {
    swiper = null
    componentDidMount() {
        this.swiper = new Swiper('.swiper-container', this.props.config);
    }
    componentDidUpdate() {
        this.swiper.destroy();
        this.swiper = new Swiper('.swiper-container', this.props.config);
    }
    render() {
        const { config, className, ...rest } = this.props;
        return (
            <div className={`swiper-container ${className}`} {...rest}>
                {this.props.children}
            </div>
        );
    }
}

export default ReactAwesomeSwiper;