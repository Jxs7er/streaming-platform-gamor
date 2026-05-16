import { PasswordInput } from "../inputs";

const PasswordField = ({
  form,
  onChange,
  passwordErrors,
  validatePassword,
  isLogin,
  _class,
}) => {
  return (
    <PasswordInput
      label="Password"
      name="password"
      value={form.password}
      isLogin={isLogin}
      onChange={onChange}
      placeholder="••••••••"
      passwordErrors={passwordErrors}
      _class={_class}
    />
  );
};

export default PasswordField;