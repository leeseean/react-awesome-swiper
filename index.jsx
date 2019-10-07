import React from 'react';
import Swiper from 'swiper';
import createHash from './hash.js';
import 'swiper/dist/css/swiper.min.css';

class ReactAwesomeSwiper extends React.Component {
    constructor(...params) {
        super(...params);
        this.id = `swiper${createHash(16)}`;
        this.swiper = null;
    }
    componentDidMount() {
        this.swiper = new Swiper(`#${this.id}`, this.props.config);
    }
    componentDidUpdate() {
        this.swiper.destroy();
        this.swiper = new Swiper(`#${this.id}`, this.props.config);
    }
    componentWillUnmount() {
        this.swiper.destroy();
    }
    render() {
        const { config, className, ...rest } = this.props;
        return (
            <div id={this.id} className={`swiper-container ${className}`} {...rest}>
                {this.props.children}
            </div>
        );
    }
}

export default ReactAwesomeSwiper;