import { motion } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'
import logo from './assets/logo.jpg'
import AuroraBackground from './components/AuroraBackground'
import SocialButton from './components/SocialButton'
import ContactBadge from './components/ContactBadge'
import { InstagramIcon, FacebookIcon } from './components/CustomIcons'

import { useState } from 'react'

const INSTAGRAM_URL = 'https://www.instagram.com/montanaparatodas_qro/?hl=es'
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61593847520515'
const PHONE = '442 536 2382'
const PHONE_HREF = 'tel:+524425362382'
const EMAIL = 'rubioromosusana@gmail.com'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const softLabel = { color: 'var(--mountain)', textShadow: '0 1px 2px rgba(255,255,255,0.5)' }
const softDark = { color: 'var(--dark)', textShadow: '0 1px 3px rgba(255,255,255,0.55)' }

export default function App() {
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)

      setEmailCopied(true)

      setTimeout(() => {
        setEmailCopied(false)
      }, 2000)
    } catch (error) {
      console.error('No se pudo copiar el correo:', error)
    }
  }

  return (
    <div
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100svh', background: 'var(--cream)' }}
    >
      <AuroraBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full flex flex-col items-center text-center px-7 py-10"
        style={{ maxWidth: 400 }}
      >
        <motion.div variants={item} className="relative">
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(246,201,40,0.55), transparent 68%)', filter: 'blur(12px)' }}
            animate={{ opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.img
            src={logo}
            alt="Montaña para Todas"
            className="relative rounded-full"
            style={{ width: 92, height: 92, boxShadow: '0 14px 28px -10px rgba(38,63,80,0.45)', border: '3px solid var(--white)' }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        <motion.span
          variants={item}
          className="mt-5 text-[11px] font-medium tracking-[0.24em] uppercase"
          style={softLabel}
        >
          Aventura · Naturaleza · Comunidad
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display mt-3 max-w-xs"
          style={{ fontSize: 'clamp(1.6rem, 7vw, 2.2rem)', fontWeight: 500, lineHeight: 1.25, ...softDark }}
        >
          Hay una <span className="font-accent" style={{ color: 'var(--mountain)', textShadow: softDark.textShadow }}>montaña</span> esperando por ti.
        </motion.h1>

        <motion.svg variants={item} width="70" height="10" viewBox="0 0 64 10" className="mt-3" aria-hidden="true">
          <path d="M2 6 C 14 1, 22 9, 32 5 C 42 1, 50 9, 62 4" stroke="var(--yellow)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        </motion.svg>

        <motion.div variants={item} className="w-full mt-8 flex flex-col gap-2.5">
          <SocialButton href={INSTAGRAM_URL} icon={InstagramIcon} label="Síguenos en Instagram" />
          <SocialButton href={FACEBOOK_URL} icon={FacebookIcon} label="Síguenos en Facebook" />
        </motion.div>

        <motion.div variants={item} className="w-full mt-8">
          <h2 className="font-display text-[13px] font-medium tracking-wide" style={softLabel}>
            ¿Quieres saber más?
          </h2>
          <div className="mt-3 flex flex-col gap-2.5">
            <ContactBadge href={PHONE_HREF} icon={Phone} label="Teléfono" value={PHONE} />
            <ContactBadge
              onClick={copyEmail}
              icon={Mail}
              label={emailCopied ? '¡Correo copiado!' : 'Correo'}
              value={EMAIL}
            />
          </div>
        </motion.div>

        <motion.div variants={item} className="mt-9 w-full">
          <p className="font-display text-[11px] font-semibold tracking-[0.18em]" style={softDark}>
            MONTAÑA PARA TODAS
          </p>
          <p className="font-accent mt-1 text-[15px]" style={{ color: 'var(--mountain)', textShadow: softDark.textShadow }}>
            Nos vemos en el camino.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
