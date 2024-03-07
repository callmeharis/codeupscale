import Accordion from '@/components/Accordion/Accordion'
import GeneralHeading from '@/components/Heading/GeneralHeading'
import SubHeading from '@/components/Heading/SubHeading'
import React from 'react'

const Faq = () => {
    return (
        <div className='container gap-2 pt-[100px]'>
            <SubHeading className={'text-center mb-[8px]'} subHeading={'Frequently Ask Questions'} />
            <GeneralHeading className={'text-center mb-[60px]'} heading={'Some Of Our frequently Asked Questions'} />
            <Accordion isBorder={true} heading='What are the services provided to customers?' text={'Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.'} className={''}  />
            <Accordion isBorder={true} heading={'How can I submit a proposal for cooperation?'} text={'Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.'} className={''} />
            <Accordion isBorder={true}  text={'Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.'} heading={'How can I submit a proposal for cooperation?'}  className={''}  />
            <Accordion isBorder={true} text={'Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.'} heading={'I come from a faraway place, can collaboration be done full time online through several meeting applications?'}  className={''} />
            <Accordion isBorder={true} text={'Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.'} heading={'How do I get the payment complete?'}  className={''} />
            <Accordion isBorder={true} text={'Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.'} heading={' How long can the collaboration last?'}  className={''} />
        </div>
    )
}

export default Faq