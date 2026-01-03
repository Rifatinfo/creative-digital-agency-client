"use client";
import  { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Copy,
  Check,
  Mail,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  ArrowUpRight,
  MapPin,
  Clock,
} from 'lucide-react'
// Animation variants
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}
const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 50,
      damping: 20,
    },
  },
}
export function ContactPage() {
  const [copied, setCopied] = useState(false)
  const [time, setTime] = useState('')
  // Update time for "San Francisco" (PST) - Modern tech hub default
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }
      setTime(now.toLocaleTimeString('en-US', options))
    }
    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@studio-verb.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="bg-gray-50 text-gray-900 font-sans selection:bg-indigo-100 selection:text-[#c73450]">
      
      <motion.main
        className="max-w-7xl mx-auto  py-20 md:py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-6"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#c73450]  text-white border border-green-200">
              <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse"></span>
              Available for new projects
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6"
          >
            Let&rsquo;s start a conversation.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-500 leading-relaxed"
          >
            Interested in working together? We should queue up a time to chat.
            I&rsquo;ll buy the coffee.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Primary Email Card - Spans 2 cols */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 relative group"
          >
            <button
              onClick={handleCopyEmail}
              className="w-full h-full bg-white rounded-2xl p-8 text-left border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between min-h-[240px]"
            >
              <div className="flex justify-between items-start w-full">
                <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-sm font-medium text-gray-400 flex items-center gap-2">
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.span
                        key="copied"
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: -10,
                        }}
                        className="text-green-600 flex items-center gap-1"
                      >
                        <Check className="w-4 h-4" /> Copied
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        className="group-hover:text-indigo-600 transition-colors"
                      >
                        Click to copy
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">
                  Email me directly
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                  hello@studio-verb.com
                </h3>
              </div>
            </button>
          </motion.div>

          {/* Location / Time Card */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="h-full bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between min-h-[240px]">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-gray-50 rounded-xl text-gray-600">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-gray-500 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{time} PST</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  San Francisco, CA
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          {[
            {
              name: 'Twitter',
              icon: Twitter,
              handle: '@verb_design',
              url: '#',
              color: 'hover:text-blue-400',
              bg: 'group-hover:bg-blue-50',
            },
            {
              name: 'Instagram',
              icon: Instagram,
              handle: '@studio.verb',
              url: '#',
              color: 'hover:text-pink-500',
              bg: 'group-hover:bg-pink-50',
            },
            {
              name: 'LinkedIn',
              icon: Linkedin,
              handle: 'Studio Verb',
              url: '#',
              color: 'hover:text-blue-700',
              bg: 'group-hover:bg-blue-50',
            },
          ].map((social) => (
            <motion.div
              key={social.name}
              variants={itemVariants}
              className="md:col-span-1"
            >
              <a
                href={social.url}
                className="group h-full bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 flex flex-col justify-between min-h-[180px]"
              >
                <div className="flex justify-between items-start">
                  <div
                    className={`p-3 bg-gray-50 rounded-xl text-gray-600 transition-colors duration-300 ${social.color} ${social.bg}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-gray-600 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Follow on</p>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {social.name}
                  </h3>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.footer
          variants={itemVariants}
          className="mt-20 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
        >
          <p>© 2024 Studio Verb. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.footer>
      </motion.main>
    </div>
  )
}
