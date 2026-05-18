import { useCallback, useEffect, useState } from "react";

export const useFetch = ({ setData, handleFunction, deps = [] }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await handleFunction();
      if (!res?.ok) {
        throw new Error("Request failed");
      }

      setData(res.data);
    } catch (error) {
      setData([]);
      setError(err?.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    fetchData();
  }, [...deps]);

  return {
    loading,
    error,
    refetch: fetchData,
  };
};
