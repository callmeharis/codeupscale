import GeneralHeading from '@/components/Heading/GeneralHeading';
import React from 'react'
import styles from './Theory.module.css';
import theoryImage from '../../../../src/images/theoryImage.svg';
import Image from '../../../../node_modules/next/image';
const Theory = () => {
    return (
        <div className={styles.theoryWrapper}>
            <div className='container'>
                <GeneralHeading className={'text-left text-white'} heading={'Our Theory'} />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-[16px]'>
                    <div className='text-white'>
                        <p className='font-poppins text-lg font-normal leading-8 mb-[16px]'>Ridge Theory is a cutting-edge technology firm specialized in software development, app development, UI/UX design, product management support, and more.</p>
                        <p className='font-poppins text-lg font-normal leading-8 mb-[16px]'>As our name suggests, we venture forth alongside our clients in the perilous journey of scaling up software solutions while balancing quality with speed and cost. This is achieved by leveraging:</p>
                        <ul className='mb-[16px]'>
                            <li className='font-poppins text-lg font-normal leading-8'><strong>1.</strong> Our robust network of specialized talent</li>
                            <li className='font-poppins text-lg font-normal leading-8'><strong>2.</strong> Our team of US-based managers who interface directly with overseas QA and development to ensure the project is on track while working hand-in-hand with the client and end users. </li>
                        </ul>
                        <p className='font-poppins text-lg font-normal leading-8'> Having come from the world&apos;s leading tech companies, our founders bring with them best practices, resulting in a proven track record of on-time delivery and peak performance to get our clients to their finish lines.</p>
                    </div>
                    <div className='mx-auto'>
                        <Image src={theoryImage} alt={'Overseas Development'}  quality={100}/>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Theory