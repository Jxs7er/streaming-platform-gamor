import { EmailInput } from "../inputs";

const EmailField = ({ form, onChange,  error, _class }) => {
  return (
    <EmailInput
      label="Email"
      name="email"
      value={form.email}
      onChange={onChange}
      placeholder="mail@example.com"
      error={error}
      _class={_class}
    />
  );
};

export default EmailField;
