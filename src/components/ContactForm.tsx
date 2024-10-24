import React, { useState } from 'react';
import { Mail, Send, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 text-center bg-gray-900/50 backdrop-blur-sm rounded-xl">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20">
          <Send className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="mb-4 text-2xl font-bold">Message Sent!</h3>
        <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
        <p className="text-gray-400">In case of delay, please reach out via email at <a href="mailto:anthonybekoebankah@gmail.com" className="text-blue-500 underline hover:text-blue-600">anthonybekoebankah@gmail.com</a></p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 space-y-6 bg-gray-900/50 backdrop-blur-sm rounded-xl">
      <div className="flex flex-col space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
        <input
          type="text"
          id="name"
          required
          className="px-4 py-2 rounded-lg outline-none bg-gray-800/50 focus:ring-2 focus:ring-blue-500"
          placeholder="Your name"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
        <input
          type="email"
          id="email"
          required
          className="px-4 py-2 rounded-lg outline-none bg-gray-800/50 focus:ring-2 focus:ring-blue-500"
          placeholder="your@email.com"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
        <textarea
          id="message"
          required
          rows={4}
          className="px-4 py-2 rounded-lg outline-none resize-none bg-gray-800/50 focus:ring-2 focus:ring-blue-500"
          placeholder="Your message..."
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center justify-center w-full px-6 py-3 space-x-2 font-medium transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-blue-800"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Mail className="w-5 h-5" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}