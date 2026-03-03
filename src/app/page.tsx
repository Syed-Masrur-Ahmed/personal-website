import { Experience } from '@/components/Experience'

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <Experience />
      
      {/* UI Overlay example */}
      <div className="absolute top-10 left-10 z-10 pointer-events-none">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          Personal Website
        </h1>
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
          Built with Next.js, R3F, and Framer Motion
        </p>
      </div>
    </main>
  )
}
