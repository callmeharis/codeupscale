import { Card } from '@/components/card/Card';
import GeneralHeading from '@/components/Heading/GeneralHeading'
import SubHeading from '@/components/Heading/SubHeading'
import React from 'react'
import editableImage from '../../../../src/images/editable.svg';
import langoImage from '../../../../src/images/lango.svg';
import iFormatImage from '../../../../src/images/iFormat.svg';
import instructiveImage from '../../../../src/images/instructure.svg';
import backgroundImage from '../../../../src/images/testominalBg.png';
import Image from 'next/image';
import { ArrowRightBlack } from '@/svg';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Testimonials.module.css';
import 'swiper/css/scrollbar';
const Testimonials = () => {

    const TESTIMONIALS_DATA = [
        {
            image: editableImage,
            text: 'Globally actualize mission-critical services before client-centric action items. Rapidiously recaptiualize multifunctional bandwidth and resource maximizing ideas. Assertively customize interoperable ROI and granular experiences. Holisticly integrate accurate Globally actualize mission-critical services before client-centric action items.',
            title: 'Editable dm.com',
            name: 'Stella Alvarez',
        },
        {
            image: langoImage,
            text: 'Globally actualize mission-critical services before client-centric action items. Rapidiously recaptiualize multifunctional bandwidth and resource maximizing ideas. Assertively customize interoperable ROI and granular experiences. Holisticly integrate accurate Globally actualize mission-critical services before client-centric action items.',
            title: 'CEO Lango',
            name: 'Stella Alvarez',
        },
        {
            image: iFormatImage,
            text: 'Globally actualize mission-critical services before client-centric action items. Rapidiously recaptiualize multifunctional bandwidth and resource maximizing ideas. Assertively customize interoperable ROI and granular experiences. Holisticly integrate accurate Globally actualize mission-critical services before client-centric action items.',
            title: 'CEO iFormat',
            name: 'Stella Alvarez',
        },
        {
            image: instructiveImage,
            text: 'Globally actualize mission-critical services before client-centric action items. Rapidiously recaptiualize multifunctional bandwidth and resource maximizing ideas. Assertively customize interoperable ROI and granular experiences. Holisticly integrate accurate Globally actualize mission-critical services before client-centric action items.',
            title: 'CEO otis',
            name: 'Stella Alvarez',
        },
        {
            image: instructiveImage,
            text: 'Globally actualize mission-critical services before client-centric action items. Rapidiously recaptiualize multifunctional bandwidth and resource maximizing ideas. Assertively customize interoperable ROI and granular experiences. Holisticly integrate accurate Globally actualize mission-critical services before client-centric action items.',
            title: 'CEO otis',
            name: 'Stella Alvarez',
        },
        {
            image: instructiveImage,
            text: 'Globally actualize mission-critical services before client-centric action items. Rapidiously recaptiualize multifunctional bandwidth and resource maximizing ideas. Assertively customize interoperable ROI and granular experiences. Holisticly integrate accurate Globally actualize mission-critical services before client-centric action items.',
            title: 'CEO otis',
            name: 'Stella Alvarez',
        },
        {
            image: instructiveImage,
            text: 'Globally actualize mission-critical services before client-centric action items. Rapidiously recaptiualize multifunctional bandwidth and resource maximizing ideas. Assertively customize interoperable ROI and granular experiences. Holisticly integrate accurate Globally actualize mission-critical services before client-centric action items.',
            title: 'CEO otis',
            name: 'Stella Alvarez',
        },
        {
            image: instructiveImage,
            text: 'Globally actualize mission-critical services before client-centric action items. Rapidiously recaptiualize multifunctional bandwidth and resource maximizing ideas. Assertively customize interoperable ROI and granular experiences. Holisticly integrate accurate Globally actualize mission-critical services before client-centric action items.',
            title: 'CEO otis',
            name: 'Stella Alvarez',
        },
        {
            image: instructiveImage,
            text: 'Globally actualize mission-critical services before client-centric action items. Rapidiously recaptiualize multifunctional bandwidth and resource maximizing ideas. Assertively customize interoperable ROI and granular experiences. Holisticly integrate accurate Globally actualize mission-critical services before client-centric action items.',
            title: 'CEO otis',
            name: 'Stella Alvarez',
        },
        {
            image: instructiveImage,
            text: 'Globally actualize mission-critical services before client-centric action items. Rapidiously recaptiualize multifunctional bandwidth and resource maximizing ideas. Assertively customize interoperable ROI and granular experiences. Holisticly integrate accurate Globally actualize mission-critical services before client-centric action items.',
            title: 'CEO otis',
            name: 'Stella Alvarez',
        },
        {
            image: instructiveImage,
            text: 'Globally actualize mission-critical services before client-centric action items. Rapidiously recaptiualize multifunctional bandwidth and resource maximizing ideas. Assertively customize interoperable ROI and granular experiences. Holisticly integrate accurate Globally actualize mission-critical services before client-centric action items.',
            title: 'CEO otis',
            name: 'Stella Alvarez',
        },
        {
            image: instructiveImage,
            text: 'Globally actualize mission-critical services before client-centric action items. Rapidiously recaptiualize multifunctional bandwidth and resource maximizing ideas. Assertively customize interoperable ROI and granular experiences. Holisticly integrate accurate Globally actualize mission-critical services before client-centric action items.',
            title: 'CEO otis',
            name: 'Stella Alvarez',
        }

    ]
    return (
        <div className={styles.testimonialsWrapper}>
            <div className={styles.bgImage}>
                <Image src={backgroundImage} alt="image" />
            </div>
            <div className='container'>
                <div className='flex'>
                    <div className='w-[30%] hidden md:block'></div>
                    <div className='max-w-[750px] md:w-[70%] w-[100%] z-[1]'>
                        <SubHeading className={'text-left mb-[8px]'} subHeading={'Testimonials'} />
                        <GeneralHeading className={'text-left mb-[8px]'} heading={`We've stopped counting. Over 500 brands count on us.`} />
                        <p className='text-left text-grey text-lg font-poppins font-normal'>1,200+ projects executed successfully and an average relationship of over 3 years.</p>
                    </div>

                </div>

                <div className='testimonials-slider'>
                    <Swiper
                        modules={[Navigation]}
                        breakpoints={{
                            768: {
                              slidesPerView: 1,
                            },
                            991:{
                                slidesPerView: 2.5, 
                            },
                            1140: {
                              slidesPerView: 2.5,
                            },
                          }}
                        spaceBetween={50}
                        navigation
                    >
                        {TESTIMONIALS_DATA.map((data, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Card className={styles.TestimonialCard}>
                                        <div className='flex justify-between items-center'>
                                            <Image src={data.image} alt={data.title} />
                                            <div className='cursor-pointer'><ArrowRightBlack /></div>
                                        </div>
                                        <div className='mt-[29px]'>
                                            <p className='text-lg font-poppins font-normal text-grey mb-[24px]'>{data.text}</p>
                                            <a className='text-purple text-lg font-poppins font-semibold'>{data.title}</a>
                                            <p className='text-primary-dark text-lg font-poppins font-normal mt-[4px]'>{data.name}</p>
                                        </div>
                                    </Card>
                                </SwiperSlide>

                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>

    )
}

export default Testimonials