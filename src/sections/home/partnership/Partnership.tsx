import GeneralHeading from '@/components/Heading/GeneralHeading'
import SubHeading from '@/components/Heading/SubHeading'
import React from 'react'
import FixedPriceImage from '../../../images/fixedprice.svg';
import DedicatedModelImage from '../../../images/dedicatedModel.svg';
import developmentModal from '../../../images/developmentModel.svg';
import { Card } from '@/components/card/Card';
import Image from '../../../../node_modules/next/image';
const Partnership = () => {

    const PARTNERSHIP_DATA = [
        {
            image: FixedPriceImage,
            title: 'Fixed Price Model',
            text: 'This model outlines project scope, cost, and timeline upfront, ideal for longer engagements. Clients gain budget assurance and suits those with clear requirements and vision.'
        },
        {
            image: DedicatedModelImage,
            title: 'Hire Dedicated Model',
            text: 'Clients pay for developer hours in this straightforward model, facilitating easy project initiation and feature updates. Precise payment transparency enhances trust and communication.'
        },
        {
            image: developmentModal,
            title: 'On Site Development Model',
            text: 'Clients choose this model for on-site development support. Its cost-effective, promotes face-to-face interaction, and aids timely delivery through continuous communication, ensuring deadline achievement.'
        }
    ]

    return (
        <div className='container py-[100px]'>
            <SubHeading className={'text-left mb-[8px]'} subHeading={'Our Tech Talent'} />
            <GeneralHeading className={'text-left mb-[60px]'} heading={'Partnership Models'} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
                {
                    PARTNERSHIP_DATA.map((data, index) => {
                        return (
                            <Card className={'p-[44px]'} key={index}>
                                <div className='mb-[17px]'>
                                    <Image src={data.image} alt={data.title} height={40} width={40} />
                                </div>
                                <h5 className='mb-[17px] font-poppins text-lg font-semibold'>{data.title}</h5>
                                <p className='text-grey font-poppins text-lg font-normal'>{data.text}</p>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Partnership