"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
interface ContactItemProps {
  icon: React.ReactNode;
  title?: string;
  description: string;
  href?: string;
}

const ContactItem = ({ icon, title, description, href }: ContactItemProps) => {
  return (
    <div className="flex w-full items-center justify-start gap-5 text-white">
      <div className="flex aspect-square h-full items-center justify-center rounded-full bg-white/10 md:size-9">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm uppercase text-white/60">{title}</h3>
        {href ? (
          <Link
            href={href}
            className="transition-all hover:underline active:text-primary-950 md:text-sm"
          >
            <p className="min-w-[300px] md:min-w-0">{description}</p>
          </Link>
        ) : (
          <p className="min-w-[300px] md:min-w-0">{description}</p>
        )}
      </div>
    </div>
  );
};

const emptyForm = {
  fromEmail: "",
  fromName: "",
  subject: "",
  message: "",
};

export const ContactForm = () => {
  const [form, setForm] = useState<typeof emptyForm>(emptyForm);

  const contactInfo: ContactItemProps[] = [
    {
      icon: <MailIcon className="size-4" />,
      title: "Email",
      description: "info@example.com",
      href: "mailto:info@example.com",
    },
    {
      icon: <PhoneIcon className="size-4" />,
      title: "Phone number",
      description: "+387 61 234 567",
      href: "tel:+38761234567",
    },
    {
      icon: <MapPinIcon className="size-4" />,
      title: "Address",
      description: "Luxemburgo, Luxemburgo",
    },
  ];

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <div className="flex overflow-hidden rounded-xl bg-white shadow-xl md:flex-col">
      <div className="flex flex-col gap-5 bg-primary-800 p-10 md:gap-3 md:p-6">
        <h1 className="text-2xl font-bold text-white md:text-xl">
          Contact Info
        </h1>
        {contactInfo.map((item) => (
          <ContactItem key={item.title} {...item} />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-5 p-10 text-slate-800 md:p-6">
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="text-sm">
              Full name
            </label>
            <Input
              id="fullName"
              placeholder="Full name"
              value={form.fromName}
              onChange={(e) => setForm({ ...form, fromName: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm">
              Email address
            </label>
            <Input
              id="email"
              placeholder="Email address"
              value={form.fromEmail}
              onChange={(e) => setForm({ ...form, fromEmail: e.target.value })}
            />
          </div>
          <div className="col-span-2 flex flex-col gap-1">
            <label htmlFor="subject" className="text-sm">
              Subject
            </label>
            <Input
              id="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
          </div>
          <div className="col-span-2 flex flex-col gap-1">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Message"
              rows={4}
              className="resize-none"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <Button
            className="col-span-2 w-fit gap-2 md:w-full"
            onClick={handleSubmit}
            variant="default"
          >
            Send message
            <SendIcon className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
