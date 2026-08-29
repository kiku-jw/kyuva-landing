"use client"

import { motion } from "framer-motion"
import { Clock3, Eye, FileUp, Layers, MonitorUp, UserX } from "lucide-react"

export function FeaturesBentoSection() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Built for professionals</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {/* Large Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#22c55e]/10 blur-3xl rounded-full" />
            <div className="relative">
              <div className="w-14 h-14 bg-[#22c55e]/10 rounded-xl flex items-center justify-center mb-6">
                <Layers className="w-7 h-7 text-[#22c55e]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Always on Top</h3>
              <p className="text-[#888] text-lg">
                Floats above Zoom, Teams, Meet, OBS, and every app. Your script is always visible, right where you need
                it.
              </p>
            </div>
          </motion.div>

          {/* Large Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />
            <div className="relative">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">An Honest Capture Boundary</h3>
              <p className="text-[#888] text-lg">
                Kyuva is a normal macOS window and may appear in captures. Check your preview, or share one app window that omits it.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Small Feature Badges */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: Clock3,
              title: "Flexible Pacing",
              description: "Speed, WPM, or target finish time",
            },
            {
              icon: UserX,
              title: "No Account Required",
              description: "Install and start without signing in",
            },
            {
              icon: FileUp,
              title: "Local Scripts",
              description: "Plain-text import and export on your Mac",
            },
            {
              icon: MonitorUp,
              title: "Display Ready",
              description: "Move the overlay or mirror text for a rig",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5"
            >
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-3">
                <feature.icon className="w-5 h-5 text-[#888]" />
              </div>
              <h3 className="text-white font-medium mb-1">{feature.title}</h3>
              <p className="text-[#888] text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
