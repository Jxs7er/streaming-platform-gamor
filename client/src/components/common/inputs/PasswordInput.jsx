
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import styles from "./PasswordInput.module.css";

const PasswordInput = ({
  label,
  name,
  value,
  onChange,
  type = "password",
  placeholder,
  isLogin,
  passwordErrors,
  _class,
  confirmError = null,
}) => {
  const errors = confirmError
    ? passwordErrors
    : passwordErrors &&
      Array.isArray(passwordErrors) &&
      passwordErrors.length > 0;

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        {label}
      </label>

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
              ${
                errors
                  ? styles.input_error
                  : styles.input_normal
              }
            `
        }
      />

      {!isLogin &&
      errors &&
      !confirmError ? (
        <ul className={styles.error_list}>
          {passwordErrors.map((err, idx) => (
            <li
              key={idx}
              className={styles.error_item}
            >
              • {err}
            </li>
          ))}
        </ul>
      ) : !isLogin &&
        value &&
        !confirmError ? (
        <p className={styles.success_message}>
          <CheckCircleIcon
            className={styles.success_icon}
          />

          <span className={styles.success_text}>
            Perfect
          </span>
        </p>
      ) : confirmError && !isLogin ? (
        <p className={styles.confirm_error}>
          {confirmError}
        </p>
      ) : null}
    </div>
  );
};

export default PasswordInput;