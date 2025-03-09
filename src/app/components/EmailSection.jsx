"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    // Format the WhatsApp message
    const whatsappMessage = `🌟 *New Contact Request!* 🌟%0A%0A📧 *Email:* ${email}%0A📝 *Subject:* ${subject}%0A💬 *Message:* ${message}%0A%0A🚀 *Please respond soon!*`;

    // Replace 'YOUR_PHONE_NUMBER' with your WhatsApp number
    const phoneNumber = "9689490479"; 

    // Open WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");

    // Show success message
    setEmailSubmitted(true);
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities. My inbox is always open! 
          Whether you have a question or just want to say hi, I&apos;ll try my best to respond.
        </p>
        <div className="flex flex-row gap-3">
          <Link href="https://github.com/Sagar1566" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" className="w-8 h-8 hover:scale-110 transition-transform" />
          </Link>
          <Link href="https://www.linkedin.com/in/sagar-gajbhar-032068310" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" className="w-8 h-8 hover:scale-110 transition-transform" />
          </Link>
        </div>
      </div>

      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">✅ Message sent via WhatsApp!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your email</label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg w-full p-2.5 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                placeholder="example@email.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">Subject</label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg w-full p-2.5 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Just saying hi"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">Message</label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg w-full p-2.5 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Let's talk about..."
              />
            </div>

            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
