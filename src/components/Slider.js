
import React, {useState} from "react";
import {useSelector} from 'react-redux';
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";

const Slide = ({slide, index, classType, slideType, setCount}) => {
    return (
        <div
            key={index}
            className={classType}
            onClick={setCount}>
            <img className='slide_img-center'
                 src={slide ? slide.image : ''}
                 alt=""/>
            <div className={` ${slideType !== 2 ? 'inactive' : ''}`}/>
            <div className='slide_img-сircle'>
                <div className='slide_img-dot'></div>
            </div>
        </div>
    )
}

let Slider = () => {
    const {slides, currentSlide: defaultSlide} = useSelector((state) => state.slider);

    const [currentSlide, setCount] = useState(defaultSlide);
    const realSlide = slides.length - 1 - currentSlide;

    const changeSlide = (offset) => {
        setCount((prevSlide) => (prevSlide + offset + slides.length) % slides.length);
    };

    const classType = (index) => `slide_img slide_img-${slideType(index)}`;

    const slideType = (index) => {
        const positions = [currentSlide - 2, currentSlide - 1, currentSlide, currentSlide + 1, currentSlide + 2];
        return (positions[index] + slides.length) % slides.length;
    };


    return (
        <section className='slider'>
            <div className='slider_wrapper'>
            <div className='slider_slides'>
                        <div className='slide_arrow slide_arrow-left' onClick={() => changeSlide(-1)}>
                            <ArrowLeft/>
                        </div>
                        {
                            Array.from({length: 5}).map((_, index) => {
                                return (
                                    <Slide
                                        key={index}
                                        classType={classType(index)}
                                        setCount={() => (slideType(index) !== 2) && setCount(slides.length - 1 - index)}
                                        slideType={() => slideType(index)}
                                        slide={slides[index]}
                                    />
                                    // <div
                                    //     key={index}
                                    //     className={classType(index)}
                                    //      onClick={() => (slideType(index) === 2) ? null : setCount(slides.length - 1 - index)}>
                                    //     <img className='slide_img-center'
                                    //          src={slides[index] ? slides[index].image : ''}
                                    //          alt=""/>
                                    //     <div className={` ${slideType(index) !== 2 ? 'inactive' : ''}`}/>
                                    //     <div className='slide_img-сircle'>
                                    //         <div className='slide_img-dot'></div>
                                    //     </div>
                                    // </div>
                                );
                            })
                        }
                        <div className='slide_arrow slide_arrow-right' onClick={() => changeSlide(1)}>
                            <ArrowRight/>
                        </div>
                    </div>
                    <div>
                        <div className='slide_min-arrows'>
                            <div className='slide_arrow slide_min-arrow' onClick={() => changeSlide(-1)}>
                                <ArrowLeft/>
                            </div>
                            <div className='h1 slide_header'>
                                {slides[realSlide] ? slides[realSlide].title : ''}</div>
                            <div className='slide_arrow slide_min-arrow' onClick={() => changeSlide(1)}>
                                <ArrowRight/>
                            </div>
                        </div>
                        <div className='text slide_text'>{slides[realSlide] ? slides[realSlide].text : ''}</div>
                        <button>Проголосовать</button>
                    </div>
                </div>
            </section>
        );
    }
;

export default Slider;
