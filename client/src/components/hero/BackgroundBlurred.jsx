import styles from "./BackgroundBlurred.module.css";

const BackgroundBlurred = ({ currentGame, transitioning }) => {
  return (
    <div
      className={styles.container}
      // className="absolute blur-3xl z-0 flex justify-center
      //     items-end top-0 bg-transparent h-full w-full pb-1"
    >
      <div
      // className={styles}
      // className={`w-56 h-72 backdrop-blur-2xl rounded-md rotate-2
      //   object-center object-contain overflow-hidden border-2
      //   shadow-[0_40px_100px_rgba(168,85,247,0.35)]
      //   transition-all duration-500 ease-in-out
      //         ${transitioning ? "opacity-0 scale-95" : "opacity-100 scale-[100%]"} `}
      >
        <img
          src={currentGame.image[1]}
          className={styles.img_blurred}
          // className={`object-center object-cover 
          // w-full h-full saturate-200
          //       `}
        />
      </div>
    </div>
  );
};
export default BackgroundBlurred;
