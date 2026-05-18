import { SubmitButton } from "@/components/common/buttons";
import {
  AgreementBox,
  ConfirmPasswordField,
  EmailField,
  LastNameField,
  NameField,
  PasswordField,
} from "@/components/common/fields";

import { ReCaptcha } from "@/components/common/captcha";
import { LinkTo } from "@/components/common/links";
import { useRegister } from "@/hooks";
import { useEffect, useState } from "react";

const messages = [
  "Enter the Arena",
  "Find Teammates.",
  "Compete. Stream. Dominate.",
  "Be humbble.",
  "Enjoy! Your Party Is Waiting.",
];

const RegisterPage = () => {
  const { form, status, error, onChange, onSubmit, agreement, setAgreements } =
    useRegister();
  const [currentIndex, setCurrentIndex] = useState(0);

  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      changeMessage((prev) => (prev + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const changeMessage = (newIndex) => {
    setTransitioning(true);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTransitioning(false);
    }, 250); // duración del fade
  };

  return (
    <div className="">
      <div className="flex bg-gray-50 min-h-screen justify-center items-center">
        <div className=" flex justify-center items-center w-2/3 rounded-full">
          <div
            className=" relative hidden md:flex w-1/2 bg-gradient-to-br from-indigo-600 
      to-purple-800 text-white p-10 flex-col justify-around h-full rounded-md"
          >
            <div className="flex flex-col gap-4 ">
              <div
                className="mt-4 w-3/4 bg-white/5 border border-white/10 backdrop-blur-xl 
              rounded-xl p-4 flex gap-4 items-center shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-white/20 flex items-center justify-center">
                  ⚔️
                </div>

                <div className="flex flex-col">
                  <span className="text-xs text-red-400 font-bold tracking-wide">
                    LIVE
                  </span>
                  <h4 className="text-sm font-semibold text-white">
                    Elden Ring Speedrun
                  </h4>
                  <p className="text-xs text-white/60">8.7K viewers</p>
                </div>
              </div>
              <div
                className="absolute right-2 -top-12 w-3/4 bg-amber-500/45 border border-amber-300/10 backdrop-blur-xl 
              rounded-xl p-4 flex gap-4 items-center shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-yellow-100/20 flex items-center justify-center">
                  🏆
                </div>

                <div className="flex flex-col">
                  <span className="text-xs text-amber-100 font-bold tracking-wide">
                    TOURNAMENT - Valorant Champions
                  </span>
                  <h4 className="text-sm font-semibold text-white">
                    Prize Pool $25,000
                  </h4>
                  <p className="text-xs text-white/60">+3.2K players online</p>
                </div>
              </div>

              <div
                className="absolute left-2 -top-36 w-3/4 bg-purple-600/80 border border-purple-300/10 backdrop-blur-xl 
              rounded-xl p-4 flex gap-4 items-center shadow-lg hover:scale-[1.02] transition-all duration-300 -rotate-2"
              >
                <div className="w-14 h-14 rounded-lg bg-purple-100/20 flex items-center justify-center">
                  🟢
                </div>

                <div className="flex flex-col">
                  <span className="text-xs text-green-300 font-bold tracking-wide">
                    PARTY SEARCH
                  </span>
                  <h4 className="text-sm font-semibold text-white">
                    Apex Legends
                  </h4>
                  <p className="text-xs text-white/60">
                    4/5 players still waiting..
                  </p>
                </div>
              </div>

              <div
                className="absolute top-32 -right-10 h-5 w-56 overflow-hidden 
                flex justify-start items-center bg-black/25 border border-black/5 backdrop-blur-xl 
              rounded-xl p-4"
              >
                {/* Current message */}
                <span
                  className={`text-xs tracking-wide text-white/70
                    transition-all duration-500 ease-in-out will-change-transform
                    ${
                      transitioning
                        ? "translate-y-full opacity-0"
                        : "translate-y-0 opacity-100"
                    }`}
                >
                  {messages[currentIndex]}
                </span>
              </div>
            </div>

            <div className="">
              <h1 className="text-4xl font-bold my-4 lowercase">
                / Enter the Arena
              </h1>
              <p
                className="text-white max-w-md animate-pulse 
              drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
              >
                Join the next generation gaming community. Find teammates,
                compete in tournaments and stream live matches.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full bg-transparent shadow-lg border p-6 rounded-md backdrop-blur-2xl">
              {/* Header */}
              <div className="mb-6 border-b pb-3">
                <h2 className="text-xl font-semibold text-gray-800/80 lowercase">
                  / Create your account
                </h2>
              </div>

              {error && (
                <div className="mb-3 text-sm text-red-500">{error}</div>
              )}

              <form onSubmit={onSubmit} className="flex flex-col gap-1 text-xs">
                {/* Name */}
                <NameField form={form} onChange={onChange} />

                {/* Last Name */}
                <LastNameField form={form} onChange={onChange} />

                {/* Email */}
                <EmailField form={form} onChange={onChange} />

                {/* Password */}
                <PasswordField form={form} onChange={onChange} />

                {/* Confirm Password */}
                <ConfirmPasswordField form={form} onChange={onChange} />

                <AgreementBox agreement={agreement} />

                {/* CAPTCHA */}
                <ReCaptcha status={status} />

                {/* Submit */}
                <SubmitButton
                  labelLoading={`Creating...`}
                  clientReady={status !== "loading"}
                  loading={status === "loading"}
                  message={"Create account"}
                />

                {/* Links */}
                <LinkTo
                  to={"/auth/signin"}
                  message={"Already in the lobby?"}
                  action_message={"Sign in"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
