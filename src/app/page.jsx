import Image from "next/image";
import Header from "./components/Header"; 
import Home from "./components/Home";
import Invest from "./components/Invest";
import Benefits from "./components/Benefits";
import Token from "./components/Token";
import Roadmap from "./components/Roadmap";
import Global from "./components/Global";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
export default function Main() {
  return (
  <>
  <Header/>
  <Home/>
  <Invest/>
  <Benefits/>
  <Token/>
  <Roadmap/>
  <Global/>
  <FAQ/>
  <Footer/>
  </>
  );
}
