import { PasswordInput } from "../inputs";

const ConfirmPasswordField = ({ form, onChange, confirmError, _class }) => {
  return (
    <PasswordInputnput
      label="Confirm the password"
      name="confirm"
      value={form.confirm || ""}
      onChange={onChange}
      placeholder="••••••••"
      confirmError={confirmError}
      _class={_class}
    />
  );
};

export default ConfirmPasswordField;
