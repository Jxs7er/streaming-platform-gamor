import { useEffect, useRef, useState } from "react";

export const categories = [
  { name: "All", path: "#" },
  { name: "Live", path: "#" },
  { name: "Gaming", path: "#" },
  { name: "Esports", path: "#" },
  { name: "FPS", path: "#" },
  { name: "MOBA", path: "#" },
  { name: "Battle Royale", path: "#" },
  { name: "RPG", path: "#" },
  { name: "Indie", path: "#" },
  { name: "Speedruns", path: "#" },
  { name: "Highlights", path: "#" },
  { name: "Just Chatting", path: "#" },
  { name: "Horror", path: "#" },
  { name: "Strategy", path: "#" },
  { name: "Simulation", path: "#" },
];

const CategoriesSection = () => {
  const ref = useRef(null);
  const [show, setShow] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      {
        threshold: 0.5,
      },
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[linear-gradient(123deg,_#FAFAFA_80%,_#Fff_20%)] pt-4">
      {/* HEADER */}
      <div className=" px-12 bg-transparent py-2">
        <h4 className="text-sm tracking-wide text-gray-950/80 font-medium">
          Trending Categories /
        </h4>
      </div>
      <div className="relative bg-[linear-gradient(123deg,_#FAE59D_70%,_#FAFAFA_30%)] text-gray-800 ">
        <div className="absolute h-full w-full bg-gradient-to-r to-amber-200 from-fuchsia-300 opacity-80" />
        <div className="px-10 py-6">
          {/* SCROLL ROW */}
          <div className="flex gap-4 flex-wrap pb-2 scrollbar-hide">
            {categories.map((c) => {
              return (
                <div
                  ref={ref}
                  key={c.name}
                  className={`
                min-w-[160px]
                bg-white/80
                border border-gray-200/80
                rounded-xl
                px-4 py-3
                backdrop-blur-md
                hover:bg-white/10
                transition-all duration-500
                flex flex-col justify-between
                ${show ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-6"}
              `}
                >
                  <span className="text-sm font-semibold text-gray-800/90">
                    {c.name}
                  </span>

                  <button
                    className="
                  text-xs mt-6
                  text-amber-400
                  hover:text-amber-300
                  self-end
                "
                  >
                    Explore →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
