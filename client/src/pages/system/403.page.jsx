import { LockClosedIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";

const ForbiddenPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="
        min-h-screen
        flex items-center justify-center
        bg-gradient-to-br
        from-gray-950
        via-black
        to-gray-900
        px-6
      "
    >
      <div
        className="
          relative
          w-full max-w-lg

          overflow-hidden
          rounded-3xl

          border border-amber-500/10
          bg-white/5

          backdrop-blur-3xl

          p-10

          shadow-[0_0_80px_rgba(245,158,11,0.12)]
        "
      >
        {/* Glow */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.12),transparent_60%)]
          "
        />

        <div className="relative z-10 flex flex-col items-center text-center gap-6">
          {/* ICON */}
          <div
            className="
              w-20 h-20
              rounded-full
              bg-amber-500/10

              flex items-center justify-center
            "
          >
            <LockClosedIcon className="w-10 h-10 text-amber-400" />
          </div>

          {/* TITLE */}
          <div className="space-y-2">
            <h1 className="text-5xl font-black text-white">
              403
            </h1>

            <h2 className="text-xl font-semibold text-white/90">
              Access Forbidden
            </h2>

            <p className="text-sm text-white/60 leading-relaxed max-w-md">
              You do not have permission to access this resource or perform this action.
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={() => navigate(-1)}
              className="
                px-5 py-2.5
                rounded-full

                bg-white/10
                text-white/80

                hover:bg-white/20
                hover:text-white

                transition
              "
            >
              Go Back
            </button>

            <button
              onClick={() => navigate("/")}
              className="
                px-5 py-2.5
                rounded-full

                bg-gradient-to-r
                from-amber-400
                to-orange-500

                text-black
                font-semibold

                shadow-[0_0_30px_rgba(245,158,11,0.25)]

                hover:scale-105
                active:scale-95

                transition
              "
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForbiddenPage;