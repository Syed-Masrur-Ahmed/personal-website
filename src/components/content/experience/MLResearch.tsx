export default function MLResearch() {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight">ML Research</h1>
      <p className="mt-4 text-white/40 text-sm uppercase tracking-widest">Experience</p>
      <div className="mt-2 flex flex-wrap items-center gap-2 md:gap-4 text-white/50 text-sm">
        <span>Dartmouth College, Department of Mathematics</span>
        <span>·</span>
        <span>Research Assistant (Part-time)</span>
        <span>·</span>
        <span>March 2025 – Present</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mt-8">
        <div className="w-full md:max-w-[480px]">
          <p className="text-white text-xl font-semibold">Learning to Use Positional Information in Attention Layers</p>
          <p className="mt-1 text-white/50 text-sm">with Prof. Ethan Levien (Dartmouth) and Prof. Andrei A. Klishin (University of Hawaiʻi at Mānoa)</p>

          <p className="mt-4 text-white/60 leading-relaxed">
            Transformers have no inherent sense of word order; they recover it entirely from positional encodings added to token embeddings, which attention must then decode. Despite how central this is to every modern language model, the mechanism is poorly understood at a rigorous level. This project develops an exact, analytic account of how a single attention layer implements position-based operations, using the left-shift operator (attending to the token δ positions back) as an analytically tractable model system, and validates the theory against trained networks. The work is in preparation as a research paper.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed">
            The theory gives an exact construction: a block-diagonal interaction matrix built from 2×2 rotations, one per frequency of the sinusoidal encoding. In terms of the embedding dimension d, sequence length l, and the encoding&apos;s frequency base M, it also identifies a sharp phase transition governed by the intensive parameter ξ = d / ln M: above ξ = 2 the operation succeeds, below it the operation provably fails as d grows. Finite-size and low-rank extensions explain why this transition looks gradual in practice and show it survives when only the highest-frequency components are kept.
          </p>

          <div className="mt-6" style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://github.com/Syed-Masrur-Ahmed/positional-encoding-experiments" target="_blank" rel="noopener noreferrer" className="live-link">
              GitHub →
            </a>
          </div>

          <div className="mt-6 flex flex-col gap-6">
            <div>
              <p className="text-white font-medium">From-Scratch Attention Framework</p>
              <p className="mt-1 text-white/60 leading-relaxed">Built a PyTorch research framework for training and analyzing single attention heads on the shift task, with all attention mathematics implemented explicitly (no high-level attention or training abstractions) and fully config-driven for reproducibility.</p>
            </div>
            <div>
              <p className="text-white font-medium">Phase-Transition Experiments</p>
              <p className="mt-1 text-white/60 leading-relaxed">Swept the theory&apos;s intensive parameters ξ and α, by varying the encoding base M and sequence length l, to test where the predicted transition appears numerically, and connected the observed finite-size behavior to the theory&apos;s asymptotic predictions and its ~1/d plateau scaling.</p>
            </div>
            <div>
              <p className="text-white font-medium">Rank-Bottleneck & SVD Analysis</p>
              <p className="mt-1 text-white/60 leading-relaxed">Showed empirically that a trained head needs only a small, fixed internal dimension to implement the shift, independent of embedding size, with gradient descent concentrating the learned solution in the highest-frequency components. Decomposed the learned interaction matrices via SVD to measure effective rank and alignment with the theory&apos;s analytical matrix, and found that effective rank tracks the theory&apos;s ξ = 2 phase boundary, an empirical signature of the transition in trained models.</p>
            </div>
            <div>
              <p className="text-white font-medium">Singular-Vector Ablation</p>
              <p className="mt-1 text-white/60 leading-relaxed">Confirmed functionally that only about four directions carry the task loss, sharpening the efficiency result independently of any threshold choice.</p>
            </div>
            <div>
              <p className="text-white font-medium">Contributed to the Theory</p>
              <p className="mt-1 text-white/60 leading-relaxed">Identified and documented several corrections during the analysis, including a normalization inconsistency between the standard attention scaling and the paper&apos;s partition-function formulation, and produced a corrections writeup for the group.</p>
            </div>
            <div>
              <p className="text-white font-medium">Karen E. Wetterhahn Science Symposium</p>
              <p className="mt-1 text-white/60 leading-relaxed">Presented earlier research from this project (on whether a causally-masked transformer can learn in-context parameters of an Ornstein-Uhlenbeck stochastic process) at Dartmouth&apos;s premier undergraduate science symposium, before the project&apos;s focus shifted to the positional-encoding theory above.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full md:w-[300px] flex-shrink-0">
          <img
            src="/experience/mlresearch/plot.png"
            alt="Research plot"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="/experience/mlresearch/conference.png"
            alt="Wetterhahn Science Symposium"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}
