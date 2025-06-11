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

  const baseClasses = `mt-2 block w-full rounded-xl border-2 border-gray-200 shadow-sm focus:border-primary focus:ring-4 focus:ring-primary/20 focus:ring-offset-2 transition-all duration-300 px-4 py-3 text-gray-900 placeholder-gray-400 ${isRTL ? 'text-right' : 'text-left'}`;

  const renderField = () => {
    if (type === 'textarea') {
      return (
        <textarea
          id={name}
          rows={rows || 4}
          {...register(name, registerOptions)}
          className={`${baseClasses} resize-none`}
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
    <div className="space-y-1">
      <label htmlFor={name} className={`block text-base font-semibold text-gray-800 ${isRTL ? 'text-right' : 'text-left'}`}>
        {label}
      </label>
      {renderField()}
      {error && (
        <p className={`mt-2 text-sm text-red-600 font-medium ${isRTL ? 'text-right' : 'text-left'}`}>{error.message}</p>
      )}
    </div>
  );
};

export default FormField; 