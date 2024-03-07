import React from 'react'
import styles from './Card.module.css';

interface CardProps {
  children: any;
  className:any;
}
export const Card: React.FC<CardProps> = ({ children , className}) => {
  return (
    <div className={`${styles.card} ${className}`}>
      {children}
    </div>
  )
}
