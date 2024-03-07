import { Button } from '@/components/Button/Button'
import { ArrowRightIcon } from '@/svg'
import React from 'react'
import Image from '../../../../node_modules/next/image'
import heroBannner from '../../../../src/images/homeBanner.png'
import style from './HeroBanner.module.css';
const HeroBanner = () => {
    return (
        <div className=''>
            <div className={style.heroBannnerWrapper}>
                <div className='flex h-full md:flex-row flex-col'>
                    <div className={`${style.heroLeftSection} container  z-[1]`}>
                        <div className='md:max-w-[483px] mx-auto md:mx-0'>
                            <h1 className={`${style.heading} font-poppins mb-[24px]`}>
                                Mobile App
                                <span className='text-purple'> Development </span>
                            </h1>
                            <p className='text-lg font-normal font-poppins text-grey md:text-left text-center leading-7 mb-[24px]'>Turning your idea on a napkin into <br className='hidden md:block'/>
                                a marketable product with synergy, innovation and <br className='hidden md:block' />mastery.</p>
                            <div className='flex md:justify-start justify-center md:mb-0 mb-[50px]'>
                                <Button className='bg-primary text-white font-poppins text-base items-center hover:shadow-custom-button hover:translate-y-[-3px]		flex gap-3 py-[16px] px-[24px] font-bold	capitalize rounded-lg'>
                                    Get Started
                                    <ArrowRightIcon />
                                </Button>
                            </div>

                        </div>
                    </div>
                    <div className='md:hidden mb-[-30px]'>
                        <Image
                            src={heroBannner}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className={style.rightImage}>
                        <Image
                            src={heroBannner}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner