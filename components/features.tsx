"use client"

import { motion } from "framer-motion"
import { Brain, Lightbulb, Image, Database, Code, Layers } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    name: "Logical Reasoning",
    description: "Advanced reasoning capabilities for complex problem-solving and decision-making tasks.",
    icon: Brain,
  },
  {
    name: "Text-to-Image Generation",
    description: "Create high-quality images from textual descriptions with fine-grained control.",
    icon: Image,
  },
  {
    name: "Research Tools",
    description: "Comprehensive suite of tools for data analysis, literature review, and hypothesis testing.",
    icon: Lightbulb,
  },
  {
    name: "AI-Powered Development",
    description: "Build frontend and backend applications with AI assistance for faster development.",
    icon: Code,
  },
  {
    name: "Multi-Language Support",
    description: "Work with Python, JavaScript, TypeScript, Java, and other popular programming languages.",
    icon: Database,
  },
  {
    name: "HI-4.0 Model Integration",
    description: "Seamlessly integrate with our powerful HI-4.0 model trained on diverse datasets.",
    icon: Layers,
  },
]

export default function Features() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Powerful Features
          </span>
        </h2>
        <p className="mt-4 text-lg text-gray-300">Everything you need to build advanced AI applications</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/50 border-purple-800/30 backdrop-blur-sm h-full">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-purple-400 mb-2" />
                <CardTitle className="text-white">{feature.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
