"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Brain,
  ImageIcon,
  Code,
  BarChart3,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  FileText,
  Video,
  Music,
  Upload,
  Globe,
  Sparkles,
  RefreshCw,
  Layers,
} from "lucide-react"
import { generateText, generateImage, generateCode } from "../../lib/hi-model"
import { Badge } from "@/components/ui/badge"

// Add Groq API key
const GROQ_API_KEY = "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";

export default function Dashboard() {
  // Chat state
  const [chatPrompt, setChatPrompt] = useState("")
  const [chatLoading, setChatLoading] = useState(false)
  const [chatResult, setChatResult] = useState("")
  const [chatHistory, setChatHistory] = useState<{ role: "user" | "assistant"; content: string }[]>([])
  const [chatMode, setChatMode] = useState("standard")

  // Image generation state
  const [imagePrompt, setImagePrompt] = useState("")
  const [imageStyle, setImageStyle] = useState("realistic")
  const [imageSize, setImageSize] = useState("512x512")
  const [imageLoading, setImageLoading] = useState(false)
  const [generatedImage, setGeneratedImage] = useState("")

  // Code generation state
  const [codePrompt, setCodePrompt] = useState("")
  const [codeLanguage, setCodeLanguage] = useState("python")
  const [codeLoading, setCodeLoading] = useState(false)
  const [generatedCode, setGeneratedCode] = useState("")

  // Research state
  const [researchPrompt, setResearchPrompt] = useState("")
  const [researchType, setResearchType] = useState("literature")
  const [researchLoading, setResearchLoading] = useState(false)
  const [researchResult, setResearchResult] = useState("")

  // Multi-modal state
  const [multiModalTab, setMultiModalTab] = useState("text")
  const [multiModalPrompt, setMultiModalPrompt] = useState("")
  const [multiModalLoading, setMultiModalLoading] = useState(false)
  const [multiModalResult, setMultiModalResult] = useState("")

  // Status message
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; message: string } | null>(null)

  // Enhanced capabilities state
  const [enhancedCapabilities, setEnhancedCapabilities] = useState(false)

  // Groq API state
  const [groqApiKey, setGroqApiKey] = useState("");
  const [groqPrompt, setGroqPrompt] = useState("");
  const [groqLoading, setGroqLoading] = useState(false);
  const [groqResponse, setGroqResponse] = useState("");
  const [groqError, setGroqError] = useState("");

  const [groqResult, setGroqResult] = useState("");

  // Clear handlers
  const handleClearChat = () => {
    setChatHistory([]);
    setChatResult("");
    setChatPrompt("");
  };
  const handleClearImage = () => {
    setImagePrompt("");
    setGeneratedImage("");
  };
  const handleClearCode = () => {
    setCodePrompt("");
    setGeneratedCode("");
  };
  const handleClearResearch = () => {
    setResearchPrompt("");
    setResearchResult("");
  };

  // Handle chat submission
  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!chatPrompt.trim()) return

    setChatLoading(true)
    setChatHistory((prev) => [...prev, { role: "user", content: chatPrompt }])

    try {
      let responseText = "";
      if (chatMode === "standard") { // HI-4.0 selected
        // Use Groq API
        const res = await fetch("/api/groq-chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            apiKey: "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",
            prompt: chatPrompt,
          }),
        });
        const data = await res.json();
        responseText = data.response || data.error || "No response";
      } else {
        // ...existing code for other modes...
        const response = await generateText(chatPrompt)
        responseText = response.text
      }
      setChatResult(responseText)
      setChatHistory((prev) => [...prev, { role: "assistant", content: responseText }])
      setStatusMessage({ type: "success", message: `Response generated` })
    } catch (error) {
      setStatusMessage({ type: "error", message: "Failed to generate response" })
    } finally {
      setChatLoading(false)
      setChatPrompt("")
    }
  }

  // Handle image generation
  const handleImageGeneration = async () => {
    if (!imagePrompt.trim()) return
    setImageLoading(true)
    setGeneratedImage("")
    try {
      // Use Groq API for HI-Vision
      const res = await fetch("/api/groq-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiKey: "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",
          prompt: imagePrompt,
        }),
      });
      const data = await res.json();
      setGeneratedImage(data.response || data.error || "No response");
      setStatusMessage({ type: "success", message: `Image generated` });
    } catch (error) {
      setStatusMessage({ type: "error", message: "Failed to generate image" });
    } finally {
      setImageLoading(false);
    }
  }

  // Handle code generation
  const handleCodeGeneration = async () => {
    if (!codePrompt.trim()) return
    setCodeLoading(true)
    setGeneratedCode("")
    try {
      // Use Groq API for HI-Code
      const res = await fetch("/api/groq-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiKey: "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",
          prompt: codePrompt,
        }),
      });
      const data = await res.json();
      setGeneratedCode(data.response || data.error || "No response");
      setStatusMessage({ type: "success", message: `Code generated` });
    } catch (error) {
      setStatusMessage({ type: "error", message: "Failed to generate code" });
    } finally {
      setCodeLoading(false);
    }
  }

  // Handle research generation
  const handleResearchGeneration = async () => {
    if (!researchPrompt.trim()) return
    setResearchLoading(true)
    setResearchResult("")
    try {
      // Use Groq API for HI-Research
      const res = await fetch("/api/groq-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiKey: "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",
          prompt: researchPrompt,
        }),
      });
      const data = await res.json();
      setResearchResult(data.response || data.error || "No response");
      setStatusMessage({ type: "success", message: `Research completed` });
    } catch (error) {
      setStatusMessage({ type: "error", message: "Failed to complete research" });
    } finally {
      setResearchLoading(false);
    }
  }

  // Handle multi-modal processing
  const handleMultiModalProcessing = async () => {
    if (!multiModalPrompt.trim()) return

    setMultiModalLoading(true)
    setMultiModalResult("")

    try {
      const response = await generateText(`[MULTIMODAL:${multiModalTab}] ${multiModalPrompt}`)
      setMultiModalResult(response.text)
      setStatusMessage({
        type: "success",
        message: `Multi-modal processing completed in ${response.processingTime.toFixed(2)}s`,
      })
    } catch (error) {
      setStatusMessage({ type: "error", message: "Failed to process multi-modal content" })
    } finally {
      setMultiModalLoading(false)
    }
  }

  // Enable enhanced capabilities
  const handleEnableEnhanced = () => {
    setEnhancedCapabilities(true)
    setStatusMessage({ type: "success", message: "Enhanced capabilities activated" })
  }

  // Handle Groq API chat
  const handleGroqChat = async (e: React.FormEvent) => {
    e.preventDefault();
    setGroqLoading(true);
    setGroqResponse("");
    setGroqError("");
    try {
      const res = await fetch("/api/groq-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ apiKey:"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", prompt: groqPrompt }),
      });
      const data = await res.json();
      if (res.ok) {
        setGroqResponse(data.response);
      } else {
        setGroqError(data.error || "Groq API error");
      }
    } catch (err) {
      setGroqError("Request failed");
    } finally {
      setGroqLoading(false);
    }
  };

  const handleGroqSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!groqPrompt.trim()) return;
    setGroqLoading(true);
    setGroqResult("");
    try {
      const res = await fetch("/api/groq-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ apiKey: "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", prompt: groqPrompt }),
      });
      const data = await res.json();
      if (data.response) setGroqResult(data.response);
      else setGroqResult(data.error || "No response");
    } catch {
      setGroqResult("Error contacting Groq API");
    } finally {
      setGroqLoading(false);
      setGroqPrompt("");
    }
  };

  // Clear status message after 5 seconds
  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        setStatusMessage(null)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [statusMessage])

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              AI Dashboard
            </span>
          </h1>

          <div className="flex items-center gap-4">
            {!enhancedCapabilities && (
              <Button onClick={handleEnableEnhanced} className="bg-purple-600 hover:bg-purple-700 text-white">
                <Sparkles className="mr-2 h-4 w-4" />
                Enable Enhanced Capabilities
              </Button>
            )}

            {statusMessage && (
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm ${
                  statusMessage.type === "success" ? "bg-green-900/30 text-green-300" : "bg-red-900/30 text-red-300"
                }`}
              >
                {statusMessage.type === "success" ? (
                  <CheckCircle className="h-4 w-4" />
                ) : (
                  <AlertCircle className="h-4 w-4" />
                )}
                <span>{statusMessage.message}</span>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-black/50 border-purple-800/30 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-white">Models</CardTitle>
                <CardDescription className="text-gray-300">Select an AI model</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "HI-4.0",
                      icon: <Brain className="h-5 w-5" />,
                      description: "General purpose AI",
                      active: true,
                    },
                    {
                      name: "HI-Vision",
                      icon: <ImageIcon className="h-5 w-5" />,
                      description: "Image generation",
                      active: true,
                    },
                    {
                      name: "HI-Code",
                      icon: <Code className="h-5 w-5" />,
                      description: "Code generation",
                      active: true,
                    },
                    {
                      name: "HI-Research",
                      icon: <BarChart3 className="h-5 w-5" />,
                      description: "Research & analysis",
                      active: true,
                    },
                  ].map((model) => (
                    <div
                      key={model.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-purple-950/30 border border-purple-800/30 cursor-pointer hover:bg-purple-900/30"
                    >
                      <div className="text-purple-400">{model.icon}</div>
                      <div className="flex-1">
                        <div className="font-medium text-white">{model.name}</div>
                        <div className="text-xs text-gray-400">{model.description}</div>
                      </div>
                      <div className={`h-2 w-2 rounded-full ${model.active ? "bg-green-500" : "bg-gray-500"}`}></div>
                    </div>
                  ))}
                </div>

                {enhancedCapabilities && (
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-white mb-4">Enhanced Capabilities</h3>
                    <div className="space-y-3">
                      {[
                        { name: "Neural-Symbolic AI", icon: <Brain className="h-4 w-4" /> },
                        { name: "Multi-Modal Processing", icon: <Layers className="h-4 w-4" /> },
                        { name: "Real-Time Knowledge", icon: <Globe className="h-4 w-4" /> },
                        { name: "Self-Improving AI", icon: <RefreshCw className="h-4 w-4" /> },
                      ].map((feature) => (
                        <div
                          key={feature.name}
                          className="flex items-center gap-2 p-2 rounded-lg bg-purple-900/20 border border-purple-800/30"
                        >
                          <div className="text-purple-400">{feature.icon}</div>
                          <div className="text-sm text-gray-300">{feature.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <h3 className="text-lg font-medium text-white mb-4">Recent Projects</h3>
                  <div className="space-y-2">
                    {[
                      "Text Classification",
                      "Image Generation",
                      "Code Assistant",
                      "Data Analysis",
                      "Literature Review",
                    ].map((project) => (
                      <div key={project} className="p-2 text-sm text-gray-300 hover:text-purple-400 cursor-pointer">
                        {project}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="chat" className="w-full">
              <TabsList
                className={`grid w-full ${enhancedCapabilities ? "grid-cols-5" : "grid-cols-4"} bg-black/50 border border-purple-800/30`}
              >
                <TabsTrigger
                  value="chat"
                  className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
                >
                  <div className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    <span>HI-4.0</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="image"
                  className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
                >
                  <div className="flex items-center gap-2">
                    <ImageIcon className="h-5 w-5" />
                    <span>HI-Vision</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="code"
                  className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
                >
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    <span>HI-Code</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="research"
                  className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
                >
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>HI-Research</span>
                  </div>
                </TabsTrigger>
                {enhancedCapabilities && (
                  <TabsTrigger
                    value="multimodal"
                    className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
                  >
                    <div className="flex items-center gap-2">
                      <Layers className="h-5 w-5" />
                      <span>Multi-Modal</span>
                    </div>
                  </TabsTrigger>
                )}
              </TabsList>

              {/* HI-4.0 Chat Tab */}
              <TabsContent value="chat" className="mt-6">
                <Card className="bg-black/50 border-purple-800/30 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-white">Chat with HI-4.0</CardTitle>
                        <CardDescription className="text-gray-300">Interact with our advanced AI model</CardDescription>
                      </div>

                      {enhancedCapabilities && (
                        <Select value={chatMode} onValueChange={setChatMode}>
                          <SelectTrigger className="w-[180px] bg-black/30 border-purple-800/30 text-white">
                            <SelectValue placeholder="Select mode" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-purple-800/30 text-white">
                            <SelectItem value="standard">Standard</SelectItem>
                            <SelectItem value="creative">Creative</SelectItem>
                            <SelectItem value="precise">Precise</SelectItem>
                            <SelectItem value="expert">Expert</SelectItem>
                            <SelectItem value="friendly">Friendly</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    </div>

                    {enhancedCapabilities && (
                      <div className="flex items-center gap-2 mt-2">
                        <Badge className="bg-purple-600/50 text-white">Neural-Symbolic AI</Badge>
                        <Badge className="bg-purple-600/50 text-white">Self-Correction</Badge>
                        <Badge className="bg-purple-600/50 text-white">Long-Term Memory</Badge>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col h-[500px]">
                      <div className="flex-1 overflow-y-auto mb-4 p-4 bg-black/30 rounded-lg">
                        {chatHistory.length > 0 ? (
                          <div className="space-y-4">
                            {chatHistory.map((message, index) => (
                              <div
                                key={index}
                                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                              >
                                <div
                                  className={`max-w-[80%] rounded-lg p-3 ${
                                    message.role === "user"
                                      ? "bg-purple-600/50 text-white"
                                      : "bg-gray-800/50 text-gray-200"
                                  }`}
                                >
                                    <p className="whitespace-pre-wrap">{message.content}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-gray-500 h-full flex items-center justify-center">
                            Start a conversation with HI-4.0
                          </div>
                        )}
                      </div>

                      <form onSubmit={handleChatSubmit} className="flex gap-2">
                        <Textarea
                          value={chatPrompt}
                          onChange={(e) => setChatPrompt(e.target.value)}
                          placeholder="Enter your prompt..."
                          className="flex-1 bg-black/30 border-purple-800/30 focus:border-purple-600 text-white"
                        />
                        <Button
                          type="submit"
                          disabled={!chatPrompt.trim() || chatLoading}
                          className="bg-purple-600 hover:bg-purple-700 text-white"
                        >
                          {chatLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                        </Button>
                        <Button
                          type="button"
                          onClick={handleClearChat}
                          variant="outline"
                          className="border-purple-600 text-purple-400 hover:bg-purple-950"
                        >
                          Clear Chat
                        </Button>
                      </form>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* HI-Vision Image Tab */}
              <TabsContent value="image" className="mt-6">
                <Card className="bg-black/50 border-purple-800/30 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-white">HI-Vision Image Generation</CardTitle>
                        <CardDescription className="text-gray-300">
                          Generate images from text descriptions
                        </CardDescription>
                      </div>
                    </div>

                    {enhancedCapabilities && (
                      <div className="flex items-center gap-2 mt-2">
                        <Badge className="bg-purple-600/50 text-white">Advanced Style Transfer</Badge>
                        <Badge className="bg-purple-600/50 text-white">Real-World Object Recognition</Badge>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="image-prompt" className="text-white">
                          Image Description
                        </Label>
                        <Textarea
                          id="image-prompt"
                          placeholder="Describe the image you want to generate..."
                          value={imagePrompt}
                          onChange={(e) => setImagePrompt(e.target.value)}
                          className="w-full bg-black/30 border-purple-800/30 focus:border-purple-600 text-white"
                          rows={4}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="image-style" className="text-white">
                            Style
                          </Label>
                          <Select value={imageStyle} onValueChange={setImageStyle}>
                            <SelectTrigger id="image-style" className="bg-black/30 border-purple-800/30 text-white">
                              <SelectValue placeholder="Select style" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 border-purple-800/30 text-white">
                              <SelectItem value="realistic">Realistic</SelectItem>
                              <SelectItem value="abstract">Abstract</SelectItem>
                              <SelectItem value="digital-art">Digital Art</SelectItem>
                              <SelectItem value="sketch">Sketch</SelectItem>
                              {enhancedCapabilities && (
                                <>
                                  <SelectItem value="oil-painting">Oil Painting</SelectItem>
                                  <SelectItem value="watercolor">Watercolor</SelectItem>
                                  <SelectItem value="3d-render">3D Render</SelectItem>
                                  <SelectItem value="pixel-art">Pixel Art</SelectItem>
                                </>
                              )}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="image-size" className="text-white">
                            Size
                          </Label>
                          <Select value={imageSize} onValueChange={setImageSize}>
                            <SelectTrigger id="image-size" className="bg-black/30 border-purple-800/30 text-white">
                              <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 border-purple-800/30 text-white">
                              <SelectItem value="512x512">512x512</SelectItem>
                              <SelectItem value="768x768">768x768</SelectItem>
                              <SelectItem value="1024x1024">1024x1024</SelectItem>
                              {enhancedCapabilities && (
                                <>
                                  <SelectItem value="1536x1536">1536x1536</SelectItem>
                                  <SelectItem value="2048x2048">2048x2048</SelectItem>
                                </>
                              )}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {enhancedCapabilities && (
                        <div className="p-4 bg-purple-950/20 border border-purple-800/30 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Upload className="h-5 w-5 text-purple-400" />
                            <h3 className="font-medium text-white">Image Editing & Enhancement</h3>
                          </div>
                          <p className="text-gray-300 text-sm mb-3">
                            Upload an existing image to edit or enhance it with AI
                          </p>
                          <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-950">
                            Upload Image
                          </Button>
                        </div>
                      )}

                      <Button
                        onClick={handleImageGeneration}
                        disabled={!imagePrompt.trim() || imageLoading}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                      >
                        {imageLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Generating Image...
                          </>
                        ) : (
                          "Generate Image"
                        )}
                      </Button>
                      <Button
                        type="button"
                        onClick={handleClearImage}
                        variant="outline"
                        className="w-full mt-2 border-purple-600 text-purple-400 hover:bg-purple-950"
                      >
                        Clear
                      </Button>

                      <div className="aspect-square bg-black/30 rounded-lg flex items-center justify-center border border-dashed border-purple-800/30 overflow-hidden">
                        {generatedImage ? (
                          <img
                            src={generatedImage || "/placeholder.svg"}
                            alt="Generated"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <p className="text-gray-500">Generated image will appear here</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* HI-Code Tab */}
              <TabsContent value="code" className="mt-6">
                <Card className="bg-black/50 border-purple-800/30 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-white">HI-Code Generation</CardTitle>
                        <CardDescription className="text-gray-300">
                          Generate code in multiple programming languages
                        </CardDescription>
                      </div>
                    </div>

                    {enhancedCapabilities && (
                      <div className="flex items-center gap-2 mt-2">
                        <Badge className="bg-purple-600/50 text-white">Auto-Code Explanation</Badge>
                        <Badge className="bg-purple-600/50 text-white">Advanced Bug Fixing</Badge>
                        <Badge className="bg-purple-600/50 text-white">Full-Stack Development</Badge>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="code-prompt" className="text-white">
                          Code Description
                        </Label>
                        <Textarea
                          id="code-prompt"
                          placeholder="Describe the code you want to generate..."
                          value={codePrompt}
                          onChange={(e) => setCodePrompt(e.target.value)}
                          className="w-full bg-black/30 border-purple-800/30 focus:border-purple-600 text-white"
                          rows={4}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="code-language" className="text-white">
                            Language
                          </Label>
                          <Select value={codeLanguage} onValueChange={setCodeLanguage}>
                            <SelectTrigger id="code-language" className="bg-black/30 border-purple-800/30 text-white">
                              <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 border-purple-800/30 text-white">
                              <SelectItem value="python">Python</SelectItem>
                              <SelectItem value="javascript">JavaScript</SelectItem>
                              <SelectItem value="typescript">TypeScript</SelectItem>
                              <SelectItem value="java">Java</SelectItem>
                              <SelectItem value="csharp">C#</SelectItem>
                              <SelectItem value="go">Go</SelectItem>
                              <SelectItem value="rust">Rust</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {enhancedCapabilities && (
                          <div className="space-y-2">
                            <Label htmlFor="code-type" className="text-white">
                              Code Type
                            </Label>
                            <Select defaultValue="function">
                              <SelectTrigger id="code-type" className="bg-black/30 border-purple-800/30 text-white">
                                <SelectValue placeholder="Select code type" />
                              </SelectTrigger>
                              <SelectContent className="bg-gray-900 border-purple-800/30 text-white">
                                <SelectItem value="function">Function</SelectItem>
                                <SelectItem value="class">Class</SelectItem>
                                <SelectItem value="api">API Endpoint</SelectItem>
                                <SelectItem value="fullstack">Full-Stack App</SelectItem>
                                <SelectItem value="algorithm">Algorithm</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        )}
                      </div>

                      {enhancedCapabilities && (
                        <div className="flex flex-wrap gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-purple-600 text-purple-400 hover:bg-purple-950"
                          >
                            Include Tests
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-purple-600 text-purple-400 hover:bg-purple-950"
                          >
                            Optimize Performance
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-purple-600 text-purple-400 hover:bg-purple-950"
                          >
                            Add Documentation
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-purple-600 text-purple-400 hover:bg-purple-950"
                          >
                            Security Check
                          </Button>
                        </div>
                      )}

                      <Button
                        onClick={handleCodeGeneration}
                        disabled={!codePrompt.trim() || codeLoading}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                      >
                        {codeLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Generating Code...
                          </>
                        ) : (
                          "Generate Code"
                        )}
                      </Button>
                      <Button
                        type="button"
                        onClick={handleClearCode}
                        variant="outline"
                        className="w-full mt-2 border-purple-600 text-purple-400 hover:bg-purple-950"
                      >
                        Clear
                      </Button>

                      <div className="bg-black/30 rounded-lg p-4 border border-purple-800/30 h-64 overflow-y-auto">
                        {generatedCode ? (
                          <pre className="text-gray-300 text-sm">
                            <code>{generatedCode}</code>
                          </pre>
                        ) : (
                          <p className="text-gray-500">Generated code will appear here</p>
                        )}
                      </div>

                      {enhancedCapabilities && generatedCode && (
                        <div className="p-4 bg-purple-950/20 border border-purple-800/30 rounded-lg">
                          <h3 className="font-medium text-white mb-2">Code Explanation</h3>
                          <p className="text-gray-300 text-sm">
                            This code implements a function that processes the input data and returns the result. It
                            uses efficient algorithms and follows best practices for the selected language.
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* HI-Research Tab */}
              <TabsContent value="research" className="mt-6">
                <Card className="bg-black/50 border-purple-800/30 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-white">HI-Research Analysis</CardTitle>
                        <CardDescription className="text-gray-300">
                          Conduct research, analyze data, and generate insights
                        </CardDescription>
                      </div>
                    </div>

                    {enhancedCapabilities && (
                      <div className="flex items-center gap-2 mt-2">
                        <Badge className="bg-purple-600/50 text-white">AI-Generated Research Papers</Badge>
                        <Badge className="bg-purple-600/50 text-white">Predictive Trend Analysis</Badge>
                        <Badge className="bg-purple-600/50 text-white">Lab Simulation</Badge>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="research-prompt" className="text-white">
                          Research Query
                        </Label>
                        <Textarea
                          id="research-prompt"
                          placeholder="Describe your research question or data analysis need..."
                          value={researchPrompt}
                          onChange={(e) => setResearchPrompt(e.target.value)}
                          className="w-full bg-black/30 border-purple-800/30 focus:border-purple-600 text-white"
                          rows={4}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="research-type" className="text-white">
                            Research Type
                          </Label>
                          <Select value={researchType} onValueChange={setResearchType}>
                            <SelectTrigger id="research-type" className="bg-black/30 border-purple-800/30 text-white">
                              <SelectValue placeholder="Select research type" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 border-purple-800/30 text-white">
                              <SelectItem value="literature">Literature Review</SelectItem>
                              <SelectItem value="data-analysis">Data Analysis</SelectItem>
                              <SelectItem value="hypothesis">Hypothesis Generation</SelectItem>
                              <SelectItem value="experiment">Experiment Design</SelectItem>
                              <SelectItem value="trends">Trend Analysis</SelectItem>
                              {enhancedCapabilities && (
                                <>
                                  <SelectItem value="paper">Research Paper</SelectItem>
                                  <SelectItem value="simulation">Lab Simulation</SelectItem>
                                  <SelectItem value="prediction">Future Prediction</SelectItem>
                                </>
                              )}
                            </SelectContent>
                          </Select>
                        </div>

                        {enhancedCapabilities && (
                          <div className="space-y-2">
                            <Label htmlFor="research-domain" className="text-white">
                              Domain
                            </Label>
                            <Select defaultValue="general">
                              <SelectTrigger
                                id="research-domain"
                                className="bg-black/30 border-purple-800/30 text-white"
                              >
                                <SelectValue placeholder="Select domain" />
                              </SelectTrigger>
                              <SelectContent className="bg-gray-900 border-purple-800/30 text-white">
                                <SelectItem value="general">General</SelectItem>
                                <SelectItem value="medicine">Medicine</SelectItem>
                                <SelectItem value="physics">Physics</SelectItem>
                                <SelectItem value="chemistry">Chemistry</SelectItem>
                                <SelectItem value="biology">Biology</SelectItem>
                                <SelectItem value="economics">Economics</SelectItem>
                                <SelectItem value="computer-science">Computer Science</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        )}
                      </div>

                      {enhancedCapabilities && (
                        <div className="p-4 bg-purple-950/20 border border-purple-800/30 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Globe className="h-5 w-5 text-purple-400" />
                            <h3 className="font-medium text-white">Web-Connected Research</h3>
                          </div>
                          <p className="text-gray-300 text-sm mb-3">
                            Access the latest information from the internet for up-to-date research
                          </p>
                          <div className="flex items-center">
                            <Label htmlFor="web-search" className="text-white mr-2">
                              Enable Web Search
                            </Label>
                            <input
                              type="checkbox"
                              id="web-search"
                              className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-purple-600 focus:ring-purple-500"
                            />
                          </div>
                        </div>
                      )}

                      <Button
                        onClick={handleResearchGeneration}
                        disabled={!researchPrompt.trim() || researchLoading}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                      >
                        {researchLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Conducting Research...
                          </>
                        ) : (
                          "Generate Research"
                        )}
                      </Button>
                      <Button
                        type="button"
                        onClick={handleClearResearch}
                        variant="outline"
                        className="w-full mt-2 border-purple-600 text-purple-400 hover:bg-purple-950"
                      >
                        Clear
                      </Button>

                      <div className="bg-black/30 rounded-lg p-4 border border-purple-800/30 h-64 overflow-y-auto">
                        {researchResult ? (
                          <div className="text-gray-300 text-sm whitespace-pre-wrap">{researchResult}</div>
                        ) : (
                          <p className="text-gray-500">Research results will appear here</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Multi-Modal Tab */}
              {enhancedCapabilities && (
                <TabsContent value="multimodal" className="mt-6">
                  <Card className="bg-black/50 border-purple-800/30 backdrop-blur-sm">
                    <CardHeader>
                      <div>
                        <CardTitle className="text-white">Multi-Modal Processing</CardTitle>
                        <CardDescription className="text-gray-300">
                          Process and generate content across multiple formats
                        </CardDescription>
                      </div>

                      <div className="flex items-center gap-2 mt-2">
                        <Badge className="bg-purple-600/50 text-white">Text, Image, Audio, Video</Badge>
                        <Badge className="bg-purple-600/50 text-white">Cross-Format Conversion</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Tabs
                        defaultValue="text"
                        value={multiModalTab}
                        onValueChange={setMultiModalTab}
                        className="w-full"
                      >
                        <TabsList className="grid w-full grid-cols-4 bg-black/50 border border-purple-800/30 mb-4">
                          <TabsTrigger
                            value="text"
                            className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
                          >
                            <FileText className="h-4 w-4 mr-2" />
                            Text
                          </TabsTrigger>
                          <TabsTrigger
                            value="image"
                            className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
                          >
                            <ImageIcon className="h-4 w-4 mr-2" />
                            Image
                          </TabsTrigger>
                          <TabsTrigger
                            value="audio"
                            className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
                          >
                            <Music className="h-4 w-4 mr-2" />
                            Audio
                          </TabsTrigger>
                          <TabsTrigger
                            value="video"
                            className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
                          >
                            <Video className="h-4 w-4 mr-2" />
                            Video
                          </TabsTrigger>
                        </TabsList>

                        <div className="space-y-4">
                          <div className="p-4 bg-purple-950/20 border border-purple-800/30 rounded-lg">
                            <h3 className="font-medium text-white mb-2">
                              {multiModalTab === "text" && "Text Processing & Generation"}
                              {multiModalTab === "image" && "Image Analysis & Generation"}
                              {multiModalTab === "audio" && "Audio Processing & Transcription"}
                              {multiModalTab === "video" && "Video Analysis & Understanding"}
                            </h3>
                            <p className="text-gray-300 text-sm">
                              {multiModalTab === "text" && "Generate high-quality text or analyze existing content"}
                              {multiModalTab === "image" && "Analyze images or generate new ones from descriptions"}
                              {multiModalTab === "audio" &&
                                "Transcribe audio, analyze speech, or generate audio content"}
                              {multiModalTab === "video" &&
                                "Analyze video content, extract information, or describe scenes"}
                            </p>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="multimodal-prompt" className="text-white">
                              Prompt
                            </Label>
                            <Textarea
                              id="multimodal-prompt"
                              placeholder={`Enter your ${multiModalTab} prompt...`}
                              value={multiModalPrompt}
                              onChange={(e) => setMultiModalPrompt(e.target.value)}
                              className="w-full bg-black/30 border-purple-800/30 focus:border-purple-600 text-white"
                              rows={4}
                            />
                          </div>

                          <div className="flex justify-between">
                            <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-950">
                              <Upload className="h-4 w-4 mr-2" />
                              Upload {multiModalTab}
                            </Button>

                            <Button
                              onClick={handleMultiModalProcessing}
                              disabled={!multiModalPrompt.trim() || multiModalLoading}
                              className="bg-purple-600 hover:bg-purple-700 text-white"
                            >
                              {multiModalLoading ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                  Processing...
                                </>
                              ) : (
                                "Process"
                              )}
                            </Button>
                          </div>

                          <div className="bg-black/30 rounded-lg p-4 border border-purple-800/30 h-64 overflow-y-auto">
                            {multiModalResult ? (
                              <div className="text-gray-300 text-sm whitespace-pre-wrap">{multiModalResult}</div>
                            ) : (
                              <p className="text-gray-500">Results will appear here</p>
                            )}
                          </div>
                        </div>
                      </Tabs>
                    </CardContent>
                  </Card>
                </TabsContent>
              )}
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  )
}
