export default function HonorsAwards() {
  return (
    <div>
      <h1 className="text-5xl font-bold tracking-tight">Honors &amp; Awards</h1>
      <p className="mt-4 text-white/40 text-sm uppercase tracking-widest">Education</p>
      <p className="mt-8 text-white/60 leading-relaxed" style={{ maxWidth: '640px' }}>
        I have been recognized for academic excellence at Dartmouth College and on an international stage, with a specific focus on Mathematics, Machine Learning, and the Natural Sciences.
      </p>

      {/* Dartmouth */}
      <div style={{ marginTop: '3rem' }}>
        <p className="text-white/40 text-xs uppercase tracking-widest">Dartmouth College Distinctions</p>
        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '560px' }}>
          <div>
            <p className="text-white font-semibold">Rufus Choate Scholar</p>
            <p className="mt-1 text-white/60 leading-relaxed">Designated to the top 5% of the undergraduate class for achieving a standing of high academic honors.</p>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <p className="text-white font-semibold">Jack Byrne Scholar in Mathematics</p>
              <a href="https://math.dartmouth.edu/undergraduate/byrne-scholars/" target="_blank" rel="noreferrer" className="live-link">Learn more →</a>
            </div>
            <p className="mt-1 text-white/60 leading-relaxed">Awarded to a select group of students demonstrating exceptional potential and passion for the mathematical sciences.</p>
          </div>
          <div>
            <p className="text-white font-semibold">Citations for Academic Excellence</p>
            <p className="mt-1 text-white/60 leading-relaxed">Received formal recognition from faculty for outstanding performance and original contribution in Linear Algebra and Machine Learning.</p>
          </div>
        </div>
      </div>

      {/* International */}
      <div style={{ marginTop: '3rem' }}>
        <p className="text-white/40 text-xs uppercase tracking-widest">International Academic Achievements</p>
        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '560px' }}>
          <div>
            <p className="text-white font-semibold">Top in the World, Edexcel IAL Chemistry</p>
            <p className="mt-1 text-white/60 leading-relaxed">Achieved the highest examination score globally in the Pearson Edexcel International A-Level examinations.</p>
          </div>
          <div>
            <p className="text-white font-semibold">Top in Bangladesh, Edexcel IAL Further Mathematics</p>
            <p className="mt-1 text-white/60 leading-relaxed">Ranked 1st in the country for advanced mathematical theory, including complex variables, mechanics, and matrix algebra.</p>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <p className="text-white font-semibold">YES Program Scholar</p>
              <a href="https://www.yesprograms.org/" target="_blank" rel="noreferrer" className="live-link">Learn more →</a>
            </div>
            <p className="mt-1 text-white/60 leading-relaxed">Selected as a cultural ambassador for Bangladesh to the United States through the competitive Kennedy-Lugar Youth Exchange and Study program.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
