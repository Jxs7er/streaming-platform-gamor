import styles from "./GroupedCategories.module.css";

const GroupedCategories = ({ groupByType, ref }) => {
  return (
    <div className={styles.container}>
      {Object.entries(groupByType).map((t) => {
        return (
          <div className={styles.group_container}>
            <div className={styles.header_container}>
              <h4 className={styles.header_title}>{t[0]} /</h4>
            </div>
            <div ref={ref} className={styles.categories_container}>
              {t[1].map((c) => {
                return (
                  <div key={c.name} className={styles.category_card}>
                    <span className={styles.category_name}>{c.name}</span>

                    <button className={styles.explore_button}>Explore →</button>
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
