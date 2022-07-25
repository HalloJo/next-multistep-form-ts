import React from "react";

export type FormData = {
  email: string;
  password: string;
  name: string;
  age: number;
  number: string;
  dataIsCorrect: boolean;
};

export const data: FormData = {
  email: "",
  password: "",
  name: "",
  age: 0,
  number: "",
  dataIsCorrect: false,
};

export type SetFormData = (formData: FormData) => void;
