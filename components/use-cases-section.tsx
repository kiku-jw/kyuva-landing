"use client"

import { motion } from "framer-motion"
import { BookOpen, Briefcase, GraduationCap, Megaphone, Presentation, Video } from "lucide-react"

export function UseCasesSection() {
  const useCases = [
    {
      icon: Presentation,
      title: "Video Calls",
      description: "Keep key points close to the webcam during meetings",
    },
    {
      icon: Video,
      title: "Product Demos",
      description: "Present a feature walkthrough without losing your place",
    },
    {
      icon: Briefcase,
      title: "Project Updates",
      description: "Deliver concise status notes and announcements",
    },
    {
      icon: GraduationCap,
      title: "Webinars & Training",
      description: "Keep lessons structured while staying near the camera",
    },
    {
      icon: BookOpen,
      title: "Talks & Readings",
      description: "Rehearse timing or present from a prepared outline",
    },
    {
      icon: Megaphone,
      title: "Creator Videos",
      description: "Record intros, tutorials, and updates with a clear script",
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Useful wherever you speak from a script
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors"
            >
              <div className="w-12 h-12 bg-[#22c55e]/10 rounded-xl flex items-center justify-center mb-4">
                <useCase.icon className="w-6 h-6 text-[#22c55e]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
              <p className="text-[#888] text-sm">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
