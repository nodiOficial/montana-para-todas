import { ArrowRight } from 'lucide-react'

export default function SocialButton({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group flex items-center gap-4 rounded-[18px] px-5 py-3.5 transition-all duration-300"
      style={{
        background: 'var(--white)',
        boxShadow: '0 1px 2px rgba(38,63,80,0.04), 0 8px 20px -10px rgba(38,63,80,0.12)',
        border: '1px solid transparent',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.borderColor = 'var(--yellow-soft)'
        e.currentTarget.style.boxShadow = '0 1px 2px rgba(38,63,80,0.05), 0 16px 28px -12px rgba(38,63,80,0.18)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'transparent'
        e.currentTarget.style.boxShadow = '0 1px 2px rgba(38,63,80,0.04), 0 8px 20px -10px rgba(38,63,80,0.12)'
      }}
    >
      <span
        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ background: 'var(--cream-2)', color: 'var(--mountain)' }}
      >
        <Icon size={18} strokeWidth={1.8} />
      </span>
      <span className="flex-1 text-left text-[14px] font-medium" style={{ color: 'var(--dark)' }}>
        {label}
      </span>
      <ArrowRight
        size={17}
        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        style={{ color: 'var(--mountain)' }}
      />
    </a>
  )
}
