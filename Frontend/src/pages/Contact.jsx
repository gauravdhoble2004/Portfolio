
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="w-full min-h-screen bg-[#000000] text-white flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl w-full mx-auto">
     
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#28cd5f] mb-4 logo">Contact Me</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Got a project in mind? Let's discuss and create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
       
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-[#1b1b1b] rounded-lg border border-gray-800 hover:border-[#28cd5f] transition-colors duration-300">
                <div className="w-12 h-12 bg-[#28cd5f] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-gray-300">gauravdhoble478@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#1b1b1b] rounded-lg border border-gray-800 hover:border-[#28cd5f] transition-colors duration-300">
                <div className="w-12 h-12 bg-[#28cd5f] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-gray-300">+91 **********</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#1b1b1b] rounded-lg border border-gray-800 hover:border-[#28cd5f] transition-colors duration-300">
                <div className="w-12 h-12 bg-[#28cd5f] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-gray-300">Nagpur, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 sm:p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-[#28cd5f] transition-colors duration-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 sm:p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-[#28cd5f] transition-colors duration-300"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 sm:p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-[#28cd5f] transition-colors duration-300 resize-vertical"
              />
              <button
                type="submit"
                className="w-full bg-[#28cd5f] text-gray-900 font-bold py-3 sm:py-4 rounded-lg hover:bg-[#1fa850] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}