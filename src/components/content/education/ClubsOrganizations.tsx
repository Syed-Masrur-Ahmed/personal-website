export default function ClubsOrganizations() {
  return (
    <div>
      <h1 className="text-5xl font-bold tracking-tight">Clubs &amp; Organizations</h1>
      <p className="mt-4 text-white/40 text-sm uppercase tracking-widest">Education</p>

      <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', marginTop: '2.5rem' }}>
        <div style={{ maxWidth: '560px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p className="text-white/60 leading-relaxed">
            Outside of the classroom, I&apos;ve stayed connected to a few different corners of the Dartmouth community. On the technical side, I&apos;ve been involved with the Quantitative Finance Club and the Student Blockchain group to keep an eye on how math and cryptography are shaping finance. I also joined the Tech Consulting Group to see how engineering logic is applied to client-facing problems.
          </p>
          <p className="text-white/60 leading-relaxed">
            I&apos;ve also explored a few broader perspectives as a Great Issues Scholar through the Dickey Center, looking into global policy and security. Through the Sustainability Action Program (SAP), I&apos;ve specifically focused on the environmental impact of computing, working on a project regarding AI water usage and awareness. This also led to engaging with the Dartmouth Provost to discuss the evolving role and ethics of AI use in the classroom.
          </p>
          <p className="text-white/60 leading-relaxed">
            To balance things out, I&apos;m a member of Street Soul, Dartmouth&apos;s street dance group. It&apos;s a creative outlet and a completely different way to collaborate with a team away from a screen or a textbook.
          </p>
        </div>

        {/* Image */}
        <div style={{ flexShrink: 0 }}>
          <div style={{ width: 300, aspectRatio: '4/5' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/education/clubsorg/ss.png"
              alt="Street Soul"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }}
            />
          </div>
          <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', textAlign: 'center' }}>After my first dance show with Street Soul</p>
        </div>
      </div>
    </div>
  )
}
