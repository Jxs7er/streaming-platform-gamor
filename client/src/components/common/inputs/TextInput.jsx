import styles from "./TextInput.module.css";
const TextInput = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  error,
  _class,
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>

      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={
          _class
            ? _class
            : `
              ${styles.input}
              ${error ? styles.input_error : styles.input_normal}
            `
        }
      />

      {error && <p className={styles.error_message}>{error}</p>}
    </div>
  );
};

export default TextInput;
