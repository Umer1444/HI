"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, BookOpen, Microscope, Brain, Database, FileText } from "lucide-react"

export default function ResearchTools() {
  const tools = [
    {
      id: "data-analysis",
      name: "Data Analysis",
      description: "Powerful tools for analyzing and visualizing complex datasets.",
      icon: <BarChart3 className="h-6 w-6 text-purple-400" />,
      features: [
        "Statistical analysis and hypothesis testing",
        "Interactive data visualization",
        "Time series analysis",
        "Anomaly detection",
        "Correlation and regression analysis",
      ],
    },
    {
      id: "literature-review",
      name: "Literature Review",
      description: "AI-powered tools for comprehensive literature review and synthesis.",
      icon: <BookOpen className="h-6 w-6 text-purple-400" />,
      features: [
        "Semantic search across research papers",
        "Automatic summarization of articles",
        "Citation network analysis",
        "Research gap identification",
        "Trend analysis in research fields",
      ],
    },
    {
      id: "experiment-design",
      name: "Experiment Design",
      description: "Tools for designing, running, and analyzing experiments.",
      icon: <Microscope className="h-6 w-6 text-purple-400" />,
      features: [
        "Experimental design optimization",
        "Sample size calculation",
        "A/B testing framework",
        "Multi-variate testing",
        "Causal inference analysis",
      ],
    },
  ]

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Research Tools
          </span>
        </h2>
        <p className="mt-4 text-lg text-gray-300">Advanced tools for data-driven research and analysis</p>
        <div className="mt-4 inline-flex items-center gap-2 bg-purple-900/30 border border-purple-800/30 px-4 py-2 rounded-full">
          <Brain className="h-5 w-5 text-purple-400" />
          <span className="text-sm text-purple-200">Powered by HI-Research AI Model</span>
        </div>
      </div>

      <Tabs defaultValue="data-analysis" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-black/50 border border-purple-800/30">
          {tools.map((tool) => (
            <TabsTrigger
              key={tool.id}
              value={tool.id}
              className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
            >
              <div className="flex items-center gap-2">
                {tool.icon}
                <span className="hidden md:inline">{tool.name}</span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        {tools.map((tool, index) => (
          <TabsContent key={tool.id} value={tool.id} className="mt-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card className="bg-black/50 border-purple-800/30 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {tool.icon}
                    <CardTitle className="text-white text-2xl">{tool.name}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-300 text-lg">{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tool.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="bg-purple-950/30 border border-purple-800/30 rounded-lg p-4"
                      >
                        <p className="text-gray-200">{feature}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-black/50 border border-purple-800/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="h-5 w-5 text-purple-400" />
                      <h3 className="text-lg font-medium text-white">HI-Research Capabilities</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      The HI-Research model powers these tools with specialized capabilities:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-purple-400 mt-1" />
                        <span className="text-gray-300 text-sm">
                          Analyze vast amounts of research papers & extract key insights
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <BarChart3 className="h-4 w-4 text-purple-400 mt-1" />
                        <span className="text-gray-300 text-sm">
                          Process and visualize datasets for better understanding
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Microscope className="h-4 w-4 text-purple-400 mt-1" />
                        <span className="text-gray-300 text-sm">
                          Assist in forming and validating scientific theories
                        </span>
                      </li>
                    </ul>
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
