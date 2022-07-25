export type FormDataProps = {
  email: string;
  password: string;
  name: string;
  age: number;
  number: string;
  dataIsCorrect: boolean;
};

export const formData: FormDataProps = {
  email: "",
  password: "",
  name: "",
  age: 0,
  number: "",
  dataIsCorrect: false,
};
