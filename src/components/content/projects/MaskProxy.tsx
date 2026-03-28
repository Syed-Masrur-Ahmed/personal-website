import Image from 'next/image'

export default function MaskProxy() {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight">MaskProxy</h1>
      <p className="mt-4 text-white/40 text-sm uppercase tracking-widest">Project · AI Privacy Middleware</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {['Rust', 'Cloudflare Pingora', 'ONNX Runtime', 'Python FastAPI', 'Next.js', 'Redis', 'LanceDB', 'Kubernetes', 'Docker'].map((tech) => (
          <span key={tech} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70 border border-white/20">{tech}</span>
        ))}
      </div>

      <div className="mt-10 flex items-center gap-4">
        <a href="https://github.com/Syed-Masrur-Ahmed/MaskProxy" className="live-link" target="_blank">View the Source Code →</a>
      </div>

      <div className="mt-8 max-w-2xl rounded-lg overflow-hidden border border-white/10">
        <Image
          src="/projects/maskproxy/image.png"
          alt="MaskProxy screenshot"
          width={800}
          height={500}
          className="w-full object-cover"
        />
      </div>

      <p className="mt-8 max-w-2xl text-white/60 leading-relaxed">
        Teams send sensitive data to cloud LLM providers every day without realizing it. Customer SSNs, medical records, production logs. Once a prompt hits OpenAI or Anthropic, you've lost control. GDPR violations, HIPAA breaches. I'm building MaskProxy as a privacy middleware that intercepts LLM calls, detects and masks PII before sending anything to the cloud, then restores original values in responses. Sensitive prompts can be routed to local models instead.
      </p>

      <div className="mt-8 max-w-2xl space-y-6">
        <div>
          <p className="text-white font-medium">PII Detection & Masking</p>
          <p className="mt-1 text-white/60 leading-relaxed">Built a Rust proxy using Cloudflare Pingora that intercepts LLM API calls. NER detection (GLiNER/DeBERTa-v3) identifies names, emails, phone numbers, SSNs and replaces them with deterministic tokens like [PERSON_1]. Redis stores the real-to-placeholder mappings with session-scoped TTL. When responses arrive, the proxy rehydrates placeholders back to original values before returning to the application.</p>
        </div>
        <div>
          <p className="text-white font-medium">Semantic Routing</p>
          <p className="mt-1 text-white/60 leading-relaxed">Uses BGE-Small embeddings and LanceDB to route prompts intelligently. Sensitive requests containing medical or personal data stay local, processed by Phi-3.5 Mini. General queries route to cloud providers. No unnecessary exposure to third-party APIs.</p>
        </div>
        <div>
          <p className="text-white font-medium">Production Observability</p>
          <p className="mt-1 text-white/60 leading-relaxed">End-to-end OpenTelemetry instrumentation traces requests through masking and rehydration. Helm charts and Kubernetes manifests for DaemonSet sidecars, StatefulSet Redis, and proper service communication.</p>
        </div>
        <div>
          <p className="text-white font-medium">Analytics Dashboard</p>
          <p className="mt-1 text-white/60 leading-relaxed">Next.js frontend with real-time monitoring of proxied requests, routing decisions, and PII detection. Built with Shadcn/UI and TanStack Query for live insights into what's being masked and where requests flow.</p>
        </div>
        <div>
          <p className="text-white font-medium">Streaming & Error Handling</p>
          <p className="mt-1 text-white/60 leading-relaxed">Careful SSE response handling that buffers and rehydrates tokens across chunk boundaries without corrupting output. Graceful fallbacks: if the local model is down, requests are rejected rather than silently forwarded unmasked.</p>
        </div>
      </div>

    </div>
  )
}
