import ResponsiveTopPageNavigation from "../responsiveTopPageNavigation/ResponsiveTopPageNavigation";
import TopPageBanner from "../topPageBanner/TopPageBanner";
import TopPageNavigation from "../topPageNavigation/TopPageNavigation";

export default function Header() {
  return (
    <>
      <TopPageBanner />
      <header className="sticky top-0 z-50">
        <TopPageNavigation />
        <ResponsiveTopPageNavigation />
      </header>
    </>
  );
}
