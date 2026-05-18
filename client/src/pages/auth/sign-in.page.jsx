import { SubmitButton } from "@/components/common/buttons";
import { EmailField, PasswordField } from "@/components/common/fields";

import { ReCaptcha } from "@/components/common/captcha";
import { LinkTo } from "@/components/common/links";
import { useLogin } from "@/hooks";

const SignInPage = () => {
  const { form, status, error, onChange, onSubmit } = useLogin();

  return (
    <div className="">
      <div className="flex bg-gray-50 min-h-screen justify-center items-center">
        <div className=" flex justify-center items-center w-2/3 rounded-full">
          <div
            className=" relative hidden md:flex w-1/2 bg-gradient-to-br from-amber-200 
          to-purple-700 text-white p-10 flex-col justify-around h-full rounded-md"
          >
            <div className="flex flex-col gap-4 h-14">
              <div className="absolute -left-20 -top-8 w-72 bg-red-900/25 border border-white/10 backdrop-blur-xl rounded-xl p-4 flex gap-4 items-center shadow-lg hover:scale-[1.02] transition-all duration-300">
                <div className="w-14 h-14 rounded-lg bg-red-500/20 flex items-center justify-center">
                  🔴
                </div>

                <div className="flex flex-col">
                  <span className="text-xs text-red-400 font-bold tracking-wide">
                    LIVE
                  </span>
                  <h4 className="text-sm font-semibold text-white">
                    Valorant Championship
                  </h4>
                  <p className="text-xs text-white/60">12.4K viewers</p>
                </div>
              </div>

              <div className="absolute right-4 top-4 w-72 bg-purple-900/25 border border-white/10 backdrop-blur-xl rounded-xl p-4 flex gap-4 items-center shadow-lg hover:scale-[1.02] transition-all duration-300 ml-10">
                <div className="w-14 h-14 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  💬
                </div>

                <div className="flex flex-col">
                  <span className="text-xs text-red-400 font-bold tracking-wide">
                    LIVE
                  </span>
                  <h4 className="text-sm font-semibold text-white">
                    Just Chatting
                  </h4>
                  <p className="text-xs text-white/60">3.1K viewers</p>
                </div>
              </div>

              <div
                className="absolute -left-8 -top-32 w-72 bg-amber-900/25 border border-white/10 backdrop-blur-xl 
              rounded-xl p-4 flex gap-4 items-center shadow-lg hover:scale-[1.02] transition-all duration-300 ml-20"
              >
                <div className="w-14 h-14 rounded-lg bg-yellow-500/20 flex items-center justify-center">
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
            </div>

            <div>
              <h1 className="text-4xl font-bold my-4 lowercase">
                / Welcome Back
              </h1>
              <p
                className="text-white max-w-md animate-pulse 
              drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
              >
                Don’t miss a moment — live matches, streams, and highlights are
                waiting
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full bg-transparent shadow-lg border p-6 rounded-md backdrop-blur-2xl">
              {/* Header */}
              <div className="mb-6 border-b pb-3">
                <h2 className="text-xl font-semibold text-gray-800/80 lowercase">
                  / Access your account
                </h2>
              </div>

              {error && (
                <div className="mb-3 text-sm text-red-500">{error}</div>
              )}

              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                {/* Email */}
                <EmailField form={form} onChange={onChange} />

                {/* Password */}
                <PasswordField form={form} onChange={onChange} isLogin />

                {/* Remember */}
                <div className="flex justify-end items-center gap-1">
                  <span className="text-sm font-semibold text-gray-600/50 ">
                    Keep me in the game
                  </span>
                </div>

                {/* CAPTCHA */}
                {/* <ReCaptcha status={status} /> */}

                {/* Submit */}
                <SubmitButton
                  labelLoading={`Jumping in...`}
                  clientReady={status !== "loading"}
                  loading={status === "loading"}
                />

                {/* Links */}
                <LinkTo
                  to={"/auth/signup"}
                  message={"Join the community"}
                  action_message={"Create an account"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignInPage;
