'use client'

import { useGraphStore } from '@/store/graphStore'

const panels: Record<string, React.ReactNode> = {
  root: (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Syed Masrur Ahmed</h1>
      <p className="mt-3 text-white/60 max-w-xl leading-relaxed">
        Computer Science student at Dartmouth College. I build software that is fast, useful, and well-crafted.
      </p>
      <div className="mt-5 flex gap-4 text-sm">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors">LinkedIn</a>
        <a href="mailto:you@example.com" className="text-white/50 hover:text-white transition-colors">Email</a>
      </div>
    </div>
  ),

  projects: (
    <div>
      <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
      <p className="mt-3 text-white/60 max-w-xl leading-relaxed">
        A selection of things I've built — from research tools to web apps. Click a node to learn more.
      </p>
    </div>
  ),

  experience: (
    <div>
      <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
      <p className="mt-3 text-white/60 max-w-xl leading-relaxed">
        Places I've worked and problems I've helped solve. Click a node for details.
      </p>
    </div>
  ),

  education: (
    <div>
      <h2 className="text-3xl font-bold tracking-tight">Education</h2>
      <p className="mt-3 text-white/60 max-w-xl leading-relaxed">
        My academic background and the institutions that shaped how I think.
      </p>
    </div>
  ),
}

export const InfoPanel = () => {
  const activePath = useGraphStore((s) => s.activePath)
  const activeNodeId = activePath[activePath.length - 1]
  // At depth 1, show the tier 1 panel. At depth 0, show root.
  const panelKey = activePath[1] ?? 'root'
  const content = panels[panelKey] ?? panels['root']

  return (
    <div className="w-full px-12 py-8 border-b-2 border-white/20" style={{ height: '25vh' }}>
      <div key={activeNodeId} className="h-full flex flex-col justify-center">
        {content}
      </div>
    </div>
  )
}
