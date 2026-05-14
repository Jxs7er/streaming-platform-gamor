import { Link } from "react-router";

const menu = [
  { name: "Home", path: "/" },
  { name: "Streams", path: "#" },
  { name: "Party", path: "#" },
  { name: "Premium", path: "#" },
];

const Header = () => {
  return (
    <nav
      className="sticky w-full my-0 mx-auto 
        left-0 right-0 rounded-none z-50 backdrop-blur-xl shadow-sm
        justify-around items-end flex px-2 py-4 text-gray-800/80"
    >
      <div className="md:flex gap-4 items-center hidden">
        {menu.map((it) => {
          return (
            <Link
              to={it.path}
              className="flex gap-2 items-center justify-start text-xs "
            >
              {/* <span><</span> */}
              <span>{it.name}</span>
            </Link>
          );
        })}
      </div>
      <div className="self-center">
        {/* <span className="font-semibold text-gray-800/80 text-2xl tracking-wide">Gamor</span> */}
      </div>
      <div className="flex gap-1 items-center">
        <Link to={`/auth/signin`} className="px-4 py-2 ">
          Sign In
          <span></span>
        </Link>
        <Link
          to={`/auth/signup`}
          className="px-4 py-2 rounded-full 
        bg-gradient-to-r from-amber-200 to-purple-300"
        >
          <span className="text-gray-800/90">Create an account</span>
        </Link>
      </div>
    </nav>
  );
};
export default Header;
