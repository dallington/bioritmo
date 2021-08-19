import React from "react";

type TOptions = { options?: { [key: string]: string } };

const defaultOptions = {
  method: "GET",
};

export default function useRequest(url: string, options: TOptions = {}) {
  const fetchOptions = { ...defaultOptions, ...options };

  const request = async () => {
    try {
      const response = await fetch(url, fetchOptions);
      return await response.json();
    } catch (error) {
      return error;
    }
  };

  return { request };
}
