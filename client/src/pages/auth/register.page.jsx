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

import styles from "./register.module.css";

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
    <div className={styles.page}>
      <div className={styles.page_wrapper}>
        <div className={styles.auth_container}>
          {/* LEFT HERO PANEL */}
          <div className={styles.hero_panel}>
            <div className={styles.hero_cards_container}>
              {/* CARD 1 */}
              <div className={`${styles.floating_card} ${styles.card_elden}`}>
                <div
                  className={`${styles.icon_container} ${styles.icon_white}`}
                >
                  ⚔️
                </div>

                <div className={styles.stream_info}>
                  <span className={`${styles.live_badge} ${styles.live_red}`}>
                    LIVE
                  </span>

                  <h4 className={styles.stream_title}>Elden Ring Speedrun</h4>

                  <p className={styles.viewers_text}>8.7K viewers</p>
                </div>
              </div>

              {/* CARD 2 */}
              <div
                className={`${styles.floating_card} ${styles.card_tournament}`}
              >
                <div
                  className={`${styles.icon_container} ${styles.icon_yellow}`}
                >
                  🏆
                </div>

                <div className={styles.stream_info}>
                  <span className={`${styles.live_badge} ${styles.live_amber}`}>
                    TOURNAMENT - Valorant Champions
                  </span>

                  <h4 className={styles.stream_title}>Prize Pool $25,000</h4>

                  <p className={styles.viewers_text}>+3.2K players online</p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className={`${styles.floating_card} ${styles.card_party}`}>
                <div
                  className={`${styles.icon_container} ${styles.icon_purple}`}
                >
                  🟢
                </div>

                <div className={styles.stream_info}>
                  <span className={`${styles.live_badge} ${styles.live_green}`}>
                    PARTY SEARCH
                  </span>

                  <h4 className={styles.stream_title}>Apex Legends</h4>

                  <p className={styles.viewers_text}>
                    4/5 players still waiting..
                  </p>
                </div>
              </div>

              {/* MESSAGE SLIDER */}
              <div className={styles.message_slider}>
                <span
                  className={`
                ${styles.message_text}
                ${
                  transitioning
                    ? styles.message_text_transitioning
                    : styles.message_text_idle
                }
              `}
                >
                  {messages[currentIndex]}
                </span>
              </div>
            </div>

            {/* HERO CONTENT */}
            <div className={styles.hero_content}>
              <h1 className={styles.hero_title}>/ Enter the Arena</h1>

              <p className={styles.hero_description}>
                Join the next generation gaming community. Find teammates,
                compete in tournaments and stream live matches.
              </p>
            </div>
          </div>

          {/* RIGHT FORM SECTION */}
          <div className={styles.form_section}>
            <div className={styles.form_card}>
              {/* HEADER */}
              <div className={styles.form_header}>
                <h2 className={styles.form_title}>/ Create your account</h2>
              </div>

              {/* ERROR */}
              {error && <div className={styles.error_message}>{error}</div>}

              {/* FORM */}
              <form onSubmit={onSubmit} className={styles.form}>
                {/* NAME */}
                <NameField form={form} onChange={onChange} />

                {/* LAST NAME */}
                <LastNameField form={form} onChange={onChange} />

                {/* EMAIL */}
                <EmailField form={form} onChange={onChange} />

                {/* PASSWORD */}
                <PasswordField form={form} onChange={onChange} />

                {/* CONFIRM PASSWORD */}
                <ConfirmPasswordField form={form} onChange={onChange} />

                {/* AGREEMENT */}
                <AgreementBox agreement={agreement} />

                {/* CAPTCHA */}
                <ReCaptcha status={status} />

                {/* SUBMIT */}
                <SubmitButton
                  labelLoading="Creating..."
                  clientReady={status !== "loading"}
                  loading={status === "loading"}
                  message="Create account"
                />

                {/* LINKS */}
                <LinkTo
                  to="/auth/signin"
                  message="Already in the lobby?"
                  action_message="Sign in"
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
