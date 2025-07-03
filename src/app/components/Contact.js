'use client';
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    time: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.phone.trim()) errs.phone = "Phone is required.";
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Valid email is required.";
    if (!form.message.trim()) errs.message = "Please tell us what brings you here.";
    if (!form.time.trim()) errs.time = "Preferred time is required.";
    if (!form.agree) errs.agree = "You must agree to be contacted.";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      // Here you would send the form data to your backend or email service
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Contact Dr. Blake</h2>
        {submitted ? (
          <div className="bg-green-100 text-green-800 p-6 rounded-lg text-center font-semibold">
            Thank you for reaching out! Your message has been sent.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8 space-y-6">
            <div>
              <label className="block font-medium mb-1" htmlFor="name">Name</label>
              <input
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block font-medium mb-1" htmlFor="phone">Phone</label>
              <input
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="block font-medium mb-1" htmlFor="email">Email</label>
              <input
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block font-medium mb-1" htmlFor="message">What brings you here?</label>
              <textarea
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
              />
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
            </div>
            <div>
              <label className="block font-medium mb-1" htmlFor="time">Preferred time to reach you</label>
              <input
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 ${errors.time ? 'border-red-500' : 'border-gray-300'}`}
                type="text"
                id="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
              />
              {errors.time && <p className="text-red-600 text-sm mt-1">{errors.time}</p>}
            </div>
            <div className="flex items-center">
              <input
                className={`mr-2 accent-blue-600 ${errors.agree ? 'ring-2 ring-red-500' : ''}`}
                type="checkbox"
                id="agree"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                required
              />
              <label htmlFor="agree" className="text-gray-700">I agree to be contacted</label>
            </div>
            {errors.agree && <p className="text-red-600 text-sm mt-1">{errors.agree}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors text-lg mt-2"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
} 