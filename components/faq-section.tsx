"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What is Kyuva and who is it for?",
      answer:
        "Kyuva is a compact Mac teleprompter for people who speak from a script during video calls, recordings, lessons, presentations, product demos, or prepared talks.",
    },
    {
      question: "Is Kyuva free?",
      answer:
        "Yes. Kyuva 1.0 is a free Mac App Store download in all 27 European Union storefronts. It has no purchase, subscription, advertising, or account.",
    },
    {
      question: "Does Kyuva upload my scripts?",
      answer:
        "No. Scripts and settings stay in Kyuva’s local Mac app container. The app has no analytics, tracking, account, or required cloud service.",
    },
    {
      question: "Is Kyuva hidden from screen sharing or recordings?",
      answer:
        "No guarantee is made. The teleprompter is a normal macOS window and may appear in a screen share or recording. Check the preview first, or share a single app window that does not include Kyuva.",
    },
    {
      question: "How can I control the scrolling pace?",
      answer:
        "Choose a fixed speed, words per minute, or a target finish time. You can pause, reset, adjust the pace, or jump to a line from the overlay and with global keyboard shortcuts.",
    },
    {
      question: "Does the current Mac App Store version follow my voice?",
      answer:
        "Not yet. The public Mac App Store 1.0 release uses timed pacing. An optional on-device Voice Follow mode is being tested in development for a future reviewed update.",
    },
    {
      question: "Are iPhone and Apple Watch versions available?",
      answer:
        "Not in the App Store yet. The iPhone prompt and paired Apple Watch remote are in development and will only be released after physical-device testing and App Review.",
    },
    {
      question: "What Macs are supported?",
      answer:
        "Kyuva requires macOS 13 or later and supports both Apple silicon and Intel Macs.",
    },
  ]

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">FAQ</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-6 data-[state=open]:bg-white/[0.07]"
              >
                <AccordionTrigger className="text-left text-white hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#888] pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
