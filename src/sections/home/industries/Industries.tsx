import { Card } from '@/components/card/Card'
import GeneralHeading from '@/components/Heading/GeneralHeading'
import SubHeading from '@/components/Heading/SubHeading'
import React from 'react'
import style from './industries.module.css';
import industryEcommerce from '../../../../src/images/industryEcommerce.svg';
import education from '../../../../src/images/education.svg';
import healthCare from '../../../../src/images/healthCare.svg';
import logistic from '../../../../src/images/logistic.svg';
import socialNetworking from '../../../../src/images/socialNetworking.svg';
import travelAgency from '../../../../src/images/travelAgency.svg';
import solutions from '../../../../src/images/solutions.svg';
import realEstate from '../../../../src/images/realEstate.svg';
import gaming from '../../../../src/images/gaming.svg';
import foodRestaurant from '../../../../src/images/food&restaurant.svg';
import Image from '../../../../node_modules/next/image';
import { StaticImport } from '../../../../node_modules/next/dist/shared/lib/get-img-props';

const Industries = () => {
    const INDUSTRIES_WE_SERVE: any = [
        {
            image: industryEcommerce,
            title: 'Retail,\nEcommerce'
        },
        {
            image: education,
            title: 'Education \n& e-learning'
        },
        {
            image: healthCare,
            title: 'Healthcare & \nFitness'
        },
        {
            image: logistic,
            title: 'Logistics & \nDistribution'
        },
        {
            image: socialNetworking,
            title: 'Social \nNetworking'
        },
        {
            image: travelAgency,
            title: 'Travel & \nHospitality'
        },
        {
        },
        {
            image: solutions,
            title: 'On-Demand \nSolutions'
        },
        {
            image: realEstate,
            title: 'Real Estate'
        },
        {
            image: gaming,
            title: 'Gaming'
        },
        {
            image: foodRestaurant,
            title: 'Food & \nRestaurant'
        },
        {
        },
    ]
    return (
        <div className={style.industryWrapper}>
            <div className='container'>
                <SubHeading className='text-center mb-[8px]' subHeading='We Serve' />
                <GeneralHeading className='text-center' heading='Industries We Serve' />
                <p className='text-grey text-center leading-6 font-poppins text-lg font-normal mb-[60px] mt-[8px]'>Here, we make almost every genre of applications. You name it <br /> and we build it.</p>
                <div className={style.CardsGrid}>
                    {
                        INDUSTRIES_WE_SERVE.map((data: any, index:number) => {
                            return (
                                <Card className={style.industryCard} key={index}>
                                    <div className='mb-[17px]'>
                                        <Image src={data.image} className="mx-auto" alt={data.title} />
                                    </div>
                                    <h5 className='font-poppins text-base	leading-5 text-primary-dark font-semibold'>{data.title}</h5>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default Industries