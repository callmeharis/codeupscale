import Text from '@/components/Text/Text';
import Image from 'next/image';
import React from 'react'
import aboutImage from '../../../../src/images/about/AboutBanner.svg';
const AboutBanner = () => {
    return (
        <div className='container py-[60px]'>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                <div className=''>
                    <h1 className={`main-heading font-poppins mb-[24px]`}>
                        We Think
                        We’re
                        <span className='text-purple'> Pretty Good </span>
                        At It
                    </h1>
                    <Text text={"For over a decade we’ve partnered with technology leaders to rapidly scale their teams and meet their business challenges."}
                        className="text-grey text-center md:text-left font-normal md:max-w-[483px]" />
                </div>
                <div className='mt-[30px] md:mt-0'>
                    <Image src={aboutImage} alt="about Image"   />
                </div>
            </div>

        </div>
    )
}

export default AboutBanner