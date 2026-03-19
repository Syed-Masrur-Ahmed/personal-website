import { Experience } from '@/components/Experience'
import { Breadcrumb } from '@/components/Breadcrumb'
import { InfoPanel } from '@/components/InfoPanel'

export default function Home() {
  return (
    <main className="w-screen h-screen bg-black text-white flex flex-col overflow-hidden">
      <InfoPanel />
      <div className="flex items-center justify-center" style={{ height: '10vh', backgroundColor: '#161616' }}>
        <Breadcrumb />
      </div>
      <div className="relative flex-1 min-h-0" style={{ backgroundColor: '#161616', backgroundImage: 'radial-gradient(#2a2a2a 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        <Experience />
      </div>
    </main>
  )
}
