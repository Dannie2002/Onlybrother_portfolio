import React, { useState } from "react";
import { motion } from "framer-motion";
import { Highlighter } from './Highlighter';

export default function ContactMe() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center min-h-[60vh] w-full px-6 py-16 gap-12 bg-[#0b0b0d] lg:px-36 lg:py-24">
      {/* Left Side */}
      <div className="flex flex-col items-start justify-center flex-1 mb-8 lg:mb-0">
        <h2 className="mb-4 text-4xl text-white golant"
        >Get in <span className="text-[#8b949e]"><Highlighter padding={10} color='#177A96' action='underline'>Touch</Highlighter></span></h2>
        <p className="max-w-md text-lg text-[#8b949e]">
          Have a question, project, or just want to say hi? Fill out the form and I'll get back to you as soon as possible!
        </p>
      </div>
      {/* Right Side - Form */}
      <form
        onSubmit={handleSubmit}
        className="flex-1 bg-[#23232b] rounded-2xl shadow-lg p-8 w-full max-w-lg
          border border-[#2eaec4]/30
     before:opacity-80 bg-[radial-gradient(circle_at_top_left,#5176A3_0%,transparent_60%),radial-gradient(circle_at_bottom_right,#0b0b0d_0%,#000_80%)]"
        autoComplete="off"
      >
        <div className="mb-4">
          <label className="block mb-1 text-gray-200" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-4 py-2 rounded bg-[#18181b] text-white border border-[#38bdf8]/30 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className="text-sm text-pink-400">{errors.name}</span>}
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-200" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-4 py-2 rounded bg-[#18181b] text-white border border-[#38bdf8]/30 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="text-sm text-pink-400">{errors.email}</span>}
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-200" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-4 py-2 rounded bg-[#18181b] text-white border border-[#38bdf8]/30 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] resize-none"
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && <span className="text-sm text-pink-400">{errors.message}</span>}
        </div>
        <button
          type="submit"
          className="w-full py-2 mt-2 transition-transform rounded shadow-lg font-boldtext-white bg-[#177A96] hover:scale-105"
        >
          {submitted ? "Message Sent!" : "Send Message"}
        </button>
        {submitted && (
          <div className="mt-2 text-center text-green-400">Thank you for reaching out!</div>
        )}
      </form>
    </section>
  );
}