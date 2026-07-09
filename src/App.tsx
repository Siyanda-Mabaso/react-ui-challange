import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import {Images} from "./components/Images/Images";
import Card from "./components/Cards/Card"

function App (){
   return(
      <>
        <Navbar />
       <Hero/>
       <Images/>   
       <Card/>  
      </>
   )
}

export default App;