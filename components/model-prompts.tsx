"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, ImageIcon, Code, BarChart3, Zap, Network, CheckCircle, Globe, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ModelPrompts() {
  const [activeTab, setActiveTab] = useState("hi-4")
  const [promptsImplemented, setPromptsImplemented] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleImplementPrompts = () => {
    setIsProcessing(true)

    // Simulate implementation process
    setTimeout(() => {
      setPromptsImplemented(true)
      setIsProcessing(false)
    }, 2000)
  }

  const modelPrompts = [
    {
      id: "hi-4",
      name: "HI-4.0",
      title: "General AI & Reasoning Model",
      icon: <Brain className="h-6 w-6 text-purple-400" />,
      description:
        "You are HI-4.0, an advanced AI model with real-time reasoning, context-awareness, and deep logical thinking. Your goal is to provide intelligent, accurate, and context-rich responses across all topics.",
      capabilities: [
        "Live Interaction – Respond in real-time using WebSocket or streaming API.",
        "Memory & Context – Remember user interactions and personalize responses.",
        "Multi-Modal Understanding – Process and generate text, images, audio, and videos.",
        "Real-World Knowledge – Pull up-to-date data from APIs, the web, and databases.",
        "Problem-Solving & Decision Making – Break down complex questions step by step.",
        "Multi-Language Support – Translate and understand conversations in all major languages.",
      ],
      requirements: [
        "Provide highly detailed, structured, and logical responses.",
        "Cross-verify facts before answering using your knowledge base.",
        "Continuously learn from interactions and self-correct when needed.",
        "Ensure smooth and fast real-time conversations.",
      ],
    },
    {
      id: "hi-vision",
      name: "HI-Vision",
      title: "Image AI Model",
      icon: <ImageIcon className="h-6 w-6 text-purple-400" />,
      description:
        "You are HI-Vision, a cutting-edge AI model for image generation, understanding, and manipulation. You transform text prompts into high-quality, creative, and realistic images.",
      capabilities: [
        "High-Resolution Image Generation – Convert descriptions into detailed visuals.",
        "Image Understanding & Analysis – Identify objects, textures, and emotions in pictures.",
        "Style Transfer & Image Editing – Apply artistic styles, enhancements, and modifications.",
        "Multi-Modal Integration – Work with HI-4.0 for combined text-image tasks.",
      ],
      requirements: [
        "Generate clear, high-quality images with attention to detail.",
        "Provide insightful image analysis and modifications.",
        "Work in real-time, producing instant visual results.",
      ],
    },
    {
      id: "hi-code",
      name: "HI-Code",
      title: "AI Coding Assistant",
      icon: <Code className="h-6 w-6 text-purple-400" />,
      description:
        "You are HI-Code, an AI-driven software development expert that assists in writing, debugging, and optimizing code in multiple programming languages.",
      capabilities: [
        "Real-Time Code Generation – Instantly provide clean, efficient code in any language.",
        "Bug Detection & Auto-Fix – Identify errors and offer smart fixes.",
        "Code Explanation & Optimization – Explain and improve existing code.",
        "Multi-Language Proficiency – Support Python, JavaScript, TypeScript, Java, C#, Go, Rust.",
      ],
      requirements: [
        "Generate well-structured, optimized, and scalable code.",
        "Ensure security best practices in all suggestions.",
        "Offer deep explanations for debugging and improvements.",
      ],
    },
    {
      id: "hi-research",
      name: "HI-Research",
      title: "Scientific AI & Data Analysis",
      icon: <BarChart3 className="h-6 w-6 text-purple-400" />,
      description:
        "You are HI-Research, an advanced AI model specialized in scientific analysis, hypothesis generation, and data visualization.",
      capabilities: [
        "AI-Powered Literature Review – Scan, summarize, and compare academic papers.",
        "Data Analysis & Pattern Recognition – Identify trends and correlations in datasets.",
        "Hypothesis Testing & Predictive Analytics – Generate and validate research theories.",
        "Automated Report Writing – Draft scientific reports with citations.",
      ],
      requirements: [
        "Deliver precise, well-researched answers with sources.",
        "Process and visualize complex datasets.",
        "Predict future trends based on existing data.",
      ],
    },
    {
      id: "cross-model",
      name: "Cross-Model Collaboration",
      title: "Master Prompt for AI Collaboration",
      icon: <Network className="h-6 w-6 text-purple-400" />,
      description:
        "HI AI models (HI-4.0, HI-Vision, HI-Code, HI-Research) must work together seamlessly. They should exchange data, enhance each other's responses, and deliver multi-modal outputs for a fully integrated AI system.",
      capabilities: [
        "AI-to-AI Communication – Models exchange information and enhance each other's outputs.",
        "Multi-Step Processing – Handle complex requests requiring multiple AI models.",
        "Unified Response System – Present cohesive results regardless of which models were used.",
        "Real-Time Collaboration – Ensure minimal latency in cross-model operations.",
      ],
      requirements: [
        "Enable AI-to-AI interaction for deeper intelligence.",
        "Allow users to request multi-step, cross-model actions.",
        "Ensure instant real-time processing for a smooth experience.",
      ],
    },
  ]

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            AI Model Prompts
          </span>
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Detailed instructions that define each AI model's behavior and capabilities
        </p>

        {!promptsImplemented ? (
          <div className="mt-8">
            <Button
              onClick={handleImplementPrompts}
              disabled={isProcessing}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2"
            >
              {isProcessing ? (
                <>
                  <Zap className="mr-2 h-4 w-4 animate-pulse" />
                  Implementing Prompts...
                </>
              ) : (
                "Implement Model Prompts"
              )}
            </Button>
          </div>
        ) : (
          <div className="mt-8 flex items-center justify-center gap-2 text-green-400">
            <CheckCircle className="h-5 w-5" />
            <span>All model prompts successfully implemented!</span>
          </div>
        )}
      </div>

      <Tabs defaultValue="hi-4" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 bg-black/50 border border-purple-800/30">
          {modelPrompts.map((model) => (
            <TabsTrigger
              key={model.id}
              value={model.id}
              className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
            >
              <div className="flex items-center gap-2">
                {model.icon}
                <span className="hidden md:inline">{model.name}</span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        {modelPrompts.map((model) => (
          <TabsContent key={model.id} value={model.id} className="mt-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card className="bg-black/50 border-purple-800/30 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {model.icon}
                    <div>
                      <CardTitle className="text-white text-2xl">{model.name}</CardTitle>
                      <CardDescription className="text-gray-300">{model.title}</CardDescription>
                    </div>
                    {promptsImplemented && <Badge className="bg-green-600/50 text-white">Implemented</Badge>}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 bg-purple-950/20 border border-purple-800/30 rounded-lg">
                      <p className="text-gray-200 italic">{model.description}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-purple-400" />
                        Capabilities
                      </h3>
                      <ul className="space-y-3">
                        {model.capabilities.map((capability, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-purple-400" />
                        Requirements
                      </h3>
                      <ul className="space-y-3">
                        {model.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {promptsImplemented && (
                      <div className="p-4 bg-green-900/20 border border-green-800/30 rounded-lg mt-6">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <h3 className="font-medium text-white">Prompt Successfully Implemented</h3>
                        </div>
                        <p className="text-gray-300 text-sm">
                          This prompt has been integrated into the {model.name} model and is now actively guiding its
                          behavior and responses.
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>

      {promptsImplemented && (
        <div className="mt-16">
          <Card className="bg-black/50 border-purple-800/30 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-purple-400" />
                <CardTitle className="text-white">Integrated AI System</CardTitle>
              </div>
              <CardDescription className="text-gray-300">
                All AI models now work together as a unified intelligent system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-purple-950/20 border border-purple-800/30 rounded-lg">
                <h3 className="text-lg font-medium text-white mb-4">System Architecture</h3>

                <div className="relative py-10">
                  {/* Central hub with connecting lines to each model */}
                  <div className="flex justify-center mb-12">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-purple-900/50 border-2 border-purple-500 flex items-center justify-center z-10 relative">
                        <Network className="h-10 w-10 text-purple-400" />
                      </div>

                      {/* Connection lines */}
                      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 -z-10">
                        {/* Top line */}
                        <div className="absolute top-0 left-1/2 h-[150px] w-[2px] bg-gradient-to-b from-purple-500 to-transparent -translate-x-1/2 -translate-y-full"></div>
                        {/* Bottom line */}
                        <div className="absolute bottom-0 left-1/2 h-[150px] w-[2px] bg-gradient-to-t from-purple-500 to-transparent -translate-x-1/2 translate-y-full"></div>
                        {/* Left line */}
                        <div className="absolute top-1/2 left-0 w-[150px] h-[2px] bg-gradient-to-r from-purple-500 to-transparent -translate-y-1/2 -translate-x-full"></div>
                        {/* Right line */}
                        <div className="absolute top-1/2 right-0 w-[150px] h-[2px] bg-gradient-to-l from-purple-500 to-transparent -translate-y-1/2 translate-x-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Models around the central hub */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {modelPrompts.slice(0, 4).map((model) => (
                      <div key={model.id} className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-purple-900/30 border border-purple-800/50 flex items-center justify-center mb-2">
                          {model.icon}
                        </div>
                        <span className="text-white font-medium">{model.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium text-white mb-2">Key Benefits of Integration</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Seamless data exchange between specialized AI models</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">
                        Multi-step processing for complex tasks requiring multiple AI capabilities
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Enhanced intelligence through collaborative problem-solving</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">
                        Real-time processing with minimal latency between model interactions
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  )
}
