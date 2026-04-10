import Link from 'next/link'
import { notFound } from 'next/navigation'
import { portfolioData } from '@/data/graphData'
import Trippee from '@/components/content/projects/Trippee'
import TinySearchEngine from '@/components/content/projects/TinySearchEngine'
import PersonalWebsiteGame from '@/components/content/projects/PersonalWebsiteGame'
import Sodacan from '@/components/content/projects/Sodacan'
import Pixluv from '@/components/content/projects/Pixluv'
import MaskProxy from '@/components/content/projects/MaskProxy'
import InfoButlerAgent from '@/components/content/projects/InfoButlerAgent'

const pages: Record<string, React.ReactNode> = {
  trippee: <Trippee />,
  'tiny-search-engine': <TinySearchEngine />,
  'personal-website-game': <PersonalWebsiteGame />,
  sodacan: <Sodacan />,
  pixluv: <Pixluv />,
  maskproxy: <MaskProxy />,
  'info-butler-agent': <InfoButlerAgent />,
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
    <main className="h-screen overflow-y-auto overflow-x-hidden bg-black text-white px-5 pt-10 pb-32 md:px-16 md:pt-16 md:pb-12 outline-none">
      <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', textDecoration: 'none' }}>
        ← Back
      </Link>
      <div className="mt-8">
        {pages[slug] ?? <p className="text-white/60">Coming soon.</p>}
      </div>
    </main>
  )
}
