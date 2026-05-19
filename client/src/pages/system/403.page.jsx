import { LockClosedIcon } from "@heroicons/react/24/outline";

import { useNavigate } from "react-router";

import styles from "./403.module.css";

const ForbiddenPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        {/* GLOW */}
        <div className={styles.glow} />

        <div className={styles.content}>
          {/* ICON */}
          <div className={styles.icon_wrapper}>
            <LockClosedIcon
              className={styles.icon}
            />
          </div>

          {/* TITLES */}
          <div className={styles.title_group}>
            <h1 className={styles.code}>
              403
            </h1>

            <h2 className={styles.title}>
              Access Forbidden
            </h2>

            <p
              className={
                styles.description
              }
            >
              You do not have
              permission to access
              this resource or
              perform this action.
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
              Return Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForbiddenPage;