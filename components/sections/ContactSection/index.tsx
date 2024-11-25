import { ContactForm } from "./ContactForm";

const ContactSection = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 bg-slate-100 py-20 md:p-10 md:px-5">
      <h1 className="text-4xl font-bold text-slate-800 md:text-2xl">
        Want to get in touch?
      </h1>
      <h2 className="mb-5 text-center text-lg font-light text-slate-600 md:text-sm">
        Feel free to contact us and we will be happy to answer your questions.
      </h2>
      <ContactForm />
    </div>
  );
};

export default ContactSection;
