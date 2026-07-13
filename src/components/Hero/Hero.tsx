import styles from  './Hero.module.css'
import herosection from'../../assets/images/herosection.png'

function Hero(){
  return (
  <>
   <div className={styles['container']}>
    <img src={herosection} alt="image" className={styles['img']} />
    <div className={styles['centered']}>
    <h1>Delight In</h1>
    <p>PARTIICU IN EVERY BITE!</p>
    <button className={styles['btn-ordernow']}>Order now</button> 
    </div>
    </div>
    
  </>
  )
}
 export default Hero;