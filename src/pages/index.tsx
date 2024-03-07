import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { StoryCard } from "@/components/storyCard/StoryCard";
import ContactForm from "@/sections/home/contactForm/ContactForm";
import Exelence from "@/sections/home/exelence/Exelence";
import HeroBanner from "@/sections/home/heroBanner/HeroBanner";
import Industries from "@/sections/home/industries/Industries";
import OurProcess from "@/sections/home/ourProcess/OurProcess";
import Partnership from "@/sections/home/partnership/Partnership";
import RelyOnUs from "@/sections/home/relyOnUs/RelyOnUs";
import Research from "@/sections/home/research/Research";
import Services from "@/sections/home/services/Services";
import Testimonials from "@/sections/home/testimonials/Testimonials";
import Theory from "@/sections/home/theory/Theory";
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Codeupscale | Home</title>
      </Head>
      <HeroBanner />
      <RelyOnUs />
      <Services />
      <Industries />
      <Theory />
      <OurProcess />
      <Partnership />
      <Testimonials />
      <Exelence />
      <Research />
      <ContactForm />
    </>
  )
}

export default Home