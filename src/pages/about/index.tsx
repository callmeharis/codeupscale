import Footer from '@/components/footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { StoryCard } from '@/components/storyCard/StoryCard'
import AboutBanner from '@/sections/about/AboutBanner/AboutBanner'
import { Execution } from '@/sections/about/Execution/Execution'
import JoinUs from '@/sections/about/JoinUs/JoinUs'
import Team from '@/sections/about/Team/Team'
import { Vision } from '@/sections/about/Vision/Vision'
import React from 'react'

function index() {
  return (
    <div>
      <AboutBanner />
      <Execution />
      <Team />
      <div style={{ background: '#F9F9FD' }}>
        <JoinUs />
        <Vision />
      </div>
    </div>
  )
}

export default index
