import useCheckMobileScreen from '@/hooks/UseCheckMobileScreen';
import { DropdownIcon } from '@/svg';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './Navbar.module.css';

interface NavDropDownProps {
  dropDownText: string;
  className?: string;
}
const NavDropDown: React.FC<NavDropDownProps> = ({ dropDownText, className }) => {
  const isItMobile = useCheckMobileScreen();
  const [open, setOpen] = useState(false);



  return (
    <div>
      {!isItMobile ?
        <div className={`flex justify-center mr-[30px] ${className}`}>
          <div onMouseLeave={() => setTimeout(() => {
            setOpen(false)
          }, 200)} className="relative">
            <Link href='/services' onMouseOver={() => setTimeout(() => {
              setOpen(true)
            }, 200)} className={`flex items-center p-2 rounded-md  hover:text-purple font-poppins font-medium	 ${styles.NavDropDownBtn}`}>
              <span className='me-1'> {dropDownText}</span>
              <DropdownIcon />
            </Link>
            <ul
              className={`absolute right-0 w-40 py-2 bg-white z-10  transition font-poppins	 rounded-lg shadow-xl ${open ? "block" : "hidden"
                }`}
            >
              <li className="flex w-full items-center px-3 py-2 text-sm font-poppins hover:bg-gray-100">
                Dropdown List 1
              </li>
              <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100 font-poppins">
                Dropdown List 2
              </li>
              <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100 font-poppins">
                Dropdown List 3
              </li>
            </ul>
          </div>
        </div> :
        <div className={`  ${className}`}>
          <div className={`relative ${styles.mobileDropDownmenu}`}>
            <button className={`flex items-center ps-0 rounded-md  font-poppins  text-lg font-medium	 ${styles.NavDropDownBtn} ${open && styles.NavDropDownBtnOpenState}`}
              onClick={() => setOpen(!open)}>
              <span className='me-1'> {dropDownText}</span>
              <DropdownIcon />
            </button>
            {open &&
              <ul
                className={`right-0 w-40 py-2  font-poppins	 `}
              >
                <li className="flex w-full items-center px-3 py-2 text-base font-light font-poppins text-white">
                  Dropdown List 1
                </li>
                <li className="flex w-full items-center px-3 py-2 text-base font-light text-white font-poppins">
                  Dropdown List 2
                </li>
                <li className="flex w-full items-center px-3 py-2 text-base font-light text-white font-poppins">
                  Dropdown List 3
                </li>
              </ul>
            }
          </div>
        </div>


      }

    </div>

  )
}

export default NavDropDown