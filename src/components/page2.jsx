export const Page2 = () => {
  const items = ["Toptracer Range", "Golf Lessons", "Adventure Golf", "Café", "Events"];
  
  return (
    <div id="page2" className="min-h-screen bg-black pt-20 overflow-hidden">
      <div className="w-full overflow-hidden whitespace-nowrap">
        <div className="flex min-w-[200%] animate-marquee font-extrabold">
          {/* Original items */}
          {items.map((text, idx) => (
            <h4
              key={idx}
              className="marquee-item"
            >
              {text}
            </h4>
          ))}
          {/* Duplicate items for infinite scroll */}
          {items.map((text, idx) => (
            <h4
              key={idx + items.length}
              className="marquee-item"
            >
              {text}
            </h4>
          ))}
        </div>
      </div>
     {/* About Section */}
<div className="about-section w-full text-white flex flex-col lg:flex-row justify-center lg:justify-evenly items-center gap-10 px-5 lg:px-0 py-20 lg:pt-36">
  
  {/* Left Image */}
  <div className="left-section h-64 sm:h-80 md:h-96 lg:h-100 w-full sm:w-96 lg:w-96 flex-shrink-0">
    <img
      className="h-full w-full object-cover rounded-xl shadow-lg"
      src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-1-768x511.jpg?strip=all&lossy=1&sharp=1&ssl=1"
      alt="About Left"
    />
  </div>

  {/* Text Section */}
  <div className="mid-section flex flex-col items-center text-center max-w-4xl px-4">
    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase mb-6">
      About Us
    </h2>
    <p className="text-base sm:text-lg lg:text-xl mb-4 px-2 sm:px-6">
      Home to a 46-bay, multi-tier, floodlit driving range, powered by Toptracer Range technology. Complimented by a practice green and bunker, coffee shop and American Golf Store. There truly is something for everyone as we also boast two outdoor 18-hole dinosaur themed crazy golf courses.
    </p>
    <p className="text-base sm:text-lg lg:text-xl px-2 sm:px-6">
      Please note: we are a cashless venue. The range closes at 10pm with last balls at 9pm.
    </p>
  </div>

  {/* Right Image */}
  <div className="right-section h-64 sm:h-80 md:h-96 lg:h-100 w-full sm:w-96 lg:w-96 flex-shrink-0">
    <img
      className="h-full w-full object-cover rounded-xl shadow-lg"
      src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-2-768x511.jpg?strip=all&lossy=1&sharp=1&ssl=1"
      alt="About Right"
    />
  </div>

</div>

    </div>
  );
};
