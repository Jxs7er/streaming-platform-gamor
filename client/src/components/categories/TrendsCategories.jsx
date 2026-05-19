import styles from "./TrendsCategories.module.css";

const TrendsCategories = ({ trends, ref, show }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <h4>Trending Categories</h4>
      </div>

      <div className={styles.footer_container}>
        <div ref={ref} className={styles.trends_container}>
          {trends.map((c, index) => {
            const featured = index === 0;

            return (
              <div key={c.name} featured={`${featured}`}>
                {featured && <div className={styles.radial_add} />}

                <div className={styles.card_container}>
                  <div>
                    <h5 className={styles.title} featured={`${featured}`}>
                      {c.name}
                    </h5>

                    <span className={styles.type_text} featured={`${featured}`}>
                      {c.type}
                    </span>
                  </div>

                  {featured && <div className={styles.fire_badge}>🔥</div>}
                </div>

                <div
                  // className="relative z-10 flex items-end justify-between"
                  className={styles.stats_container}
                >
                  <div className={styles.popularity_container}>
                    {/* <div className="flex flex-col"> */}
                    <span
                      className={styles.popularity_label}
                      featured={`${featured}`}
                    >
                      Popularity
                    </span>
                    {/* <span
                      className={`
                    text-xs
                    ${featured ? "text-white/60" : "text-gray-500"}
                  `}
                    >
                      Popularity
                    </span> */}

                    <span
                      className={styles.popularity_value}
                      featured={`${featured}`}
                    >
                      {c.popularity}
                    </span>
                    {/* <span
                      className={`
                    text-2xl font-black
                    ${featured ? "text-white" : "text-gray-900"}
                  `}
                    >
                      {c.popularity}
                    </span> */}
                  </div>

                  <button
                    className={styles.explore_button}
                    featured={`${featured}`}
                  >
                    Explore
                  </button>
                  {/* <button
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
                  </button> */}
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
