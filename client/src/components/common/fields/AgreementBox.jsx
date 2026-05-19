import styles from "./AgreementBox.module.css";

const AgreementBox = ({
  agreement,
  _class,
}) => {
  return (
    <div
      className={
        _class
          ? _class
          : `
            ${styles.container}
            ${
              agreement
                ? styles.container_active
                : styles.container_inactive
            }
          `
      }
    >
      <div className={styles.content}>
        <input
          type="checkbox"
          checked={agreement}
          className={styles.checkbox}
        />

        <span className={styles.label}>
          I agree with
        </span>

        <span
          className={`
            ${styles.button}
            ${
              !agreement
                ? styles.button_inactive
                : styles.button_active
            }
          `}
        >
          Terms and Conditions
        </span>
      </div>

      {!agreement && (
        <span className={styles.error}>
          You must accept this agreements
        </span>
      )}
    </div>
  );
};

export default AgreementBox;