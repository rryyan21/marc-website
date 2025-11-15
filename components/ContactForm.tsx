'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/90">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#003d73] border border-[#004a8f] focus:outline-none focus:border-umich-maize transition-colors text-white"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/90">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#003d73] border border-[#004a8f] focus:outline-none focus:border-umich-maize transition-colors text-white"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/90">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#003d73] border border-[#004a8f] focus:outline-none focus:border-umich-maize transition-colors resize-none text-white"
        />
      </div>
      <button
        type="submit"
        disabled={submitted}
        className="w-full px-6 py-3 bg-umich-maize text-umich-blue font-medium hover:bg-[#FFD700] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitted ? 'Message Sent!' : 'Send Message'}
      </button>
    </form>
  )
}
