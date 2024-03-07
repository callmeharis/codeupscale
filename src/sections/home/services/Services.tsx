import { Card } from '@/components/card/Card'
import GeneralHeading from '@/components/Heading/GeneralHeading'
import SubHeading from '@/components/Heading/SubHeading'
import { ArrowRightBlue } from '@/svg'
import React from 'react'
import Image from '../../../../node_modules/next/image'
import { SERVICES_DATA } from './Service.data'
import style from './Services.module.css'

const Services = () => {
  return (
    <div className='container md:py-[100px] py-[50px]'>
      <SubHeading className='text-center mb-[8px]' subHeading='Our Services' />
      <GeneralHeading className='text-center' heading='Services We Offer' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[60px] mt-[60px]'>
        {
          SERVICES_DATA.map((data ,index) => {
            return (
              <Card className={style.serviceCard} key={index}>
                <div className='mb-[17px]'>
                  <Image src={data.image} alt={data.title} />
                </div>
                <h5 className='mb-[17px] font-poppins text-lg font-semibold'>{data.title}</h5>
                <ul>{
                  data.tecList.map((list, index) => {
                    return (
                      <li className='flex gap-3 mb-[15px] font-poppins text-lg font-normal' key={index}>
                        <span className={list.icon === undefined ? 'hidden' : ''}>{list.icon}</span>
                        <span className='text-grey'>{list.text}</span></li>
                    )
                  })
                }</ul>
                <a href='#' className={style.arrowBtn}>
                  <ArrowRightBlue />
                </a>
              </Card>
            )
          })
        }
      </div>

    </div>
  )
}

export default Services