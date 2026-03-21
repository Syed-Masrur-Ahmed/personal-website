export default function MLResearch() {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight">ML Research</h1>
      <p className="mt-4 text-white/40 text-sm uppercase tracking-widest">Experience</p>
      <div className="mt-2 flex flex-wrap items-center gap-2 md:gap-4 text-white/50 text-sm">
        <span>Dartmouth College, Department of Mathematics</span>
        <span>·</span>
        <span>Research Assistant</span>
        <span>·</span>
        <span>March 2025 – Present</span>
      </div>
      <p className="mt-8 text-white/60 leading-relaxed" style={{ maxWidth: '600px' }}>
        I am currently investigating the capacity of transformers to learn in-context parameters of continuous stochastic processes. My research focuses on whether a causally-masked transformer can identify hidden Ornstein-Uhlenbeck (OU) parameters (θ, σ) purely from observation, without explicit supervision of the process variables. This work bridges the gap between traditional statistical modeling and modern neural architecture.
      </p>
      <div className="mt-6" style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="https://github.com/Syed-Masrur-Ahmed/transformer-causal-dynamics" target="_blank" rel="noopener noreferrer" className="live-link">
          GitHub →
        </a>
        <a href="https://transformer-causal-dynamics.onrender.com/" target="_blank" rel="noopener noreferrer" className="live-link">
          Live Project →
        </a>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mt-8">
        <div className="w-full md:max-w-[480px] flex flex-col gap-6">
          <div>
            <p className="text-white font-medium">Transformer Architecture Design</p>
            <p className="mt-1 text-white/60 leading-relaxed">Engineered a custom transformer from scratch in PyTorch, implementing a novel predictive target centered on the log moment-generating function (MGF) of next-step distributions.</p>
          </div>
          <div>
            <p className="text-white font-medium">Hermite Polynomial Embedding</p>
            <p className="mt-1 text-white/60 leading-relaxed">Optimized model convergence by lifting scalar inputs into a Hermite polynomial basis, providing a natural orthogonal representation for Gaussian-distributed data.</p>
          </div>
          <div>
            <p className="text-white font-medium">Stochastic Process Modeling</p>
            <p className="mt-1 text-white/60 leading-relaxed">Developed a training pipeline to evaluate the model's ability to extract conditional mean and variance from context, moving beyond simple scalar prediction to full distributional information.</p>
          </div>
          <div>
            <p className="text-white font-medium">Rigorous Predictive Testing</p>
            <p className="mt-1 text-white/60 leading-relaxed">Conducted bias-variance decomposition of prediction errors over a broad grid of (θ, L) values to validate the model's in-context learning efficiency.</p>
          </div>
          <div>
            <p className="text-white font-medium">Karen E. Wetterhahn Science Symposium</p>
            <p className="mt-1 text-white/60 leading-relaxed">Presented research findings at Dartmouth's premier undergraduate science symposium, communicating results across stochastic modeling, transformer design, and in-context learning to a broad academic audience.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-[300px] flex-shrink-0">
          <div className="w-full aspect-video">
            <img
              src="/experience/mlresearch/plot.png"
              alt="Research plot"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full aspect-video">
            <img
              src="/experience/mlresearch/conference.png"
              alt="Wetterhahn Science Symposium"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
