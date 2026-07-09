import styles from './Images.module.css'
import React from 'react'
import cupcakes from '../../assets/images/cupcakes.png'
import macaroni from'../../assets/images/macaroni.png'
import custom from '../../assets/images/custom.png'


export const Images = () => {
  return (
    <>
    
      
            <h1 className={styles['text']}>Delight In Every Bite!</h1>
       
   
        <div className={styles['container']}>

        <div className={styles['flexboxItem']}>
            <img src={custom} alt="customcake" className={styles['img']}/>
            </div>
        <div className={styles['flexboxItem']}>
            <img src={macaroni} alt="macaroni" className={styles['img']} />
            </div> 
        <div className={styles['flexboxItem']}>
            <img src={cupcakes} alt="cupcakes" className={styles['img']} />
            </div>
        </div>
    
   
    </>
  )
}
