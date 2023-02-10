import { Swiper, SwiperSlide } from 'swiper/react';
import { SectionTitle } from "../Sections/SectionTitle";

import 'swiper/css';
import { SliderTitle } from './SliderTitles';

export function Projects() {
    return (
        <div className={`
            w-full h-auto
            pb-10
        `}>
            <SectionTitle title="Projects" />
            <Swiper className='
                px-2 rounded-lg
                md:px-20
            '
                spaceBetween={100}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className='cursor-grab'>
                    <SliderTitle title='React ToDo App' />
                    <div
                    className='h-44 w-[100%] bg-cover bg-no-repeat bg-center 
                        cursor-pointer
                        md:m-auto
                        md:h-[500px] 
                        md:w-[80%]
                        rounded-[20px]
                    '
                    style={{
                        backgroundImage : 'url(https://user-images.githubusercontent.com/79881605/211411273-30766a6a-8562-4053-ae12-cb78945ba1a2.png)'
                    }}>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <h1>oi</h1>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}