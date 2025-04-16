"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe, Smartphone, Server, Code, Brain, Image, BarChart3 } from "lucide-react"

export default function PlatformSupport() {
  const platforms = [
    {
      id: "web",
      name: "Web",
      description: "Build AI-powered web applications with our comprehensive toolkit.",
      icon: <Globe className="h-6 w-6 text-purple-400" />,
      features: [
        "React and Next.js integration",
        "Vue and Nuxt support",
        "Angular compatibility",
        "WebAssembly optimization",
        "Progressive Web App capabilities",
      ],
      languages: ["JavaScript", "TypeScript", "Python (via WebAssembly)", "Rust (via WebAssembly)"],
      models: [
        { name: "HI-4.0", icon: <Brain className="h-4 w-4" /> },
        { name: "HI-Vision", icon: <Image className="h-4 w-4" /> },
        { name: "HI-Code", icon: <Code className="h-4 w-4" /> },
        { name: "HI-Research", icon: <BarChart3 className="h-4 w-4" /> },
      ],
    },
    {
      id: "mobile",
      name: "Mobile",
      description: "Create intelligent mobile applications for iOS and Android platforms.",
      icon: <Smartphone className="h-6 w-6 text-purple-400" />,
      features: [
        "React Native integration",
        "Flutter compatibility",
        "Native iOS (Swift) support",
        "Native Android (Kotlin) support",
        "Cross-platform capabilities",
      ],
      languages: ["JavaScript", "TypeScript", "Swift", "Kotlin", "Dart"],
      models: [
        { name: "HI-4.0", icon: <Brain className="h-4 w-4" /> },
        { name: "HI-Vision", icon: <Image className="h-4 w-4" /> },
        { name: "HI-Code", icon: <Code className="h-4 w-4" /> },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      description: "Power your backend services with AI capabilities and intelligent processing.",
      icon: <Server className="h-6 w-6 text-purple-400" />,
      features: [
        "Node.js integration",
        "Python frameworks support",
        "Java Spring compatibility",
        ".NET Core integration",
        "GraphQL API generation",
        "RESTful API development",
      ],
      languages: ["JavaScript", "TypeScript", "Python", "Java", "C#", "Go", "Rust"],
      models: [
        { name: "HI-4.0", icon: <Brain className="h-4 w-4" /> },
        { name: "HI-Code", icon: <Code className="h-4 w-4" /> },
        { name: "HI-Research", icon: <BarChart3 className="h-4 w-4" /> },
      ],
    },
  ]

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Platform Support
          </span>
        </h2>
        <p className="mt-4 text-lg text-gray-300">Build AI applications across all platforms</p>
      </div>

      <Tabs defaultValue="web" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-black/50 border border-purple-800/30">
          {platforms.map((platform) => (
            <TabsTrigger
              key={platform.id}
              value={platform.id}
              className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
            >
              <div className="flex items-center gap-2">
                {platform.icon}
                <span>{platform.name}</span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        {platforms.map((platform) => (
          <TabsContent key={platform.id} value={platform.id} className="mt-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card className="bg-black/50 border-purple-800/30 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {platform.icon}
                    <CardTitle className="text-white text-2xl">{platform.name}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-300 text-lg">{platform.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">Features</h3>
                      <ul className="space-y-2">
                        {platform.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Code className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">Supported Languages</h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {platform.languages.map((language, index) => (
                          <span key={index} className="px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full text-sm">
                            {language}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-lg font-medium text-white mb-4">Available Models</h3>
                      <div className="flex flex-wrap gap-2">
                        {platform.models.map((model, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-1 px-3 py-1 bg-black/50 border border-purple-800/30 rounded-full text-sm"
                          >
                            {model.icon}
                            <span className="text-gray-300">{model.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
