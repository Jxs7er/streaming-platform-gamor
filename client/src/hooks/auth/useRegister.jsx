import { useState } from "react";

export const useRegister = () => {
  const [form, setForm] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
    confirm: "",
    agreement: false,
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [agreement, setAgreements] = useState(false);
  const [openAgreements, setOpenAgreements] = useState(false);

  const onChange = (e) => {
    const { name, value, checked, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!agreement) return;
    setAgreements(true);

    try {
      setStatus("loading");
      setError(null);

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err.message || "Login failed");
    }
  };

  return {
    form,
    setAgreements,
    agreement,
    status,
    error,
    onChange,
    onSubmit,
  };
};
