import { useAuth } from "@/context";
import { GamesServices } from "@/services/modules";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { SearchingGames } from "..";
import { LoadingDots } from "../common/loadings";

const HeroBannerSection = () => {
  const [hover, setHover] = useState(false);

  const [transitioning, setTransitioning] = useState(false);

  const navigate = useNavigate();
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);

  const [gameIndex, setGameIndex] = useState(0);
  const [videoDuration, setVideoDuration] = useState(5000);

  const videoRef = useRef(null);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);

      try {
        const res = await GamesServices.get();
        if (!res.ok) return;
        setGames(res.data);
      } catch (error) {
        setGames([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  useEffect(() => {
    if (!games.length) return;

    const id = setTimeout(() => {
      changeGame((gameIndex + 1) % games.length);
    }, videoDuration);

    return () => clearTimeout(id);
  }, [gameIndex, games.length, videoDuration]);

  if (loading)
    return (
      <div className="h-[50vh] w-full flex justify-center items-center">
        <LoadingDots loading={loading} color="bg-gray-900/15"/>
      </div>
    );
    
  if (games.length === 0) return null;
  const currentGame = games[gameIndex];

  const changeGame = (newIndex) => {
    setTransitioning(true);

    setTimeout(() => {
      setGameIndex(newIndex);
      setTransitioning(false);
    }, 250); // duración del fade
  };

  const handleNextGame = () => {
    setGameIndex((prev) => (prev + 1) % games.length);
  };

  const handlePreviousGame = () => {
    setGameIndex((prev) => (prev - 1) % games.length);
  };

  const handleSearchNow = () => {
    if (!user) navigate("/auth/signin");
    console.log("here");

    // Definir el Auth Context
    // Y agregarlo a la lista de busqueda
  };

  const handleJoinTo = async (payload) => {
    try {
      const res = await GamesServices.joinTo(payload);
      if (!res.ok) return;
    } catch (error) {}
  };

  return (
    <div className="flex flex-col gap-x-1 md:gap-x-0 md:flex-row md:justify-between items-center w-full">
      {/* Hero Banner */}
      <div
        className="relative overflow-hidden w-full  
      py-24 h-[400px] flex justify-around items-center gap-10"
      >
        {/* Trailer */}
        <div className="relative w-full h-screen overflow-hidden bg-black">
          <video
            ref={videoRef}
            onLoadedMetadata={() => {
              const duration = videoRef.current?.duration || 5;
              setVideoDuration(duration * 1000);
            }}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover blur-sm"
          >
            <source src={currentGame.video} />
          </video>

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
        {/* Title */}
        <div
          className="absolute bottom-0 z-40 w-full 
          bg-black/50 md:bg-white/95 backdrop-blur-3xl md:border-y 
          rounded-none shadow-2xl px-6 m-0 py-1 
          flex-col flex justify-center items-center"
        >
          {/* <div className="relative flex justify-start w-full items-center py-6"> */}
          <h2
            className={`tracking-widest text-xl lowercase text-black/70 
            font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]
            transition-all duration-500 
            ${transitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
          >
            / {currentGame.name}
          </h2>
          {/* </div> */}
        </div>

        {/* Hero */}
        <div className="absolute inset-0 z-20 bottom-6 flex items-end justify-center gap-4 md:gap-8">
          {[1, 2, 3].map((_, index) => {
            const rotations = [
              "rotate-6 translate-y-4",
              "rotate-0 -translate-y-6 scale-110 z-10",
              "-rotate-6 translate-y-4",
            ];

            return (
              <div
                key={index}
                className={`
                  relative w-32 h-40 md:w-44 md:h-60 rounded-2xl
                  overflow-hidden opacity-90
                  border border-white/10
                  bg-white/5 backdrop-blur-2xl
                  shadow-[0_25px_80px_rgba(168,85,247,0.35)]
                  
                  transition-all duration-700 ease-out
                  hover:scale-105 hover:-translate-y-2
                  
                  ${rotations[index]}
                  ${transitioning ? "opacity-0 scale-90 blur-sm" : "opacity-100 scale-100 blur-0"}
                `}
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 bg-gradient-to-t 
                from-black/60 via-transparent to-white/10 z-10"
                />

                {/* Image */}
                <img
                  src={currentGame.image[index]}
                  alt={currentGame.name}
                  className={`
                    w-full h-full object-cover object-center
                    transition-transform duration-700
                    hover:scale-110
                  ${index !== 1 && "blur-[.6px]"}
                    `}
                />

                {/* Reflection */}
                <div
                  className="absolute inset-0 bg-gradient-to-br
                from-white/20 via-transparent to-transparent
                  opacity-40 pointer-events-non"
                />
              </div>
            );
          })}
        </div>

        {/* Background Blurred */}
        <div
          className="absolute blur-3xl z-0 flex justify-center 
          items-end top-0 bg-transparent h-full w-full pb-1"
        >
          <div
            className={`w-56 h-72 backdrop-blur-2xl rounded-md rotate-2 
          object-center object-contain overflow-hidden border-2 
          shadow-[0_40px_100px_rgba(168,85,247,0.35)]
          transition-all duration-500 ease-in-out 
                ${transitioning ? "opacity-0 scale-95" : "opacity-100 scale-[100%]"} `}
          >
            <img
              src={currentGame.image[0]}
              className={`object-center object-cover w-full h-full saturate-200
                `}
            />
          </div>
        </div>
      </div>

      {/* Search Games */}
      <SearchingGames
        currentGame={currentGame}
        handleSearchNow={handleSearchNow}
        handleJoinTo={handleJoinTo}
      />
    </div>
  );
};
export default HeroBannerSection;
