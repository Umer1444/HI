"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Brain, Code, Image, Search, Zap, Globe } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative isolate overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-x-0 top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-800 to-purple-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              Holistic Intelligence
            </span>
            <span className="block mt-2">AI Development Platform</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Build, train, and deploy advanced AI models with logical reasoning, text-to-image capabilities, and powerful
            research tools. Seamlessly integrate AI into your applications across all platforms.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">Get Started</Button>
            <Button
              variant="outline"
              className="border-purple-600 text-purple-400 hover:bg-purple-950 px-8 py-6 text-lg"
            >
              View Demo
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Feature icons */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto px-6 pb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {[
          { icon: <Brain className="h-8 w-8" />, label: "Logical Reasoning" },
          { icon: <Image className="h-8 w-8" />, label: "Text-to-Image" },
          { icon: <Search className="h-8 w-8" />, label: "Research Tools" },
          { icon: <Code className="h-8 w-8" />, label: "AI Development" },
          { icon: <Zap className="h-8 w-8" />, label: "HI-4.0 Model" },
          { icon: <Globe className="h-8 w-8" />, label: "Cross-Platform" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-purple-950/30 border border-purple-800/30 backdrop-blur-sm"
          >
            <div className="text-purple-400 mb-2">{item.icon}</div>
            <div className="text-sm text-center font-medium text-gray-200">{item.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
