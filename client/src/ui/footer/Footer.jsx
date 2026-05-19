import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      {/* CONTENT */}
      <div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li>Help Center</li>
            <li>Documentation</li>
            <li>API</li>
            <li>Community</li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
            <li>Security</li>
          </ul>
        </div>
        <div>
          <h4>Social</h4>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Discord</li>
          </ul>
        </div>
      </div>

      <div
        style={{
          justifyContent: "center",
          width: "100%",
          marginBlock: "2rem",
          fontSize: "0.8rem",
          lineHeight: "1.2rem",
        }}
      >
        <span>© 2026 Stream Platform. All rights reserved.</span>
      </div>

      <div>
        <span>Built by Jxs7er.</span>
      </div>
    </div>
  );
};

export default Footer;
