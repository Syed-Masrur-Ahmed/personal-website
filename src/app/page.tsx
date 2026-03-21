import { Experience } from '@/components/Experience'
import { Breadcrumb } from '@/components/Breadcrumb'
import { InfoPanel } from '@/components/InfoPanel'

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', color: 'white', background: 'black' }}>
      <InfoPanel />
      <div className="flex items-center justify-center" style={{ height: '10vh', backgroundColor: '#161616' }}>
        <Breadcrumb />
      </div>
      <div className="relative flex-1 min-h-0" style={{ backgroundColor: '#161616', backgroundImage: 'radial-gradient(#2a2a2a 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        <p className="absolute top-3 left-1/2 -translate-x-1/2 text-white/25 text-xs text-center pointer-events-none select-none whitespace-nowrap z-10">
          <span className="hidden md:inline">scroll to zoom · click &amp; drag to orbit</span>
          <span className="md:hidden">pinch to zoom · drag to orbit</span>
        </p>
        <Experience />
      </div>
    </main>
  )
}
