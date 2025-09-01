import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);



useEffect(() => {
  ScrollTrigger.create({
    trigger: "#main",
    start: "top top",
    end: "bottom top",
    onEnter: () => {
      const isMobile = window.innerWidth < 768; // mobile breakpoint
      gsap.to("#nav", {
        backgroundColor: "black",
        duration: 0.3,
      });
    },
    onLeaveBack: () => {
      const isMobile = window.innerWidth < 768;
      gsap.to("#nav", {
        backgroundColor: "transparent",
        duration: 0.3,
      });
    },
  });
}, []);

  return (
    <>
      {/* Navbar */}
      <div
        id="nav"
        className="nav flex items-center flex-wrap justify-between py-5 px-4 md:px-6 lg:px-16 w-full text-white bg-transparent fixed z-[999] transition-colors duration-500"
      >
        {/* Left */}
        <div className="left flex items-center gap-8">
          <div className="logo">
            <img
              className="h-14 md:h-20"
              src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg"
              alt="Logo"
            />
          </div>

          <div className="links hidden lg:flex items-center gap-10 font-medium text-[1.1rem]">
            {["Toptracer Range", "Golf Lessons", "Adventure Golf", "Café"].map(
              (item, i) => (
                <a
                  key={i}
                  href="#"
                  className="relative group hover:text-[#95C11E] duration-300"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#95C11E] transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}
          </div>
        </div>

        {/* Right */}
        <div className="right flex items-center">
          {/* Buttons (Desktop) */}
          <div className="btns hidden md:flex text-[1.1rem] items-center gap-5">
            <button className="relative border-4 border-[#95C11E] px-6 py-3 rounded-full overflow-hidden group text-white">
              <span className="relative z-10 group-hover:text-black duration-500">
                Book Range
              </span>
              <span className="absolute inset-0 bg-yellow-300 translate-y-full group-hover:translate-y-0 duration-200"></span>
              <span className="absolute inset-0 bg-[#95C11E] opacity-0 group-hover:opacity-100 duration-200"></span>
            </button>

            <button className="relative border-4 border-[#95C11E] px-6 py-3 rounded-full overflow-hidden group text-white">
              <span className="relative z-10 group-hover:text-black duration-500">
                Book Golf
              </span>
              <span className="absolute inset-0 bg-yellow-300 translate-y-full group-hover:translate-y-0 duration-200"></span>
              <span className="absolute inset-0 bg-[#95C11E] opacity-0 group-hover:opacity-100 duration-200"></span>
            </button>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div
            className="menu block lg:hidden text-3xl cursor-pointer ml-4"
            onClick={toggleMenu}
          >
            <i className="ri-menu-3-fill"></i>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-[998] transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[100%] sm:w-[60%] md:w-[40%] bg-black z-[999] p-6 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center mb-8">
          <img
            className="h-12"
            src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg"
            alt="Logo"
          />
          <i
            className="ri-close-line text-2xl text-white bg-[#95C11E] px-2 py-1 rounded-[50%] cursor-pointer"
            onClick={toggleMenu}
          ></i>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col gap-4 text-lg font-medium">
          {[
            "Toptracer Range",
            "Golf Lessons",
            "Adventure Golf",
            "Café",
            "Events",
            "Shop",
            "Membership",
            "Contact",
          ].map((item, i) => (
            <a
              key={i}
              href="#"
              className="hover:text-[#95C11E] text-white transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Buttons */}
        <div className="mt-14 flex text-white flex-col gap-4">
          <button className="border-2 bg-black border-[#95C11E] px-6 py-3 hover:bg-[#95C11E] hover:text-black duration-200 rounded-full">
            Book Range
          </button>
          <button className="border-2 bg-black border-[#95C11E] px-6 py-3 hover:bg-[#95C11E] hover:text-black duration-200 rounded-full">
            Book Golf
          </button>
        </div>
      </div>
    </>
  );
};
