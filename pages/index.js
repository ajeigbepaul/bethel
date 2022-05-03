import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Getintouch from "./components/Getintouch";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IT Consulting | Bethel-Digitech</title>
        <meta name="description" content="IT Consulting, Bethel Digitech" />
        <link rel="icon" href="/Betheldigitechlogo.jpg" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
        />
      </Head>

      {/* Header and other components are found inside the component folder */}
      <Header />

      <Banner />

      <Getintouch />

      <Services />

      <Testimonial />

      <Footer />
    </div>
  );
}
