import Link from "next/link"
import { Brain, Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-purple-800/20">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="#" className="text-gray-400 hover:text-purple-400">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-purple-400">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-purple-400">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-purple-400">
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <Link href="/" className="flex items-center justify-center md:justify-start gap-2">
            <Brain className="h-6 w-6 text-purple-400" />
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              HI
            </span>
          </Link>
          <p className="mt-2 text-center md:text-left text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Holistic Intelligence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
