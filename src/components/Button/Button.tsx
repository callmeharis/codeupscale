import React from 'react'
import styles from './Button.module.css';
interface buttonProps{
  children:any;
  className:string;
}
export const Button:React.FC<buttonProps> = ({children, className}) => {

  return (
    <button className={`${className} ${styles.customBtn}`}>{children}</button>
  )
}
