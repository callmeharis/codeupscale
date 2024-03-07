import GeneralHeading from '@/components/Heading/GeneralHeading'
import SubHeading from '@/components/Heading/SubHeading'
import React from 'react'
import { Card } from '@/components/card/Card';
import Text from '@/components/Text/Text';
import styles from './whyUs.module.css'
const WhyUs = () => {

    const WHY_US_DATA = [
        {
            heading: '01',
            title: 'Domain Specialists',
            text: 'With hands-on experience in mobile app development services, Code UpScale houses a flourishing community of 500+ developers who have delivered 97% customer satisfaction across industries — Healthcare, Fintech, and more!'
        },
        {
            heading: '02',
            title: 'Community’s Most Loved Tech Stack',
            text: 'Seek the helping hand of our 500+ pre-vetted developers adept in the most loved languages and frameworks. Elixir, Python, RoR, Flutter, Ionic — you want it, you got it. You name it, here it is.'
        },
        {
            heading: '03',
            title: 'Unflinching Quality',
            text: 'Discard battery-draining apps by placing your trust in Code UpScale’s quality perimeters. As a leading mobile app development company, we deliver bug-free, high-performing, stable, and user-friendly mobile apps.'
        },
        {
            heading: '04',
            title: 'Dollar-wise Services',
            text: 'Save thousands of dollars with our value-adding bundle of bespoke services — A 7-day trial, senior-level product managers, and end-to-end software testing and debugging, all at a wallet-friendly budget.'
        },
        {
            heading: '05',
            title: '100% Transparency',
            text: 'Track the best mobile application development progress without hassle. You will be kept in the loop throughout the project, ensuring that your valuable input is prioritized to deliver robust and superior applications.'
        },
        {
            heading: '06',
            title: '100% Confidentiality',
            text: 'Rest assured about your project confidentiality! Leveraging the latest technologies and tools to keep your data and other vital information safe is the top practice of our mobile app development team.'
        }
    ]

    return (
        <div className='container py-[100px]'>
            <SubHeading className={'text-center mb-[8px]'} subHeading={'Why You Choose Us'} />
            <GeneralHeading className={'text-center mb-[8px]'} heading={'Why Should You Choose Code UpScale For Mobile App Development Services?'} />
            <Text text={'We capitalized on 6 key value services and successfully built a reputation as the leading and trusted mobile app development services provider in the U.S.A., the U.K., and Canada.'} className={'text-center text-grey font-normal mt-[8px] mb-[60px] max-w-[903px] mx-auto'} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-[30px] gap-y-[60px]'>
                {
                    WHY_US_DATA.map((data, index) => {
                        return (
                            <Card className={styles.whyUsCard} key={index}>
                                <div className='mb-[17px]'>
                                    <h2 className='mb-[17px] font-poppins text-5xl	font-bold text-grey-half'>{data.heading}</h2>
                                </div>
                                <Text className='mb-[17px] font-semibold text-primary-dark ' text={data.title} />
                                <Text className='text-grey font-normal' text={data.text} />
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default WhyUs