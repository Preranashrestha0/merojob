import Navbar from "@/components/Navbar/navbar";
import About from "@/pages/About/about";
import HomePage from "@/pages/Home/home";
import Image from "next/image";

export default function Home() {
  return (
    <div> 
      <Navbar/>
      <HomePage/>
      <About/>
    </div>
  );
}
