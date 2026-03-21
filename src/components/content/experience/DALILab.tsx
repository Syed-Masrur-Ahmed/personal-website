export default function DALILab() {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight">DALI Lab</h1>
      <p className="mt-4 text-white/40 text-sm uppercase tracking-widest">Experience</p>
      <div className="mt-2 flex flex-wrap items-center gap-2 md:gap-4 text-white/50 text-sm">
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
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mt-12">
        <div className="w-full md:max-w-[480px]">
          <p className="text-white text-xl font-semibold">SimReach</p>
          <p className="mt-3 text-white/60 leading-relaxed">
            SimReach is an AWS-based SaaS tool designed to optimize physician outreach strategies. By simulating staffing allocations across clinical networks, the platform helps hospital systems reduce patient travel burden and minimize missed appointments. My role centered on wiring high-performance serverless backend services into a responsive frontend to provide actionable insights for hospital administrators.
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <p className="text-white font-medium">Simulation Visualization Engine</p>
              <p className="mt-1 text-white/60 leading-relaxed">Developed a dedicated results dashboard using React Router to manage complex navigation states, fetching and visualizing staffing allocation data from S3.</p>
            </div>
            <div>
              <p className="text-white font-medium">Serverless Integration</p>
              <p className="mt-1 text-white/60 leading-relaxed">Wired the frontend to AWS Lambda functions to trigger backend decision-making logic and display real-time results from scheduled cron job processes.</p>
            </div>
            <div>
              <p className="text-white font-medium">Data Integrity Engineering</p>
              <p className="mt-1 text-white/60 leading-relaxed">Developed a robust validation algorithm for EHR CSV uploads, ensuring strict data integrity for high-stakes medical records and cost-modeling inputs.</p>
            </div>
            <div>
              <p className="text-white font-medium">Full-Stack User Onboarding</p>
              <p className="mt-1 text-white/60 leading-relaxed">Built end-to-end onboarding flows and automated notification systems for over 50 hospital administrators, utilizing PostgreSQL for persistent state management.</p>
            </div>
            <div>
              <p className="text-white font-medium">SaaS Workflow Optimization</p>
              <p className="mt-1 text-white/60 leading-relaxed">Leveraged a modern cloud stack to bridge the gap between raw data storage and strategic staffing decisions through a seamless, integrated user experience.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-[300px] flex-shrink-0">
          <div className="w-full aspect-video">
            <img
              src="/experience/dalilab/simreach1.png"
              alt="SimReach screenshot 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full aspect-video">
            <img
              src="/experience/dalilab/simreach2.png"
              alt="SimReach screenshot 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Satellite */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mt-16">
        <div className="w-full md:max-w-[480px]">
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
        <div className="flex flex-col gap-4 w-full md:w-[300px] flex-shrink-0">
          <div className="w-full aspect-video">
            <img
              src="/experience/dalilab/satellite1.png"
              alt="Satellite simulation screenshot 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full aspect-video">
            <img
              src="/experience/dalilab/satellite2.png"
              alt="Satellite simulation screenshot 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
