const BOKEH = [
  { size: 10, left: '14%', top: '18%', delay: 0.2, duration: 4.2 },
  { size: 7, left: '82%', top: '14%', delay: 1.1, duration: 3.6 },
  { size: 9, left: '88%', top: '62%', delay: 0.6, duration: 4.8 },
  { size: 6, left: '8%', top: '70%', delay: 1.8, duration: 3.9 },
  { size: 8, left: '48%', top: '10%', delay: 0.9, duration: 4.4 },
  { size: 6, left: '60%', top: '85%', delay: 1.4, duration: 3.4 },
  { size: 11, left: '22%', top: '46%', delay: 0.4, duration: 5.2 },
  { size: 7, left: '75%', top: '40%', delay: 2.1, duration: 4.1 },
]

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true" style={{ background: 'var(--cream)' }}>
      <div
        className="absolute rounded-full blob blob-a"
        style={{
          width: '90vw', height: '90vw', maxWidth: 640, maxHeight: 640,
          left: '-28%', top: '-30%',
          background: 'radial-gradient(circle, var(--sky-light), transparent 68%)',
          filter: 'blur(32px)',
        }}
      />
      <div
        className="absolute rounded-full blob blob-b"
        style={{
          width: '78vw', height: '78vw', maxWidth: 580, maxHeight: 580,
          right: '-24%', top: '-12%',
          background: 'radial-gradient(circle, var(--sky), transparent 70%)',
          filter: 'blur(34px)',
          opacity: 0.85,
        }}
      />
      <div
        className="absolute rounded-full blob blob-c"
        style={{
          width: '72vw', height: '72vw', maxWidth: 540, maxHeight: 540,
          left: '-20%', bottom: '-26%',
          background: 'radial-gradient(circle, var(--mountain-2), transparent 70%)',
          filter: 'blur(38px)',
          opacity: 0.5,
        }}
      />
      <div
        className="absolute rounded-full blob blob-d"
        style={{
          width: '58vw', height: '58vw', maxWidth: 400, maxHeight: 400,
          right: '-16%', bottom: '-18%',
          background: 'radial-gradient(circle, var(--yellow-soft), transparent 72%)',
          filter: 'blur(30px)',
          opacity: 0.6,
        }}
      />
      <div
        className="absolute rounded-full blob blob-e"
        style={{
          width: '46vw', height: '46vw', maxWidth: 320, maxHeight: 320,
          left: '30%', top: '32%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.75), transparent 72%)',
          filter: 'blur(26px)',
          opacity: 0.6,
        }}
      />

      {/* slow rotating warm highlight sweep for a touch of shimmer */}
      <div
        className="absolute rounded-full sweep"
        style={{
          width: '140vw', height: '140vw', left: '-20vw', top: '-20vw',
          background: 'conic-gradient(from 0deg, transparent 0deg, rgba(246,201,40,0.12) 60deg, transparent 140deg, rgba(169,195,214,0.12) 220deg, transparent 320deg)',
        }}
      />

      {/* floating bokeh dots */}
      {BOKEH.map((b, i) => (
        <span
          key={i}
          className="absolute rounded-full bokeh"
          style={{
            width: b.size, height: b.size,
            left: b.left, top: b.top,
            background: i % 3 === 0 ? 'var(--yellow)' : 'var(--white)',
            opacity: 0.7,
            boxShadow: '0 0 10px rgba(255,255,255,0.6)',
            animation: `bokehFloat ${b.duration}s ease-in-out ${b.delay}s infinite`,
          }}
        />
      ))}

      {/* subtle grain for warmth and texture */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.045, mixBlendMode: 'overlay' }}>
        <filter id="aurora-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#aurora-grain)" />
      </svg>

      <style>{`
        @keyframes driftA{
          0%, 100%{ transform: translate(0, 0) scale(1); }
          50%{ transform: translate(3%, 4%) scale(1.06); }
        }
        @keyframes driftB{
          0%, 100%{ transform: translate(0, 0) scale(1); }
          50%{ transform: translate(-4%, 3%) scale(1.05); }
        }
        @keyframes driftC{
          0%, 100%{ transform: translate(0, 0) scale(1); }
          50%{ transform: translate(3%, -3%) scale(1.07); }
        }
        @keyframes driftD{
          0%, 100%{ transform: translate(0, 0) scale(1); }
          50%{ transform: translate(-3%, -4%) scale(1.05); }
        }
        @keyframes driftE{
          0%, 100%{ transform: translate(-50%, -50%) scale(1); }
          50%{ transform: translate(-46%, -54%) scale(1.1); }
        }
        @keyframes spinSlow{
          from{ transform: rotate(0deg); }
          to{ transform: rotate(360deg); }
        }
        @keyframes bokehFloat{
          0%, 100%{ transform: translateY(0) scale(1); opacity: 0.35; }
          50%{ transform: translateY(-14px) scale(1.25); opacity: 0.9; }
        }
        .blob-a{ animation: driftA 16s ease-in-out infinite; }
        .blob-b{ animation: driftB 19s ease-in-out infinite; }
        .blob-c{ animation: driftC 21s ease-in-out infinite; }
        .blob-d{ animation: driftD 17s ease-in-out infinite; }
        .blob-e{ animation: driftE 13s ease-in-out infinite; transform: translate(-50%,-50%); }
        .sweep{ animation: spinSlow 48s linear infinite; }
        @media (prefers-reduced-motion: reduce){
          .blob-a, .blob-b, .blob-c, .blob-d, .blob-e, .sweep, .bokeh{ animation: none; }
        }
      `}</style>
    </div>
  )
}
