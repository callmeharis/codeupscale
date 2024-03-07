import Footer from '@/components/footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { StoryCard } from '@/components/storyCard/StoryCard'
import ContactForm from '@/sections/home/contactForm/ContactForm'
import DevelopmentProcess from '@/sections/services/DevelopmentProcess/DevelopmentProcess'
import Faq from '@/sections/services/Faq/Faq'
import Idea from '@/sections/services/Idea/Idea'
import MobileDevPlatforms from '@/sections/services/MobileDevPlatforms/MobileDevPlatforms'
import ServicesBanner from '@/sections/services/ServicesBanner/ServicesBanner'
import TeamWork from '@/sections/services/TeamWork/TeamWork'
import WeServe from '@/sections/services/WeServe/WeServe'
import WhyUs from '@/sections/services/whyUs/whyUs'
import React from 'react'

const index = () => {
  return (
    <>
      <ServicesBanner />
      <WeServe />
      <WhyUs />
      <Idea />
      <DevelopmentProcess />
      <TeamWork />
      <MobileDevPlatforms/>
      <Faq/>
      <ContactForm />
    </>

  )
}

export default index