import { Swiper, SwiperSlide } from 'swiper/react';
import { SectionTitle } from "../Sections/SectionTitle";

import 'swiper/css';
import { Project } from './Project';

export function Projects() {
    return (
        <div className={`
            w-full h-auto
            pb-10
        `}>
            <SectionTitle title="Projects" />
            <div className={` grid grid-cols-1
                lg:grid-cols-2
            `}>
                <Project
                className='bg-top'
                firstLink='https://catskhi.github.io/react-todo-app/'
                secondLink='https://github.com/Catskhi/react-todo-app'
                title='React ToDo App'
                backgroundImage='https://user-images.githubusercontent.com/79881605/211411273-30766a6a-8562-4053-ae12-cb78945ba1a2.png' />
                <Project
                className='bg-center'
                firstLink='https://catskhi-react-weather-app.vercel.app/'
                secondLink='https://github.com/Catskhi/react-weather-app'
                title='React Weather App'
                backgroundImage='https://user-images.githubusercontent.com/79881605/212966147-cd3badfd-f3ba-4c45-85ac-e7567c3a4d15.png' />
            </div>
        </div>
    )
}