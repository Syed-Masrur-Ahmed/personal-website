export default function Eskay() {
  return (
    <div>
      <h1 className="text-5xl font-bold tracking-tight">ESKAY Science</h1>
      <p className="mt-4 text-white/40 text-sm uppercase tracking-widest">Experience</p>
      <div className="mt-2 flex items-center gap-4 text-white/50 text-sm">
        <span>Dhaka, Bangladesh</span>
        <span>·</span>
        <span>Simulation Developer</span>
        <span>·</span>
        <span>June 2023 – June 2024</span>
      </div>
      <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', marginTop: '2rem' }}>
        <div style={{ maxWidth: '480px' }}>
          <p className="text-white/60 leading-relaxed">
            During my time at ESKAY Science, I focused on bridging the gap between abstract physics and visual intuition. I developed interactive 3D environments that allowed students to interact with mathematical models directly. My goal was to turn complex thermodynamics and fluid dynamics into something tangible.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <p className="text-white font-medium">Fluid Density Systems</p>
              <p className="mt-1 text-white/60 leading-relaxed">Engineered a drag and drop 3D simulation in Unity to calculate and visualize buoyancy and density interactions between custom rigid bodies and fluid volumes.</p>
            </div>
            <div>
              <p className="text-white font-medium">Thermal Kinetic Modeling</p>
              <p className="mt-1 text-white/60 leading-relaxed">Programmed a particle-based C# system to simulate molecular motion across temperature gradients, accurately depicting state changes and kinetic energy shifts.</p>
            </div>
            <div>
              <p className="text-white font-medium">Anomalous Expansion Visualization</p>
              <p className="mt-1 text-white/60 leading-relaxed">Implemented a specialized simulation of the density-temperature curve for water, utilizing specific gravity equations to model volume increase below 4°C.</p>
            </div>
            <div>
              <p className="text-white font-medium">Educational Deployment</p>
              <p className="mt-1 text-white/60 leading-relaxed">Scaled these tools to a cohort of 100+ students, translating theoretical physics into a 60 FPS interactive experience.</p>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexShrink: 0 }}>
          <div style={{ width: 300, aspectRatio: '16/9' }}>
            <img
              src="/experience/eskay/particle.png"
              alt="Particle simulation"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }}
            />
          </div>
          <div style={{ width: 300, aspectRatio: '16/9' }}>
            <video
              src="/experience/eskay/density.mov"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
