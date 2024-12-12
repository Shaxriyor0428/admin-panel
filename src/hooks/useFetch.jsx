import React, { useState, useEffect } from "react";
import { request } from "../api";
import { useSelector } from "react-redux";

export const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const reload = useSelector((s) => s.reload.deleteReload);

  // console.log(reload);
  useEffect(() => {
    setData(null);
    setLoading(true);
    request
      .get(endpoint)
      .then((res) => setData(res.data))
      .catch((err) => setError(err?.response?.data))
      .finally(() => setLoading(false));
  }, [reload]);

  return { data, error, loading };
};
