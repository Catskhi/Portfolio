import { Swiper, SwiperSlide } from 'swiper/react';
import { SectionTitle } from "../Sections/SectionTitle";

import 'swiper/css';
import { Project } from './Project';
import { DiReact } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si'

export function Projects() {

    const iconsClass : string = 'h-6 w-6 mx-2'

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
                backgroundImage='/Project-1.png'
                techIcons={[
                    <DiReact className={iconsClass} />,
                    <SiTypescript className={iconsClass} />
                ]}
                />
                <Project
                className='bg-center'
                firstLink='https://catskhi-react-weather-app.vercel.app/'
                secondLink='https://github.com/Catskhi/react-weather-app'
                title='React Weather App'
                backgroundImage='/Project-2.png'
                techIcons={[
                    <DiReact className={iconsClass} />,
                    <SiTypescript className={iconsClass} />
                ]}
                />
                <Project
                className='bg-center'
                firstLink='https://reatix-movie-app.vercel.app/'
                secondLink='https://github.com/Catskhi/Reatix-Movie-App'
                title='React Movie App'
                backgroundImage='/Project-3.png'
                techIcons={[
                    <DiReact className={iconsClass} />,
                    <SiTypescript className={iconsClass} />,
                    <SiTailwindcss className={iconsClass} />
                ]}
                />
            </div>
        </div>
    )
}