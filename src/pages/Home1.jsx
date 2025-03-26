import './Home1.css'

import Hero from "../components/Hero";
import SwipeCarousel from "../components/SwipeCarousel";
import AuthComponent from "../components/AuthComponent";
import WhyCard from "../components/WhyCard";
import StackedCardTestimonials from "../components/StackedCardTestimonials";
import FAQ from "../components/FAQ";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home1 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header/>
        <div className="hero-section">
          <div className="hero-left">
            <Hero />
          </div>
          <div className="hero-right">
            <SwipeCarousel />
          </div>
        </div>
        <AuthComponent/>
        <WhyCard/>
        <StackedCardTestimonials/>
        <FAQ/>
        <Footer/>
    </div>
  )
}
export default Home1