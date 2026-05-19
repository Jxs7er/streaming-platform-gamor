import { LoadingDots } from "@/components/common/loadings";

import styles from "./SplashScreen.module.css";

const SplashScreen = () => {
  return (
    <div
      className={styles.container}
      // className="h-screen flex items-center justify-center"
    >
      <div
        className={styles.sub_container}
        // className="flex flex-col items-center gap-4"
      >
        <div className="self-center relative">
          <div>
            <span
              className={styles.logo_text}
              //       className="font-semibold text-gray-800/80
              // text-2xl tracking-wide animate-pulse"
            >
              gamor
            </span>
          </div>
          <div
            className={styles.logo_add}
            //     className="absolute rounded-full left-0 animate-ping
            // top-0 h-6 w-6 bg-white/30 -ml-4 backdrop-blur-sm"
          />
        </div>

        {/* Loading dots */}
        <LoadingDots loading={true} color={"bg-black/50"} />
      </div>
    </div>
  );
};

export default SplashScreen;
