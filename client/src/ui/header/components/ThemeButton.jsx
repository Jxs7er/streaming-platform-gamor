import { useTheme } from "@/context";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

import styles from "./ThemeButton.module.css";

const ThemeButton = () => {
  const { theme, handleChangeTheme } = useTheme();

  return (
    <div
      // className="border p-0.5 rounded-full"
      className={styles.container}
    >
      <button
        // className="flex justify-center items-center gap-1 border rounded-full
        // bg-gradient-to-r from-black/40 to-amber-400/40"
        className={styles.button}
        onClick={handleChangeTheme}
      >
        <div
          id="moon_ico"
          className={`${styles.ico} ${theme === "dark" && styles.dark_mode}`}
          // style={{}}
          // className={`rounded-full p-1 ${
          //   theme === "dark" &&
          //   "bg-gradient-to-r text-white from-black/60 to-black/10"
          // }`}
        >
          <MoonIcon className="w-5 h-5" />
        </div>
        <div
          id="sun_ico"
          className={`${styles.ico} ${theme === "light" && styles.light_mode}`}
          // className={`rounded-full p-1 ${
          //   theme === "light" &&
          //   "bg-gradient-to-l text-white from-amber-400/60 to-amber-600/10"
          // }`}
        >
          <SunIcon className="w-5 h-5" />
        </div>
      </button>
    </div>
  );
};
export default ThemeButton;
