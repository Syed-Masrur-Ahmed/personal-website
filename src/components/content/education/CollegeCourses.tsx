'use client'

import { useState } from 'react'

type Course = {
  code: string
  name: string
  term: string
  description: string
  topics: string[]
  projects?: string[]
  imageUrl?: string
  videoUrl?: string
  caption?: string
  keepAspectRatio?: boolean
}

type Section = {
  label: string
  courses: Course[]
}

const sections: Section[] = [
  {
    label: 'Computer Science',
    courses: [
      {
        code: 'COSC 51',
        name: 'Computer Architecture',
        term: 'Winter 2026',
        description:
          'Digital logic, instruction set architecture, pipelining, memory hierarchy, and I/O. Includes hands-on projects in assembly language and hardware description.',
        topics: ['Digital logic', 'ISA & assembly', 'Pipelining', 'Memory hierarchy'],
        projects: ['Fully functional Y86 microprocessor on Logisim with I/O support, privilege levels, and exception handling'],
        imageUrl: '/education/courses/cs51.png',
        caption: 'A snippet of the Y86 microarchitecture circuit',
      },
      {
        code: 'COSC 52',
        name: 'Full-Stack Web Development',
        term: 'Winter 2026',
        description:
          'An introduction to full-stack web application development, integrating numerous techniques and technologies to build modern web applications. Topics include static pages, Internet protocols, layout, markup, event-driven asynchronous programming, deployment, security, scalability, and user experience. Projects include building real-time web applications with front-end UIs and server-side APIs.',
        topics: ['Event-driven async programming', 'Front-end UI & server-side APIs', 'Security & scalability', 'Deployment & UX'],
        projects: ['Buzzfeed-style quiz app', 'Collaborative sticky notes app', 'YouTube clone', 'Pixluv: a social media app for pixel art and promoting digital detox'],
        videoUrl: '/education/courses/cs52.mov',
        caption: 'Collaborative note taking app',
      },
      {
        code: 'COSC 30',
        name: 'Discrete Mathematics in Computer Science',
        term: 'Fall 2025',
        description:
          'Mathematical foundations of computer science: logic, sets, relations, graphs, combinatorics, and introductory probability. Heavy emphasis on proof writing and formal reasoning.',
        topics: ['Propositional logic', 'Graph theory', 'Combinatorics', 'Proof techniques'],
      },
      {
        code: 'COSC 50',
        name: 'Software Design and Implementation',
        term: 'Spring 2025',
        description:
          'Systems programming in C. Topics include memory management, file I/O, shell scripting, debugging, and the design of large software projects using modular architecture.',
        topics: ['C programming', 'Memory management', 'Unix tools', 'Modular design'],
        projects: ['Tiny search engine', 'Terminal-based multiplayer dungeon crawler game'],
        imageUrl: '/education/courses/cs50.png',
        caption: 'Multiplayer dungeon crawler game in C',
      },
      {
        code: 'COSC 74',
        name: 'Machine Learning and Statistical Data Analysis',
        term: 'Spring 2025',
        description:
          'Supervised and unsupervised learning methods with applications. Covers linear and logistic regression, decision trees, SVMs, neural networks, k-means clustering, and dimensionality reduction.',
        topics: ['Linear regression', 'Neural networks', 'SVMs', 'Dimensionality reduction'],
        projects: ['Semantic analysis model that predicts Amazon star ratings based on review text'],
      },
      {
        code: 'COSC 10',
        name: 'Problem Solving via Object-Oriented Programming',
        term: 'Winter 2025',
        description:
          'Object-oriented programming in Java with a focus on data structures and algorithm design. Topics include linked lists, trees, hash maps, and basic sorting algorithms.',
        topics: ['Java OOP', 'Linked lists & trees', 'Hash maps', 'Sorting algorithms'],
        projects: ['Webcam GUI paint app', 'Huffman encoding file compressor', 'Part-of-speech tagger using Hidden Markov Models', 'Collaborative drawing app'],
        imageUrl: '/education/courses/cs10.png',
        caption: 'Collaborative drawing app interface',
        keepAspectRatio: true,
      },
    ],
  },
  {
    label: 'Mathematics',
    courses: [
      {
        code: 'MATH 35',
        name: 'Real Analysis',
        term: 'Winter 2026',
        description:
          'Rigorous treatment of real number theory, sequences, series, continuity, differentiation, and integration. Emphasis on epsilon-delta proofs and mathematical rigor.',
        topics: ['Sequences & series', 'Continuity', 'Differentiability', 'Riemann integration'],
      },
      {
        code: 'MATH 23',
        name: 'Differential Equations',
        term: 'Spring 2025',
        description:
          'Ordinary differential equations and their applications. Topics include first-order equations, second-order linear equations, systems of ODEs, Laplace transforms, and series solutions.',
        topics: ['First-order ODEs', 'Linear systems', 'Laplace transforms', 'Series solutions'],
      },
      {
        code: 'MATH 22',
        name: 'Linear Algebra with Applications',
        term: 'Winter 2025',
        description:
          'Systems of linear equations, matrix algebra, determinants, vector spaces, linear transformations, eigenvalues, and an introduction to inner product spaces. Received a Citation for Academic Excellence.',
        topics: ['Matrix algebra', 'Vector spaces', 'Eigenvalues & eigenvectors', 'Linear transformations'],
      },
      {
        code: 'MATH 11',
        name: 'Multivariable Calculus',
        term: 'Fall 2024',
        description:
          'Calculus of several variables covering partial derivatives, multiple integrals, vector fields, line and surface integrals, and the theorems of Green, Stokes, and Gauss.',
        topics: ['Partial derivatives', 'Multiple integrals', 'Vector fields', 'Stokes & Gauss theorems'],
      },
    ],
  },
  {
    label: 'Other',
    courses: [
      {
        code: 'COLT 40.07',
        name: 'Video Games and the Meaning of Life',
        term: 'Spring 2025',
        description:
          'An interdisciplinary course that explores the modern human condition through the stories, designs, and soundscapes of digital games: from the perils of obedience (Hannah Arendt and The Stanley Parable) to the metaphors of illness (Susan Sontag and That Dragon, Cancer), from the deathless dreams of pacifism (Undertale) to the transnational rise of today\'s billion-dollar e-Sports industry (League of Legends). All students are welcome; no gaming or musical experience needed.',
        topics: ['Philosophy & game design', 'Illness & metaphor', 'Pacifism & narrative', 'e-Sports & globalization'],
      },
      {
        code: 'ASCL 07.04',
        name: 'First-year Seminar: Singers as Social Symbols in Asia and Beyond',
        term: 'Winter 2025',
        description:
          'Around the world and across time, professional singers and their songs stand at the crossroads of differing politics and perspectives. This writing-based seminar explores how a singer can symbolize different things to different people, giving rise to discussions of a range of cultural politics. Examining case studies from pop superstar Teresa Teng to Indian legend Lata Mangeshkar, from Beyoncé to BTS, we focus on how interdisciplinary scholars of popular music develop, test, and refine ideas through writing, conduct research, build arguments, revise drafts, and engage with readers.',
        topics: ['Race, gender & class in performance', 'Singer as social symbol', 'Academic writing & revision', 'Popular music studies'],
      },
      {
        code: 'COLT 1',
        name: 'Introduction to Comparative Literature',
        term: 'Fall 2024',
        description:
          'An introduction to the study of literature across languages and cultures. Examines foundational texts from multiple traditions alongside contemporary critical theory and methods of close reading.',
        topics: ['Close reading', 'Critical theory', 'World literatures', 'Textual analysis'],
      },
    ],
  },
]

function CourseRow({ course }: { course: Course }) {
  const hasMedia = !!(course.imageUrl || course.videoUrl)
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Header row */}
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', flex: 1, minWidth: 0 }}>
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', fontFamily: 'monospace', whiteSpace: 'nowrap', width: '6rem', flexShrink: 0 }}>
            {course.code}
          </span>
          <span style={{ color: 'white', fontWeight: 500, fontSize: '0.9375rem' }}>
            {course.name}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8125rem' }}>{course.term}</span>
          <span
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.875rem',
              transition: 'transform 0.2s',
              transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
              display: 'inline-block',
              lineHeight: 1,
            }}
          >
            +
          </span>
        </div>
      </button>

      {/* Expanded content */}
      {open && (
        <div
          style={{
            paddingBottom: '2rem',
            display: 'grid',
            gridTemplateColumns: hasMedia ? '1fr 1fr' : '1fr',
            gap: '2rem',
            maxWidth: hasMedia ? '760px' : '560px',
          }}
        >
          {/* Left: text */}
          <div>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              {course.description}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
              Topics Covered
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {course.topics.map((t) => (
                <li key={t} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.3)', flexShrink: 0, display: 'inline-block' }} />
                  {t}
                </li>
              ))}
            </ul>

            {course.projects && course.projects.length > 0 && (
              <div style={{ marginTop: '1.5rem' }}>
                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                  Projects
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {course.projects.map((p) => (
                    <li key={p} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.3)', flexShrink: 0, display: 'inline-block', marginTop: '0.45rem' }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right: media */}
          {hasMedia && (
            <div style={{ alignSelf: 'start' }}>
              <div
                style={{
                  borderRadius: '0.5rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  ...(!course.videoUrl && !course.keepAspectRatio ? { aspectRatio: '4/3' } : {}),
                }}
              >
                {course.videoUrl ? (
                  <video
                    src={course.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={course.imageUrl}
                    alt={course.name}
                    style={{ width: '100%', height: course.keepAspectRatio ? 'auto' : '100%', objectFit: course.keepAspectRatio ? undefined : 'cover', display: 'block' }}
                  />
                )}
              </div>
              {course.caption && (
                <p style={{ marginTop: '0.5rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', textAlign: 'center' }}>
                  {course.caption}
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function CollegeCourses() {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight">College Courses</h1>
      <p className="mt-4 text-white/40 text-sm uppercase tracking-widest">Dartmouth College</p>
      <p style={{ marginTop: '2rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontSize: '0.9375rem' }}>
        I have taken various courses across Computer Science and Mathematics alongside some interesting liberal arts courses, which are a staple at Dartmouth.
      </p>

      {sections.map((section) => (
        <div key={section.label} style={{ marginTop: '3rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.25rem' }}>
            {section.label}
          </p>
          <div>
            {section.courses.map((course) => (
              <CourseRow key={course.code} course={course} />
            ))}
            {/* bottom border */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} />
          </div>
        </div>
      ))}
    </div>
  )
}
