import { type FC } from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { ContactFormData } from './formData';

interface FormFieldProps {
  label: string;
  name: keyof ContactFormData;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  register: UseFormRegister<ContactFormData>;
  error?: FieldError;
  options?: Array<{ value: string; label: string }>;
  rows?: number;
}

const FormField: FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  register,
  error,
  options,
  rows
}) => {
  const renderField = () => {
    const baseClasses = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary";

    if (type === 'textarea') {
      return (
        <textarea
          id={name}
          rows={rows || 4}
          {...register(name)}
          className={baseClasses}
        />
      );
    }

    if (options) {
      return (
        <select
          id={name}
          {...register(name)}
          className={baseClasses}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    return (
      <input
        type={type}
        id={name}
        {...register(name)}
        className={baseClasses}
      />
    );
  };

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {renderField()}
      {error && (
        <p className="mt-1 text-sm text-red-600">{error.message}</p>
      )}
    </div>
  );
};

export default FormField; 