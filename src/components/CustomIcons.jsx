export function InstagramIcon({ size = 20, strokeWidth = 1.8, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.9" fill={color} stroke="none" />
    </svg>
  )
}

export function FacebookIcon({ size = 20, strokeWidth = 1.8, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M15.5 8.5h-2a1.5 1.5 0 0 0-1.5 1.5v2h3.5l-.5 3H12v6.5h-3V15h-2.5v-3H9v-2.3C9 7.1 10.6 5.5 13.1 5.5H15.5z" />
    </svg>
  )
}
