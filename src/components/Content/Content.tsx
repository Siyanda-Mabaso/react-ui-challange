import React from 'react'
import styles from './Content.module.css'
import holiday from '../../assets/images/holiday.png'
import holidaycollection from'../../assets/images/holidaycollection.png'
import cakecollection from'../../assets/images/cakecollectin.png'
export const Content = () => {
  return (
    <>
    <div className={styles['container1']}>
<div className={styles['flexboxItem']}>
<h3>Custom Cakes</h3>
<p>Best custom cake you find in town and best selling</p>
<button className={styles['btn-custom']}>Order Custom</button>
</div>
<div className={styles['flexboxItem']}>
<h3>Macaroni</h3>
<p>Best Macaroni you find in town and best selling</p>
<button className={styles['btn-macaroni']}>Order Macaroni</button> 
</div>
<div className={styles['flexboxItem']}>
<h3>Cupcake Collections</h3>
<p>Best Cupcake collection you find in town and best selling</p>
<button className={styles['btn-cupcake']}>Order Cupcake</button> 
</div>
    </div>
    
    <h3 className={styles['header-collection']} >Cup Cake Collections</h3>
    <div className={styles['container2']}>

        <div className={styles['flexboxItem1']}>
            
        <img src={holiday} alt="holiday" className={styles['img']} />
       <div className={styles['test']}> 
        <h1>Holiday Specials</h1>
        <h2>- 20% OFF</h2>
        <button className={styles['btn-holiday']}>OFFER TODAY</button></div>
        </div>

        <div className={styles['flexboxItem1']}>
        <img src={cakecollection} alt="cakecollection" className={styles['img']}/>
         <button className={styles['btn-buy']}>BUY TODAY</button>
        </div>

       <div className={styles['flexboxItem1']}>
         <img src={holidaycollection} alt="holidaycollection" className={styles['img']}/>
          <button className={styles['btn-order']}>ORDER NOW</button>
       </div>
     
    </div>
    </>

  )
}

