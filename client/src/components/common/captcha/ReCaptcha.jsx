import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import { LoadingDots } from "../loadings";

const ReCaptcha = ({ status = "idle" }) => {
  if (status === "idle") {
    return (
      <div className="flex items-center gap-2 p-3 bg-yellow-50 border border-yellow-200">
        <span className="text-yellow-700 text-xs font-medium">
          Security check before you jump in
        </span>
      </div>
    );
  }

  if (status === "loading") {
    return (
      <div className="flex items-center gap-3 p-3 bg-gray-50 border">
        <LoadingDots loading />
        <span className="text-sm text-gray-700">
          Verifying your session security...
        </span>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200">
        <span className="text-green-600 font-medium flex items-center gap-1 text-xs">
          <CheckCircleIcon className="w-5 h-5" />
          Verified
        </span>
        <span className="text-xs text-green-500">Secure access confirmed</span>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200">
        <ExclamationTriangleIcon className="w-5 h-5 text-red-500" />
        <div className="flex flex-col text-xs">
          <span className="text-red-600 font-medium">Verification failed</span>
          <span className="text-red-500">
            Suspicious activity detected. Please try again.
          </span>
        </div>
      </div>
    );
  }

  return null;
};

export default ReCaptcha;
