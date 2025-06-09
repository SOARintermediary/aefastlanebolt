import { type FC } from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import { ContactFormData, serviceOptions } from './formData';
import FormField from './FormField';

const ContactForm: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Get in touch for a free consultation
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6">
            <FormField
              label="Full Name"
              name="name"
              register={register}
              error={errors.name}
            />

            <FormField
              label="Email"
              name="email"
              type="email"
              register={register}
              error={errors.email}
            />

            <FormField
              label="Phone Number"
              name="phone"
              type="tel"
              register={register}
              error={errors.phone}
            />

            <FormField
              label="Service Interested In"
              name="service"
              register={register}
              error={errors.service}
              options={serviceOptions}
            />

            <FormField
              label="Message"
              name="message"
              type="textarea"
              register={register}
              error={errors.message}
            />

            <div>
              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 