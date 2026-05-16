import { LoadingDots } from "@/components/common/loadings";

const SplashScreen = () => {
  return (
    <div className="h-screen flex items-center justify-center  ">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center relative">
          <div>
            <span
              className="font-semibold text-gray-800/80
        text-2xl tracking-wide animate-pulse"
            >
              gamor
            </span>
          </div>
          <div
            className="absolute rounded-full left-0 animate-ping 
        top-0 h-6 w-6 bg-white/30 -ml-4 backdrop-blur-sm"
          />
        </div>

        {/* Loading dots */}
        <LoadingDots loading={true} color={"bg-black/50"} />
      </div>
    </div>
  );
};

export default SplashScreen;
