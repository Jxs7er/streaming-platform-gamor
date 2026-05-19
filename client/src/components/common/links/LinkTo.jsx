import { Link } from "react-router";

import styles from "./LinkTo.module.css";

const LinkTo = ({
  to,
  _class,
  message,
  action_message,
}) => {
  return (
    <div
      className={
        _class
          ? _class
          : styles.container
      }
    >
      <span className={styles.message}>
        {message}
      </span>

      <Link
        to={to}
        className={styles.link}
      >
        {action_message}
      </Link>
    </div>
  );
};

export default LinkTo;