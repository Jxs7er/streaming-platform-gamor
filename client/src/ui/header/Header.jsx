import { ThemeButton } from "@/components/common/buttons";
import { UserAvatar } from "@/components/common/user-avatar";
import { useAuth } from "@/context";
import { FingerPrintIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";

const menu = [
  { id: "home-header", name: "Home", path: "/" },
  { id: "streams-header", name: "Streams", path: "#" },
  { id: "party-header", name: "Party", path: "#" },
  { id: "premium-header", name: "Premium", path: "#" },
];

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <nav
      className="sticky top-0 w-full my-0 mx-auto bg-white
        left-0 right-0 rounded-none z-50 backdrop-blur-xl shadow-sm
        justify-between md:justify-around items-end 
        flex px-2 py-4 text-gray-800/80"
    >
      {/* Links */}
      <div className="md:flex gap-4 items-center hidden">
        {menu.map((it) => {
          return (
            <Link
              key={it.id}
              to={it.path}
              className="flex gap-2 items-center justify-start text-xs "
            >
              {/* <span><</span> */}
              <span>{it.name}</span>
            </Link>
          );
        })}
      </div>

      {/* Logo */}
      <div className="self-center relative">
        <div>
          <Link to={`/`}>
            <span
              className="font-semibold text-gray-800/80
        text-2xl tracking-wide"
            >
              gamor
            </span>
          </Link>
          {/* <hr className="border-2 mt-0.5 border-gray-100/80"/> */}
        </div>

        <div
          className="absolute rounded-full left-0 
        top-0 h-6 w-6 bg-white/30 -ml-4 backdrop-blur-sm"
        />
      </div>

      {/* Theme */}
      <ThemeButton />

      {!user ? (
        <>
          <div className="hidden md:flex gap-1 items-center text-sm font-medium">
            <Link to={`/auth/signin`} className="px-4 py-2 ">
              Sign In
              <span></span>
            </Link>
            <Link
              to={`/auth/signup`}
              className="px-4 py-2 rounded-full 
        bg-gradient-to-r bg-gray-100 border"
            >
              <span className="text-gray-800/90">Create an account</span>
            </Link>
          </div>
          <div className="md:hidden flex gap-1 items-center text-sm font-medium">
            <Link
              to={`/auth/signin`}
              className="px-4 py-2 rounded-none 
              bg-gradient-to-r border flex justify-center 
              items-center gap-1 text-xs"
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
    </nav>
  );
};
export default Header;
