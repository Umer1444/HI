"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Brain,
  Zap,
  Code,
  ImageIcon,
  BarChart3,
  Globe,
  Cpu,
  RefreshCw,
  FileText,
  Layers,
  Microscope,
  Search,
  UserCircle,
  Server,
  ShieldCheck,
  Network,
  Sparkles,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AdvancedCapabilities() {
  const [activeTab, setActiveTab] = useState("agi")

  const capabilities = [
    {
      id: "agi",
      name: "AGI-Like Reasoning",
      icon: <Brain className="h-6 w-6 text-purple-400" />,
      description: "Advanced logical reasoning capabilities approaching artificial general intelligence.",
      features: [
        {
          title: "Neural-Symbolic AI",
          description: "A hybrid approach combining deep learning with symbolic logic for human-like thinking.",
          icon: <Layers className="h-5 w-5 text-purple-400" />,
        },
        {
          title: "Multi-Step Reasoning & Self-Correction",
          description: "AI double-checks its own answers and refines responses through iterative reasoning.",
          icon: <RefreshCw className="h-5 w-5 text-purple-400" />,
        },
        {
          title: "Memory & Long-Term Context",
          description: "The AI remembers previous conversations and learns from user interactions over time.",
          icon: <Brain className="h-5 w-5 text-purple-400" />,
        },
      ],
    },
    {
      id: "multimodal",
      name: "Multi-Modal Capabilities",
      icon: <Layers className="h-6 w-6 text-purple-400" />,
      description: "Seamless processing and generation of multiple content formats.",
      features: [
        {
          title: "Text, Image, Audio, Video Understanding",
          description: "AI processes and generates all content formats seamlessly in a unified system.",
          icon: <Layers className="h-5 w-5 text-purple-400" />,
        },
        {
          title: "AI Vision for Real-World Object Recognition",
          description: "Upload images, videos, or audio for comprehensive analysis and understanding.",
          icon: <ImageIcon className="h-5 w-5 text-purple-400" />,
        },
        {
          title: "Advanced Style Transfer & Image Editing",
          description: "AI can not just generate images, but also modify and enhance them with precision.",
          icon: <ImageIcon className="h-5 w-5 text-purple-400" />,
        },
      ],
    },
    {
      id: "knowledge",
      name: "Real-Time Knowledge",
      icon: <Globe className="h-6 w-6 text-purple-400" />,
      description: "Live access to the latest information and data analysis.",
      features: [
        {
          title: "Web-Connected Research AI",
          description: "AI searches the latest information online in real time for up-to-date responses.",
          icon: <Search className="h-5 w-5 text-purple-400" />,
        },
        {
          title: "Live Data Analysis & Predictive Insights",
          description: "AI predicts trends, analyzes real-time stock markets, and processes social data.",
          icon: <BarChart3 className="h-5 w-5 text-purple-400" />,
        },
        {
          title: "Personalized AI Tutoring",
          description: "Teach any topic using adaptive learning models tailored to individual learning styles.",
          icon: <FileText className="h-5 w-5 text-purple-400" />,
        },
      ],
    },
    {
      id: "code",
      name: "Ultimate AI Developer",
      icon: <Code className="h-6 w-6 text-purple-400" />,
      description: "Advanced code generation, explanation, and optimization capabilities.",
      features: [
        {
          title: "Auto-Code Explanation",
          description: "AI explains code like a human mentor with clear, contextual explanations.",
          icon: <FileText className="h-5 w-5 text-purple-400" />,
        },
        {
          title: "Advanced Bug Fixing & Code Optimization",
          description: "AI not only detects errors but rewrites better, optimized code automatically.",
          icon: <Code className="h-5 w-5 text-purple-400" />,
        },
        {
          title: "AI-Powered Full-Stack Development",
          description: "AI can build entire applications from a single prompt with all necessary components.",
          icon: <Layers className="h-5 w-5 text-purple-400" />,
        },
      ],
    },
    {
      id: "research",
      name: "Scientific Breakthroughs",
      icon: <Microscope className="h-6 w-6 text-purple-400" />,
      description: "Advanced research capabilities for scientific discovery and analysis.",
      features: [
        {
          title: "AI-Generated Research Papers & Reports",
          description: "AI drafts academic papers with real citations and comprehensive literature review.",
          icon: <FileText className="h-5 w-5 text-purple-400" />,
        },
        {
          title: "Predictive AI for Future Trends",
          description: "AI predicts medical advancements, climate changes, and technological trends.",
          icon: <BarChart3 className="h-5 w-5 text-purple-400" />,
        },
        {
          title: "Lab Simulation & Experiment Planning",
          description: "AI simulates scientific experiments before real-world execution to optimize results.",
          icon: <Microscope className="h-5 w-5 text-purple-400" />,
        },
      ],
    },
    {
      id: "personalization",
      name: "Hyper-Personalization",
      icon: <UserCircle className="h-6 w-6 text-purple-400" />,
      description: "Customized AI experiences tailored to individual users.",
      features: [
        {
          title: "Custom AI Personas & Modes",
          description: "Users can choose different AI personalities (Casual, Professional, Funny, etc.).",
          icon: <UserCircle className="h-5 w-5 text-purple-400" />,
        },
        {
          title: "Adaptive Learning AI",
          description: "The AI adapts its knowledge, tone, and problem-solving style to each user.",
          icon: <Brain className="h-5 w-5 text-purple-400" />,
        },
        {
          title: "Multi-Agent AI Collaboration",
          description: "Multiple AI models collaborate in real-time for complex problem solving.",
          icon: <Network className="h-5 w-5 text-purple-400" />,
        },
      ],
    },
  ]

  const infrastructureFeatures = [
    {
      title: "Ultra-Scalability & Performance",
      icon: <Server className="h-6 w-6 text-purple-400" />,
      features: ["Edge AI for Offline Functionality", "Quantum AI Integration", "Hybrid AI Models (Cloud + On-Device)"],
    },
    {
      title: "Privacy & AI Security",
      icon: <ShieldCheck className="h-6 w-6 text-purple-400" />,
      features: ["AI-Powered Cybersecurity", "Encrypted Private AI", "Self-Healing AI"],
    },
    {
      title: "Infinite AI Evolution",
      icon: <RefreshCw className="h-6 w-6 text-purple-400" />,
      features: ["AI That Grows & Learns on Its Own", "Community-Driven AI Learning", "AI Marketplace for Plugins"],
    },
  ]

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Advanced AI Capabilities
          </span>
        </h2>
        <p className="mt-4 text-lg text-gray-300">Next-generation features that make HI AI unstoppable</p>
      </div>

      <Tabs defaultValue="agi" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 bg-black/50 border border-purple-800/30">
          {capabilities.map((capability) => (
            <TabsTrigger
              key={capability.id}
              value={capability.id}
              className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
            >
              <div className="flex items-center gap-2">
                {capability.icon}
                <span className="hidden md:inline">{capability.name}</span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        {capabilities.map((capability) => (
          <TabsContent key={capability.id} value={capability.id} className="mt-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card className="bg-black/50 border-purple-800/30 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {capability.icon}
                    <CardTitle className="text-white text-2xl">{capability.name}</CardTitle>
                    <Badge className="bg-purple-600/50 text-white">Advanced</Badge>
                  </div>
                  <CardDescription className="text-gray-300 text-lg">{capability.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {capability.features.map((feature, index) => (
                      <Card key={index} className="bg-purple-950/20 border border-purple-800/30">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2">
                            {feature.icon}
                            <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-300 text-sm">{feature.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>

      {/* AI Infrastructure Section */}
      <div className="mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              Supercharged AI Infrastructure
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">Cutting-edge technology powering the HI AI platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infrastructureFeatures.map((feature, index) => (
            <Card key={index} className="bg-black/50 border-purple-800/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {feature.icon}
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Infinite AI Evolution Visualization */}
      <div className="mt-24">
        <Card className="bg-black/50 border-purple-800/30 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-purple-400" />
              <CardTitle className="text-white text-2xl">Infinite AI Evolution</CardTitle>
            </div>
            <CardDescription className="text-gray-300 text-lg">
              The HI AI platform continuously evolves and improves over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative py-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900/20 to-purple-600/20 rounded-lg opacity-30"></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white mb-2">Self-Improving AI</h3>
                    <p className="text-gray-300">HI AI continuously learns and improves without manual retraining</p>
                  </div>

                  <div className="flex items-center justify-center w-24 h-24 bg-purple-900/50 rounded-full border-2 border-purple-500">
                    <RefreshCw
                      className="h-12 w-12 text-purple-400 animate-spin"
                      style={{ animationDuration: "10s" }}
                    />
                  </div>

                  <div className="text-center md:text-right">
                    <h3 className="text-xl font-bold text-white mb-2">Community-Driven Growth</h3>
                    <p className="text-gray-300">Users contribute datasets, knowledge, and custom skills</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Continuous Learning",
                      description: "AI models that learn from every interaction and improve over time",
                      icon: <Brain className="h-5 w-5 text-purple-400" />,
                    },
                    {
                      title: "AI Marketplace",
                      description: "Ecosystem of AI plugins and extensions that expand capabilities",
                      icon: <Globe className="h-5 w-5 text-purple-400" />,
                    },
                    {
                      title: "Adaptive Architecture",
                      description: "AI infrastructure that scales and adapts to changing requirements",
                      icon: <Cpu className="h-5 w-5 text-purple-400" />,
                    },
                  ].map((item, index) => (
                    <div key={index} className="bg-purple-950/30 border border-purple-800/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        {item.icon}
                        <h4 className="font-medium text-white">{item.title}</h4>
                      </div>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
