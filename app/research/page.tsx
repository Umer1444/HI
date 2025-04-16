import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, BarChart3, BookOpen, Microscope, ArrowRight } from "lucide-react"

export default function ResearchPage() {
  const researchTools = [
    {
      id: "data-analysis",
      name: "Data Analysis",
      description: "Powerful tools for analyzing and visualizing complex datasets.",
      icon: <BarChart3 className="h-8 w-8 text-purple-400" />,
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
      icon: <BookOpen className="h-8 w-8 text-purple-400" />,
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
      icon: <Microscope className="h-8 w-8 text-purple-400" />,
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
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              Research Tools
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Advanced tools for data-driven research, analysis, and discovery. Leverage AI to accelerate your research
            workflow and gain deeper insights.
          </p>
        </div>

        <Tabs defaultValue="data-analysis" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-black/50 border border-purple-800/30">
            {researchTools.map((tool) => (
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

          {researchTools.map((tool) => (
            <TabsContent key={tool.id} value={tool.id} className="mt-6">
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
                      <div key={idx} className="bg-purple-950/30 border border-purple-800/30 rounded-lg p-4">
                        <p className="text-gray-200">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full mt-8 bg-purple-600 hover:bg-purple-700 text-white">
                    <span>Try {tool.name}</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-black/50 border-purple-800/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Research Case Studies</CardTitle>
              <CardDescription className="text-gray-300">See how researchers are using our platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  "Genomic Data Analysis in Cancer Research",
                  "Climate Change Prediction Models",
                  "Natural Language Processing for Medical Literature",
                  "Social Network Analysis in Behavioral Studies",
                ].map((study, index) => (
                  <div key={index} className="p-4 bg-purple-950/30 border border-purple-800/30 rounded-lg">
                    <p className="text-white font-medium">{study}</p>
                    <Button variant="link" className="text-purple-400 p-0 h-auto mt-1">
                      <span>Read case study</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-purple-800/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Research Resources</CardTitle>
              <CardDescription className="text-gray-300">Documentation, tutorials, and guides</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Getting Started with Data Analysis",
                    icon: <BarChart3 className="h-5 w-5 text-purple-400" />,
                  },
                  { title: "Literature Review Best Practices", icon: <BookOpen className="h-5 w-5 text-purple-400" /> },
                  { title: "Experimental Design Guide", icon: <Microscope className="h-5 w-5 text-purple-400" /> },
                  { title: "API Documentation", icon: <FileText className="h-5 w-5 text-purple-400" /> },
                ].map((resource, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-purple-950/30 border border-purple-800/30 rounded-lg"
                  >
                    {resource.icon}
                    <div>
                      <p className="text-white font-medium">{resource.title}</p>
                      <Button variant="link" className="text-purple-400 p-0 h-auto mt-1">
                        <span>View resource</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
