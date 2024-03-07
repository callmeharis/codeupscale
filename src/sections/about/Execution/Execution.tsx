import GeneralHeading from '@/components/Heading/GeneralHeading';
import SubHeading from '@/components/Heading/SubHeading';
import React from 'react'
import styles from './Execution.module.css';
import executionImage from '../../../../src/images/about/execution.jpg'
import Image from 'next/image';

export const Execution = () => {
    return (
        <div className={styles.executuonWrapper}>
            <div className='container'>
            <SubHeading className={'text-left mb-[8px]'} subHeading={'From ideation to execution'} />
            <GeneralHeading className={'text-left max-w-[900px] leading-[64px] mb-[32px]'} heading={'We don’t just shoot for starswe carefully set the galaxy tomake the project Sirius!'} />
            <div>
                <Image src={executionImage} alt="execution image" />
            </div>
            </div>
           
        </div>
    )
}
