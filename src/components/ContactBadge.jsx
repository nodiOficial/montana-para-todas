export default function ContactBadge({ href, icon: Icon, label, value }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300"
      style={{ background: 'var(--cream-2)', border: '1px solid rgba(38,63,80,0.06)' }}
      onMouseEnter={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = 'var(--yellow-soft)' }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--cream-2)'; e.currentTarget.style.borderColor = 'rgba(38,63,80,0.06)' }}
    >
      <span className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'var(--white)', color: 'var(--mountain)' }}>
        <Icon size={16} strokeWidth={1.8} />
      </span>
      <span className="flex flex-col text-left min-w-0">
        <span className="text-[10px] font-medium tracking-wide uppercase" style={{ color: 'var(--mountain)', opacity: 0.8 }}>
          {label}
        </span>
        <span className="text-[13px] font-medium truncate" style={{ color: 'var(--dark)' }}>
          {value}
        </span>
      </span>
    </a>
  )
}
