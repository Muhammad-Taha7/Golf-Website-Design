import { useEffect, useState } from "react";
import "../App.css"; 
export const Main = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });      // Actual mouse position
  const [slowPos, setSlowPos] = useState({ x: 0, y: 0 }); // Smooth/slow cursor

  useEffect(() => {
    const mouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    // Smooth follow loop for slow cursor
    const follow = () => {
      setSlowPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.05, // 0.05 = speed factor (smaller = slower)
        y: prev.y + (pos.y - prev.y) * 0.05,
      }));
      requestAnimationFrame(follow);
    };
    follow();

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [pos]);

  return (
    <>
    <div id="main"
  className="main relative min-h-screen w-full bg-fixed bg-cover bg-center flex items-center justify-center text-white text-3xl"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://rent2play.golf/cdn/shop/articles/Youngster_and_Family_Golf_480f71c1-5af4-4e83-b83d-2f295520f50f.jpg?v=1748060550')",
  }}
>
  <div className="text relative text-center flex justify-center items-center flex-col">
    <h2 id="stroke-text" className="text-[3rem] md:text-[6rem] lg:text-[8.5rem] font-extrabold">
      Eat. Drink. Play.
    </h2>
    <h2 className="text-[1.5rem] px-10 md:px-0 md:text-[2.5rem] font-bold">
      Welcome to Sidcup Family Golf!
    </h2>
    <p className="px-5 text-[1.1rem] md:max-w-[50rem] md:px-0 mt-4 md:text-[1.32rem]">
      Sidcup Family Golf is a Toptracer driving range and crazy golf venue in
      Sidcup, South East London. Passionate about technology, player development
      and making golf fun and accessible to everyone.
    </p>
  </div>

  {/* Big Blur Cursor (slow follow) */}
  <div
    className="fixed hidden lg:block w-80 h-80 rounded-full bg-[#c0fa20fa]/30 blur-3xl pointer-events-none"
    style={{
      left: `${slowPos.x - 120}px`,
      top: `${slowPos.y - 120}px`,
    }}
  ></div>

  {/* Small Solid Cursor (fast follow) */}
  <div
    className="fixed  hidden lg:block w-6 h-6 rounded-full bg-[#c0fa20fa] mix-blend-difference pointer-events-none"
    style={{
      left: `${pos.x - 12}px`,
      top: `${pos.y - 12}px`,
    }}
  ></div>
</div>

    </>
  );
};
