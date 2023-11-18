import { useEffect, useState } from "react";
import Image from "next/image";

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);
  const [NavVisible, setNavVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setNavVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(() => setFirstLoad(false), 3000);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navbarStyle = {
    transform: NavVisible ? "translateY(0)" : "translateY(-100%)",
    transition: "transform 300ms",
  };

  return (
    <nav
      className={`z-20 fixed top-0 w-full bg-backgroundColor ${
        firstLoad ? "animate-fade-down" : "transition-all"
      }`}
      style={navbarStyle}
    >
      <ul className="flex flex-row py-4 justify-between items-center pl-6 pr-20 gap-x-3 lg:gap-x-20 text-xs md:text-lg lg:text-2xl">
        <li>
          <button
            className="hover:text-accentColor transition-all scale-100 hover:scale-105"
            // onClick={(e) => {
            //   setNavVisible(true);
            //   document
            //     .getElementById("home")
            //     ?.scrollIntoView({ behavior: "smooth" });
            // }}
          >
            <Image
              src="/hist.webp"
              alt="Hist Logo"
              width={150}
              height={150}
              className="rounded-xl"
              priority
              />              
          </button>
        </li>
        
        <li className="flex flex-row justify-center gap-x-20">
          <div>
            <button
              className="hover:text-accentColor transition-all scale-100 hover:scale-105 font-bold underline py-4"
              // onClick={(e) => {
              //   document
              //     .getElementById("about")
              //     ?.scrollIntoView({ behavior: "smooth" });
              //   setNavVisible(false);
              // }}
            >
              Contact Us
            </button>
          </div>
          <div>
            <button
              className="hover:text-accentColor transition-all scale-100 hover:scale-105 font-bold underline py-4"
              // onClick={(e) => {
              //   document
              //     .getElementById("about")
              //     ?.scrollIntoView({ behavior: "smooth" });
              //   setNavVisible(false);
              // }}
            >
              About Us
            </button>
          </div>
          <div>
            <button
              className="hover:text-accentColor hover:bg-primaryColor hover:border-4 hover:border-accentColor transition-all font-bold rounded-2xl bg-accentColor text-backgroundColor w-60 h-16"
              // onClick={(e) => {
              //   document
              //     .getElementById("reshaping")
              //     ?.scrollIntoView({ behavior: "smooth" });
              //   setNavVisible(false);
              // }}
            >
              Be Our Providers
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;