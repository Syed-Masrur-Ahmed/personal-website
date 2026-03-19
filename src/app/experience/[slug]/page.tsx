import Link from 'next/link'
import { notFound } from 'next/navigation'
import { portfolioData } from '@/data/graphData'
import SpringMicro from '@/components/content/experience/SpringMicro'
import Eskay from '@/components/content/experience/Eskay'
import MLResearch from '@/components/content/experience/MLResearch'
import DALILab from '@/components/content/experience/DALILab'

const pages: Record<string, React.ReactNode> = {
  springmicro: <SpringMicro />,
  eskay: <Eskay />,
  mlresearch: <MLResearch />,
  dalilab: <DALILab />,
}

export function generateStaticParams() {
  return portfolioData
    .filter((n) => n.parentId === 'experience')
    .map((n) => ({ slug: n.id }))
}

export default async function ExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const node = portfolioData.find((n) => n.id === slug && n.parentId === 'experience')
  if (!node) notFound()

  return (
    <main style={{ height: '100vh', overflowY: 'auto', overflowX: 'hidden', background: 'black', color: 'white', padding: '4rem 3rem 3rem 4rem' }}>
      <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', textDecoration: 'none' }}>
        ← Back
      </Link>
      <div className="mt-8">
        {pages[slug] ?? <p className="text-white/60">Coming soon.</p>}
      </div>
    </main>
  )
}
