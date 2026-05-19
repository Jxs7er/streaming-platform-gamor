import { SubmitButton } from "@/components/common/buttons";
import { EmailField, PasswordField } from "@/components/common/fields";

import { ReCaptcha } from "@/components/common/captcha";
import { LinkTo } from "@/components/common/links";
import { useLogin } from "@/hooks";

import styles from "./sign-in.module.css";

const SignInPage = () => {
  const { form, status, error, onChange, onSubmit } = useLogin();

  return (
    <div className={styles.page}>
      <div className={styles.page_wrapper}>
        <div className={styles.auth_container}>
          {/* LEFT PANEL */}
          <div className={styles.hero_panel}>
            <div className={styles.hero_cards_container}>
              {/* CARD 1 */}
              <div
                className={`${styles.floating_card} ${styles.card_valorant}`}
              >
                <div className={`${styles.icon_container} ${styles.icon_red}`}>
                  🔴
                </div>

                <div className={styles.stream_info}>
                  <span className={styles.live_badge}>LIVE</span>

                  <h4 className={styles.stream_title}>Valorant Championship</h4>

                  <p className={styles.viewers_text}>12.4K viewers</p>
                </div>
              </div>

              {/* CARD 2 */}
              <div
                className={`${styles.floating_card} ${styles.card_chatting}`}
              >
                <div
                  className={`${styles.icon_container} ${styles.icon_purple}`}
                >
                  💬
                </div>

                <div className={styles.stream_info}>
                  <span className={styles.live_badge}>LIVE</span>

                  <h4 className={styles.stream_title}>Just Chatting</h4>

                  <p className={styles.viewers_text}>3.1K viewers</p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className={`${styles.floating_card} ${styles.card_elden}`}>
                <div
                  className={`${styles.icon_container} ${styles.icon_yellow}`}
                >
                  ⚔️
                </div>

                <div className={styles.stream_info}>
                  <span className={styles.live_badge}>LIVE</span>

                  <h4 className={styles.stream_title}>Elden Ring Speedrun</h4>

                  <p className={styles.viewers_text}>8.7K viewers</p>
                </div>
              </div>
            </div>

            {/* HERO CONTENT */}
            <div className={styles.hero_content}>
              <h1 className={styles.hero_title}>/ Welcome Back</h1>

              <p className={styles.hero_description}>
                Don’t miss a moment — live matches, streams, and highlights are
                waiting
              </p>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className={styles.form_section}>
            <div className={styles.form_card}>
              {/* HEADER */}
              <div className={styles.form_header}>
                <h2 className={styles.form_title}>/ Access your account</h2>
              </div>

              {/* ERROR */}
              {error && <div className={styles.error_message}>{error}</div>}

              {/* FORM */}
              <form onSubmit={onSubmit} className={styles.form}>
                {/* EMAIL */}
                <EmailField form={form} onChange={onChange} />

                {/* PASSWORD */}
                <PasswordField form={form} onChange={onChange} isLogin />

                {/* REMEMBER */}
                <div className={styles.remember_section}>
                  <span className={styles.remember_text}>
                    Keep me in the game
                  </span>
                </div>

                {/* CAPTCHA */}
                {/* <ReCaptcha status={status} /> */}

                {/* SUBMIT */}
                <SubmitButton
                  labelLoading="Jumping in..."
                  clientReady={status !== "loading"}
                  loading={status === "loading"}
                />

                {/* LINKS */}
                <LinkTo
                  to="/auth/signup"
                  message="Join the community"
                  action_message="Create an account"
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
