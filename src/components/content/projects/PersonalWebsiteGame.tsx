import Image from 'next/image'

export default function PersonalWebsiteGame() {
  return (
    <div>
      <h1 className="text-5xl font-bold tracking-tight">Personal Website Game</h1>
      <p className="mt-4 text-white/40 text-sm uppercase tracking-widest">Project</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {['JavaScript (ES6+)', 'HTML5 Canvas', 'CSS3', 'DOM API'].map((tech) => (
          <span key={tech} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70 border border-white/20">{tech}</span>
        ))}
      </div>

      <div className="mt-10 flex items-center gap-4">
        <a href="https://syed-masrur-ahmed.github.io/Personal-Website-Game/" className="live-link" target="_blank">Play the Game →</a>
        <a href="https://github.com/Syed-Masrur-Ahmed/Personal-Website-Game" className="live-link" target="_blank">View the Source Code →</a>
      </div>

      <div className="mt-8 max-w-2xl rounded-lg overflow-hidden border border-white/10">
        <Image
          src="/projects/personal-website-game/image.png"
          alt="Personal Website Game screenshot"
          width={800}
          height={450}
          className="w-full object-cover"
        />
      </div>

      <p className="mt-8 max-w-2xl text-white/60 leading-relaxed">
        Before building my current portfolio, I developed this interactive 2D island as a way to learn the fundamentals of web development through a medium I love. I wanted to turn the traditional "About Me" page into a nostalgic RPG experience, forcing myself to solve complex logic problems without the help of modern frameworks or game engines.
      </p>

      <div className="mt-8 max-w-2xl space-y-6">
        <div>
          <p className="text-white font-medium">Custom Game Engine</p>
          <p className="mt-1 text-white/60 leading-relaxed">Architected the core engine in Vanilla JavaScript, implementing delta time movement to ensure consistent player speed across different monitor refresh rates and browsers.</p>
        </div>
        <div>
          <p className="text-white font-medium">Dynamic Dialogue System</p>
          <p className="mt-1 text-white/60 leading-relaxed">Engineered a custom text-parsing engine that supports a typewriter effect, colored text tags, and clickable hyperlinks directly within the game's HTML5 Canvas.</p>
        </div>
        <div>
          <p className="text-white font-medium">Responsive Control Schema</p>
          <p className="mt-1 text-white/60 leading-relaxed">Developed a hybrid input system featuring keyboard listeners for desktop and a custom-built virtual D-pad with pinch-to-zoom support for mobile devices.</p>
        </div>
        <div>
          <p className="text-white font-medium">Collision and NPC Logic</p>
          <p className="mt-1 text-white/60 leading-relaxed">Implemented tile-based collision detection and a state-based following system for an NPC companion that tracks the player's movement across the map.</p>
        </div>
      </div>

    </div>
  )
}
