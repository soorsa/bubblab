// // components/form/PhoneInputWithCountry.tsx
// "use client";

// import { useField } from "formik";
// import { ChevronDown, Info } from "lucide-react";
// import React, { useEffect, useState } from "react";

// interface CountryCode {
//   code: string;
//   label: string;
//   flag: string;
// }

// interface PhoneInputWithCountryProps {
//   placeholder?: string;
//   name: string;
//   label?: string;
//   icon?: React.ReactNode;
//   rightIcon?: React.ReactNode;
//   className?: string;
//   theme?: string;
//   readonly?: boolean;
//   required?: boolean;
//   helperText?: string;
//   countries?: CountryCode[];
//   defaultCountry?: string;
// }

// const defaultCountries: CountryCode[] = [
//   { code: "234", label: "Nigeria", flag: "🇳🇬" },
//   { code: "1", label: "USA/Canada", flag: "🇺🇸" },
//   { code: "44", label: "UK", flag: "🇬🇧" },
//   { code: "233", label: "Ghana", flag: "🇬🇭" },
//   { code: "254", label: "Kenya", flag: "🇰🇪" },
//   { code: "27", label: "South Africa", flag: "🇿🇦" },
// ];

// export const PhoneInputWithCountry: React.FC<PhoneInputWithCountryProps> = ({
//   placeholder = "Phone Number",
//   name,
//   label,
//   icon,
//   rightIcon,
//   className = "",
//   theme = "light",
//   readonly = false,
//   required = false,
//   helperText = "",
//   countries = defaultCountries,
//   defaultCountry = "234",
// }) => {
//   const [field, meta, helpers] = useField(name);
//   const hasError = meta.touched && meta.error;
//   const [displayValue, setDisplayValue] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState<CountryCode>(
//     countries.find((c) => c.code === defaultCountry) || countries[0]
//   );
//   const [isOpen, setIsOpen] = useState(false);

//   // Initialize display value from field value
//   useEffect(() => {
//     if (field.value) {
//       const value = field.value.toString();
//       // Check if value already has country code
//       let formatted = value;
//       const hasCountryCode = countries.some((c) => value.startsWith(c.code));
//       if (!hasCountryCode && value.length > 0) {
//         formatted = `${selectedCountry.code}${value}`;
//       }
//       setDisplayValue(formatPhoneForDisplay(formatted));
//     } else {
//       setDisplayValue("");
//     }
//   }, [field.value, selectedCountry.code, countries]);

//   const formatPhoneForDisplay = (value: string): string => {
//     if (!value) return "";
//     const cleaned = value.replace(/[^\d+]/g, "");
//     if (cleaned.startsWith("+")) return cleaned;

//     // Check if it starts with any country code
//     const matchedCountry = countries.find((c) => cleaned.startsWith(c.code));
//     if (matchedCountry) {
//       return `+${cleaned}`;
//     }
//     return cleaned;
//   };

//   const getRawPhoneValue = (formatted: string): string => {
//     const cleaned = formatted.replace(/\D/g, "");

//     // Check if it starts with selected country code
//     if (cleaned.startsWith(selectedCountry.code)) {
//       return cleaned;
//     }

//     // If it's a short number, add country code
//     if (cleaned.length > 0) {
//       return `${selectedCountry.code}${cleaned}`;
//     }

//     return cleaned;
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const rawInput = e.target.value;
//     const formatted = formatPhoneForDisplay(rawInput);
//     setDisplayValue(formatted);
//     const rawValue = getRawPhoneValue(formatted);
//     helpers.setValue(rawValue);
//   };

//   const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
//     if (displayValue) {
//       const formatted = formatPhoneForDisplay(displayValue);
//       setDisplayValue(formatted);
//       const rawValue = getRawPhoneValue(formatted);
//       helpers.setValue(rawValue);
//     }
//     helpers.setTouched(true);
//   };

//   const handleCountrySelect = (country: CountryCode) => {
//     setSelectedCountry(country);
//     setIsOpen(false);

//     // Update the phone value with new country code
//     if (displayValue) {
//       const cleaned = displayValue.replace(/\D/g, "");
//       const newValue = `${country.code}${cleaned.replace(
//         /^1|^234|^44|^233|^254|^27/,
//         ""
//       )}`;
//       const formatted = formatPhoneForDisplay(newValue);
//       setDisplayValue(formatted);
//       helpers.setValue(newValue);
//     }
//   };

//   return (
//     <div className="w-full text-left">
//       {label && (
//         <div className="text-xs font-semibold flex items-center gap-1">
//           {label}
//           {required && <span className="text-red-500">*</span>}
//         </div>
//       )}

//       <div
//         className={`w-full relative flex flex-row border rounded-xl py-3 bg-gray-200 ${
//           hasError
//             ? "border-red-500"
//             : theme === "dark"
//             ? "border-gray-400"
//             : "border-gray-200 focus-within:border-blue-400 active:border-blue-400"
//         } ${className}`}
//       >
//         {/* Left Icon */}
//         {icon && <div className="flex items-center px-3">{icon}</div>}

//         {/* Country Code Selector */}
//         <div className="relative">
//           <button
//             type="button"
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex items-center gap-1 px-1.5 text-sm border-r border-gray-300 hover:bg-gray-100 transition-colors"
//           >
//             <span className="font-medium">+{selectedCountry.code}</span>
//             <ChevronDown
//               className={`w-4 h-4 transition-transform ${
//                 isOpen ? "rotate-180" : ""
//               }`}
//             />
//           </button>

//           {/* Country Dropdown */}
//           {isOpen && (
//             <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 min-w-45 max-h-60 overflow-y-auto">
//               {countries.map((country) => (
//                 <button
//                   key={country.code}
//                   type="button"
//                   onClick={() => handleCountrySelect(country)}
//                   className={`w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-sm ${
//                     selectedCountry.code === country.code
//                       ? "bg-blue-50 text-blue-600"
//                       : ""
//                   }`}
//                 >
//                   <span>{country.flag}</span>
//                   <span>{country.label}</span>
//                   <span className="text-gray-400 text-xs ml-auto">
//                     +{country.code}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Phone Input */}
//         <input
//           {...field}
//           value={displayValue}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           disabled={readonly}
//           type="tel"
//           placeholder={placeholder}
//           className={`${
//             theme === "dark" ? "text-gray-300" : "text-gray-900"
//           } text-sm rounded-lg focus:ring-0 block w-full px-0.5 outline-none resize-none bg-transparent ${
//             readonly && "cursor-not-allowed"
//           }`}
//         />

//         {/* Error Icon */}
//         {hasError && (
//           <div className="flex items-center px-3">
//             <Info className="w-5 h-5 text-red-500" />
//           </div>
//         )}

//         {/* Right Icon */}
//         {rightIcon && <div className="flex items-center pr-3">{rightIcon}</div>}
//       </div>

//       {/* Helper/Error Message */}
//       {hasError ? (
//         <p className="text-red-500 text-[9px] mt-1 ml-2 text-left">
//           {meta.error}
//         </p>
//       ) : (
//         helperText && (
//           <p className="text-gray-400 text-[9px] mt-1 ml-2 text-left">
//             {helperText}
//           </p>
//         )
//       )}
//     </div>
//   );
// };

// export default PhoneInputWithCountry;
