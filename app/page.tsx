import { Suspense } from "react"
import Hero from "@/components/hero"
import Features from "@/components/features"
import AIModels from "@/components/ai-models"
import AdvancedCapabilities from "@/components/advanced-capabilities"
import ModelPrompts from "@/components/model-prompts"
import ResearchTools from "@/components/research-tools"
import PlatformSupport from "@/components/platform-support"
import { Loader } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white">
      <Hero />
      <Suspense
        fallback={
          <div className="flex justify-center p-12">
            <Loader className="animate-spin" />
          </div>
        }
      >
        <Features />
      </Suspense>
      <Suspense
        fallback={
          <div className="flex justify-center p-12">
            <Loader className="animate-spin" />
          </div>
        }
      >
        <AIModels />
      </Suspense>
      <Suspense
        fallback={
          <div className="flex justify-center p-12">
            <Loader className="animate-spin" />
          </div>
        }
      >
        <AdvancedCapabilities />
      </Suspense>
      <Suspense
        fallback={
          <div className="flex justify-center p-12">
            <Loader className="animate-spin" />
          </div>
        }
      >
        <ModelPrompts />
      </Suspense>
      <Suspense
        fallback={
          <div className="flex justify-center p-12">
            <Loader className="animate-spin" />
          </div>
        }
      >
        <ResearchTools />
      </Suspense>
      <Suspense
        fallback={
          <div className="flex justify-center p-12">
            <Loader className="animate-spin" />
          </div>
        }
      >
        <PlatformSupport />
      </Suspense>
    </main>
  )
}
