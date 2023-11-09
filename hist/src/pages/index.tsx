import NavBar from "./components/NavBar";
import AboutSection from "./sections/AboutSection";
import HomeSection from "./sections/HomeSection";
import Head from "next/head";
import ReshapingSection from "./sections/ReshapingSection";
import VisionSection from "./sections/VisionSection";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Hist</title>
        <meta name="title" content="Hist" />
        <meta name="description" content="Connecting Users with Providers" />
        <meta name="keywords" content="hist healtcare booking" />
        <meta name="author" content="Sean Chuah Tse Yung" />
        <meta name="theme-color" content="#FFFFFF" />

        <meta property="og:title" content="Hist" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:description" content="Connecting Users with Providers" />

        <meta property="twitter:title" content="Hist" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:image" content="" />
        <meta property="twitter:description" content="Connecting Users with Providers" />
      </Head>
      <NavBar/>
      <HomeSection/>
      <AboutSection/>
      <ReshapingSection/>
      {/* <VisionSection/> */}
    </main>
  )
}
