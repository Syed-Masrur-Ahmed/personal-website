export default function SpringMicro() {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight">SpringMicro Software</h1>
      <p className="mt-4 text-white/40 text-sm uppercase tracking-widest">Experience</p>
      <div className="mt-2 flex flex-wrap items-center gap-2 md:gap-4 text-white/50 text-sm">
        <span>Phoenix, AZ (Remote)</span>
        <span>·</span>
        <span>Software Engineering Intern</span>
        <span>·</span>
        <span>June 2025 – September 2025</span>
      </div>
      <p className="mt-8 max-w-2xl text-white/60 leading-relaxed">
        During my internship at SpringMicro, I focused on building automated support infrastructure. I engineered a full-stack helpdesk platform from the ground up, designed to reduce the load on technical support teams. My work centered on creating efficient API architectures and implementing machine learning techniques to make internal documentation more accessible.
      </p>
      <div className="mt-8 max-w-2xl space-y-6">
        <div>
          <p className="text-white font-medium">High-Efficiency API Design</p>
          <p className="mt-1 text-white/60 leading-relaxed">Architected 14 FastAPI REST endpoints to handle CRUD operations for a library of 200+ technical articles.</p>
        </div>
        <div>
          <p className="text-white font-medium">Vector-Based Semantic Search</p>
          <p className="mt-1 text-white/60 leading-relaxed">Implemented cosine similarity algorithms to map natural language user queries to relevant support documentation, effectively handling high-dimensional data.</p>
        </div>
        <div>
          <p className="text-white font-medium">Database Management</p>
          <p className="mt-1 text-white/60 leading-relaxed">Structured a PostgreSQL schema to maintain data integrity across user permissions and article versioning for a 50+ user environment.</p>
        </div>
        <div>
          <p className="text-white font-medium">Quantifiable Optimization</p>
          <p className="mt-1 text-white/60 leading-relaxed">Reduced manual ticket resolution time by 15% by automating the initial document retrieval process.</p>
        </div>
      </div>
    </div>
  )
}
