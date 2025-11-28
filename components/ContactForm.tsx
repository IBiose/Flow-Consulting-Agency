import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from './ui/Button';

type Inputs = {
  name: string;
  email: string;
  service: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
    alert("Thanks for your message! We'll be in touch soon.");
  };

  return (
    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
      <h3 className="text-2xl font-bold text-secondary mb-6">Let's Talk Business</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-muted mb-2">Name</label>
          <input 
            {...register("name", { required: true })}
            className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-secondary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-gray-700"
            placeholder="John Doe"
          />
          {errors.name && <span className="text-accent text-xs mt-1">This field is required</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-muted mb-2">Email</label>
          <input 
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-secondary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-gray-700"
            placeholder="john@example.com"
          />
          {errors.email && <span className="text-accent text-xs mt-1">This field is required</span>}
        </div>

        <div>
            <label className="block text-sm font-medium text-muted mb-2">Interested In</label>
            <select 
                {...register("service")}
                className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-secondary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            >
                <option value="digital-marketing">Digital Marketing</option>
                <option value="branding">Branding</option>
                <option value="web-development">Web Development</option>
                <option value="design">Creative Design</option>
            </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-muted mb-2">Message</label>
          <textarea 
            {...register("message", { required: true })}
            rows={4}
            className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-secondary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-gray-700"
            placeholder="Tell us about your project..."
          />
          {errors.message && <span className="text-accent text-xs mt-1">This field is required</span>}
        </div>

        <Button type="submit" className="w-full">
            Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;