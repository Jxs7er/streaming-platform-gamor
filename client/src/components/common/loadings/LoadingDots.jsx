import styles from "./LoadingDots.module.css";

const LoadingDots = ({
  loading,
  color = "cyan",
  tip = null,
}) => (
  <div className={styles.container}>
    <div className={styles.dots_container}>
      <span
        className={`
          ${styles.dot}
          ${styles.delay_1}
          ${styles[color]}
        `}
      />

      <span
        className={`
          ${styles.dot}
          ${styles.delay_2}
          ${styles[color]}
        `}
      />

      <span
        className={`
          ${styles.dot}
          ${styles[color]}
        `}
      />
    </div>

    {tip && (
      <span className={styles.tip}>
        {tip}
      </span>
    )}
  </div>
);

export default LoadingDots;