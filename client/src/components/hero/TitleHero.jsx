import { useEffect } from "react";
import styles from "./TitleHero.module.css";

const TitleHero = ({ name, transitioning }) => {
  useEffect(() => {
    const el = document.getElementById("title");
    if (transitioning) {
      // el.style.opacity = 0
      // el.style.translate =
    } else {
    }
  }, [transitioning]);

  return (
    <div
      //   className="absolute bottom-0 z-40 w-full
      //       bg-black/50 md:bg-white/95 backdrop-blur-3xl md:border-y
      //       rounded-none shadow-2xl px-6 m-0 py-1
      //       flex-col flex justify-center items-center"
      className={styles.container}
    >
      {/* <div className="relative flex justify-start w-full items-center py-6"> */}
      <h2
        id="title"
        className={`${styles.title} animate-pulse 
        ${transitioning ? styles.hidden : styles.visible}
        `}
        // className={`tracking-widest text-xl lowercase text-black/70
        //     font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]
        //     transition-all duration-500
        //     ${transitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
      >
        / {name}
      </h2>
    </div>
  );
};
export default TitleHero;
