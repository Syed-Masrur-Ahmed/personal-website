import Image from 'next/image'

export default function InfoButlerAgent() {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Information Butler Agent</h1>
      <p className="mt-4 text-white/40 text-sm uppercase tracking-widest">Project · Automated AI Research Digest</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {['Python', 'Dedalus Labs', 'DeepSeek', 'MCP', 'Brave Search', 'Slack SDK', 'Notion API', 'Pydantic', 'httpx'].map((tech) => (
          <span key={tech} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70 border border-white/20">{tech}</span>
        ))}
      </div>

      <div className="mt-10 flex items-center gap-4">
        <a href="https://github.com/Syed-Masrur-Ahmed/info-butler-agent" className="live-link" target="_blank">View the Source Code →</a>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl">
        <div className="rounded-lg overflow-hidden border border-white/10">
          <Image
            src="/projects/info-butler-agent/image1.png"
            alt="Information Butler Agent screenshot 1"
            width={1200}
            height={800}
            className="w-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden border border-white/10">
          <Image
            src="/projects/info-butler-agent/image2.png"
            alt="Information Butler Agent screenshot 2"
            width={1200}
            height={800}
            className="w-full h-full object-fill"
          />
        </div>
      </div>

      <p className="mt-8 max-w-2xl text-white/60 leading-relaxed">
        Tired of doomscrolling, I built an Information Butler agent using Dedalus Labs to curate automated research briefs. I drop a topic into a personal Slack channel (like &quot;AI news&quot; or &quot;latest in quantum computing&quot;) and a weekly cron job handles the rest. Without lifting a finger, I get a structured, sourced report written directly into Notion.
      </p>

      <div className="mt-8 max-w-2xl space-y-6">
        <div>
          <p className="text-white font-medium">Dedalus-Powered Agent Loop</p>
          <p className="mt-1 text-white/60 leading-relaxed">Used the Dedalus Labs SDK to run a multi-step agent with native MCP tool access (Brave Search for discovery and Fetch for full-page retrieval), collapsed into a single <code className="text-white/80 text-xs bg-white/10 px-1 py-0.5 rounded">runner.run()</code> call with no tool schemas or retry logic to manage manually.</p>
        </div>
        <div>
          <p className="text-white font-medium">5-Phase Single-File Pipeline</p>
          <p className="mt-1 text-white/60 leading-relaxed">The entire system lives in one file: <code className="text-white/80 text-xs bg-white/10 px-1 py-0.5 rounded">butler.py</code>. It reads a Slack message, runs the agent to search and summarize 5 sources into structured JSON, validates output with Pydantic, deduplicates against Notion, writes the report, and posts the Notion URL back to Slack.</p>
        </div>
        <div>
          <p className="text-white font-medium">Stateless Deduplication</p>
          <p className="mt-1 text-white/60 leading-relaxed">Before writing to Notion, the script queries the existing database for pages with the same theme, extracts all previously used source URLs, and injects an exclusion clause into the agent prompt if there&apos;s any overlap, guaranteeing fresh sources on every run with no local cache or database needed.</p>
        </div>
        <div>
          <p className="text-white font-medium">Prompt Engineering Over Post-Processing</p>
          <p className="mt-1 text-white/60 leading-relaxed">Recency filtering, theme inference, and JSON formatting are all enforced at the prompt level. The agent normalizes free-form Slack messages like &quot;Hey can you research anime news&quot; into a clean &quot;Anime News&quot; theme, eliminating the need for downstream parsing logic.</p>
        </div>
        <div>
          <p className="text-white font-medium">MCP for Autonomy, Direct API for CRUD</p>
          <p className="mt-1 text-white/60 leading-relaxed">Search and Fetch go through MCP because they benefit from agent autonomy. Slack and Notion are deterministic CRUD operations, so they use direct API calls, keeping the LLM out of the critical path for structured writes.</p>
        </div>
      </div>
    </div>
  )
}
