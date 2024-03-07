import GeneralHeading from '@/components/Heading/GeneralHeading'
import SubHeading from '@/components/Heading/SubHeading'
import Text from '@/components/Text/Text'
import { ArrowDown, ArrowUp } from '@/svg';
import React, { useState } from 'react'
import styles from './TeamWork.module.css';
import andriod from '../../../images/services/andriodBlueBg.svg';
import design from '../../../images/services/designerBlueBg.svg';
import Ios from '../../../images/services/IosBlueBg.svg';
import laptopVission from '../../../images/services/laptop&vissionPro.svg';
import product from '../../../images/services/productBlueBg.svg';
import qaBlue from '../../../images/services/qaBlueBg.svg';
import Image from 'next/image';
import Accordion from '@/components/Accordion/Accordion';
const TeamWork = () => {
  const TEAM_WORK_DATA = [
    {
      id: 1,
      title: 'Designer',
      icon: design,
      content: 'Seek the helping hand of our 500+ pre-vetted developers adept in the most loved languages and frameworks. Elixir, Python, RoR, Flutter, Ionic — you want it, you got it. You name it, here it is.',
    },
    {
      id: 2,
      title: 'iOS Development',
      icon: Ios,
      content: 'Seek the helping hand of our 500+ pre-vetted developers adept in the most loved languages and frameworks. Elixir, Python, RoR, Flutter, Ionic — you want it, you got it. You name it, here it is.',
    },
    {
      id: 3,
      title: 'Android Developers',
      icon: andriod,
      content: 'Seek the helping hand of our 500+ pre-vetted developers adept in the most loved languages and frameworks. Elixir, Python, RoR, Flutter, Ionic — you want it, you got it. You name it, here it is.',
    },
    {
      id: 4,
      title: 'Product Manager',
      icon: product,
      content: 'Seek the helping hand of our 500+ pre-vetted developers adept in the most loved languages and frameworks. Elixir, Python, RoR, Flutter, Ionic — you want it, you got it. You name it, here it is.',
    },
    {
      id: 5,
      title: 'QA Tester',
      icon: qaBlue,
      content: 'Seek the helping hand of our 500+ pre-vetted developers adept in the most loved languages and frameworks. Elixir, Python, RoR, Flutter, Ionic — you want it, you got it. You name it, here it is.',
    },
  ];

  return (
    <div className={styles.teamWrapper}>
      <div className='container'>
        <SubHeading className={'text-center mb-[8px]'} subHeading={'Team Work'} />
        <GeneralHeading className={'text-center mb-[8px]'} heading={'Team Work On Your Project'} />
        <Text text={'We deliver profitable and gratifying offshore mobile app development services. You may connect with a large talent pool in 60 seconds at a cost roughly 50% lower than Western marketplaces. We can demonstrate it to you through a trial.'} className={'text-center text-grey font-normal mt-[8px] mb-[60px]'} />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
          <div>
            {TEAM_WORK_DATA.map((data, id) => {
              return (
                <Accordion heading={data.title} text={data.content} image={data.icon} className="border-0" isBorder={false} />
              )
            })}
          </div>
          <div className={styles.imageSection}><Image src={laptopVission} alt="laptop And vission" /> </div>
        </div>
      </div>
    </div>

  )
}

export default TeamWork