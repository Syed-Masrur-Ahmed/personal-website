import Link from 'next/link'
import { notFound } from 'next/navigation'
import { portfolioData } from '@/data/graphData'
import Trippee from '@/components/content/projects/Trippee'
import TinySearchEngine from '@/components/content/projects/TinySearchEngine'
import PersonalWebsiteGame from '@/components/content/projects/PersonalWebsiteGame'
import Sodacan from '@/components/content/projects/Sodacan'
import Pixluv from '@/components/content/projects/Pixluv'

const pages: Record<string, React.ReactNode> = {
  trippee: <Trippee />,
  'tiny-search-engine': <TinySearchEngine />,
  'personal-website-game': <PersonalWebsiteGame />,
  sodacan: <Sodacan />,
  pixluv: <Pixluv />,
}

export function generateStaticParams() {
  return portfolioData
    .filter((n) => n.parentId === 'projects')
    .map((n) => ({ slug: n.id }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const node = portfolioData.find((n) => n.id === slug && n.parentId === 'projects')
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
