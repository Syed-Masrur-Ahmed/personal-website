'use client'

import { useGraphStore } from '@/store/graphStore'

const panels: Record<string, React.ReactNode> = {
  root: (
    <div className="flex items-center gap-3 md:gap-8">
      <div className="w-14 h-14 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmppOWRlcHlsa2tmZG5qa21sb2xoczd4dWswaXY1NnpwZ2J4Z3NndSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PKPEKVWrBrtNXDnNgs/giphy.gif"
          alt="avatar"
          className="w-full h-full object-cover scale-110"
        />
      </div>
      <div>
        <h1 className="text-xl md:text-3xl font-bold tracking-tight">Syed Masrur Ahmed</h1>
        <p className="mt-3 text-sm md:text-base text-white/60 leading-relaxed">
          CS + Math @ Dartmouth College. I like making cool things.
        </p>
        <div className="mt-3 md:mt-5 flex gap-4 text-xs md:text-sm">
          <a href="https://github.com/Syed-Masrur-Ahmed" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/syed-masrur-ahmed" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:syed.masrur.ahmed.28@dartmouth.edu" className="text-white/50 hover:text-white transition-colors">Email</a>
          <a href="/Syed_Masrur_Ahmed_resume.pdf" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors">Resume</a>
        </div>
      </div>
    </div>
  ),

  projects: (
    <div>
      <h2 className="text-xl md:text-3xl font-bold tracking-tight">Projects</h2>
      <p className="mt-3 text-sm md:text-base text-white/60 leading-relaxed">
        A selection of things I&apos;ve built during my coding journey.
      </p>
    </div>
  ),

  experience: (
    <div>
      <h2 className="text-xl md:text-3xl font-bold tracking-tight">Experience</h2>
      <p className="mt-3 text-sm md:text-base text-white/60 leading-relaxed">
        Places where I&apos;ve worked with my jobs ranging from building health SaaS systems to physics simulations and video games.
      </p>
    </div>
  ),

  education: (
    <div>
      <h2 className="text-xl md:text-3xl font-bold tracking-tight">Education</h2>
      <p className="mt-3 text-sm md:text-base text-white/60 leading-relaxed">
        My academic journey as a rising sophomore at Dartmouth College, double majoring in Computer Science and Mathematics with a 4.0 GPA.
      </p>
    </div>
  ),
}

export const InfoPanel = () => {
  const activePath = useGraphStore((s) => s.activePath)
  const navigateToIndex = useGraphStore((s) => s.navigateToIndex)
  const activeNodeId = activePath[activePath.length - 1]
  const panelKey = activePath[1] ?? 'root'
  const content = panels[panelKey] ?? panels['root']
  const isAtTier1 = activePath.length > 1

  return (
    <div className="w-full h-auto md:h-[25vh] px-4 py-4 md:px-12 md:py-8">
      <div key={activeNodeId} className="h-full flex flex-col justify-center">
        {isAtTier1 && (
          <button
            onClick={() => navigateToIndex(0)}
            className="mb-2 md:mb-3 text-sm text-white/50 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 self-start"
          >
            ← Back
          </button>
        )}
        {content}
      </div>
    </div>
  )
}
