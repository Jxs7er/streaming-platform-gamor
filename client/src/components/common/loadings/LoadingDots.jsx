const LoadingDots = ({ loading, color = "bg-cyan-500", tip = null }) => (
  <div className="flex flex-col justify-center items-center gap-y-1">
    <div className="flex gap-1 mt-0">
      <span
        className={`w-2 h-2 ${color} rounded-full animate-bounce [animation-delay:-0.3s]`}
      />
      <span
        className={`w-2 h-2 ${color} rounded-full animate-bounce [animation-delay:-0.15s]`}
      />
      <span className={`w-2 h-2 ${color} rounded-full animate-bounce`} />
    </div>
    {tip && <span className="text-xs font-semibold text-gray-500">{tip}</span>}
  </div>
);

export default LoadingDots;
