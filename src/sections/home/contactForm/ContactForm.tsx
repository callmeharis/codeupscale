import Checkbox from '../../../components/checkbox/Checkbox';
import React, { ChangeEvent, useState } from 'react'
import SubHeading from '@/components/Heading/SubHeading';
import GeneralHeading from '@/components/Heading/GeneralHeading';
import styles from './ContactForm.module.css'
import FormField from '@/components/formField/FormField';
import { TextArea } from '@/components/textArea/TextArea';
import { Button } from '@/components/Button/Button';
const ContactForm = () => {

    const onSubmit = () => {
        console.log('hello ')
    }

    return (
        <div className={styles.contactFormWrapper}>
            <div className='container'>
                <SubHeading className={'text-center mb-[8px]'} subHeading={'Let’s Work Together'} />
                <GeneralHeading className={'text-center max-w-[870px] mx-auto'} heading={'Let Us Know What You’re Looking for, We’ll Build it for You'} />
                <div className='mt-[60px]'>
                    <h4 className='mb-[17px] font-poppins font-semibold text-base text-primary-dark	'>Services you are looking for</h4>
                    <form>
                        <div className='flex md:gap-[8px] gap-[15px] mb-[30px] flex-wrap'>
                            <Checkbox name={'website'} labelText="Website" />
                            <Checkbox name={'mobile_app'} labelText="Mobile App" />
                            <Checkbox name={'digital_product'} labelText="Digital Product" />
                            <Checkbox name={'software_development'} labelText="Software Development" />
                            <Checkbox name={'ecommerce_development'} labelText="Ecommerce Development" />
                        </div>
                        <div className='grid grid-cols-2 gap-[30px]'>
                            <FormField name={''} type={'text'} onChange={onSubmit} placeholder={'Name*'} className="w-full" />
                            <FormField name={''} type={'text'} onChange={onSubmit} placeholder={'Email*'} className="w-full" />
                            <FormField name={''} type={'text'} onChange={onSubmit} placeholder={'Phone*'} className="w-full" />
                            <FormField name={''} type={'text'} onChange={onSubmit} placeholder={'Company*'} className="w-full" />
                        </div>
                        <div className='mt-[30px] w-full'>
                            <TextArea className={'w-full'} />
                        </div>

                        <div className='mt-[30px]'>
                            <Button className={'bg-primary hover:shadow-custom-button hover:translate-y-[-3px] text-white font-poppins text-base flex gap-3 px-[26px] py-[16px] font-bold capitalize rounded-lg'}>
                                Send Message
                            </Button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default ContactForm