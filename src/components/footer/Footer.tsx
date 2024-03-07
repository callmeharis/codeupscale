import React from 'react'
import styles from './Footer.module.css';
import footerLogo from '../../../src/images/footerLogo.svg';
import Image from '../../../node_modules/next/image';
import { FacebookIcon, LinkedInIcon, TwitterIcon } from '@/svg';
import { FOOTER_LINKS, OUR_OFFICES_DATA } from './FooterData';
import CopyRight from './CopyRight';


const Footer = () => {
  return (
    <div className={styles.footerWrapper} >
      <div className='container'>
        <div className='grid lg:grid-cols-4 md:grid-cols-3  grid-cols-1 gap-4'>
          <div className='mt-[60px]'>
            <Image src={footerLogo} alt="footer logo" />
            <p className='text-half-whiite mt-[24px] ml-[8px] text-base	font-poppins font-light		'>Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
            <ul className={`flex gap-3 mt-[24px] ml-[5px] ${styles.socialICons}`}>
              <li className='cursor-pointer'>
                <a><LinkedInIcon /></a>
              </li>
              <li className='cursor-pointer'>
                <a><FacebookIcon /></a>
              </li>
              <li className='cursor-pointer'>
                <a><TwitterIcon /></a>
              </li>
            </ul>
          </div>

          {FOOTER_LINKS.map((data: any, index: number) => {
            return (
              <div key={index}>
                <h4 className='text-white font-bold  text-base	mt-[60px] font-poppins'>{data.title}</h4>
                <ul className=' mt-[24px]'>
                  {data.links.map((data: any, index: number) => {
                    return (
                      <li className='mb-[8px]' key={index}> <a className='flex text-half-whiite text-base cursor-pointer hover:underline transition font-poppins font-light'> {data.icon && <span className='mr-2'> {data.icon}</span>}  {data.link}</a></li>
                    )
                  })}

                </ul>
              </div>
            )
          })}
        </div>
        <h4 className='text-white font-bold  text-base	mt-[70px] font-poppins mb-[24px]'>Our Offices</h4>
        <div className='grid  md:grid-cols-3 grid-cols-1 md:gap-3 gap-6'>
          {OUR_OFFICES_DATA.map((data, index) => {
            return (
              <div className='flex justify-start items-start gap-3' key={index}>
                <Image src={data.image} alt={data.title} />
                <div>
                  <div className='flex gap-2'> <Image src={data.icon} alt={data.title} /> <h4 className='text-white font-poppins text-base font-medium	'> {data.title}</h4> </div>
                  <p className='text-half-whiite font-poppins max-w-[260px] font-light my-[8px] text-base'>{data.infoText}</p>
                  <p className='text-half-whiite font-poppins font-light text-base'>{data.phoneNumber}</p>
                </div>
              </div>
            )
          })}
        </div>
        <CopyRight />
      </div>

    </div>

  )
}

export default Footer