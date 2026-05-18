const TrendsCategories = ({ trends, ref, show }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="px-12 flex items-center justify-between">
        <h4
          className="
        text-sm tracking-[0.25em]
        uppercase
        text-gray-900/70
        font-semibold
      "
        >
          Trending Categories
        </h4>

        {/* <span className="text-xs text-gray-500">Updated Live</span> */}
      </div>

      <div className="px-10">
        <div
          ref={ref}
          className="
        flex gap-4
        overflow-x-auto
        scrollbar-hide
        pb-2
      "
        >
          {trends.map((c, index) => {
            const featured = index === 0;

            return (
              <div
                key={c.name}
                className={`
                relative
                min-w-[220px]
                max-w-[220px]
                h-[140px]
                rounded-2xl
                overflow-hidden
                border
                backdrop-blur-2xl
                transition-all duration-500
                hover:-translate-y-2
                hover:scale-[1.02]
                flex flex-col justify-between
                p-4
                ${
                  featured
                    ? `
                        bg-gradient-to-br 
                        from-fuchsia-500 
                        to-purple-700
                        border-fuchsia-400/40
                        shadow-[0_0_40px_rgba(217,70,239,0.35)]
                    `
                    : `
                        bg-white/70
                        border-white/40
                        hover:bg-white/90
                    `
                }
            `}
              >
                {featured && (
                  <div
                    className="
                  absolute inset-0
                  bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_40%)]
                "
                  />
                )}

                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <h5
                      className={`
                    text-sm font-bold uppercase tracking-wide
                    ${featured ? "text-white" : "text-gray-900"}
                  `}
                    >
                      {c.name}
                    </h5>

                    <span
                      className={`
                    text-xs
                    ${featured ? "text-white/70" : "text-gray-500"}
                  `}
                    >
                      {c.type}
                    </span>
                  </div>

                  {featured && (
                    <div
                      className="
                    w-8 h-8
                    rounded-full
                    bg-white/20
                    backdrop-blur-xl

                    flex items-center justify-center

                    text-lg
                  "
                    >
                      🔥
                    </div>
                  )}
                </div>

                <div className="relative z-10 flex items-end justify-between">
                  <div className="flex flex-col">
                    <span
                      className={`
                    text-xs
                    ${featured ? "text-white/60" : "text-gray-500"}
                  `}
                    >
                      Popularity
                    </span>

                    <span
                      className={`
                    text-2xl font-black
                    ${featured ? "text-white" : "text-gray-900"}
                  `}
                    >
                      {c.popularity}
                    </span>
                  </div>

                  <button
                    className={`
                  px-3 py-1 rounded-full
                  text-xs font-medium
                  transition

                  ${
                    featured
                      ? `
                        bg-white/20
                        text-white
                        hover:bg-white/30
                      `
                      : `
                        bg-black/5
                        text-gray-700
                        hover:bg-black/10
                      `
                  }
                `}
                  >
                    Explore
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TrendsCategories;
