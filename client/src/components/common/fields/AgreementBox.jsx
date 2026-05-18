const AgreementBox = ({ agreement, _class }) => {
  return (
    <div
      className={
        _class
          ? _class
          : `px-2 py-3 mt-3 flex flex-col items-center rounded-md
        ${
          agreement
            ? "bg-green-500/20"
            : "border border-amber-300/50 bg-amber-100/50"
        }`
      }
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={agreement}
          //   readOnly
          className="cursor-pointer"
        />

        <span className="text-xs font-semibold text-gray-800/80">
          I agree with
        </span>

        <span
          //   onClick={() => setOpenAgreements(true)}
          className={`cursor-pointer font-semibold px-3 py-1 rounded-full text-[.7rem]
                  text-white animate-pulse transition-all
          ${
            !agreement
              ? "bg-gradient-to-l from-indigo-500 to-purple-400"
              : "bg-gradient-to-l from-green-500 to-green-400"
          }`}
        >
          Terms and Conditions
        </span>
      </div>

      {!agreement && (
        <span className="text-xs text-red-500 font-semibold mt-2">
          You must accept this agreements
        </span>
      )}
    </div>
  );
};

export default AgreementBox;
