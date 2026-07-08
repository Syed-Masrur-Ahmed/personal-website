export default function NationalLawReview() {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight">The National Law Review</h1>
      <p className="mt-4 text-white/40 text-sm uppercase tracking-widest">Experience</p>
      <div className="mt-2 flex flex-wrap items-center gap-2 md:gap-4 text-white/50 text-sm">
        <span>Highland Park, IL (Remote)</span>
        <span>·</span>
        <span>Software Engineering Intern</span>
        <span>·</span>
        <span>June 2026 – Present</span>
      </div>
      <p className="mt-8 max-w-2xl text-white/60 leading-relaxed">
        At the National Law Review, I operate as a full-stack engineer spearheading the development of a centralized public notices directory. My work spans the entire stack, from engineering robust Python data ingestion pipelines to building responsive, accessible frontend interfaces for the New Hampshire governing body. I focus on bridging fragmented local government data into a unified, intuitive platform while architecting defensive infrastructure to protect proprietary content.
      </p>

      <div className="mt-8 max-w-2xl">
        <p className="text-white font-medium">Public Notices Directory</p>
        <p className="mt-1 text-white/60 leading-relaxed">This initiative consolidates unstructured legal and civic data from various municipal government websites into a centralized, searchable Drupal platform. By automating data aggregation and wrapping it in a clean UI, the project aims to modernize how citizens and policymakers interact with critical public information.</p>
      </div>

      <div className="mt-8 max-w-2xl space-y-6">
        <div>
          <p className="text-white font-medium">Full-Stack Platform Development</p>
          <p className="mt-1 text-white/60 leading-relaxed">Bridged custom PHP backend logic with responsive frontend components within the Drupal ecosystem, ensuring a seamless, accessible, and intuitive user interface for navigating massive public datasets.</p>
        </div>
        <div>
          <p className="text-white font-medium">Automated Scraping Workflows</p>
          <p className="mt-1 text-white/60 leading-relaxed">Engineered custom Python pipelines to systematically extract, clean, and standardize disparate public notice data across highly varied municipal web endpoints.</p>
        </div>
        <div>
          <p className="text-white font-medium">Data Migration &amp; Optimization</p>
          <p className="mt-1 text-white/60 leading-relaxed">Automated the Extraction, Transformation, and Loading (ETL) of unstructured information, optimizing relational database schemas to serve heavy data payloads quickly to the client side.</p>
        </div>
        <div>
          <p className="text-white font-medium">Anti-Scraping Architecture</p>
          <p className="mt-1 text-white/60 leading-relaxed">Given the high value of aggregated legal data, I designed and implemented backend content protection strategies to secure the directory against frontier AI models and aggressive bot networks.</p>
        </div>
      </div>
    </div>
  )
}
