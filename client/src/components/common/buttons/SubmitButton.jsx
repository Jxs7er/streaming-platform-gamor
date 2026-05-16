const SubmitButton = ({ clientReady, _class, loading, labelLoading }) => {
  return (
    <button
      type="submit"
      disabled={!clientReady}
      className={
        _class
          ? _class
          : `w-full mt-4 py-2 font-semibold text-black/80 
          transition rounded-full
        ${
          clientReady
            ? "bg-white border  hover:bg-white/10 "
            : "bg-gray-400 cursor-not-allowed"
        }`
      }
    >
      {loading ? labelLoading : "Sign In"}
    </button>
  );
};

export default SubmitButton;
