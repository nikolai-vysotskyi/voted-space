import Slide1 from './../../assets/img/1991.jpg';

const initialState = {
    currentSlide: 2,
    slides: [{
        id: 1,
        title: 'STARTAP WORKOUT 2019',
        text: 'Каждый год в центре развития стартапов «1991» проводится STARTAP WORKOUT, на котором зарождаются многие проекты! Презентация 10 стартапов и лишь один из них получит грант...',
        image: Slide1,
    }, {
        id: 2,
        title: 'STARTAP WORKOUT 2020',
        text: 'Каждый год в центре развития стартапов «1991» проводится STARTAP WORKOUT, на котором зарождаются многие проекты! Презентация 10 стартапов и лишь один из них получит грант...',
        image: Slide1,
    }, {
        id: 3,
        title: 'STARTAP WORKOUT 2021',
        text: 'Каждый год в центре развития стартапов «1991» проводится STARTAP WORKOUT, на котором зарождаются многие проекты! Презентация 10 стартапов и лишь один из них получит грант...',
        image: Slide1,
    }, {
        id: 4,
        title: 'STARTAP WORKOUT 2022',
        text: 'Каждый год в центре развития стартапов «1991» проводится STARTAP WORKOUT, на котором зарождаются многие проекты! Презентация 10 стартапов и лишь один из них получит грант...',
        image: Slide1,
    }, {
        id: 5,
        title: 'STARTAP WORKOUT 2023',
        text: 'Каждый год в центре развития стартапов «1991» проводится STARTAP WORKOUT, на котором зарождаются многие проекты! Презентация 10 стартапов и лишь один из них получит грант...',
        image: Slide1,
    }],
};
const slider = (state = initialState, action) => {
    return action.type === 'slider'
        ? action.payload()
        : state;
};

export default slider;
