import { useEffect } from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import AOS from "aos"
import "aos/dist/aos.css"
import TopProducts from "./components/TopProducts"
import Banner from "./components/Banner"
import Subscribe from "./components/Subscribe"
import Testimonials from "./components/Testimonials"

const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Testimonials />
    </div>
  )
}

export default App