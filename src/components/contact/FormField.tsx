import { type FC } from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { useLanguage } from '../../contexts/LanguageContext';
import { ContactFormData } from './formData';

interface FormFieldProps {
  label: string;
  name: keyof ContactFormData;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  register: UseFormRegister<ContactFormData>;
  error?: FieldError;
  options?: Array<{ value: string; label: string }>;
  rows?: number;
  required?: string;
  invalidMessage?: string;
}

const FormField: FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  register,
  error,
  options,
  rows,
  required,
  invalidMessage
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const registerOptions: any = {};
  
  if (required) {
    registerOptions.required = `${label} ${required}`;
  }
  if (type === 'email' && invalidMessage) {
    registerOptions.pattern = {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: invalidMessage
    };
  }

  const baseClasses = `mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary ${isRTL ? 'text-right' : 'text-left'}`;

  const renderField = () => {
    if (type === 'textarea') {
      return (
        <textarea
          id={name}
          rows={rows || 4}
          {...register(name, registerOptions)}
          className={baseClasses}
          dir={isRTL ? 'rtl' : 'ltr'}
        />
      );
    }

    if (options) {
      return (
        <select
          id={name}
          {...register(name, registerOptions)}
          className={baseClasses}
          dir={isRTL ? 'rtl' : 'ltr'}
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
        {...register(name, registerOptions)}
        className={baseClasses}
        dir={isRTL ? 'rtl' : 'ltr'}
      />
    );
  };

  return (
    <div>
      <label htmlFor={name} className={`block text-sm font-medium text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>
        {label}
      </label>
      {renderField()}
      {error && (
        <p className={`mt-1 text-sm text-red-600 ${isRTL ? 'text-right' : 'text-left'}`}>{error.message}</p>
      )}
    </div>
  );
};

export default FormField; 