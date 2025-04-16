"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Brain,
  Zap,
  Code,
  ImageIcon,
  BarChart3,
  CheckCircle,
  Sparkles,
  Cpu,
  Globe,
  Lock,
  RefreshCw,
  Video,
  Music,
  FileText,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"
import { generateText, generateImage, generateCode } from "@/lib/hi-model"
import { Badge } from "@/components/ui/badge"

export default function AIModels() {
  const [activeTab, setActiveTab] = useState("hi-4")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedModel, setSelectedModel] = useState<any>(null)
  const [prompt, setPrompt] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState("")
  const [trainingComplete, setTrainingComplete] = useState(false)
  const [enhancementsEnabled, setEnhancementsEnabled] = useState(false)

  const handleTryModel = (model: any) => {
    setSelectedModel(model)
    setPrompt("")
    setResult("")
    setIsDialogOpen(true)
  }

  const handleRunModel = async () => {
    if (!prompt.trim()) return

    setIsProcessing(true)

    try {
      let response

      switch (selectedModel.id) {
        case "hi-4":
          response = await generateText(prompt)
          setResult(response.text)
          break
        case "hi-vision":
          response = await generateImage({ prompt })
          setResult(`Image generated: ${response.imageUrl}`)
          break
        case "hi-code":
          response = await generateCode({ prompt, language: "javascript" })
          setResult(response.text)
          break
        case "hi-research":
          response = await generateText(`[RESEARCH MODE] ${prompt}`)
          setResult(response.text)
          break
      }
    } catch (error) {
      setResult("Error processing your request. Please try again.")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleTrainModels = () => {
    setIsProcessing(true)

    // Simulate training process
    setTimeout(() => {
      setTrainingComplete(true)
      setIsProcessing(false)
    }, 3000)
  }

  const handleEnableEnhancements = () => {
    setIsProcessing(true)

    // Simulate enhancement process
    setTimeout(() => {
      setEnhancementsEnabled(true)
      setIsProcessing(false)
    }, 3000)
  }

  const models = [
    {
      id: "hi-4",
      name: "HI-4.0",
      description:
        "An ultra-intelligent AI model with advanced logical reasoning, real-world understanding, and flawless decision-making.",
      icon: <Brain className="h-6 w-6 text-purple-400" />,
      features: [
        "Reasoning & Multi-Modal Mastery",
        "Context-Aware Conversations",
        "Continuous Learning",
        "Universal Knowledge Base",
      ],
      specs: {
        parameters: "175 billion",
        training: "Diverse datasets including code, text, and images",
        languages: "Supports 50+ human languages",
        performance: "State-of-the-art on reasoning benchmarks",
      },
      trainingPrompt:
        "An ultra-intelligent AI model with advanced logical reasoning, real-world understanding, and flawless decision-making. Process and analyze text, images, and complex queries. Provide in-depth, meaningful, and adaptive responses. Improve responses based on previous interactions. Access vast amounts of data for real-time, fact-based answers. Must be capable of answering ANY question with deep analysis, factual accuracy, and clear logical steps.",
      enhancedCapabilities: [
        {
          name: "Neural-Symbolic AI",
          description: "Hybrid approach combining deep learning with symbolic logic",
        },
        {
          name: "Multi-Modal Processing",
          description: "Process text, images, audio, and video in a unified system",
        },
        {
          name: "Web-Connected Intelligence",
          description: "Access real-time information from the internet",
        },
      ],
    },
    {
      id: "hi-vision",
      name: "HI-Vision",
      description:
        "A next-gen AI model for high-quality image generation, advanced computer vision, and creative manipulation.",
      icon: <ImageIcon className="h-6 w-6 text-purple-400" />,
      features: [
        "Realistic & Artistic Image Generation",
        "Image Understanding & Analysis",
        "Style Transfer & AI Creativity",
      ],
      specs: {
        parameters: "80 billion",
        training: "Large-scale image and text-image paired datasets",
        resolution: "Up to 1024x1024 generation",
        performance: "Leading scores on image generation metrics",
      },
      trainingPrompt:
        "A next-gen AI model for high-quality image generation, advanced computer vision, and creative manipulation. Convert text prompts into visually stunning images. Interpret, modify, and enhance images with precision. Blend styles, textures, and artistic elements. Must generate highly detailed, customizable images with real-world accuracy and artistic creativity.",
      enhancedCapabilities: [
        {
          name: "Multi-Format Media Processing",
          description: "Process and generate images, video, and 3D content",
        },
        {
          name: "Advanced Style Transfer",
          description: "Sophisticated image editing and style manipulation",
        },
        {
          name: "Real-World Object Recognition",
          description: "Identify and analyze objects in uploaded images",
        },
      ],
    },
    {
      id: "hi-code",
      name: "HI-Code",
      description:
        "An AI-driven coding expert capable of writing, debugging, and optimizing code in multiple languages.",
      icon: <Code className="h-6 w-6 text-purple-400" />,
      features: ["Advanced Code Generation", "Bug Detection & Fixing", "Multi-Language Proficiency"],
      specs: {
        parameters: "40 billion",
        training: "GitHub repositories, documentation, and code forums",
        languages: "Python, JavaScript, TypeScript, Java, C#, Go, Rust",
        performance: "High accuracy on code generation benchmarks",
      },
      trainingPrompt:
        "An AI-driven coding expert capable of writing, debugging, and optimizing code in multiple languages. Write production-ready, efficient, and scalable code. Identify errors and suggest optimal solutions. Fluently handle Python, JavaScript, TypeScript, Java, C#, Go, Rust. Must provide human-level coding suggestions, detect vulnerabilities, and optimize algorithms.",
      enhancedCapabilities: [
        {
          name: "Auto-Code Explanation",
          description: "Detailed explanations of code like a human mentor",
        },
        {
          name: "Full-Stack Development",
          description: "Build entire applications from a single prompt",
        },
        {
          name: "Advanced Optimization",
          description: "Rewrite code for better performance and security",
        },
      ],
    },
    {
      id: "hi-research",
      name: "HI-Research",
      description: "A high-powered AI model specialized in research, data analysis, and scientific discovery.",
      icon: <BarChart3 className="h-6 w-6 text-purple-400" />,
      features: ["Automated Literature Review", "Data Visualization & Analysis", "Hypothesis Testing & Predictions"],
      specs: {
        parameters: "60 billion",
        training: "Scientific papers, research datasets, and academic publications",
        domains: "Medicine, Physics, Chemistry, Biology, Economics",
        performance: "Breakthrough capabilities in data analysis and hypothesis generation",
      },
      trainingPrompt:
        "A high-powered AI model specialized in research, data analysis, and scientific discovery. Analyze vast amounts of research papers & extract key insights. Process and visualize datasets for better understanding. Assist in forming and validating scientific theories. Must be capable of conducting research, analyzing trends, and generating groundbreaking hypotheses.",
      enhancedCapabilities: [
        {
          name: "AI-Generated Research Papers",
          description: "Draft academic papers with real citations",
        },
        {
          name: "Predictive Trend Analysis",
          description: "Forecast scientific and technological developments",
        },
        {
          name: "Lab Simulation",
          description: "Simulate experiments before real-world execution",
        },
      ],
    },
  ]

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            AI Models
          </span>
        </h2>
        <p className="mt-4 text-lg text-gray-300">Powerful models for different use cases</p>

        {!trainingComplete ? (
          <div className="mt-8">
            <Button
              onClick={handleTrainModels}
              disabled={isProcessing}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Training Models...
                </>
              ) : (
                "Train All Models with Supercharged Prompts"
              )}
            </Button>
          </div>
        ) : !enhancementsEnabled ? (
          <div className="mt-8">
            <div className="flex items-center justify-center gap-2 text-green-400 mb-4">
              <CheckCircle className="h-5 w-5" />
              <span>All models successfully trained with supercharged prompts!</span>
            </div>
            <Button
              onClick={handleEnableEnhancements}
              disabled={isProcessing}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enabling Advanced Capabilities...
                </>
              ) : (
                "Enable Core Enhancements & Next-Level Features"
              )}
            </Button>
          </div>
        ) : (
          <div className="mt-8 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-2 text-green-400 mb-2">
              <Sparkles className="h-5 w-5" />
              <span>Advanced capabilities successfully enabled!</span>
            </div>
            <p className="text-gray-300 text-sm max-w-2xl">
              HI AI now features AGI-like reasoning, multi-modal capabilities, and real-time knowledge access
            </p>
          </div>
        )}
      </div>

      <Tabs defaultValue="hi-4" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-black/50 border border-purple-800/30">
          {models.map((model) => (
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

        {models.map((model) => (
          <TabsContent key={model.id} value={model.id} className="mt-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card className="bg-black/50 border-purple-800/30 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {model.icon}
                    <CardTitle className="text-white text-2xl">{model.name}</CardTitle>
                    {trainingComplete && <Badge className="bg-green-600/50 text-white">Trained</Badge>}
                    {enhancementsEnabled && <Badge className="bg-purple-600/50 text-white">Enhanced</Badge>}
                  </div>
                  <CardDescription className="text-gray-300 text-lg">{model.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        {model.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Zap className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {trainingComplete && (
                        <div className="mt-6 p-3 bg-purple-900/20 border border-purple-800/30 rounded-lg">
                          <h4 className="text-sm font-medium text-purple-300 mb-2">Training Prompt</h4>
                          <p className="text-xs text-gray-400">{model.trainingPrompt}</p>
                        </div>
                      )}

                      {enhancementsEnabled && (
                        <div className="mt-6">
                          <h4 className="text-sm font-medium text-purple-300 mb-3">Enhanced Capabilities</h4>
                          <div className="space-y-2">
                            {model.enhancedCapabilities.map((capability, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 p-2 bg-purple-950/30 border border-purple-800/30 rounded-lg"
                              >
                                <Sparkles className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                                <div>
                                  <p className="text-sm font-medium text-white">{capability.name}</p>
                                  <p className="text-xs text-gray-400">{capability.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">Technical Specifications</h3>
                      <div className="space-y-4">
                        {Object.entries(model.specs).map(([key, value]) => (
                          <div key={key} className="flex flex-col">
                            <span className="text-sm text-gray-400 capitalize">{key}</span>
                            <span className="text-gray-300">{value}</span>
                          </div>
                        ))}
                      </div>

                      {enhancementsEnabled && (
                        <div className="mt-6 p-4 bg-black/30 border border-purple-800/30 rounded-lg">
                          <h4 className="text-sm font-medium text-purple-300 mb-3">Advanced Infrastructure</h4>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Cpu className="h-4 w-4 text-purple-400" />
                              <span className="text-sm text-gray-300">Edge AI for Offline Functionality</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Globe className="h-4 w-4 text-purple-400" />
                              <span className="text-sm text-gray-300">Hybrid Cloud + On-Device Processing</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Lock className="h-4 w-4 text-purple-400" />
                              <span className="text-sm text-gray-300">Encrypted Private AI</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <RefreshCw className="h-4 w-4 text-purple-400" />
                              <span className="text-sm text-gray-300">Self-Improving Capabilities</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      className={`${enhancementsEnabled ? "bg-purple-600 hover:bg-purple-700" : trainingComplete ? "bg-green-600 hover:bg-green-700" : "bg-purple-600 hover:bg-purple-700"} text-white`}
                      onClick={() => handleTryModel(model)}
                      disabled={!trainingComplete}
                    >
                      {enhancementsEnabled
                        ? `Try Enhanced ${model.name}`
                        : trainingComplete
                          ? `Try ${model.name}`
                          : "Train Model First"}
                    </Button>
                    <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-950">
                      View Documentation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Cross-Model Integration Section */}
      {trainingComplete && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              Cross-Model Integration & Optimization
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Seamless AI Collaboration",
                description: "HI-4.0, HI-Vision, HI-Code, and HI-Research work together for holistic AI capabilities.",
                icon: <Brain className="h-5 w-5 text-purple-400" />,
              },
              {
                title: "Real-Time Processing",
                description: "Instant responses with minimal latency across all models.",
                icon: <Zap className="h-5 w-5 text-purple-400" />,
              },
              {
                title: "Memory & Learning",
                description: "AI remembers user interactions for more personalized responses.",
                icon: <Brain className="h-5 w-5 text-purple-400" />,
              },
              {
                title: "Privacy & Security",
                description: "Top-tier encryption and user data protection implemented across all models.",
                icon: <CheckCircle className="h-5 w-5 text-purple-400" />,
              },
            ].map((item, index) => (
              <Card key={index} className="bg-black/50 border-purple-800/30 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <CardTitle className="text-white text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Multi-Modal Capabilities Section */}
      {enhancementsEnabled && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              Multi-Modal Capabilities
            </span>
          </h2>

          <Card className="bg-black/50 border-purple-800/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Text Processing", icon: <FileText className="h-8 w-8 text-purple-400" /> },
                  { name: "Image Generation", icon: <ImageIcon className="h-8 w-8 text-purple-400" /> },
                  { name: "Audio Analysis", icon: <Music className="h-8 w-8 text-purple-400" /> },
                  { name: "Video Understanding", icon: <Video className="h-8 w-8 text-purple-400" /> },
                ].map((mode, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-6 bg-purple-950/30 border border-purple-800/30 rounded-lg text-center"
                  >
                    {mode.icon}
                    <h3 className="mt-3 font-medium text-white">{mode.name}</h3>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-black/30 border border-purple-800/30 rounded-lg">
                <h3 className="text-lg font-medium text-white mb-3">Unified Multi-Modal Processing</h3>
                <p className="text-gray-300">
                  HI AI processes and generates content across multiple formats seamlessly. Upload images for analysis,
                  convert text to images, transcribe audio, and understand video content - all within a single unified
                  system.
                </p>
                <div className="mt-4 flex justify-center">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">Try Multi-Modal Features</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Prompt Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-black/90 border-purple-800/30 text-white">
          <DialogHeader>
            <DialogTitle className="text-white">Try {selectedModel?.name}</DialogTitle>
            <DialogDescription className="text-gray-300">
              Enter your prompt and the AI will process it using the {enhancementsEnabled ? "enhanced" : "trained"}{" "}
              model.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <Textarea
              placeholder="Enter your prompt here..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="bg-black/50 border-purple-800/30 text-white min-h-[100px]"
            />

            {result && (
              <div className="bg-purple-950/20 border border-purple-800/30 rounded-md p-4 max-h-[300px] overflow-y-auto">
                <pre className="whitespace-pre-wrap text-gray-200 text-sm">{result}</pre>
              </div>
            )}
          </div>

          <DialogFooter>
            <Button
              onClick={handleRunModel}
              disabled={isProcessing || !prompt.trim()}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Run Model"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}
