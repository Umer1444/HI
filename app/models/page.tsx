import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Image, Code, Zap, BarChart3, ArrowRight } from "lucide-react"

export default function ModelsPage() {
  const models = [
    {
      id: "hi-4",
      name: "HI-4.0",
      description: "Our flagship model with advanced reasoning capabilities and multi-modal understanding.",
      icon: <Brain className="h-8 w-8 text-purple-400" />,
      features: ["Advanced logical reasoning", "Multi-modal understanding", "Context-aware responses"],
      tags: ["General Purpose", "Reasoning", "Multi-modal"],
      languages: ["Python", "JavaScript", "TypeScript", "Java", "C#"],
    },
    {
      id: "hi-vision",
      name: "HI-Vision",
      description: "Specialized model for image generation, understanding, and manipulation tasks.",
      icon: <Image className="h-8 w-8 text-purple-400" />,
      features: ["High-quality image generation", "Image understanding and analysis", "Style transfer capabilities"],
      tags: ["Image Generation", "Computer Vision", "Style Transfer"],
      languages: ["Python", "JavaScript"],
    },
    {
      id: "hi-code",
      name: "HI-Code",
      description: "Code-specialized model for software development assistance and code generation.",
      icon: <Code className="h-8 w-8 text-purple-400" />,
      features: ["Multi-language code generation", "Code completion and refactoring", "Bug detection and fixing"],
      tags: ["Code Generation", "Development", "Debugging"],
      languages: ["Python", "JavaScript", "TypeScript", "Java", "C#", "Go", "Rust"],
    },
    {
      id: "hi-research",
      name: "HI-Research",
      description: "Specialized model for scientific research, data analysis, and hypothesis generation.",
      icon: <BarChart3 className="h-8 w-8 text-purple-400" />,
      features: [
        "Data analysis and visualization",
        "Literature review automation",
        "Hypothesis generation and testing",
      ],
      tags: ["Research", "Data Analysis", "Scientific"],
      languages: ["Python", "R", "Julia"],
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              AI Models
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our suite of powerful AI models designed for different use cases and applications. Each model is
            optimized for specific tasks and can be integrated into your applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {models.map((model) => (
            <Card key={model.id} className="bg-black/50 border-purple-800/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {model.icon}
                  <CardTitle className="text-white text-2xl">{model.name}</CardTitle>
                </div>
                <CardDescription className="text-gray-300">{model.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-2">Key Features</h3>
                    <ul className="space-y-1">
                      {model.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Zap className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-2">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {model.tags.map((tag) => (
                        <Badge key={tag} className="bg-purple-900/50 text-purple-200 hover:bg-purple-800/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-2">Supported Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {model.languages.map((language) => (
                        <span key={language} className="text-xs text-gray-300 bg-purple-950/30 px-2 py-1 rounded">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-4">
                    <span>Explore {model.name}</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
