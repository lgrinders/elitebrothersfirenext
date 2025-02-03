import { RefObject } from "react";

interface HamburgerProps {
  setSideNavigationShowing: (show: boolean) => void;

  sideNavigationShowing: boolean;

  ref: RefObject<HTMLButtonElement | null>;
}

const Hamburger = ({
  setSideNavigationShowing,
  sideNavigationShowing,
  ref,
}: HamburgerProps) => {
  return (
    <button
      ref={ref}
      className="group "
      onClick={() => setSideNavigationShowing(!sideNavigationShowing)}
    >
      <div className="grid justify-items-center gap-1.5">
        <span
          className={`h-0.5 w-6 rounded-full bg-black transition ${sideNavigationShowing && "rotate-45 translate-y-2"}`}
        ></span>

        <span
          className={`h-0.5 w-6 rounded-full bg-black transition ${sideNavigationShowing && "scale-x-0"}`}
        ></span>

        <span
          className={`h-0.5 w-6 rounded-full bg-black transition ${sideNavigationShowing && "-rotate-45 -translate-y-2"}`}
        ></span>
      </div>
    </button>
  );
};

export default Hamburger;
