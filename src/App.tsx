import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import {Images} from "./components/Images/Images";

function App (){
   return(
      <>
        <Navbar />
       <Hero/>
       <Images/>     
      </>
   )
}

export default App;