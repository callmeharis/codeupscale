import GeneralHeading from '@/components/Heading/GeneralHeading'
import SubHeading from '@/components/Heading/SubHeading'
import React from 'react'
import { Card } from '@/components/card/Card';
import Text from '@/components/Text/Text';
import andriod from '../../../images/services/andriod.svg';
import Ios from '../../../images/services/Ios.svg';
import native from '../../../images/services/native.svg';
import hybrid from '../../../images/services/hybrid.svg';
import crossPlatform from '../../../images/services/crossPlatform.svg';
import Image from 'next/image';
const WeServe = () => {

  const WHY_US_DATA = [
    {
      image: andriod,
      title: 'Android App Development',
      text: 'With hands-on experience in mobile app development services, Code UpScale houses a flourishing community of 500+ developers who have delivered 97% customer satisfaction across industries — Healthcare, Fintech, and more!'
    },
    {
      image: Ios,
      title: 'iOS App Development',
      text: 'Seek the helping hand of our 500+ pre-vetted developers adept in the most loved languages and frameworks. Elixir, Python, RoR, Flutter, Ionic — you want it, you got it. You name it, here it is.'
    },
    {
      image: native,
      title: 'React Native App Development',
      text: 'Discard battery-draining apps by placing your trust in Code UpScale’s quality perimeters. As a leading mobile app development company, we deliver bug-free, high-performing, stable, and user-friendly mobile apps.'
    },
    {
      image: hybrid,
      title: 'Hybrid App Development',
      text: 'Save thousands of dollars with our value-adding bundle of bespoke services — A 7-day trial, senior-level product managers, and end-to-end software testing and debugging, all at a wallet-friendly budget.'
    },
    {
      image: crossPlatform,
      title: 'Cross-Platform App Development',
      text: 'Track the best mobile application development progress without hassle. You will be kept in the loop throughout the project, ensuring that your valuable input is prioritized to deliver robust and superior applications.'
    },
  ]

  return (
    <div className='bg-purple-lite'>
      <div className='container py-[100px]'>
        <SubHeading className={'text-center mb-[8px]'} subHeading={'We Serve'} />
        <GeneralHeading className={'text-center mb-[8px]'} heading={'A Sneak Peak of Our Custom Mobile App Development Services'} />
        <Text text={'Delivering convenience-focused mobile application development services in any form is what we’re inclined towards.'} className={'text-center text-grey font-normal mt-[8px] mb-[60px] max-w-[903px] mx-auto'} />
        <div className='flex justify-center flex-wrap gap-x-[30px] gap-y-[60px]'>
          {
            WHY_US_DATA.map((data, index) => {
              return (
                <Card className={'lg:w-[calc(33.3%-30px)] md:w-[calc(50%-30px)]'} key={index}>
                  <div className='mb-[17px]'>
                    <Image src={data.image} alt={data.title} />
                  </div>
                  <Text className='mb-[17px] font-semibold text-primary-dark ' text={data.title} />
                  <Text className='text-grey font-normal' text={data.text} />
                </Card>
              )
            })
          }
        </div>
      </div>
    </div>

  )
}

export default WeServe