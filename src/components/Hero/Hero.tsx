import './Hero.module.css'
import sectionImage from '../../assets/images/herosection.png'
// import styles from  './Hero.module.css'

function Hero(){
  return (
    <>
      <div >
      <div style={{backgroundImage:`url(${sectionImage})`,
      minHeight:'40vh', 
      backgroundSize:'cover', 
      backgroundPosition:'center',
      backgroundRepeat:'no-repeat'
      }}>     
      <div className="hero-content">
       <h1 className="hero-title"> Delight in</h1>
       <p className="hero-p">PARTICU IN FUERY BITE!</p>
       <button className="hero-btn">ORDER now</button>
       </div>
      </div>
      </div>
      </>
  )
}
 export default Hero;