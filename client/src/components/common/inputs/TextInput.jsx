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
          error
            ? "border-red-400 focus:ring-red-400"
            : "border-gray-300 focus:ring-indigo-500"
        }`
        }
      />

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default TextInput;
