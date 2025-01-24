import ImageCarousel from "./components/imageCarousel/ImageCarousel";
import InformationalContent from "./components/informationalContent/InformationalContent";
import OurSystems from "./components/ourSystems/OurSystems";
import ServiceArea from "./components/serviceArea/ServiceArea";
import WhatSetsUs from "./components/whatSetsUs/WhatSetsUs";

export default function Home() {
  return (
    <main>
      <div className="relative h-[550px] xl:h-[650px]">
        <ImageCarousel />
      </div>
      <InformationalContent />
      <OurSystems />
      <WhatSetsUs />
      <ServiceArea />
    </main>
  );
}
