'use client'

import { useGraphStore } from '@/store/graphStore'
import { portfolioData } from '@/data/graphData'

const getLabel = (id: string) => portfolioData.find((n) => n.id === id)?.label ?? id

export const Breadcrumb = () => {
  const activePath = useGraphStore((s) => s.activePath)
  const navigateToIndex = useGraphStore((s) => s.navigateToIndex)

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm z-10 pointer-events-auto select-none whitespace-nowrap">
      {activePath.map((id, index) => {
        const isLast = index === activePath.length - 1
        return (
          <span key={id} className="flex items-center gap-2">
            {index > 0 && <span className="text-white/30">→</span>}
            <button
              onClick={() => navigateToIndex(index)}
              className={`transition-colors ${
                isLast
                  ? 'text-white font-medium cursor-default'
                  : 'text-white/50 hover:text-white cursor-pointer'
              }`}
              disabled={isLast}
            >
              {getLabel(id)}
            </button>
          </span>
        )
      })}
    </div>
  )
}
