import { CheckCircleIcon } from "@heroicons/react/24/solid";

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
    : passwordErrors && Array.isArray(passwordErrors) && passwordErrors.length > 0;

  return (
    <div>
      <label className="text-sm text-gray-600">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={
          _class
            ? _class
            : `w-full mt-1 px-3 py-2 border-b focus:outline-none focus:ring-2
        ${
          errors
            ? "border-red-400 focus:ring-red-400"
            : "border-gray-300 focus:ring-indigo-500"
        }`
        }
      />

      {!isLogin && errors && !confirmError ? (
        <ul className="mt-2 text-xs text-red-500 space-y-1">
          {passwordErrors.map((err, idx) => (
            <li key={idx}>• {err}</li>
          ))}
        </ul>
      ) : !isLogin && value && !confirmError ? (
        <p className="mt-2 text-xs text-green-600 flex justify-start items-center">
          <CheckCircleIcon className="w-4 h-4" /> <span>Perfect</span>
        </p>
      ) : confirmError && !isLogin ? (
        <p className="text-xs text-red-500 mt-1">{confirmError}</p>
      ) : null}
    </div>
  );
};

export default PasswordInput;
