import Banner from "../components/home1/Banner";
import CoverArea from "../components/home1/CoverArea";
import Header from "../components/header/Header";
import About from "../components/home1/About";
import GraphtWithImg from "../components/home1/GraphtWithImg";
import FeatureCard from "../components/home1/FeatureCard";
import HorizontalScrolling from "../components/home1/HorizontalScrolling";
import PeopleSection from "../components/home1/PeopleSection";
import Testimonial from "../components/home1/Testimonial";
import Blog from "../components/home1/Blog";
import OurPartner from "../components/home1/OurPartner";
import IndustrialSection from "../components/home1/IndustrialSection";
import ContactSection from "../components/home1/ContactSection";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <CoverArea />
      <About />
      <Footer />
    </>
  );
}
