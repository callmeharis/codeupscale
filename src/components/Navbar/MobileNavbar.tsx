import React, { useState } from 'react'
import { Button } from '../Button/Button';
import styles from './Navbar.module.css';
import NavDropDown from './NavDropDown';
import NavItem from './NavItem';
const MobileNavbar = () => {
    const [isnavActive, setIsnavActive] = useState<boolean>(false);

    const toggleHumBurger = () => {
        setIsnavActive(!isnavActive)
    }
    return (
        <div>
            <button id={styles.navIcon} className={isnavActive ? styles.open : ''} onClick={toggleHumBurger}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            {isnavActive &&
                <div className={styles.mobileMenu}>
                    <ul className='mt-[50px] px-[35px] w-full '>
                        <div>
                            <NavItem text="Home" className='text-white 	 text-lg 	  inline-block	 w-full  border-b	py-3' href={''} />
                            <NavItem text="About" className='text-white text-lg 		  inline-block w-full  border-b py-3	' href={''} />
                            <NavDropDown dropDownText='Services' className='text-white text-lg 		  inline-block 	w-full border-b py-3' />
                            <NavItem text="Hire Talent" className='text-white text-lg 		 inline-block w-full	 border-b py-3' href={''} />
                            <NavItem text="Work" className='text-white text-lg 	  inline-block w-full  border-b py-3	' href={''} />
                            <NavDropDown dropDownText='Careers' className='text-white text-lg 		w-full  border-b py-3 inline-block	' />
                        </div>
                        <Button className="bg-primary-dark text-white text-base font-poppins  mt-5	 px-[14px] py-[10px] font-bold	capitalize rounded-lg">
                            Get in Touch
                        </Button>
                    </ul>
                </div>
            }
        </div>
    )
}

export default MobileNavbar