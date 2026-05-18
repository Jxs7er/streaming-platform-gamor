const GroupedCategories = ({groupByType, ref, show }) => {
  return (
    <div className="px-16 flex flex-col gap-y-2 w-full bg-gray-100 mb-4 py-2">
      {Object.entries(groupByType).map((t) => {
        return (
          <div className="flex flex-col gap-y-1 border-y">
            <div className=" px-0 bg-transparent py-2">
              <h4 className="text-sm tracking-wide text-gray-950/80 text-xs  uppercase font-semibold">
                {t[0]} /
              </h4>
            </div>
            <div
              ref={ref}
              className="flex gap-4 flex-wrap pb-2 scrollbar-hide px-4"
            >
              {t[1].map((c) => {
                return (
                  <div
                    // ref={(el) => (itemRefs.current[i] = el)}
                    key={c.name}
                    className={`
                    relative
                min-w-[160px]
                bg-white/80
                border border-gray-200/80
                rounded-xl
                px-4 py-3
                backdrop-blur-md
                hover:bg-white/10
                transition-all duration-500
                flex flex-col justify-between
                ${show ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-6"}
              `}
                  >
                    <span className="text-sm font-semibold text-gray-800/90">
                      {c.name}
                    </span>

                    <button
                      className="
                  text-xs mt-6
                  text-amber-400
                  hover:text-amber-300
                  self-end
                "
                    >
                      Explore →
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default GroupedCategories;
