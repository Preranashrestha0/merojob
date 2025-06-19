
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar/navbar";
import Pricing from "@/components/pricing/pricing";
import About from "@/pages/About/about";
import Faqs from "@/pages/faqs/faqs";
import HomePage from "@/pages/Home/home";
import Howitworks from "@/pages/howitworks/howitworks";
import Services from "@/pages/services/services";
import Testimonials from "@/pages/testimonials/testimonials";


export default function Home() {
  return (
    <div className="md:mx-28 flex-col justify-evenly min-h-screen max-w-7xl items-center"> 
      <Navbar/>
      <HomePage/>
      <About/>
      <Pricing/>
      <Howitworks/>
      <Services/>
      <Testimonials/>
      <Faqs/>
      <Footer/>
    </div>
  );
}
