/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

type TOptions = { options?: { [key: string]: string } };

const defaultOptions = {
  method: "GET",
};

export default function useFetch<R extends any = any>(
  url: string,
  options: TOptions = {}
) {
  const fetchOptions = { ...defaultOptions, ...options };
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<R | null>(null);
  const [error, setError] = useState({});

  const fetchData = () => {
    fetch(url, fetchOptions)
      .then(async (response) => {
        const json = await response.json();
        setData(json);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, isLoading };
}
