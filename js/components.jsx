// Shared UI Components for Dato News

const { useState, useEffect, useRef } = React;

// ── Category Badge ──────────────────────────────────────────────
function CategoryBadge({ categoria, small }) {
  const cat = CATEGORIAS[categoria] || { label: categoria, color: '#888' };
  return (
    <span style={{
      display: 'inline-block',
      background: cat.color + '22',
      color: cat.color,
      border: `1px solid ${cat.color}44`,
      borderRadius: 4,
      padding: small ? '2px 7px' : '3px 10px',
      fontSize: small ? 10 : 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      whiteSpace: 'nowrap',
    }}>
      {cat.label}
    </span>
  );
}

// ── News Card (standard) ─────────────────────────────────────────
function NewsCard({ noticia, onSelect, compact }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={() => onSelect(noticia)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? '0 12px 32px rgba(0,0,0,0.3), 0 0 0 1px var(--accent-border)' : '0 2px 8px rgba(0,0,0,0.15)',
        borderColor: hovered ? 'var(--accent-border)' : 'var(--border)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--surface-2)' }}>
        <img
          src={noticia.imagen}
          alt={noticia.titulo}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
          onError={e => { e.target.style.display='none'; }}
        />
        <div style={{ position: 'absolute', top: 10, left: 10 }}>
          <CategoryBadge categoria={noticia.categoria} small />
        </div>
      </div>
      <div style={{ padding: compact ? '12px 14px' : '16px 18px', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h3 style={{
          fontSize: compact ? 13 : 15,
          fontWeight: 700,
          lineHeight: 1.35,
          color: 'var(--text)',
          fontFamily: 'Space Grotesk, sans-serif',
          margin: 0,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>{noticia.titulo}</h3>
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 8, borderTop: '1px solid var(--border)' }}>
          <span style={{ fontSize: 11, color: 'var(--text-2)', fontWeight: 500 }}>{noticia.autor}</span>
          <span style={{ fontSize: 11, color: 'var(--text-3)' }}>{noticia.fecha}</span>
        </div>
      </div>
    </div>
  );
}

// ── Hero Card (big featured) ──────────────────────────────────────
function HeroCard({ noticia, onSelect }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={() => onSelect(noticia)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: 16,
        overflow: 'hidden',
        cursor: 'pointer',
        height: '100%',
        minHeight: 420,
        background: 'var(--surface-2)',
        border: '1px solid var(--border)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: hovered ? 'scale(1.01)' : 'scale(1)',
        boxShadow: hovered ? '0 20px 50px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.2)',
      }}
    >
      <img
        src={noticia.imagen}
        alt={noticia.titulo}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        onError={e => { e.target.style.display='none'; }}
      />
      {/* Gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.1) 100%)' }} />
      {/* Content */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 28px 24px' }}>
        <div style={{ marginBottom: 12 }}>
          <CategoryBadge categoria={noticia.categoria} />
        </div>
        <h2 style={{
          fontSize: 'clamp(20px, 2.2vw, 30px)',
          fontWeight: 800,
          lineHeight: 1.25,
          color: '#fff',
          fontFamily: 'Space Grotesk, sans-serif',
          margin: '0 0 10px',
          textShadow: '0 2px 8px rgba(0,0,0,0.5)',
        }}>{noticia.titulo}</h2>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', margin: '0 0 16px', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {noticia.subtitulo}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <ReadBtn />
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>{noticia.autor} · {noticia.fecha}</span>
        </div>
      </div>
    </div>
  );
}

// ── Side Card (compact hero sidebar) ─────────────────────────────
function SideCard({ noticia, onSelect }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={() => onSelect(noticia)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        gap: 14,
        padding: '14px 16px',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        cursor: 'pointer',
        transition: 'border-color 0.2s, background 0.2s',
        borderColor: hovered ? 'var(--accent-border)' : 'var(--border)',
        background: hovered ? 'var(--surface-2)' : 'var(--surface)',
        flex: 1,
      }}
    >
      <div style={{ width: 90, flexShrink: 0, borderRadius: 8, overflow: 'hidden', background: 'var(--surface-2)', aspectRatio: '1' }}>
        <img src={noticia.imagen} alt={noticia.titulo} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => e.target.style.display='none'} />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
        <CategoryBadge categoria={noticia.categoria} small />
        <h3 style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.35, color: 'var(--text)', fontFamily: 'Space Grotesk, sans-serif', margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {noticia.titulo}
        </h3>
        <span style={{ fontSize: 10, color: 'var(--text-3)', marginTop: 'auto' }}>{noticia.fecha}</span>
      </div>
    </div>
  );
}

// ── Read Button ───────────────────────────────────────────────────
function ReadBtn({ dark }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--accent)' : 'transparent',
        color: hovered ? '#000' : 'var(--accent)',
        border: '1.5px solid var(--accent)',
        borderRadius: 6,
        padding: '6px 16px',
        fontSize: 11,
        fontWeight: 700,
        cursor: 'pointer',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        transition: 'all 0.2s ease',
        fontFamily: 'Space Grotesk, sans-serif',
        whiteSpace: 'nowrap',
      }}
    >Leer nota →</button>
  );
}

// ── Section Header ────────────────────────────────────────────────
function SectionHeader({ title, color }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
      <div style={{ width: 4, height: 28, borderRadius: 2, background: color || 'var(--accent)' }} />
      <h2 style={{ fontSize: 22, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{title}</h2>
    </div>
  );
}

// ── Breaking Ticker ───────────────────────────────────────────────
function BreakingTicker() {
  const stripRef = useRef(null);
  const [copias, setCopias] = React.useState(2);

  useEffect(() => {
    const calcular = () => {
      const esMobile = window.innerWidth <= 768;
      setCopias(esMobile ? 4 : 2);
    };
    calcular();
    window.addEventListener('resize', calcular);
    return () => window.removeEventListener('resize', calcular);
  }, []);

  useEffect(() => {
    if (!stripRef.current) return;
    const esMobile = window.innerWidth <= 768;
    const PX_POR_SEGUNDO = esMobile ? 160 : 80;
    // -50% recorre la mitad del contenido total (= copias/2 veces el original)
    const distancia = stripRef.current.scrollWidth / 2;
    stripRef.current.style.animationDuration = (distancia / PX_POR_SEGUNDO) + 's';
  }, [copias]);

  const items = Array.from({ length: copias }, () => BREAKING_NEWS).flat();

  return (
    <div style={{ background: 'var(--accent)', overflow: 'hidden', height: 32, display: 'flex', alignItems: 'center' }}>
      <div style={{ background: '#000', color: 'var(--accent)', fontSize: 11, fontWeight: 800, padding: '0 16px', height: '100%', display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', letterSpacing: '0.1em', flexShrink: 0, zIndex: 1, textTransform: 'uppercase' }}>
        <i className="fas fa-circle" style={{ fontSize: 6, animation: 'pulse 1s infinite', marginRight: 6 }} />
        TITULARES
      </div>
      <div style={{ overflow: 'hidden', flex: 1, position: 'relative' }}>
        <div ref={stripRef} className="ticker-strip" style={{
          display: 'flex', gap: '80px', whiteSpace: 'nowrap',
          fontSize: 11, fontWeight: 600, color: '#000',
        }}>
          {items.map((n, i) => <span key={i}>{n}</span>)}
        </div>
      </div>
    </div>
  );
}

// ── Image placeholder ─────────────────────────────────────────────
function ImgPlaceholder({ label, color, style }) {
  return (
    <div style={{ width: '100%', height: '100%', background: color || 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}>
      <span style={{ color: 'var(--text-3)', fontSize: 11, fontFamily: 'monospace' }}>{label || 'imagen'}</span>
    </div>
  );
}

Object.assign(window, { CategoryBadge, NewsCard, HeroCard, SideCard, ReadBtn, SectionHeader, BreakingTicker, ImgPlaceholder });
