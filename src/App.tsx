import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import {Images} from "./components/Images/Images";
import { Content } from "./components/Content/Content";
import { Footer } from "./components/Footer/Footer";
function App (){
   return(
      <>
        <Navbar />
       <Hero/>
       <Images/>   
       <Content/>
       <Footer/>
      </>
   )
}

export default App;