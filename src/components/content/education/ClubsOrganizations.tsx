export default function ClubsOrganizations() {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Clubs &amp; Organizations</h1>
      <p className="mt-4 text-white/40 text-sm uppercase tracking-widest">Education</p>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mt-10">
        <div className="w-full md:max-w-[560px] flex flex-col gap-6">
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
        <div className="flex-shrink-0 w-full md:w-[300px]">
          <div className="w-full" style={{ aspectRatio: '4/5' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/education/clubsorg/ss.png"
              alt="Street Soul"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <p className="mt-2 text-xs text-white/35 text-center">After my first dance show with Street Soul</p>
        </div>
      </div>
    </div>
  )
}
