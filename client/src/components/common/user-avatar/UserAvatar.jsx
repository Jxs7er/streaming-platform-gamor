import { assignColorsByLetter } from "@/utils";

import { useState } from "react";

import styles from "./UserAvatar.module.css";

const COLOR_MAP = {
  a: "blue",
  b: "green",
  c: "purple",
  d: "pink",
  e: "yellow",
  f: "red",
  g: "indigo",
  h: "emerald",
  default: "gray",
};

const UserAvatar = ({
  user,
  logout,
}) => {
  const [open, setOpen] =
    useState(false);

  if (!user) return null;

  const { name, last_name } = user;

  const colorKey =
    assignColorsByLetter(name);

  const color =
    COLOR_MAP[colorKey] ||
    COLOR_MAP.default;

  const handleLogout = async () =>
    await logout();

  return (
    <div className={styles.container}>
      {/* AVATAR */}
      <button
        onClick={() =>
          setOpen((prev) => !prev)
        }
        className={`
          ${styles.avatar_button}
          ${
            styles[
              `avatar_${color}`
            ]
          }
        `}
      >
        <span
          className={
            styles[`text_${color}`]
          }
        >
          {name.charAt(0)}
        </span>
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className={styles.dropdown}>
          {/* USER INFO */}
          <div
            className={styles.user_info}
          >
            <span
              className={
                styles.user_name
              }
            >
              {name} {last_name}
            </span>

            <span
              className={
                styles.user_status
              }
            >
              Online Player
            </span>
          </div>

          {/* DIVIDER */}
          <div
            className={styles.divider}
          />

          {/* ACTIONS */}
          <button
            onClick={handleLogout}
            className={
              styles.logout_button
            }
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;