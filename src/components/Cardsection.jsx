import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export const Cards = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 15,
          speed: 1000,
          perspective: 1500,
          scale: 1.05,
          glare: true,
          "max-glare": 0.2,
          gyroscope: true,
        });
      }
    });
  }, []);

  const cards = [
    {
      id: 1,
      img: "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-toptracer-1024x682.jpg?strip=all&lossy=1&sharp=1&ssl=1",
      hoverTextHeading: "TOPTRACER RANGE",
      hoverpara:
       "Experience unmatched precision and endless fun with our cutting-edge Toptracer technology. Every swing you take is tracked in real time, giving you instant feedback on distance, speed, and accuracy. Challenge your friends to exciting competitions, explore fun interactive games, or simply enjoy practicing like a pro in a world-class environment. Whether you’re a beginner learning the basics or an advanced player sharpening your edge, Toptracer brings entertainment and professional-level training together to create an unforgettable golfing experience for all skill levels.",
      bottomText: "TOPTRACER RANGE",
    },
    {
      id: 2,
      img: "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-4-1024x1024.jpg?strip=all&lossy=1&sharp=1&ssl=1",
      hoverTextHeading: "TRAINING SESSIONS",
      hoverpara:
       "Elevate your game with Toptracer – where innovation meets passion for golf. Experience data-driven insights on every swing, track your progress over time, and discover new ways to challenge yourself while having fun. Whether you aim to sharpen your professional skills, enjoy a social evening with friends, or simply explore golf in a whole new way, Toptracer offers a dynamic, interactive environment that redefines practice. It’s more than training – it’s golf like you’ve never experienced before.",
      bottomText: "TRAINING SESSION",
    },
    {
      id: 3,
      img: "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-lessons-1024x682.jpg?strip=all&lossy=1&sharp=1&ssl=1",
      hoverTextHeading: "IMPROVE YOUR SKILLS",
      hoverpara:
       "Step into the future of golfing with Toptracer’s state-of-the-art technology that transforms practice into pure excitement. Watch your shots come alive on screen with detailed visuals, stats, and instant replays that push you to play smarter and better. From competing in global leaderboards to enjoying casual games with friends and family, every session is a new adventure. No matter your skill level, Toptracer delivers a perfect blend of training and entertainment that keeps you motivated, engaged, and coming back for more.",
      bottomText: "IMPROVE SKILLS",
    },
  ];

  return (
    <div className="card-section py-[4rem] md:pb-[10rem] px-6 md:px-0 flex justify-center items-center gap-16 flex-wrap w-full bg-black">
      {cards.map((card, index) => (
        <div
          key={card.id}
          ref={(el) => (cardsRef.current[index] = el)}
          className="group relative h-[35rem] w-[32rem] rounded-[1.2rem] cursor-grab overflow-hidden bg-[#A8D927] shadow-1xl transition-all duration-500"
        >
          {/* Image */}
          <img
            className="h-full w-full object-cover object-center rounded-[1.2rem] transition-opacity duration-500 group-hover:opacity-0"
            src={card.img}
            alt=""
          />
{/* Overlay (darkness layer) */}
<div className="absolute inset-0 bg-black/20 rounded-[1.2rem] transition-all duration-500 group-hover:bg-black/40"></div>

{/* Hover Content */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
  {/* Arrow Right Top */}
  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
    <i className="ri-arrow-right-up-line border border-white py-2 px-2 sm:py-3 sm:px-3 rounded-full text-white text-xl sm:text-2xl bg-black/40 hover:bg-black transition-transform duration-300 hover:rotate-45" />
  </div>

  {/* Text Mid Left (Responsive) */}
  <div className="absolute top-[35%] sm:top-1/2 left-4 sm:left-6 -translate-y-[35%] sm:-translate-y-1/2 text-left max-w-[80%] sm:max-w-[90%]">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 sm:mb-3 text-white drop-shadow-lg leading-snug">
      {card.hoverTextHeading}
    </h2>
    <p className="text-sm sm:text-base md:text-[1.1rem] leading-relaxed text-gray-200">
      {card.hoverpara}
    </p>
  </div>
</div>



          {/* Static Bottom Text */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full text-center px-4 
                text-white text-[2.2rem] font-extrabold leading-tight
                transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          >
            {card.bottomText}
          </div>
        </div>
      ))}
    </div>
  );
};
