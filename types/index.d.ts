import * as React from 'react';
import Swiper, { SwiperOptions } from 'swiper';

interface ReactSwiperProps extends SwiperOptions {
    children?: React.ReactNode;
    config: SwiperOptions;
    className?: string;
    style?: React.CSSProperties;
    rest?: any
}

interface ReactSwiperState {

}

declare module 'react-awesome-swiper' {
    export default class ReactSwiper extends React.Component<ReactSwiperProps, ReactSwiperState> {
        state: ReactSwiperState;
        componentDidMount(): void;
        componentDidUpdate(prevProps: ReactSwiperProps): void;
        componentWillUnmount(): void;
        render: () => React.ReactElement;
    }
}