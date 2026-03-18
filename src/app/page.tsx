import { Experience } from '@/components/Experience'
import { Breadcrumb } from '@/components/Breadcrumb'
import { InfoPanel } from '@/components/InfoPanel'

export default function Home() {
  return (
    <main className="w-screen h-screen bg-black text-white flex flex-col overflow-hidden">
      <InfoPanel />
      <div className="flex items-center justify-center" style={{ height: '10vh' }}>
        <Breadcrumb />
      </div>
      <div className="relative flex-1 min-h-0">
        <Experience />
      </div>
    </main>
  )
}
