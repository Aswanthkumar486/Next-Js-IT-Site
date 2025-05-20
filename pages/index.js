import React from 'react';
import data from '../data/data.json';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import ContactUs from '@/components/Contact';
import Footer from '@/components/Footer';
import Works from '@/components/OurWork';

export default function Home({ hero, services, works, about, heropage, nav, footer }) {
  return (
    <>
      <Navbar nav={nav} />
      <Hero data={{ heropage }} />

      <About about={about} />
      <Works data={works} />
      <Services services={services} />
      <ContactUs />
      <Footer footer={footer} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      heropage: data.heropage || null,
      hero: data.hero || null,
      services: data.services || null,
      about: data.about || null,
      nav: data.nav || null,
      works: data.works || null,
      footer: data.footer || null, // ✅ Add this line
    },
  };
}
