import { Link } from "react-router";

import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div
      // className="self-center relative"
      style={{
        alignSelf: "center",
        position: "relative",
      }}
    >
      <div>
        <Link to={`/`} className={styles.link}>
          <span
            //       className="font-semibold text-gray-800/80
            // text-2xl tracking-wide"
            className={styles.logo}
          >
            gamor
          </span>
        </Link>
        {/* <hr className="border-2 mt-0.5 border-gray-100/80"/> */}
      </div>

      <div
        //   className="absolute rounded-full left-0
        // top-0 h-6 w-6 bg-white/30 -ml-4 backdrop-blur-sm"
        className={styles.logo_adds}
      />
    </div>
  );
};
export default Logo;
