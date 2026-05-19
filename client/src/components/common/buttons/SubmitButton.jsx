import styles from "./SubmitButton.module.css";

const SubmitButton = ({
  clientReady,
  _class,
  loading,
  labelLoading,
  message,
}) => {
  return (
    <button
      type="submit"
      disabled={!clientReady}
      className={
        _class
          ? _class
          : `
              ${styles.button}
              ${
                clientReady
                  ? styles.ready
                  : styles.disabled
              }
            `
      }
    >
      {loading
        ? labelLoading
        : message ?? "Sign In"}
    </button>
  );
};

export default SubmitButton;