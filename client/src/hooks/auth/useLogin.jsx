import { useState } from "react";

export const useLogin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value, checked, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

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
    status,
    error,
    onChange,
    onSubmit,
  };
};
