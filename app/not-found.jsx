import { Clock, Home, Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link'
import { Button } from "../components/ui/button"


export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white flex flex-col items-center justify-center text-center px-4">
      <div className="space-y-6 max-w-md">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-purple-500 rounded-full opacity-10 animate-pulse"></div>
          </div>
          <Clock className="w-24 h-24 text-purple-600 relative z-10 mx-auto" />
        </div>
        
        <h1 className="text-4xl font-bold text-purple-600">More topics coming soon!</h1>
        <p className="text-xl text-gray-600 mb-6">We're working hard to bring you something amazing.</p>
        
        <div className="mt-8">
          <Button asChild variant="outline" className="bg-white hover:bg-gray-100">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
