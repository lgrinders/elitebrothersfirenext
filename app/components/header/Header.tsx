import TopPageBanner from "../topPageBanner/TopPageBanner";
import TopPageMainBanner from "../topPageMainBanner/TopPageMainBanner";
import TopPageNavigation from "../topPageNavigation/TopPageNavigation";

export default function Header() {
  return (
    <>
      <TopPageBanner />
      <header className="sticky top-0 z-10">
        <TopPageMainBanner />
        <TopPageNavigation />
      </header>
    </>
  );
}
