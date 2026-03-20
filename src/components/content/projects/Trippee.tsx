import Image from 'next/image'

export default function Trippee() {
  return (
    <div>
      <h1 className="text-5xl font-bold tracking-tight">Trippee</h1>
      <p className="mt-4 text-white/40 text-sm uppercase tracking-widest">Project · AI-Powered Collaborative Travel Planner</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {['Next.js 15', 'React 19', 'TypeScript', 'Supabase', 'Google Gemini', 'Mapbox GL', 'Tiptap', '@dnd-kit', 'Vercel AI SDK', 'Resend', 'Tailwind CSS 4'].map((tech) => (
          <span key={tech} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70 border border-white/20">{tech}</span>
        ))}
      </div>

      <div className="mt-10 flex items-center gap-4">
        <a href="https://trippee-ai.vercel.app/" className="live-link" target="_blank">Live Website →</a>
        <a href="https://github.com/Syed-Masrur-Ahmed/trippee" className="live-link" target="_blank">View the Source Code →</a>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
        <div className="rounded-lg overflow-hidden border border-white/10">
          <Image
            src="/projects/trippee/image1.png"
            alt="Trippee screenshot 1"
            width={800}
            height={500}
            className="w-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden border border-white/10">
          <Image
            src="/projects/trippee/image2.png"
            alt="Trippee screenshot 2"
            width={800}
            height={500}
            className="w-full object-cover"
          />
        </div>
      </div>

      <p className="mt-8 max-w-2xl text-white/60 leading-relaxed">
        I architected and built a real-time collaborative travel application that synchronizes group planning across maps, itineraries, and shared notes. The platform focuses on high-concurrency performance and intelligent automation, ensuring a seamless experience across desktop and mobile devices.
      </p>

      <div className="mt-8 max-w-2xl space-y-6">
        <div>
          <p className="text-white font-medium">Real-Time Synchronization</p>
          <p className="mt-1 text-white/60 leading-relaxed">Leveraged Supabase Realtime and PostgreSQL to implement live cursor tracking, instant place-marker syncing, and collaborative rich-text editing with presence indicators.</p>
        </div>
        <div>
          <p className="text-white font-medium">Algorithmic Itinerary Generation</p>
          <p className="mt-1 text-white/60 leading-relaxed">Developed a deterministic optimization engine using k-means clustering and nearest-neighbor algorithms to automatically group locations geographically and calculate the most efficient daily travel routes.</p>
        </div>
        <div>
          <p className="text-white font-medium">AI Assistance and Mapping</p>
          <p className="mt-1 text-white/60 leading-relaxed">Integrated Google Gemini 1.5 Flash via the Vercel AI SDK to provide a "Hey Trippee" group chat assistant, paired with Mapbox GL for interactive, responsive spatial data visualization.</p>
        </div>
        <div>
          <p className="text-white font-medium">Enterprise-Grade Infrastructure</p>
          <p className="mt-1 text-white/60 leading-relaxed">Built a robust invitation system using secure tokens, role-based access control (RBAC), and automated email workflows via Resend, ensuring secure ownership transfer and team management.</p>
        </div>
        <div>
          <p className="text-white font-medium">Mobile-First Engineering</p>
          <p className="mt-1 text-white/60 leading-relaxed">Designed an adaptive UI using Tailwind CSS 4 that preserves complex desktop functionality while providing a touch-friendly, drawer-based navigation system for mobile users.</p>
        </div>
      </div>

    </div>
  )
}
