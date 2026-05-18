import { useAuth } from "@/context";
import { AuthServices } from "@/services/modules";
import { useState } from "react";
import { useNavigate } from "react-router";

export const useLogin = () => {
  const { setUser, setInitializing } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value, checked, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setInitializing(true);

    try {
      setStatus("loading");
      setError(null);

      const res = await AuthServices.login(form);
      if (!res.ok) {
        setStatus("failed");
        setError(res.reason);
      }
      setUser(res.data);
      setStatus("success");
      navigate("/");
    } catch (err) {
      setStatus("error");
      setError(err.message || "Login failed");
    } finally {
      setInitializing(false);
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
