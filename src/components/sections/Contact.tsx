'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, User } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY, // Reads from .env.local
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">
            Let&apos;s Start a <br /> <span className="text-electric-blue italic">New Project</span>
          </h2>
          <p className="text-xl text-accent mb-12 max-w-md leading-relaxed font-light">
            I&apos;m currently available for freelance work or full-time roles. If you have an idea in mind or just want to say hi, feel free to drop a message.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="transition-transform">
                <Mail className="text-electric-blue" size={32} />
              </div>
              <div>
                <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1 italic">Email Me</p>
                <a href="mailto:jetshreesharma@gmail.com" className="text-xl font-bold text-white hover:text-electric-blue transition-colors tracking-tight underline underline-offset-8 decoration-white/10 hover:decoration-electric-blue">
                  jetshreesharma@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="transition-transform">
                <MessageSquare className="text-electric-blue" size={32} />
              </div>
              <div>
                <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1 italic">Social Message</p>
                <p className="text-xl font-bold text-white tracking-tight">Available on LinkedIn</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-10 md:p-14 rounded-[3rem] border border-white/5 space-y-8 backdrop-blur-xl bg-white/[0.02]"
        >
          <div className="space-y-3">
            <label htmlFor="name" className="text-xs font-bold text-accent uppercase tracking-[0.2em] italic ml-2">Your Name</label>
            <div className="relative group">
              <User className="absolute left-6 top-1/2 -translate-y-1/2 text-accent/30 group-focus-within:text-electric-blue transition-colors" size={20} />
              <input
                id="name"
                type="text"
                required
                suppressHydrationWarning
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 text-white p-5 pl-14 rounded-2xl focus:outline-none focus:border-electric-blue/50 focus:bg-white/10 transition-all font-medium placeholder:text-accent/20"
                placeholder="Your name"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-3">
            <label htmlFor="email" className="text-xs font-bold text-accent uppercase tracking-[0.2em] italic ml-2">Your Email</label>
            <div className="relative group">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-accent/30 group-focus-within:text-electric-blue transition-colors" size={20} />
              <input
                id="email"
                type="email"
                required
                suppressHydrationWarning
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 text-white p-5 pl-14 rounded-2xl focus:outline-none focus:border-electric-blue/50 focus:bg-white/10 transition-all font-medium placeholder:text-accent/20"
                placeholder="Your email"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-3">
            <label htmlFor="message" className="text-xs font-bold text-accent uppercase tracking-[0.2em] italic ml-2">Message Description</label>
            <textarea
              id="message"
              required
              suppressHydrationWarning
              value={formData.message}
              rows={5}
              className="w-full bg-white/5 border border-white/10 text-white p-6 rounded-2xl focus:outline-none focus:border-electric-blue/50 focus:bg-white/10 transition-all font-medium placeholder:text-accent/20 resize-none"
              placeholder="Enter message"
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            suppressHydrationWarning
            className="w-full bg-white text-background font-black uppercase tracking-widest p-6 rounded-2xl hover:bg-electric-blue hover:text-white transition-all cursor-pointer flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : (
              <>Send Message <Send size={20} /></>
            )}
          </button>

          {status === 'success' && (
            <p className="text-green-400 text-sm text-center font-bold mt-4">Message sent successfully! I will get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-sm text-center font-bold mt-4">Failed to send message. Please try again or email me directly.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
