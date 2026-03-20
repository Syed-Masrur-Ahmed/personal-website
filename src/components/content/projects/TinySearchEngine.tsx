export default function TinySearchEngine() {
  return (
    <div>
      <h1 className="text-5xl font-bold tracking-tight">Tiny Search Engine</h1>
      <p className="mt-4 text-white/40 text-sm uppercase tracking-widest">Project · Systems Engineering</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {['C', 'Bash', 'Makefile', 'Valgrind', 'Git'].map((tech) => (
          <span key={tech} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70 border border-white/20">{tech}</span>
        ))}
      </div>

      <div className="mt-10 flex items-center gap-4">
        <a href="https://github.com/Syed-Masrur-Ahmed/Tiny-Search-Engine" target="_blank" rel="noopener noreferrer" className="live-link">View the Source Code →</a>
      </div>

      <p className="mt-8 max-w-2xl text-white/60 leading-relaxed">
        A modular, small-scale search engine in C designed to crawl, index, and query web content within a specific domain. This project focused on low-level systems programming, requiring precise manual memory management and the implementation of custom data structures to handle large-scale web data.
      </p>

      <div className="mt-8 max-w-2xl space-y-6">
        <div>
          <p className="text-white font-medium">Modular Architecture</p>
          <p className="mt-1 text-white/60 leading-relaxed">Engineered three distinct sub-systems — a recursive Crawler, a file-based Indexer, and a ranked Querier — linked by a shared library of common utility modules.</p>
        </div>
        <div>
          <p className="text-white font-medium">Crawler Engine</p>
          <p className="mt-1 text-white/60 leading-relaxed">Developed a multi-threaded capable crawler that performs a depth-limited traversal of web domains, managing URL frontiers and internal page-writing to a standardized directory format.</p>
        </div>
        <div>
          <p className="text-white font-medium">Inverted Indexer</p>
          <p className="mt-1 text-white/60 leading-relaxed">Built a high-performance indexer that maps unique word occurrences to document IDs using a custom hash table and linked list architecture, optimizing for fast retrieval during search operations.</p>
        </div>
        <div>
          <p className="text-white font-medium">Ranked Querier</p>
          <p className="mt-1 text-white/60 leading-relaxed">Implemented a query processor that parses complex boolean logic (AND/OR operators) and ranks results based on frequency scores, delivering the most relevant pages to the user.</p>
        </div>
        <div>
          <p className="text-white font-medium">Robust Testing & Memory Safety</p>
          <p className="mt-1 text-white/60 leading-relaxed">Utilized Valgrind to ensure zero memory leaks across thousands of lines of C code and authored automated Bash scripts for regression testing and edge-case validation.</p>
        </div>
      </div>

    </div>
  )
}
