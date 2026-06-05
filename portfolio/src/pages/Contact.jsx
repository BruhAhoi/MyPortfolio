import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import { personal } from '../data/personal'

const initialForm = { name: '', email: '', subject: '', message: '' }
const initialErrors = { name: '', email: '', subject: '', message: '' }

function validate(form) {
  const errors = { ...initialErrors }
  if (!form.name.trim()) errors.name = 'Vui lòng nhập họ và tên.'
  if (!form.email.trim()) {
    errors.email = 'Vui lòng nhập email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Email không đúng định dạng.'
  }
  if (!form.subject.trim()) errors.subject = 'Vui lòng nhập tiêu đề.'
  if (!form.message.trim()) {
    errors.message = 'Vui lòng nhập nội dung.'
  } else if (form.message.trim().length < 20) {
    errors.message = 'Nội dung tối thiểu 20 ký tự.'
  }
  return errors
}

const contacts = [
  { label: 'Email', value: personal.email, href: `mailto:${personal.email}`, icon: '✉' },
  { label: 'Điện thoại', value: personal.phone, href: `tel:${personal.phone}`, icon: '☎' },
  { label: 'GitHub', value: 'github.com/BruhAhoi', href: personal.github, icon: '⌥' },
]

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(initialErrors)
  const [status, setStatus] = useState('idle') // idle | loading | success

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate(form)
    const hasErrors = Object.values(newErrors).some(Boolean)
    if (hasErrors) {
      setErrors(newErrors)
      return
    }
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      setForm(initialForm)
      setErrors(initialErrors)
    }, 1500)
  }

  return (
    <PageTransition variant="fadeScale">
      <main className="min-h-screen pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <p className="text-xs font-mono text-accent uppercase tracking-widest mb-2">Connect</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Liên <span className="text-gradient">Hệ</span>
            </h1>
            <p className="text-muted text-sm max-w-md">
              Có cơ hội thú vị? Hãy nhắn cho tôi — tôi luôn sẵn sàng lắng nghe.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact info */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 flex flex-col gap-4"
              aria-label="Thông tin liên hệ"
            >
              {contacts.map(({ label, value, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-4 bg-surface border border-border rounded-xl flex items-center gap-4 hover:border-accent/40 transition-colors group"
                >
                  <span className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-sm shrink-0 group-hover:bg-accent/20 transition-colors">
                    {icon}
                  </span>
                  <div>
                    <p className="text-xs text-muted">{label}</p>
                    <p className="text-sm text-text font-medium break-all">{value}</p>
                  </div>
                </a>
              ))}
            </motion.aside>

            {/* Form */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="md:col-span-3"
              aria-labelledby="contact-form-heading"
            >
              <h2 id="contact-form-heading" className="sr-only">Form liên hệ</h2>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 bg-green-500/10 border border-green-500/30 rounded-2xl text-center"
                    role="alert"
                    aria-live="polite"
                  >
                    <div className="text-4xl mb-3">✓</div>
                    <h3 className="font-display font-bold text-lg text-green-400 mb-2">Gửi thành công!</h3>
                    <p className="text-sm text-muted">Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể.</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-4 px-4 py-2 text-sm border border-border rounded-lg text-muted hover:text-text transition-colors"
                    >
                      Gửi tin nhắn khác
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    noValidate
                    className="bg-surface border border-border rounded-2xl p-6 flex flex-col gap-5"
                  >
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-text mb-1.5">
                        Họ và tên <span className="text-accent" aria-hidden>*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'error-name' : undefined}
                        placeholder="Nguyễn Văn A"
                        className={`w-full px-4 py-2.5 bg-bg border rounded-xl text-sm text-text placeholder:text-muted focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-border focus:border-accent/60'
                        }`}
                      />
                      {errors.name && (
                        <p id="error-name" className="mt-1.5 text-xs text-red-400" role="alert">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-text mb-1.5">
                        Email <span className="text-accent" aria-hidden>*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'error-email' : undefined}
                        placeholder="example@email.com"
                        className={`w-full px-4 py-2.5 bg-bg border rounded-xl text-sm text-text placeholder:text-muted focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-border focus:border-accent/60'
                        }`}
                      />
                      {errors.email && (
                        <p id="error-email" className="mt-1.5 text-xs text-red-400" role="alert">{errors.email}</p>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="contact-subject" className="block text-sm font-medium text-text mb-1.5">
                        Tiêu đề <span className="text-accent" aria-hidden>*</span>
                      </label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? 'error-subject' : undefined}
                        placeholder="Cơ hội thực tập Frontend"
                        className={`w-full px-4 py-2.5 bg-bg border rounded-xl text-sm text-text placeholder:text-muted focus:outline-none transition-colors ${
                          errors.subject ? 'border-red-500/50 focus:border-red-500' : 'border-border focus:border-accent/60'
                        }`}
                      />
                      {errors.subject && (
                        <p id="error-subject" className="mt-1.5 text-xs text-red-400" role="alert">{errors.subject}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-text mb-1.5">
                        Nội dung <span className="text-accent" aria-hidden>*</span>
                        <span className="text-xs text-muted font-normal ml-2">(tối thiểu 20 ký tự)</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'error-message' : 'message-hint'}
                        placeholder="Xin chào, tôi muốn..."
                        className={`w-full px-4 py-2.5 bg-bg border rounded-xl text-sm text-text placeholder:text-muted focus:outline-none transition-colors resize-none ${
                          errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-border focus:border-accent/60'
                        }`}
                      />
                      <p id="message-hint" className="mt-1 text-xs text-muted text-right">
                        {form.message.length} ký tự
                      </p>
                      {errors.message && (
                        <p id="error-message" className="mt-0.5 text-xs text-red-400" role="alert">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-3 bg-accent hover:bg-accent-light text-white font-medium rounded-xl transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Đang gửi...
                        </>
                      ) : (
                        'Gửi Tin Nhắn →'
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.section>
          </div>
        </div>
      </main>
    </PageTransition>
  )
}
