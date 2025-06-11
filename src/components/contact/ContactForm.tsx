import { type FC } from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ContactFormData, serviceOptions } from './formData';
import FormField from './FormField';

const ContactForm: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();
  const { t } = useLanguage();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl mb-2">
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
          <div className="mt-6 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <div className="w-3 h-3 bg-teal rounded-full"></div>
          </div>
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8 md:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-8">
            <FormField
              label={t('contact.name')}
              name="name"
              register={register}
              error={errors.name}
              required={t('contact.required')}
            />

            <FormField
              label={t('contact.email')}
              name="email"
              type="email"
              register={register}
              error={errors.email}
              required={t('contact.required')}
              invalidMessage={t('contact.invalidEmail')}
            />

            <FormField
              label={t('contact.phone')}
              name="phone"
              type="tel"
              register={register}
              error={errors.phone}
              required={t('contact.required')}
            />

            <FormField
              label={t('contact.service')}
              name="service"
              register={register}
              error={errors.service}
              options={serviceOptions.map(option => ({
                ...option,
                label: t(`services.${option.value}.title`)
              }))}
            />

            <FormField
              label={t('contact.message')}
              name="message"
              type="textarea"
              register={register}
              error={errors.message}
              required={t('contact.required')}
            />

            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-lg font-semibold text-white bg-gradient-to-r from-primary via-primary-light to-accent hover:from-primary-light hover:via-accent hover:to-teal focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-primary/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Send className="w-6 h-6 mr-3" />
                {t('contact.submit')}
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 