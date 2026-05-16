import { TextInput } from "../inputs";

const NameField = ({ form, onChange, error, _class }) => {
  return (
    <TextInput
      label="Name"
      name="name"
      value={form.name}
      onChange={onChange}
      placeholder="Enter your name"
      error={error}
      _class={_class}
    />
  );
};

export default NameField;
