import Image from 'next/image'

export default function Sodacan() {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight">sodacan</h1>
      <p className="mt-4 text-white/40 text-sm uppercase tracking-widest">Project · The AI Data Workbench</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {['Python 3.12', 'Google Gemini', 'pandas', 'Typer', 'SQLAlchemy', 'Snowflake', 'AWS Boto3', 'Rich', 'YAML'].map((tech) => (
          <span key={tech} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70 border border-white/20">{tech}</span>
        ))}
      </div>

      <div className="mt-10 flex items-center gap-4">
        <a href="https://github.com/Syed-Masrur-Ahmed/sodacan" className="live-link" target="_blank">View the Source Code →</a>
        <a href="https://www.youtube.com/watch?v=D7Xe7LfG400" className="live-link" target="_blank">Watch Demo →</a>
      </div>

      <div className="mt-8 max-w-2xl rounded-lg overflow-hidden border border-white/10">
        <Image
          src="/projects/sodacan/image.png"
          alt="sodacan screenshot"
          width={800}
          height={500}
          className="w-full object-cover"
        />
      </div>

      <p className="mt-8 max-w-2xl text-white/60 leading-relaxed">
        I developed an AI-powered, terminal-first workbench designed to accelerate data ingestion and transformation for consultants and forward-deployed engineers. The tool reduces the time required to turn messy enterprise data into BI-ready insights from weeks to minutes by automating the "last mile" of data engineering.
      </p>

      <div className="mt-8 max-w-2xl space-y-6">
        <div>
          <p className="text-white font-medium">Two-Stage AI Pipeline</p>
          <p className="mt-1 text-white/60 leading-relaxed">Engineered a sophisticated NLP architecture that separates intent analysis from code execution. An Analyzer converts natural language into structured JSON instructions, which a specialized Executor then translates into high-performance pandas code.</p>
        </div>
        <div>
          <p className="text-white font-medium">Interactive REPL and State Management</p>
          <p className="mt-1 text-white/60 leading-relaxed">Built a custom shell environment with a robust undo/redo system, allowing users to perform "surgical" data cleaning using natural language while maintaining a full branch-based transformation history.</p>
        </div>
        <div>
          <p className="text-white font-medium">Universal Data Connectors</p>
          <p className="mt-1 text-white/60 leading-relaxed">Developed a modular sink/source system supporting local files (PDF, CSV, Excel), cloud storage (AWS S3, GCS), and enterprise warehouses (Snowflake, PostgreSQL, MySQL) with automated schema mapping and direct insertion.</p>
        </div>
        <div>
          <p className="text-white font-medium">Streaming Data Enrichment</p>
          <p className="mt-1 text-white/60 leading-relaxed">Implemented a "watch" mode that monitors live data sources and utilizes LLM-based task templates to perform real-time row-level enrichment, such as transaction categorization or sentiment analysis.</p>
        </div>
        <div>
          <p className="text-white font-medium">Enterprise-Grade CLI</p>
          <p className="mt-1 text-white/60 leading-relaxed">Designed a professional command-line interface using Typer and Rich, featuring YAML-based configuration with environment variable expansion for secure credential management.</p>
        </div>
      </div>

    </div>
  )
}
