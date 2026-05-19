import { UserAvatar } from "@/components/common/user-avatar";
import { useAuth } from "@/context";
import { Link } from "react-router";
import { FingerPrintIcon } from "@heroicons/react/24/outline";

import styles from "./AuthButton.module.css";

const AuthButton = () => {
  const { user, logout } = useAuth();
  return (
    <>
      {!user ? (
        <>
          <div className={styles.container}>
            <Link to={`/auth/signin`} className={styles.link_sigin}>
              <span
                style={{
                  color: `var(--text-secondary)`,
                }}
              >
                Sign In
              </span>
            </Link>
            <Link to={`/auth/signup`} className={styles.link_sigup}>
              <span
                style={{
                  color: `var(--text-secondary)`,
                }}
              >
                Create an account
              </span>
            </Link>
          </div>

          <div className={styles.container_mobile}>
            <Link to={`/auth/signin`} className={styles.link}>
              <FingerPrintIcon className="w-5 h-5" />
              <span>Sign In</span>
            </Link>
          </div>
        </>
      ) : (
        <UserAvatar user={user} logout={logout} />
      )}
    </>
  );
};
export default AuthButton;
