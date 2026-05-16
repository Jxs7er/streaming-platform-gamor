import { TextInput } from "../inputs";

const LastNameField = ({ form, onChange, error, _class }) => {
  return (
    <TextInput
      label="Last Name"
      name="last_name"
      value={form.last_name}
      onChange={onChange}
      placeholder="Enter your last name"
      error={error}
      _class={_class}
    />
  );
};

export default LastNameField;
