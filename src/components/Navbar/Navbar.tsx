import React from 'react'
import Image from '../../../node_modules/next/image'
import { Button } from '../Button/Button'
import NavItem from './NavItem'
import Logo from '../../../src/images/headerLogo.svg';
import NavDropDown from './NavDropDown';
import useCheckMobileScreen from '@/hooks/UseCheckMobileScreen';
import MobileNavbar from './MobileNavbar';
const Navbar = () => {
  const isItMobile = useCheckMobileScreen();
  return (
    <div className='container '>
      <div className='flex justify-between items-center h-[88px]' >
        <div>
          <Image src={Logo}
            height={200}
            width={200}
            alt="Picture of the author" />
        </div>
        {!isItMobile ? <ul className='flex items-center '>
          <NavItem text="Home" href={'/'} className="hover:text-purple transition" />
          <NavItem text="About"  href={'/about'} className="hover:text-purple transition" />
          <NavDropDown dropDownText='Services' className="transition" />
          <NavItem text="Hire Talent" href={'/about'} className="hover:text-purple transition" />
          <NavItem text="Work" href={'/about'} className="hover:text-purple transition" />
          <NavDropDown dropDownText='Careers' className="transition" />
          <Button className="bg-primary text-white font-poppins text-xs hover:shadow-custom-button hover:translate-y-[-3px]	 px-[14px] py-[10px] font-bold	capitalize rounded-lg">
            Get in Touch
          </Button>
        </ul> :
          <MobileNavbar />}

      </div>

    </div>
  )

}

export default Navbar