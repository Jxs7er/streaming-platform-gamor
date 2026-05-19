import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";

import { LoadingDots } from "../loadings";

import styles from "./ReCaptcha.module.css";

const ReCaptcha = ({
  status = "idle",
}) => {
  if (status === "idle") {
    return (
      <div
        className={`
          ${styles.container}
          ${styles.idle}
        `}
      >
        <span className={styles.idle_text}>
          Security check before you jump in
        </span>
      </div>
    );
  }

  if (status === "loading") {
    return (
      <div
        className={`
          ${styles.container}
          ${styles.loading}
        `}
      >
        <LoadingDots loading />

        <span className={styles.loading_text}>
          Verifying your session security...
        </span>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div
        className={`
          ${styles.container}
          ${styles.success}
        `}
      >
        <span className={styles.success_group}>
          <CheckCircleIcon
            className={`
              ${styles.icon}
              ${styles.success_icon}
            `}
          />

          Verified
        </span>

        <span className={styles.success_text}>
          Secure access confirmed
        </span>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div
        className={`
          ${styles.container}
          ${styles.error}
        `}
      >
        <ExclamationTriangleIcon
          className={`
            ${styles.icon}
            ${styles.error_icon}
          `}
        />

        <div className={styles.error_content}>
          <span className={styles.error_title}>
            Verification failed
          </span>

          <span className={styles.error_text}>
            Suspicious activity detected.
            Please try again.
          </span>
        </div>
      </div>
    );
  }

  return null;
};

export default ReCaptcha;