'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Mail, 
  Github, 
  Linkedin, 
  Code,
  CheckCircle,
  Loader2,
  Sparkles,
  Coffee,
  Rocket
} from 'lucide-react';
import { personalInfo } from '@/data/resume';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', subject: '', message: '' });
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: '#6366f1',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: `@${personalInfo.github}`,
      href: personalInfo.githubUrl,
      color: '#8b5cf6',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: personalInfo.linkedin,
      href: personalInfo.linkedinUrl,
      color: '#0077b5',
    },
    {
      icon: Code,
      label: 'LeetCode',
      value: '500+ Problems',
      href: 'https://leetcode.com/u/reddy_1859994',
      color: '#f59e0b',
    },
  ];

  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div 
          className="absolute top-1/4 -left-32 w-64 h-64 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent 70%)', filter: 'blur(60px)' }}
        />
        <div 
          className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1), transparent 70%)', filter: 'blur(60px)' }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', bounce: 0.5 }}
            className="w-20 h-20 rounded-3xl mx-auto mb-6 flex items-center justify-center relative"
            style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))' }}
          >
            <Rocket size={36} className="text-accent-primary" />
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{ border: '2px solid rgba(99, 102, 241, 0.3)' }}
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <span className="label text-accent-primary mb-3 block">Get In Touch</span>
          <h2 className="heading-lg mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="body-md max-w-2xl mx-auto">
            Interested in collaborating on AI projects, discussing research, or just want to chat?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-sm mb-6 flex items-center gap-2">
              <Sparkles size={20} className="text-accent-primary" />
              Contact Information
            </h3>
            
            <div className="space-y-3 mb-8">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl group relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: `${method.color}50`,
                    boxShadow: `0 10px 30px ${method.color}15`
                  }}
                >
                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `radial-gradient(circle at left, ${method.color}15, transparent 70%)` }}
                  />
                  
                  <motion.div 
                    className="relative p-3 rounded-xl transition-all duration-300"
                    style={{ background: `${method.color}20` }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <method.icon size={22} style={{ color: method.color }} />
                  </motion.div>
                  <div className="relative">
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">
                      {method.label}
                    </div>
                    <div className="font-medium text-white group-hover:text-accent-primary transition-colors">
                      {method.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05))',
                border: '1px solid rgba(16, 185, 129, 0.2)',
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="font-semibold text-emerald-400">Available for Opportunities</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Open to internships and full-time roles in AI/ML engineering, 
                GenAI development, and backend systems.
              </p>
            </motion.div>

            {/* Fun element */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 flex items-center gap-2 text-slate-500 text-sm"
            >
              <Coffee size={16} className="text-amber-500" />
              <span>Usually responds with a cup of coffee ☕</span>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="heading-sm mb-6 flex items-center gap-2">
              <Send size={20} className="text-accent-primary" />
              Send a Message
            </h3>
            
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-5 p-6 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['name', 'email'].map((field) => (
                  <div key={field} className="relative">
                    <label htmlFor={field} className="block text-sm text-slate-400 mb-2 capitalize">
                      {field}
                    </label>
                    <motion.input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      value={formState[field as keyof typeof formState]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder={field === 'email' ? 'your@email.com' : 'Your name'}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border text-white placeholder:text-slate-500 focus:outline-none transition-all duration-300"
                      style={{
                        borderColor: focusedField === field ? 'rgba(99, 102, 241, 0.5)' : 'rgba(255,255,255,0.1)',
                        boxShadow: focusedField === field ? '0 0 20px rgba(99, 102, 241, 0.15)' : 'none',
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="relative">
                <label htmlFor="subject" className="block text-sm text-slate-400 mb-2">
                  Subject
                </label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  required
                  placeholder="How can I help?"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border text-white placeholder:text-slate-500 focus:outline-none transition-all duration-300"
                  style={{
                    borderColor: focusedField === 'subject' ? 'rgba(99, 102, 241, 0.5)' : 'rgba(255,255,255,0.1)',
                    boxShadow: focusedField === 'subject' ? '0 0 20px rgba(99, 102, 241, 0.15)' : 'none',
                  }}
                />
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-sm text-slate-400 mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={5}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border text-white placeholder:text-slate-500 focus:outline-none transition-all duration-300 resize-none"
                  style={{
                    borderColor: focusedField === 'message' ? 'rgba(99, 102, 241, 0.5)' : 'rgba(255,255,255,0.1)',
                    boxShadow: focusedField === 'message' ? '0 0 20px rgba(99, 102, 241, 0.15)' : 'none',
                  }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 relative overflow-hidden"
                style={{
                  background: isSubmitted 
                    ? 'linear-gradient(135deg, #10b981, #059669)' 
                    : 'linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)',
                }}
                whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)' }}
                whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
              >
                {/* Shine effect */}
                {!isSubmitting && !isSubmitted && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                )}
                
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.span
                      key="submitting"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </motion.span>
                  ) : isSubmitted ? (
                    <motion.span
                      key="submitted"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle size={20} />
                      Message Sent!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="send"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="relative flex items-center gap-2"
                    >
                      <Send size={18} />
                      Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
