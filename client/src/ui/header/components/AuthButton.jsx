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
          <div
            //   className="hidden md:flex gap-1
            // items-center
            // text-sm font-medium"
            className={styles.container}
          >
            <Link
              to={`/auth/signin`}
              // className="px-4 py-2 ">
              className={styles.link_sigin}
            >
              <span
                style={{
                  color: `var(--text-secondary)`,
                }}
              >
                Sign In
              </span>
            </Link>
            <Link
              to={`/auth/signup`}
              className={styles.link_sigup}
              //       className="px-4 py-2 rounded-full
              // bg-gradient-to-r bg-gray-100 border"
            >
              <span
                //   className="text-gray-800/90"
                style={{
                  color: `var(--text-secondary)`,
                }}
              >
                Create an account
              </span>
            </Link>
          </div>

          <div
            // className="md:hidden flex gap-1 items-center text-sm font-medium"
            className={styles.container_mobile}
          >
            <Link
              to={`/auth/signin`}
              // className="px-4 py-2 rounded-none
              // bg-gradient-to-r border flex justify-center
              // items-center gap-1 text-xs"
              className={styles.link}
            >
              <FingerPrintIcon className="w-5 h-5" />
              <span>Sign In</span>
              {/* <span className="text-gray-800/90">Create an account</span> */}
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
