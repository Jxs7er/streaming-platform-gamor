const PromotionSection = () => {
  return (
    <div className="px-6 py-4 w-full self-stretch bg-gray-950/90">
      <div className="flex justify-between px-6 items-center">
        {/* Title */}
        <div
          className="flex flex-col gap-2 
        items-center justify-start"
        >
          <h4 className="font-semibold text-gray-100/80 text-2xl">
            Start{" "}
            <span className="font-medium text-amber-400"> streaming </span>{" "}
            games differently
          </h4>
          <span className="text-sm font-medium text-gray-100/80">
            {" "}
            gamor now has stream party platform
          </span>
        </div>
        {/* Button */}
        <div className="flex items-center text-sm">
          <button
            className="px-4 py-2 
            font-medium text-gray-800/80"
          >
            Sign in
          </button>
          <button
            className="px-4 py-2 rounded-full 
            bg-gray-100/40 shadow-sm font-medium text-gray-800/80"
          >
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};
export default PromotionSection;
