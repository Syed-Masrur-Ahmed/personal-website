export default function DALILab() {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight">DALI Lab</h1>
      <p className="mt-4 text-white/40 text-sm uppercase tracking-widest">Experience</p>
      <div className="mt-2 flex flex-wrap items-center gap-2 md:gap-4 text-white/50 text-sm">
        <span>Dartmouth Applied Learning & Innovation</span>
        <span>·</span>
        <span>Software Engineer (Part-time)</span>
        <span>·</span>
        <span>September 2025 – Present</span>
      </div>
      <p className="mt-8 text-white/60 leading-relaxed" style={{ maxWidth: '640px' }}>
        At DALI Lab, I operated as a full-stack engineer across three distinct products. My work ranged from architecting secure healthcare data pipelines for an enterprise SaaS platform, to refactoring a retro arcade game for global web deployment, to building trust boundaries around LLM tool calling on a student wellness assistant&apos;s Python backend. I focused on building systems that are both technically robust and intuitive for the end user.
      </p>

      {/* Evergreen */}
      <div className="mt-12">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <p className="text-white text-xl font-semibold">Evergreen</p>
          <a
            href="https://evergreen.dartmouth.edu/"
            target="_blank"
            rel="noreferrer"
            className="live-link"
          >
            Learn More ↗
          </a>
        </div>
        <p className="mt-3 text-white/60 leading-relaxed" style={{ maxWidth: '640px' }}>
          Evergreen is a student wellness application built at Dartmouth&apos;s DALI Lab. It pulls passive signals from a student&apos;s phone and wearables, sleep, step counts, screen time, alongside self-reported mood, and surfaces them through an LLM assistant that can read a user&apos;s data and act on it through tool calls. I worked on the Python backend.
        </p>
        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '640px' }}>
          <div>
            <p className="text-white font-medium">Google Calendar Token Vault</p>
            <p className="mt-1 text-white/60 leading-relaxed">The assistant needs to read a user&apos;s calendar, which raises the question of where OAuth credentials live. I built the backend to own refresh tokens and expose an internal endpoint that mints short-lived, per-user access tokens for the MCP server, which then calls Google directly. Long-lived secrets stay in one place with a clear trust boundary, and the tool layer holds nothing durable.</p>
          </div>
          <div>
            <p className="text-white font-medium">Calendar Conflict Detection</p>
            <p className="mt-1 text-white/60 leading-relaxed">Built on top of the token vault, a service that reads a user&apos;s actual calendar to place daily reminders in a free slot, preferring a morning window, falling back through the day, and ignoring all-day events.</p>
          </div>
          <div>
            <p className="text-white font-medium">Least-Privilege Microsoft Graph Access</p>
            <p className="mt-1 text-white/60 leading-relaxed">Authored and drove the Graph integration&apos;s access request with Dartmouth ITC. Application-level Mail.Read is tenant-wide by default, so the request pairs the permission grant with an Exchange Application Access Policy scoping it to a single mailbox, using app-only certificate auth with the private key held in Secrets Manager.</p>
          </div>
          <div>
            <p className="text-white font-medium">Campus Events Ingestion Pipeline</p>
            <p className="mt-1 text-white/60 leading-relaxed">An hourly job that reads a dedicated Dartmouth mailbox subscribed to the campus events listserv, extracts structured events from unstructured email with a Bedrock model, and dedups them against a uniqueness constraint. Malformed model output is logged and skipped rather than failing the run, concurrency across workers is handled with a Postgres advisory lock, and the fetch/extract seams are injectable so the whole pipeline is testable without live Graph access.</p>
          </div>
          <div>
            <p className="text-white font-medium">Chart Data API & Response Envelope</p>
            <p className="mt-1 text-white/60 leading-relaxed">Built the read endpoints backing Evergreen&apos;s charts across four metrics at daily and weekly granularity behind a single response envelope (metric, unit, scope, and time-bucketed points), so adding a metric is a lookup-table entry rather than a new response shape. Sleep is the interesting edge case: a night crossing midnight is attributed pro-rata across days by overlap rather than dumped on the start date.</p>
          </div>
        </div>
      </div>

      {/* SimReach */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mt-16">
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
