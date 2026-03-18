import { Experience } from '@/components/Experience'
import { Breadcrumb } from '@/components/Breadcrumb'

export default function Home() {
  return (
    <main className="w-screen h-screen bg-black">
      <Experience />
      <Breadcrumb />
    </main>
  )
}
