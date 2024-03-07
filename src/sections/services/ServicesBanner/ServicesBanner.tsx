import { Button } from '@/components/Button/Button'
import Text from '@/components/Text/Text'
import { ArrowRightIcon } from '@/svg'
import Image from 'next/image';
import React from 'react'
import serviceImage from '../../../images/services/serviceBanner.svg';
import laptopsImage from '../../../images/services/laptops.png';
import styles from './ServicesBanner.module.css';
const ServicesBanner = () => {
    return (
        <div className={styles.serviceWrapper}>
            <div className='container'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-[30px]'>
                    <div className='max-w-[532px]'>
                        <h1 className={`${''} main-heading font-poppins mb-[24px]`}>
                            Mobile App   <span className='text-purple break-words'>
                                Development Services </span>
                           
                        </h1>
                        <Text className='text-lg  text-grey leading-7 mb-[24px]' text={'We are a leading mobile app development company in the USA, housing domain-savvy developers to design and develop Android, iOS and cross-platform applications customized to your business needs and identity. So, jump into the Code UpScale bandwagon today and benefit from our exclusive value-added services!'} />
                        <div className='flex md:justify-start justify-center md:mb-0 mb-[50px]'>
                            <Button className='bg-primary text-white font-poppins text-base items-center hover:shadow-custom-button hover:translate-y-[-3px]		flex gap-3 py-[16px] px-[24px] font-bold	capitalize rounded-lg'>
                                Get Started
                                <ArrowRightIcon />
                            </Button>
                        </div>
                    </div>
                    <div className={styles.imageSection}>
                        <Image src={serviceImage} alt="services Image"  />
                        <Image src={laptopsImage} alt="laptops Image" className={styles.absoluteImage} />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ServicesBanner