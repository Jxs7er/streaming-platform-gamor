import { useAuth } from "@/context";
import { GamesServices } from "@/services/modules";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { SearchingGames } from "..";
import { LoadingDots } from "../common/loadings";

import styles from "./HeroBanner.module.css";
import TitleHero from "./TitleHero";
import PlayersCard from "./PlayersCard";
import BackgroundBlurred from "./BackgroundBlurred";

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
        <LoadingDots loading={loading} color="bg-gray-900/15" />
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
    <div
      className={styles.container}
      // className="flex flex-col gap-x-1 md:gap-x-0
      // md:flex-row md:justify-between items-center w-full"
    >
      {/* Hero Banner */}
      <div
        //   className="relative overflow-hidden w-full
        // py-24 h-[400px] flex justify-around items-center gap-10"
        className={styles.hero_container}
      >
        {/* Trailer */}
        <div
          className={styles.trailer_container}
          // className="relative w-full h-screen overflow-hidden bg-black"
        >
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
            className={styles.video}
            // className="absolute inset-0 w-full h-full object-cover blur-sm"
          >
            <source src={currentGame.video} />
          </video>

          {/* DARK OVERLAY */}
          <div
            className={styles.video_overlay}
            // className="absolute inset-0 bg-black/20"
          />
        </div>

        {/* Title */}
        <TitleHero name={currentGame.name} transitioning={transitioning} />

        {/* Hero */}
        <PlayersCard currentGame={currentGame} transitioning={transitioning} />

        {/* Background Blurred */}
        <BackgroundBlurred
          currentGame={currentGame}
          transitioning={transitioning}
        />
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
