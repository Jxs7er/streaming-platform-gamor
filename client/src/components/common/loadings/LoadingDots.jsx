const LoadingDots = ({ loading, color = "bg-cyan-500" }) => (
  <div className="flex gap-1 mt-0">
    <span
      className={`w-2 h-2 ${color} rounded-full animate-bounce [animation-delay:-0.3s]`}
    />
    <span
      className={`w-2 h-2 ${color} rounded-full animate-bounce [animation-delay:-0.15s]`}
    />
    <span className={`w-2 h-2 ${color} rounded-full animate-bounce`} />
  </div>
);

export default LoadingDots;
