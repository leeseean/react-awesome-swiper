import * as React from 'react';
import Swiper, { SwiperOptions } from 'swiper';

export interface ReactSwiperProps extends SwiperOptions {
    children?: React.ReactNode;
    config: SwiperOptions;
    className?: string;
    style?: React.CSSProperties;
    rest?: any
}

declare const ReactSwiper: FunctionComponent<ReactSwiperProps>;

export interface ReactSwiperState {

}

declare class ReactSwiper extends React.Component<ReactSwiperProps, ReactSwiperState> {
    state: ReactSwiperState;
    componentDidMount(): void;
    componentDidUpdate(prevProps: ReactSwiperProps): void;
    componentWillUnmount(): void;
    render: () => JSX.Element;
}

export default ReactSwiper;
