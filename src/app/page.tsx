
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar/navbar";
import Pricing from "@/pages/pricing/pricing";
import About from "@/pages/About/about";
import Faqs from "@/pages/faqs/faqs";
import HomePage from "@/pages/Home/home";
import Howitworks from "@/pages/howitworks/howitworks";
import Services from "@/pages/services/services";
import Testimonials from "@/pages/testimonials/testimonials";
import WhyChooseUs from "./data/whychooseus/WhyChooseUs";
import ContactForm from "@/pages/contactUs/ContactUs";


export default function Home() {
  return (
    <div className="xl:mx-28 mx-10 flex-col justify-evenly min-h-screen max-w-7xl items-center"> 
      <Navbar/>
      <HomePage/>
      <About/>
      <WhyChooseUs/>  
      <Pricing/>
      <Howitworks/>
      <Services/>
      <Testimonials/>
      <Faqs/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}
