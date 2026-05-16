import { useState } from "react";
import { ForniteImage } from "@/assets";
import { assignColorsByLetter } from "@/utils";

const teams = [
  {
    name: "Deadline",
    players: [{ name: "Albert" }, { name: "Smith" }, { name: "Jon" }],
  },
];

const HeroBannerSection = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="relative gap-0 py-5 overflow-hidden pb-14">
      {/* <img src="" alt="" className="" /> */}

      {/* <img
        src={ForniteImage}
        className="absolute inset-0 p-0 m-0 w-full h-full object-cover blur-3xl object-center"
      /> */}

      <div
        className={`absolute inset-0 mask-b-from-20% mask-b-to-80% bg-[url(${ForniteImage})] bg-center 
      bg-cover saturate-150 blur-3xl`}
      />
      <div className="absolute inset-0 bg-gradient-to-t bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-10% to to-transparent" />

      {/* Title */}
      <div
        className="animate-pulse relative
      shadow-2xs -mb-14 px-2 py-1 m-0 flex-col flex justify-center items-center"
      >
        <div className="relative flex justify-center items-center py-6">
          <h2
            className="uppercase tracking-widest
          text-9xl text-white/70 
          font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
          >
            FORNITE
          </h2>
        </div>
        {/* <div className="absolute w-full h-full shadow-[0_0_60px_rgba(217,70,239,0.7)]" /> */}
      </div>

      <div
        className="flex justify-center items-center gap-0 rounded-lg 
       border mx-12 overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.35)] 
       "
      >
        {/* Hero */}
        <div
          className="relative bg-white-400/20 backdrop-blur-sm h-[400px] w-2/3 flex 
        justify-center items-center "
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {/* Background Image */}
          <div className="absolute w-full h-full bg-white/50 overflow-hidden ">
            <img
              src={ForniteImage}
              alt=""
              className="object-center object-cover w-full h-full"
            />
          </div>

          {hover && (
            <div
              className="relative flex flex-col 
          justify-around items-center bg-gradient-to-r from-black/20 via-black/50 to-black/40
          h-full w-full p-8 transition-all duration-1000 ease-in"
            >
              <h3
                className="
                  text-white
                  text-3xl
                  font-bold
                  mb-2
                "
              >
                Enter the Battle
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                Experience competitive matches, live events and next-gen gaming
                streams with immersive visuals.
              </p>
              <button
                className="
                py-4
                w-1/3
                rounded-2xl
                font-semibold
                text-white
                bg-gradient-to-r
                from-fuchsia-500
                to-purple-600
                shadow-[0_0_30px_rgba(217,70,239,0.6)]
                hover:scale-[1.02]
                transition-all
                duration-300
              "
              >
                Watch Live
              </button>
            </div>
          )}
        </div>

        {/* Right Side */}
        <div
          className="bg-white-400/20 backdrop-blur-sm h-[400px] w-1/3 
        flex flex-col justify-around items-center py-6 bg-black/20 gap-y-2"
        >
          {/* Choose Platform */}
          <div className="w-[80%] px-4 py-1 rounded-xl bg-black/10 text-gray-50">
            <div className="">
              <h4 className="text-sm tracking-wide font-medium">
                Choose Platform
              </h4>
            </div>
            <div
              className="w-full bg-black/20 flex items-center justify-center 
            gap-x-1 rounded-full p-1 mt-2"
            >
              <button className="px-4 py-2 rounded-full bg-white/20">
                <span className="text-xs font-normal">Party</span>
              </button>
              <button className="px-4 py-2 rounded-full bg-white/20">
                <span className="text-xs font-normal">Match</span>
              </button>
              <button className="px-4 py-2 rounded-full bg-white/20">
                <span className="text-xs font-normal">Streams</span>
              </button>
            </div>
          </div>
          {/* Search Now */}
          <div className="w-[80%] rounded-xl bg-black/10 text-gray-50 h-full">
            <div className="px-2 py-1">
              <h4 className="text-sm tracking-wide  font-medium">
                Searching Games
              </h4>
            </div>
            <div className="w-full px-2">
              <div
                className="w-full bg-black/20 flex flex-col items-center justify-center 
            gap-x-1 rounded-md p-2 mt-2 text-xs"
              >
                {/* Titulo del juego */}
                <div className="flex justify-around items-center w-full px-1">
                  {/* TItulo */}
                  <div className="w-2/3">
                    <h5 className="text-sm tracking-wide font-medium">
                      Fornite
                    </h5>
                  </div>

                  {/* Boton de Filtro*/}
                  <div>
                    <button className="p-1 bg-gray-100/10 text-white rounded-full">
                      Filters
                    </button>
                    {/* <span>Fornite</span> */}
                  </div>
                </div>
                {/* <hr className="my-2 "/> */}
                <div className="h-36 w-full mt-4">
                  <div
                    className="overflow-y-auto p-0 m-0 w-full 
                  flex flex-col justify-between items-center gap-1 h-2/3"
                  >
                    <div className="flex justify-around items-center gap-1 w-full">
                      <span
                        className="w-6 h-6 bg-fuchsia-800 text-center 
                    align-middle content-center font-semibold rounded-full"
                      >
                        1
                      </span>
                      <span className="text-sm font-semibold">Deadline</span>

                      <div className="flex items-center justify-center gap-0">
                        <div
                          className={`w-6 h-6 overflow-hidden rounded-full -ml-2 bg-${assignColorsByLetter("Adam")}-300 
                          text-gray-950/80 text-center content-center font-semibold`}
                        >
                          <span>{"Adam".charAt(0)}</span>
                        </div>
                        <div
                          className={`w-6 h-6 overflow-hidden rounded-full -ml-2 bg-${assignColorsByLetter("Killer")}-300 
                          text-gray-950/80 text-center content-center font-semibold`}
                        >
                          <span>{"Killer".charAt(0)}</span>
                        </div>
                        <div
                          className={`w-6 h-6 overflow-hidden rounded-full -ml-2 bg-${assignColorsByLetter("Smith")}-300 
                          text-gray-950/80 text-center content-center font-semibold`}
                        >
                          <span>{"Smith".charAt(0)}</span>
                        </div>
                        <div className="text-xs mx-1">
                          <span>+2 more</span>
                        </div>
                      </div>

                      <button className="w-6 h-6 bg-gray-100/10 text-white text-center content-center rounded-full">
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="my-2 w-full h-fi 
                      py-4
                      rounded-2xl
                      font-semibold
                      text-white
                      bg-gradient-to-r
                      from-fuchsia-500
                      to-purple-600
                      shadow-[0_0_30px_rgba(217,70,239,0.6)]
                      hover:scale-[1.02]
                      transition-all
                      duration-300
                    "
                  >
                    <span> Search Now </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBannerSection;
