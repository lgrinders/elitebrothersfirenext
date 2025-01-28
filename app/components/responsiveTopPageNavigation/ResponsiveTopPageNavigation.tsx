import Logo from "../ui/logo/logo";

const ResponsiveTopPageNavigation = () => {
  return (
    <nav className="lg:hidden items-center h-20 justify-center gap-2 lg:gap-5 bg-white flex md:text-base font-bold shadow-xl">
      <Logo />
    </nav>
  );
};

export default ResponsiveTopPageNavigation;
