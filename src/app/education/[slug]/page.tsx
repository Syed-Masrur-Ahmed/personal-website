import Link from 'next/link'
import { portfolioData } from '@/data/graphData'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return portfolioData
    .filter((n) => n.parentId === 'education')
    .map((n) => ({ slug: n.id }))
}

export default async function EducationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const node = portfolioData.find((n) => n.id === slug && n.parentId === 'education')
  if (!node) notFound()

  return (
    <main className="min-h-screen bg-black text-white p-12">
      <Link href="/" className="text-white/50 hover:text-white text-sm transition-colors">
        ← Back
      </Link>
      <h1 className="mt-8 text-5xl font-bold tracking-tight">{node.label}</h1>
      <p className="mt-4 text-white/40 text-sm uppercase tracking-widest">Education</p>
      <div className="mt-12 text-white/60">
        Content coming soon.
      </div>
    </main>
  )
}
