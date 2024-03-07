import { ArrowRightIcon } from '@/svg'
import React from 'react'
import { Button } from '../Button/Button'
import userImage from '../../../src/images/storyUser.png';
import Image from '../../../node_modules/next/image';
import styles from './StoryCard.module.css';

export const StoryCard = () => {
  return (
    <div className='container'>
      <div className={styles.storyCardWrapper}>
        <div className='flex gap-[30px] md:flex-row flex-col justify-between items-center'>
          <div>
            <h4 className='text-2xl	font-poppins font-bold text-white mb-[12px]'>Let’s Create Big Stories Togather</h4>
            <p className='max-w-[500px] text-lg	font-normal	leading-7	mb-[12px]	font-poppins  text-white'>Mobile is in our nerves. We don’t just build apps, we create brand.
              Choosing us will be your best decision.</p>
          </div>
          <div>
            <Button className={'bg-dark-grey text-white font-poppins text-base items-center	flex gap-3 p-[16px] font-bold	capitalize rounded-lg hover:shadow-custom-button'}>
              Get in Touch <ArrowRightIcon />
            </Button>
          </div>
        </div>

      </div>

    </div>
  )
}
