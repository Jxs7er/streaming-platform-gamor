import {
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

import { useNavigate } from "react-router";

import styles from "./404.module.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        {/* GLOW */}
        <div className={styles.glow} />

        <div className={styles.content}>
          {/* ICON */}
          <div className={styles.icon_wrapper}>
            <ExclamationTriangleIcon
              className={styles.icon}
            />
          </div>

          {/* TITLE */}
          <div className={styles.title_group}>
            <h1 className={styles.code}>
              404
            </h1>

            <h2 className={styles.title}>
              Page Not Found
            </h2>

            <p
              className={
                styles.description
              }
            >
              The page you are trying
              to access does not exist
              or may have been moved.
            </p>
          </div>

          {/* ACTIONS */}
          <div className={styles.actions}>
            <button
              onClick={() =>
                navigate(-1)
              }
              className={
                styles.back_button
              }
            >
              Go Back
            </button>

            <button
              onClick={() =>
                navigate("/")
              }
              className={
                styles.home_button
              }
            >
              Back Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;