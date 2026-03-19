export default function DALILab() {
  return (
    <div>
      <h1 className="text-5xl font-bold tracking-tight">DALI Lab</h1>
      <p className="mt-4 text-white/40 text-sm uppercase tracking-widest">Experience</p>
      <div className="mt-2 flex items-center gap-4 text-white/50 text-sm">
        <span>Dartmouth Applied Learning & Innovation</span>
        <span>·</span>
        <span>Software Engineer</span>
        <span>·</span>
        <span>September 2025 – March 2026</span>
      </div>
      <p className="mt-8 text-white/60 leading-relaxed" style={{ maxWidth: '640px' }}>
        At DALI Lab, I operated as a full-stack engineer across two distinct products. My work ranged from architecting secure healthcare data pipelines for an enterprise SaaS platform to refactoring a retro arcade game for global web deployment. I focused on building systems that are both technically robust and intuitive for the end user.
      </p>

      {/* SimReach */}
      <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', marginTop: '3rem' }}>
        <div style={{ maxWidth: '480px' }}>
          <p className="text-white text-xl font-semibold">SimReach</p>
          <p className="mt-3 text-white/60 leading-relaxed">
            SimReach is an AWS-based SaaS tool designed to optimize physician outreach strategies. By simulating staffing allocations across clinical networks, the platform helps hospital systems reduce patient travel burden and minimize missed appointments.
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <p className="text-white font-medium">Secure Data Validation</p>
              <p className="mt-1 text-white/60 leading-relaxed">Engineered a robust validation algorithm for EHR CSV uploads, ensuring data integrity before processing by the backend decision engine.</p>
            </div>
            <div>
              <p className="text-white font-medium">Serverless Infrastructure</p>
              <p className="mt-1 text-white/60 leading-relaxed">Developed AWS Lambda functions and scheduled cron jobs to automate high-compute simulations and data processing tasks.</p>
            </div>
            <div>
              <p className="text-white font-medium">Onboarding Architecture</p>
              <p className="mt-1 text-white/60 leading-relaxed">Architected the end-to-end user onboarding flow, integrating automated email notification systems to alert administrators upon simulation completion.</p>
            </div>
            <div>
              <p className="text-white font-medium">Full-Stack Integration</p>
              <p className="mt-1 text-white/60 leading-relaxed">Collaborated on the React-based frontend to visualize staffing recommendations and estimated cost savings for healthcare executives.</p>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexShrink: 0 }}>
          <div style={{ width: 300, aspectRatio: '16/9' }}>
            <img
              src="/experience/dalilab/simreach1.png"
              alt="SimReach screenshot 1"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }}
            />
          </div>
          <div style={{ width: 300, aspectRatio: '16/9' }}>
            <img
              src="/experience/dalilab/simreach2.png"
              alt="SimReach screenshot 2"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }}
            />
          </div>
        </div>
      </div>

      {/* Satellite */}
      <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', marginTop: '4rem' }}>
        <div style={{ maxWidth: '480px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <p className="text-white text-xl font-semibold">Benchmark Space Systems</p>
            <a
              href="https://satellite-game.dalilab.app"
              target="_blank"
              rel="noreferrer"
              className="live-link"
            >
              Play ↗
            </a>
          </div>
          <p className="mt-3 text-white/60 leading-relaxed">
            In collaboration with the Black River Innovation Campus, I helped build an interactive arcade game to get students excited about space careers. We used the Godot engine to create a retro-style experience focused on satellite maneuvers.
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <p className="text-white font-medium">Cross-Platform Optimization</p>
              <p className="mt-1 text-white/60 leading-relaxed">Refactored the existing codebase to ensure full compatibility with web deployment (HTML5/WebAssembly), allowing the simulation to scale to 1,000+ users.</p>
            </div>
            <div>
              <p className="text-white font-medium">Authentication & Persistence</p>
              <p className="mt-1 text-white/60 leading-relaxed">Integrated Google OAuth and a serverless Firebase backend to handle user accounts and persistent data storage.</p>
            </div>
            <div>
              <p className="text-white font-medium">Global Competitive Systems</p>
              <p className="mt-1 text-white/60 leading-relaxed">Implemented a real-time global leaderboard, managing asynchronous data fetches to sync player progress across multiple web sessions.</p>
            </div>
            <div>
              <p className="text-white font-medium">Deployment Pipeline</p>
              <p className="mt-1 text-white/60 leading-relaxed">Assisted in transitioning the project from a physical arcade console focus to a globally accessible web application.</p>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexShrink: 0 }}>
          <div style={{ width: 300, aspectRatio: '16/9' }}>
            <img
              src="/experience/dalilab/satellite1.png"
              alt="Satellite simulation screenshot 1"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }}
            />
          </div>
          <div style={{ width: 300, aspectRatio: '16/9' }}>
            <img
              src="/experience/dalilab/satellite2.png"
              alt="Satellite simulation screenshot 2"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
