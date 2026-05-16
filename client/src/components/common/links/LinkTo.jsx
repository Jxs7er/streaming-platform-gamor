import { Link } from "react-router";

const LinkTo = ({ to, _class, message, action_message }) => {
  return (
    <div
      className={
        _class
          ? _class
          : `flex justify-center mt-3 text-sm text-gray-800 items-center`
      }
    >
      <span className="text-xs font-medium text-gray-900/50">
      {message}
      </span>
      <Link
        to={to}
        className="ml-2 px-4 py-1 text-white text-sm rounded-full 
                          bg-gradient-to-l from-indigo-500 to-purple-300 
                          hover:from-black hover:to-gray-900 animate-pulse shadow-sm"
      >
        {action_message}
      </Link>
    </div>
  );
};

export default LinkTo;
