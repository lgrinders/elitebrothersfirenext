import Head from "next/head";
import Carousel from "./components/carousel/Carousel";
import ServiceArea from "./components/serviceArea/ServiceArea";
import WhatSetsUs from "./components/whatSetsUs/WhatSetsUs";
import InformationalContent from "./components/informationalContent/InformationalContent";
import OurSystems from "./components/ourSystems/OurSystems";
import ReviewCarousel from "./components/reviewCarousel/ReviewCarousel";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fire Safety | Elite Brothers Fire & Safety</title>

        <meta
          name="description"
          content="Protect your property with Elite Brothers Fire & Safety. Comprehensive fire safety systems for Nashville and surrounding areas."
        />

        <link
          rel="icon"
          href="/elitebrothersfaviconwide.png"
          type="image/png"
        />
      </Head>
      <main>
        <div className="relative h-[550px] xl:h-[650px]">
          <Carousel />
        </div>
        <InformationalContent />
        <ReviewCarousel />
        <OurSystems />
        <WhatSetsUs />
        <ServiceArea />
      </main>
    </>
  );
}
