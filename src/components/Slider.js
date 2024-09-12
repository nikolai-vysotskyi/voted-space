import React, {useState} from "react";
import {useSelector} from 'react-redux';
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";

let Slider = () => {
        const Slider = useSelector((state) => state.slider);
        // let currentSlide = Slider.currentSlide;
        let slides = Slider.slides;

        const [currentSlide, setCount] = useState(Slider.currentSlide);

        function counter(type) {
            switch (type) {
                case 'increment':
                    return currentSlide < 4 ? setCount(currentSlide + 1) : setCount(0);
                case 'decrement':
                    return currentSlide > 0 ? setCount(currentSlide - 1) : setCount(4);
                case 0: {
                    return currentSlide + 2 <= 4 ? setCount(currentSlide + 2) : setCount((currentSlide + 2) - 5);
                }
                case 1:
                    return currentSlide + 1 <= 4 ? setCount(currentSlide + 1) : setCount((currentSlide + 1) - 5);
                case 2: {
                    return setCount(currentSlide);
                }
                case 3:
                    return currentSlide - 1 >= 0 ? setCount(currentSlide - 1) : setCount(5 + (currentSlide - 1));
                case 4:
                    return currentSlide - 2 >= 0 ? setCount(currentSlide - 2) : setCount(5 + (currentSlide - 2));
                default:
                    throw new Error();
            }
        }

        function classType(type) {
            let classType = 'slide_img ';
            classType += 'slide_img-' + slideType(type);

            return classType;
        }

        function slideType(type) {
            let slType = 2;
            if (type === 0) {
                slType = currentSlide - 2 >= 0 ? (currentSlide - 2) : (5 + (currentSlide - 2));
            } else if (type === 1) {
                slType = currentSlide - 1 >= 0 ? (currentSlide - 1) : (5 + (currentSlide - 1));
            } else if (type === 2)
                slType = currentSlide ? currentSlide : currentSlide;
            else if (type === 3) {
                slType = currentSlide + 1 <= 4 ? (currentSlide + 1) : ((currentSlide + 1) - 5);
            } else if (type === 4) {
                slType = currentSlide + 2 <= 4 ? (currentSlide + 2) : ((currentSlide + 2) - 5);
            }
            return slType;
        }

        return (
            <section className='slider'>
                <div className='slider_wrapper'>
                    <div className='slider_slides'>
                        <div className='slide_arrow slide_arrow-left' onClick={() => counter('decrement')}>
                            <ArrowLeft></ArrowLeft>
                        </div>
                        <div className={classType(0)} onClick={() => counter(slideType(0))}>
                            <img className='slide_img-center' src={slides[currentSlide] ? slides[currentSlide].image : ''}
                                 alt=""/>
                            <div className='slide_img-сircle'>
                                <div className='slide_img-dot'></div>
                            </div>
                        </div>
                        <div className={classType(1)} onClick={() => counter(slideType(1))}>
                            <img className='slide_img-center' src={slides[currentSlide] ? slides[currentSlide].image : ''}
                                 alt=""/>
                            <div className='slide_img-сircle'>
                                <div className='slide_img-dot'></div>
                            </div>
                        </div>
                        <div className={classType(2)} onClick={() => counter(slideType(2))}>
                            <img className='slide_img-center' src={slides[currentSlide] ? slides[currentSlide].image : ''}
                                 alt=""/>
                            <div className='slide_img-сircle'>
                                <div className='slide_img-dot'></div>
                            </div>
                        </div>
                        <div className={classType(3)} onClick={() => counter(slideType(3))}>
                            <img className='slide_img-center' src={slides[currentSlide] ? slides[currentSlide].image : ''}
                                 alt=""/>
                            <div className='slide_img-сircle'>
                                <div className='slide_img-dot'></div>
                            </div>
                        </div>

                        <div className={classType(4)} onClick={() => counter(slideType(4))}>
                            <img className='slide_img-center' src={slides[currentSlide] ? slides[currentSlide].image : ''}
                                 alt=""/>
                            <div className='slide_img-сircle'>
                                <div className='slide_img-dot'></div>
                            </div>
                        </div>
                        <div className='slide_arrow slide_arrow-right' onClick={() => counter('increment')}>
                            <ArrowRight></ArrowRight>
                        </div>
                    </div>
                    <div>
                        <div className='slide_min-arrows'>
                            <div className='slide_arrow slide_min-arrow'  onClick={() => counter('decrement')}>
                                <ArrowLeft/>
                            </div>
                            <div className='h1 slide_header'>{slides[currentSlide] ? slides[currentSlide].title : ''}</div>
                            <div className='slide_arrow slide_min-arrow'  onClick={() => counter('increment')}>
                                <ArrowRight/>
                            </div>
                        </div>
                        <div className='text slide_text'>{slides[currentSlide] ? slides[currentSlide].text : ''}</div>
                        <button>Проголосовать</button>
                    </div>
                </div>
            </section>
        );
    }
;
// Slider = React.memo(Slider);

export default Slider;
