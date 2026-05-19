import styles from "./PlayersCard.module.css";

const PlayersCard = ({ currentGame, transitioning }) => {
  return (
    <div
      className={styles.container}
      // className="absolute inset-0 z-20 bottom-6 flex items-end justify-center
      // gap-4 md:gap-8"
    >
      {[1, 2, 3].map((_, index) => {
        // const rotations = [
        //   "card_rotation_1",
        //   "card_rotation_2",
        //   "card_rotation_3",
        //   // "rotate-6 translate-y-4",
        //   // "rotate-0 -translate-y-6 scale-110 z-10",
        //   // "-rotate-6 translate-y-4",
        // ];

        return (
          <div
            key={index}
            // className={`
            //       relative w-32 h-40 md:w-44 md:h-60 rounded-2xl
            //       overflow-hidden opacity-90
            //       border border-white/10
            //       bg-white/5 backdrop-blur-2xl
            //       shadow-[0_25px_80px_rgba(168,85,247,0.35)]

            //       transition-all duration-700 ease-out
            //       hover:scale-105 hover:-translate-y-2

            //       ${rotations[index]}
            //       ${transitioning ? "opacity-0 scale-90 blur-sm" : "opacity-100 scale-100 blur-0"}
            //     `}
            className={`${styles.card_container}`}
            index={`${index}`}
          >
            {/* Glow */}
            <div
              className={styles.glow_card}
              // className="absolute inset-0 bg-gradient-to-t
              //   from-black/60 via-transparent to-white/10 z-10"
            />

            {/* Image */}
            <img
              src={currentGame.image[index]}
              alt={currentGame.name}
              // className={`
              //       w-full h-full object-cover object-center
              //       transition-transform duration-700
              //       hover:scale-110
              //     ${index !== 1 && "blur-[.6px]"}
              //       `}
              style={{
                filter: `${index !== 1 && "blur(.6px)"}`,
              }}
              className={styles.image_card}
            />

            {/* Reflection */}
            <div
              className={styles.reflection_card}
              // className="absolute inset-0 bg-gradient-to-br
              //   from-white/20 via-transparent to-transparent
              //     opacity-40 pointer-events-non"
            />
          </div>
        );
      })}
    </div>
  );
};
export default PlayersCard;
