import Footer from "@/components/footer";
import Navbar from "@/components/Navbar/navbar";
import About from "@/pages/About/about";
import Faqs from "@/pages/faqs/faqs";
import HomePage from "@/pages/Home/home";
import Howitworks from "@/pages/howitworks/howitworks";


export default function Home() {
  return (
    <div className="md:mx-28 flex-col justify-evenly "> 
      <Navbar/>
      <HomePage/>
      <About/>
      <Howitworks/>
      <Faqs/>
      <Footer/>
    </div>
  );
}
