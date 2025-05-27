import React, { useState } from 'react';

export default function Support() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here (e.g., send to backend or email service)
    setSubmitted(true);
    setEmail('');
    setMessage('');
  };

  return (
    <div className="p-6 max-w-md mx-auto ">
      <h1 className="text-2xl font-bold text-slate-700 mb-4">Support</h1>
      <p className="mb-6 text-gray-600">Need help? Reach out to our support team anytime.</p>

      {submitted && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
          Thank you for contacting us! We will get back to you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            className="mt-1 block w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Message</span>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            rows={4}
            className="mt-1 block w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </label>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
