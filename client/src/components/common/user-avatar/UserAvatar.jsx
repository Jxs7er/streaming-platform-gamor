import { useLogin } from "@/hooks";
import { assignColorsByLetter } from "@/utils";
import { useState } from "react";

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

const UserAvatar = ({ user, logout }) => {
  const [open, setOpen] = useState(false);

  if (!user) return null;

  const { name, last_name } = user;

  const colorKey = assignColorsByLetter(name);
  const color = COLOR_MAP[colorKey] || COLOR_MAP.default;

  const handleLogout = async () => await logout();

  return (
    <div className="relative inline-block">
      {/* Avatar */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`w-10 h-10 rounded-full flex justify-center items-center 
        text-sm font-semibold bg-white/10 backdrop-blur-3xl
        bg-${color}-200`}
      >
        <span className={`text-${color}-800`}>{name.charAt(0)}</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute top-12 left-0 w-44 
    bg-black/40 backdrop-blur-2xl 
    border border-white/10
    rounded-xl p-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)]
    animate-in fade-in zoom-in-95 duration-200"
        >
          {/* User info */}
          <div className="flex flex-col">
            <span className="text-xs text-white font-semibold tracking-wide">
              {name} {last_name}
            </span>
            <span className="text-[10px] text-white/40">Online Player</span>
          </div>

          {/* Divider */}
          <div className="my-3 h-px bg-white/10" />

          {/* Actions */}
          <button
            onClick={handleLogout}
            className="w-full text-xs font-medium text-red-300 
      bg-red-500/10 border border-red-500/20
      rounded-lg px-2 py-1.5
      hover:bg-red-500/20 hover:text-red-200
      transition-all duration-200
      active:scale-[0.98]"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
