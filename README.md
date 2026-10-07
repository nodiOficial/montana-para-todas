# Montaña para Todas

Tarjeta digital de una sola pantalla para Montaña para Todas, construida con React + Vite + Tailwind CSS v4 + Framer Motion + Lucide React. Diseño mobile-first, sin scroll.

## Dirección visual

- **Paleta**: la del brief — azul cielo #A9C3D6, azul montaña #58778C, azul oscuro #263F50, crema #FAF8F2, amarillo #F6C928, blanco.
- **Tipografía**: "Jost" (sans geométrica, cálida) para todo el texto, con "Cormorant Garamond" en cursiva reservada para una palabra destacada ("montaña" en el título, la frase del footer).
- **Logo**: el archivo proporcionado tal cual, sin recortar ni recolorear, como insignia circular con un leve flotado (loop) y un halo amarillo pulsante detrás.
- **Fondo**: manchas de color difuminadas (estilo "aurora"/mesh gradient) en los tonos de marca, con un barrido cónico muy sutil girando lentísimo, puntitos tipo bokeh flotando, y un grano fino para calidez — todo en CSS, nada de imágenes pesadas.
- **Sin tarjeta contenedora**: el contenido flota directamente sobre el fondo animado (sin caja blanca de por medio), para que el fondo se note en todas las pantallas, celular incluido. Los botones y los datos de contacto siguen siendo sus propias píldoras blancas — eso les da contraste sin tapar el fondo.

## Estructura

```
src/
  components/
    AuroraBackground.jsx   # fondo de manchas de color difuminadas, con drift sutil
    SocialButton.jsx        # card de Instagram / Facebook
    ContactBadge.jsx         # card de teléfono / correo
    CustomIcons.jsx           # Instagram/Facebook (lucide-react ya no incluye iconos de marca)
  App.jsx                      # logo, título, botones, contacto, footer — todo sobre el fondo
```

## Desarrollo

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Para completar después

- `INSTAGRAM_URL` y `FACEBOOK_URL` en `src/App.jsx` son placeholders — reemplázalos con los perfiles reales.
- El teléfono ya abre el marcador (`tel:`); si luego quieren que abra WhatsApp en su lugar, solo hay que cambiar `PHONE_HREF` a un link `https://wa.me/...`.
