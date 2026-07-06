"use client";
import { useField } from "formik";
import { AlertCircle } from "lucide-react";
import React from "react";

interface DateInputProps {
  name: string;
  label?: string;
  maxDate?: string;
  minDate?: Date;
}

const DateInput: React.FC<DateInputProps> = ({
  name,
  label,
  maxDate,
  minDate,
}) => {
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error;

  // Format Date object to YYYY-MM-DD string for input[type="date"]
  const formatDateForInput = (date: Date | string) => {
    if (!date) return "";
    const d = new Date(date);
    if (isNaN(d.getTime())) return "";

    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
    <div className="mb-4">
      {label && <label className="text-xs font-bold">{label}</label>}

      <div className="relative">
        <input
          type="date"
          {...field}
          value={formatDateForInput(field.value)}
          max={maxDate}
          min={String(minDate)}
          className={`w-full py-2 px-4 rounded-xl uppercase text-gray-600 border ${
            hasError
              ? "border-red-500"
              : "border-gray-300 focus:border-blue-400 active:border-blue-400"
          }`}
        />

        {hasError && (
          <div className="flex items-center mt-1 text-red-500">
            <AlertCircle className="mr-1" />
            <span className="text-xs">{meta.error}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateInput;
