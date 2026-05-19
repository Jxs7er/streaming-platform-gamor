
import styles from "./Header.module.css";
import { AuthButton, Logo, MenusLinks, ThemeButton } from "./components";

const Header = () => {
  // const { user, logout } = useAuth();
  return (
    <nav className={styles.nav}>
      {/* Menu Links */}
      <MenusLinks />

      {/* Logo */}
      <Logo />

      {/* Theme */}
      <ThemeButton />

      {/* Auth Button */}
      <AuthButton />
    </nav>
  );
};
export default Header;
