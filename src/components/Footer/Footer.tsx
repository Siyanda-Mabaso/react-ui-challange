import desertfooter from '../../assets/images/desertfooter.png'
import footercupcake from '../../assets/images/footercupcake.png'
import styles from './Footer.module.css'
import facabook from '../../assets/images/facebook.png'
import tiktok from '../../assets/images/tik-tok.png'
import instagram from '../../assets/images/instagram.png'

export const Footer = () => {
  return (
    <>
    <div className={styles['container']}>

        <div className={styles['flexboxItem']}>
            <img src={desertfooter} alt="desert cake" className={styles['img']}/>
            </div>
            <div className={styles['flexboxItem']}>
            <img src={footercupcake} alt="footercupcake" className={styles['img']}/>
            </div>
        
           <div className={styles['flexboxItem']}>
            <h1> Follow Us On these Pages</h1>
            <div className={styles['icon-box']}>
            
                <img src={instagram} alt="InstaIcon" className={styles['icons']}/>
             
                 <img src={facabook} alt="InstaIcon" className={styles['icons']}/> 
               
             
                  <img src={tiktok} alt="InstaIcon" className={styles['icons']}/>
                 
                  
            </div>
          
            </div>
             </div>
           
    </>
  )
}
