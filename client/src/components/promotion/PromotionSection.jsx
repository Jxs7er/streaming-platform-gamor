const PromotionSection = () => {
  return (
    <div
      className="
        w-full
        px-6 py-6 md:py-8
        bg-gradient-to-r from-gray-50 via-gray-200 to-gray-50
        border-y border-white/5
      "
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        {/* TEXT */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h4 className="text-xl md:text-2xl font-semibold text-gray-900/90">
            Start{" "}
            <span className="text-amber-400 font-bold">
              streaming
            </span>{" "}
            games differently
          </h4>

          <p className="text-sm text-gray-900/60 max-w-md">
            Gamor now has a real-time stream party platform for gamers who want to play, watch and connect instantly.
          </p>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button
            className="
              px-4 py-2
              text-sm font-medium
              text-gray-900/70
              hover:text-gray-900
              transition
            "
          >
            Sign in
          </button>

          <button
            className="
              px-5 py-2
              text-sm font-semibold
              text-black
              bg-gradient-to-r from-amber-400 to-yellow-500
              rounded-full
              shadow-[0_0_25px_rgba(245,158,11,0.4)]
              hover:scale-105
              active:scale-95
              transition
            "
          >
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionSection;