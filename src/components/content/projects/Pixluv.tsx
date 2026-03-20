import Image from 'next/image'

export default function Pixluv() {
  return (
    <div>
      <h1 className="text-5xl font-bold tracking-tight">Pixluv</h1>
      <p className="mt-4 text-white/40 text-sm uppercase tracking-widest">Project · A Digital Detox for Pixel Artists</p>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-white/50 text-sm">
        <span>React Native</span>
        <span>·</span>
        <span>Expo</span>
        <span>·</span>
        <span>Node.js</span>
        <span>·</span>
        <span>PostgreSQL</span>
        <span>·</span>
        <span>AWS S3</span>
      </div>

      <div className="mt-10 flex items-center gap-4">
        <a href="https://github.com/dartmouth-cs52/project-pixluv" className="live-link" target="_blank">View the Source Code →</a>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4 max-w-2xl">
        <div className="rounded-lg overflow-hidden border border-white/10">
          <Image
            src="/projects/pixluv/image1-v2.png"
            alt="Pixluv screenshot 1"
            width={400}
            height={700}
            className="w-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden border border-white/10">
          <Image
            src="/projects/pixluv/image2.png"
            alt="Pixluv screenshot 2"
            width={400}
            height={700}
            className="w-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden border border-white/10">
          <Image
            src="/projects/pixluv/image3.png"
            alt="Pixluv screenshot 3"
            width={400}
            height={700}
            className="w-full object-cover"
          />
        </div>
      </div>

      <p className="mt-8 max-w-2xl text-white/60 leading-relaxed">
        I co-developed a mobile platform designed to bring back the "magic of the old internet" by prioritizing meaningful creation over mindless consumption. Pixluv acts as a digital detox for artists, replacing algorithmic feeds with intentional, grid-based creation and a supportive community centered around the craft of pixel art.
      </p>

      <div className="mt-8 max-w-2xl space-y-6">
        <div>
          <p className="text-white font-medium">Intentional Drawing Studio</p>
          <p className="mt-1 text-white/60 leading-relaxed">Engineered a high-performance drawing suite using React Native SVG and Reanimated, designed to encourage slow, deliberate creation through selectable grid sizes, custom palette management, and precise pixel-level editing.</p>
        </div>
        <div>
          <p className="text-white font-medium">Community-First Architecture</p>
          <p className="mt-1 text-white/60 leading-relaxed">Architected a Node.js and Express 5 backend with a PostgreSQL database to support a social ecosystem that values artistic discovery over engagement metrics, featuring a dynamic community feed and follower infrastructure.</p>
        </div>
        <div>
          <p className="text-white font-medium">Daily Creative Rituals</p>
          <p className="mt-1 text-white/60 leading-relaxed">Built a "Daily Challenge" engine that provides a single, focused drawing prompt each day. This system encourages consistent practice and community interaction without the pressure of infinite scrolling.</p>
        </div>
        <div>
          <p className="text-white font-medium">Secure Social Connectivity</p>
          <p className="mt-1 text-white/60 leading-relaxed">Developed a "Pixing" direct messaging system and a secure JWT-based authentication flow, utilizing Expo SecureStore and AWS S3 to ensure that artist data and creations are handled with modern security standards.</p>
        </div>
        <div>
          <p className="text-white font-medium">Mobile-First Craftsmanship</p>
          <p className="mt-1 text-white/60 leading-relaxed">Designed a responsive, touch-friendly UI that uses haptic feedback and retro-inspired typography to create a tactile, nostalgic experience for artists on the go.</p>
        </div>
      </div>

      <p className="mt-8 text-white/30 text-xs uppercase tracking-widest">
        Tech Stack: React Native 0.81, Expo 54, Node.js, Prisma 6, PostgreSQL, AWS S3, Cypress 14
      </p>
    </div>
  )
}
