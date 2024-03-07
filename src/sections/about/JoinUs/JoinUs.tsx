import GeneralHeading from '@/components/Heading/GeneralHeading';
import Text from '@/components/Text/Text';
import React from 'react'
import styles from './JoinUs.module.css';
import joinUsImage from '../../../../src/images/about/joinUsImage.svg'
import Image from 'next/image';
import SubHeading from '@/components/Heading/SubHeading';
import { Button } from '@/components/Button/Button';

const JoinUs = () => {
  const text = 'At CodeUpscale  we believe talent can come from anywhere and we are committed to making a difference for those who are talented. With Giveback Program, we’re taking that commitment one step further, by creating opportunities for talented people to thrive.'
  return (
    <div className={styles.joinUsWrapper}>
      <div className='container'>
        <div className='grid md:grid-cols-2 gap-x-[73px]'>
          <div className='flex-col flex justify-center'>
            <GeneralHeading className={'text-left text-white'} heading={'Now, we are committed to making a difference.'} />
            <Text text={text} className="text-white font-normal	mt-[16px] leading-8	" />
          </div>
          <div>
            <Image src={joinUsImage} alt="user" />
          </div>
        </div>
        <div className='mt-[80px]'>
          <SubHeading className={'text-white text-center mb-[8px]'} subHeading={'Let’s Join'} />
          <h1 className='text-6xl/[64px] font-bold capitilize text-white font-poppins text-center max-w-[430px] mx-auto leading-[72px]'>Join us on this journey.</h1>
          <div className='flex justify-center gap-3 mt-[40px]'>
            <Button className={'bg-dark-grey  text-white font-poppins text-base items-center	flex gap-3 p-[16px] font-bold	capitalize rounded-lg  hover:translate-y-[-3px]'}>
              Talk to Sales
            </Button>
            <Button className={'border text-white font-poppins text-base items-center	flex gap-3 p-[16px] font-bold	capitalize rounded-lg hover:translate-y-[-3px]'}>
              Explore Careers
            </Button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default JoinUs