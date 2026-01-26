'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real implementation, you would send this to your API
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-art-600">
          <Link href="/" className="hover:text-art-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-art-800 font-medium">Contact Us</span>
        </nav>

        {/* Header */}
        <header className="text-center mb-12">
          <div className="text-6xl mb-4">📬</div>
          <h1 className="text-4xl md:text-5xl font-bold text-art-900 mb-4 font-display">
            Contact Us
          </h1>
          <p className="text-xl text-art-600">
            Have questions or suggestions? We'd love to hear from you!
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="art-card p-8 text-center border-2 border-green-400 bg-green-50/50">
                <div className="text-6xl mb-4">✓</div>
                <h2 className="text-2xl font-bold text-art-800 mb-3 font-display">
                  Thank You!
                </h2>
                <p className="text-art-600 mb-6">
                  We've received your message and will get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="art-button art-button-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="art-card p-8">
                <h2 className="text-2xl font-bold text-art-800 mb-6 font-display">Send Us a Message</h2>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-art-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="art-input"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-art-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="art-input"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-art-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="art-input"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="bug">Report a Bug</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-art-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="art-input resize-y"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full art-button art-button-primary text-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="art-card p-6">
              <h3 className="text-xl font-bold text-art-800 mb-4 font-display">Quick Answers</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-art-700 mb-1">How do I use the drawing tools?</h4>
                  <p className="text-art-600 text-sm">
                    Simply navigate to any of our tools and follow the on-screen instructions. No account needed!
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-art-700 mb-1">Is WhatToDraw.art free?</h4>
                  <p className="text-art-600 text-sm">
                    Yes! All our tools and content are completely free to use.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-art-700 mb-1">Can I submit my own drawing ideas?</h4>
                  <p className="text-art-600 text-sm">
                    We'd love to hear your suggestions! Send us a message and we'll consider adding your ideas.
                  </p>
                </div>
              </div>
            </div>

            <div className="art-card p-6">
              <h3 className="text-xl font-bold text-art-800 mb-4 font-display">Follow Us</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="flex items-center gap-3 p-3 border-2 border-art-200 rounded-xl hover:border-art-400 transition-colors">
                  <span className="text-2xl">📸</span>
                  <span className="text-art-700 font-medium">Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 border-2 border-art-200 rounded-xl hover:border-art-400 transition-colors">
                  <span className="text-2xl">🐦</span>
                  <span className="text-art-700 font-medium">Twitter</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 border-2 border-art-200 rounded-xl hover:border-art-400 transition-colors">
                  <span className="text-2xl">📌</span>
                  <span className="text-art-700 font-medium">Pinterest</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 border-2 border-art-200 rounded-xl hover:border-art-400 transition-colors">
                  <span className="text-2xl">🎵</span>
                  <span className="text-art-700 font-medium">TikTok</span>
                </a>
              </div>
            </div>

            <div className="art-card p-6">
              <h3 className="text-xl font-bold text-art-800 mb-4 font-display">Other Pages</h3>
              <div className="space-y-3">
                <Link href="/about" className="block text-art-600 hover:text-art-700 transition-colors">
                  → About Us
                </Link>
                <Link href="/privacy" className="block text-art-600 hover:text-art-700 transition-colors">
                  → Privacy Policy
                </Link>
                <Link href="/terms" className="block text-art-600 hover:text-art-700 transition-colors">
                  → Terms of Use
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
