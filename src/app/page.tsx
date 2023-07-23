import Features from "./components/sections/Features";
import Hero from "./components/sections/Hero";
import WhyShiftSmart from "./components/sections/WhyShiftSmart";
import Clients from "./components/sections/Clients";
import Pricing from "./components/sections/Pricing";

export default function Home() {
  return (
    <>
      {/* <Hero />*/}
      <WhyShiftSmart />
      <Features />
      <Clients />
      <Pricing />
    </>
  );
}
