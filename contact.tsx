'use client'

import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (sending) return
    setSending(true)
    setSubmitted(false)
    setErrorMessage('')
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setErrorMessage('Your message could not be sent. Please email me directly using the link beside this form.')
      }
    } catch (error) {
      setErrorMessage('Unable to connect. Please try again or email me directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section-space contact-section">
      <div className="site-container">
        <div className="text-center mb-16">
          <p className="eyebrow">05 / LET’S BUILD SOMETHING BETTER</p><h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Your next chapter.<br /><span className="gradient-text">A smarter system.</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Ready to automate your business and scale efficiently? Let&apos;s discuss your automation needs and project goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email */}
            <div className="p-6 rounded-lg bg-background border border-border hover:border-primary transition-all cursor-pointer active:scale-95">
              <h3 className="text-lg font-bold text-foreground mb-3">Email</h3>
              <a href="mailto:moradavega143@gmail.com" className="text-primary hover:text-primary/80 transition text-sm break-all">
                moradavega143@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="p-6 rounded-lg bg-background border border-border hover:border-primary transition-all cursor-pointer active:scale-95">
              <h3 className="text-lg font-bold text-foreground mb-3">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/vegamorada" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition text-sm break-all"
              >
                linkedin.com/in/vegamorada
              </a>
            </div>

            {/* Upwork */}
            <div className="p-6 rounded-lg bg-background border border-border hover:border-primary transition-all cursor-pointer active:scale-95">
              <h3 className="text-lg font-bold text-foreground mb-3">Upwork</h3>
              <a 
                href="https://www.upwork.com/freelancers/~01513b65b8672f7efa" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition text-sm"
              >
                View Profile
              </a>
            </div>

            {/* Quick Connect */}
            <div className="pt-6 border-t border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">Quick Connect</h3>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://linkedin.com/in/vegamorada" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition text-sm font-medium text-center active:scale-95"
                >
                  Message on LinkedIn
                </a>
                <a 
                  href="https://www.upwork.com/freelancers/~01513b65b8672f7efa" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition text-sm font-medium text-center active:scale-95"
                >
                  Hire on Upwork
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition"
                  placeholder="Automation project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition resize-none"
                  placeholder="Tell me about your automation needs and goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition active:scale-95"
              >
                {sending ? 'Sending…' : 'Send Message'}
              </button>

              {errorMessage && <p role="alert" className="p-4 rounded-lg border border-red-400/30 bg-red-400/10 text-red-300 text-sm">{errorMessage}</p>}
              {submitted && (
                <div role="status" className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm animate-fade-in-up">
                  ✓ Thank you for your message! I&apos;ll get back to you within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
