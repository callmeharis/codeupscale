import GeneralHeading from '@/components/Heading/GeneralHeading'
import SubHeading from '@/components/Heading/SubHeading'
import Text from '@/components/Text/Text'
import React from 'react'
import styles from './Vision.module.css';

export const Vision = () => {
    const VISION_DATA = [
        {
        },
        {
            title: '2015',
            text: 'We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.',
            class: 'text-left'
        },
        {
            title: '2016',
            text: 'We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.',
            class: 'text-right'
        },
        {
        },
        {
        },
        {
            title: '2018',
            text: 'We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.',
            class: 'text-left'
        },
        {
            title: '2020',
            text: 'We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.',
            class: 'text-right'
        },
        {},
        {},
        {
            title: '2022',
            text: 'We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.',
            class: 'text-left'
        },

        {
            title: '2023',
            text: 'We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.',
            class: 'text-right'
        },
        {}
    ]
    return (
        <div className={styles.visionWrapper}>
 <div className='container'>
            <div className='max-w-[836px] mx-auto'>
                <SubHeading className={'text-center'} subHeading={'Our Vision'} />
                <GeneralHeading className={'text-center mb-[60px]'} heading={'How our vision became reality'} />
                <div className={`grid md:grid-cols-2 gap-x-[72px] gap-x`}>
                    {VISION_DATA.map((data, index) => {
                        return (
                            <div className={styles.vissionTile}>
                                <h4 className={`md:text-2xl	text-1xl font-bold capitilize text-dark-grey font-poppins ${data.class}`}>{data.title}</h4>
                                <Text text={data.text}  className={`${data.class} text-grey font-normal	mt-[8px] leading-[29px]`}/>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
        </div>
       

    )
}
