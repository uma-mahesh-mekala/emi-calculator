import { ChangeEvent } from "react";

export default function Input({
  title,
  type,
  id,
  name,
  placeholder,
  minLength,
  maxLength,
  max,
  min,
  required = false,
  value,
  readOnly,
  onChange,
}: {
  title: string;
  type: string;
  id: string;
  name: string;
  placeholder?: string | number;
  minLength?: string;
  maxLength?: string;
  max?: number;
  min?: number;
  required?: boolean;
  value?: string | number;
  readOnly?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  const inputProps = Object.fromEntries(
    Object.entries({
      type,
      id,
      name,
      placeholder,
      minLength,
      maxLength,
      max,
      min,
      required,
      value,
      readOnly,
      onChange,
    }).filter(([, v]) => v !== null && v !== undefined)
  );
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input {...inputProps} />
    </>
  );
}
