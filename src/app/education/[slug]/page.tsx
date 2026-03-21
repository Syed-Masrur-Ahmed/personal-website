import Link from 'next/link'
import { notFound } from 'next/navigation'
import { portfolioData } from '@/data/graphData'
import CollegeCourses from '@/components/content/education/CollegeCourses'
import HonorsAwards from '@/components/content/education/HonorsAwards'
import ClubsOrganizations from '@/components/content/education/ClubsOrganizations'

const pages: Record<string, React.ReactNode> = {
  courses: <CollegeCourses />,
  honors: <HonorsAwards />,
  clubs: <ClubsOrganizations />,
}

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
    <main className="h-screen overflow-y-auto overflow-x-hidden bg-black text-white px-5 pt-10 pb-10 md:px-16 md:pt-16 md:pb-12">
      <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', textDecoration: 'none' }}>
        ← Back
      </Link>
      <div className="mt-8">
        {pages[slug] ?? <p className="text-white/60">Coming soon.</p>}
      </div>
    </main>
  )
}
