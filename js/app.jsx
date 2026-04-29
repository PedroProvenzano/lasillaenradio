// App root — navigation, header, footer, theme toggle

const { useState, useEffect, useRef } = React;

// ── WEATHER WIDGET ────────────────────────────────────────────────
const WX_ICON = (code) => {
  if (code === 0)              return '☀️';
  if (code <= 3)               return '⛅';
  if (code <= 48)              return '🌫️';
  if (code <= 55)              return '🌦️';
  if (code <= 65)              return '🌧️';
  if (code <= 77)              return '❄️';
  if (code <= 82)              return '🌧️';
  return '⛈️';
};
const WX_DAY = (dateStr, i) => {
  if (i === 0) return 'Hoy';
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('es-AR', { weekday: 'short' }).replace('.', '');
};

function WeatherWidget() {
  const [days, setDays] = useState([]);
  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-34.6037&longitude=-58.3816&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=America%2FArgentina%2FBuenos_Aires&forecast_days=5')
      .then(r => r.json())
      .then(data => {
        const d = data.daily;
        setDays(d.time.map((date, i) => ({
          date, code: d.weathercode[i],
          max: Math.round(d.temperature_2m_max[i]),
          min: Math.round(d.temperature_2m_min[i]),
        })));
      })
      .catch(() => {});
  }, []);
  if (!days.length) return null;
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      {days.map((day, i) => (
        <div key={day.date} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'Space Grotesk, sans-serif' }}>
            {WX_DAY(day.date, i)}
          </span>
          <span style={{ fontSize: 13, lineHeight: 1 }}>{WX_ICON(day.code)}</span>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.65)', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }}>
            {day.max}°
          </span>
          <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', fontFamily: 'Space Grotesk, sans-serif' }}>
            {day.min}°
          </span>
        </div>
      ))}
    </div>
  );
}

// ── HEADER ─────────────────────────────────────────────────────────
function Header({ theme, toggleTheme, onHome }) {
  return (
    <header style={{ background: 'var(--header-bg)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0' }}>
      <div className="header-inner" style={{ maxWidth: 1360, margin: '0 auto', padding: '18px 24px', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: 20 }}>
        {/* Left: Publicidad + Pronóstico (desktop) */}
        <div className="header-side" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, flexShrink: 0 }}>
            <span style={{ fontSize: 10, fontWeight: 800, color: 'var(--accent)', letterSpacing: '0.14em', textTransform: 'uppercase', animation: 'pulse 2s infinite' }}>📣 Hacé publicidad</span>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>11-6112-2292</span>
          </div>
          <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.08)', flexShrink: 0 }} />
          <WeatherWidget />
        </div>
        {/* Center: Logo */}
        <div onClick={onHome} style={{ textAlign: 'center', cursor: 'pointer', userSelect: 'none' }}>
          <div style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-1px', lineHeight: 1, color: '#ffffff' }}>
            LA SILLA <span style={{ color: 'var(--accent)' }}>DIARIO</span>
          </div>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', margin: '5px 0 0', letterSpacing: '0.04em' }}>
            Noticias concretas · El diario de @lasillaenradio
          </p>
        </div>
        {/* Right: Radio info */}
        <div className="header-side" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
          <img src="imagenes/whitelogoMonte.png" alt="ClassFM" style={{ height: 34, width: 'auto', opacity: 0.85 }} onError={e => e.target.style.display='none'} />
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', textAlign: 'right' }}>Miércoles 18 a 20hs · classfm.com.ar</span>
        </div>
        {/* Mobile: pronóstico debajo del logo */}
        <div className="header-mobile-weather">
          <WeatherWidget />
        </div>
      </div>
    </header>
  );
}

// ── NAVBAR ──────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { id: 'actualidad',  label: 'Actualidad' },
  { id: 'cultura',     label: 'Cultura' },
  { id: 'deporte',     label: 'Deportes' },
  { id: 'streaming',   label: 'Streaming' },
  { id: 'espectaculo', label: 'Espectáculos' },
  { id: 'entrevistas', label: 'Entrevistas' },
];

function Navbar({ theme, toggleTheme, activeSection, onSection, onHome, onSearch }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery]           = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const inputRef = useRef(null);

  const handleHome    = () => { onHome(); setMobileOpen(false); };
  const handleSection = (id) => { onSection(id); setMobileOpen(false); };

  const handleSearch = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      onSearch(query.trim());
      setSearchOpen(false);
      setQuery('');
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    if (searchOpen && inputRef.current) inputRef.current.focus();
  }, [searchOpen]);

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 900, background: 'var(--nav-bg)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', gap: 6, height: 48 }}>
        {/* Home */}
        <button onClick={handleHome} style={{ ...navBtnBase, background: activeSection === 'home' ? 'var(--accent)' : 'transparent', color: activeSection === 'home' ? '#000' : 'var(--text-2)', fontWeight: activeSection === 'home' ? 700 : 500 }}>
          Inicio
        </button>
        <div style={{ width: 1, height: 18, background: 'var(--border)', flexShrink: 0, margin: '0 4px' }} />
        {/* Categories — desktop */}
        <div className="nav-items-desktop" style={{ display: 'flex', gap: 2, flex: 1, flexWrap: 'wrap' }}>
          {NAV_ITEMS.map(item => {
            const cat = CATEGORIAS[item.id];
            const active = activeSection === item.id;
            return (
              <button key={item.id} onClick={() => handleSection(item.id)} style={{
                ...navBtnBase,
                color: active ? cat.color : 'var(--text-2)',
                background: active ? cat.color + '18' : 'transparent',
                fontWeight: active ? 700 : 500,
                borderBottom: active ? `2px solid ${cat.color}` : '2px solid transparent',
                borderRadius: 0,
                padding: '0 12px',
                height: 48,
              }}>
                {item.label}
              </button>
            );
          })}
        </div>
        {/* Hamburger — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(o => !o)}
          style={{ display: 'none', flex: 1, alignItems: 'center', justifyContent: 'flex-start', background: 'transparent', border: 'none', color: 'var(--text)', cursor: 'pointer', fontSize: 20, padding: '0 10px', height: 48, fontFamily: 'inherit' }}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
        {/* Right: search + social + theme */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
          {searchOpen ? (
            <input
              ref={inputRef}
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={handleSearch}
              onBlur={() => { if (!query) setSearchOpen(false); }}
              placeholder="Buscar… (Enter)"
              style={{ background: 'var(--surface)', border: '1px solid var(--accent)', borderRadius: 6, padding: '5px 12px', color: 'var(--text)', fontSize: 12, outline: 'none', width: 180, fontFamily: 'DM Sans, sans-serif' }}
            />
          ) : (
            <button onClick={() => setSearchOpen(true)} style={iconBtn} title="Buscar">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            </button>
          )}
          <div className="nav-social" style={{ display: 'flex', alignItems: 'center' }}>
            <a href="https://www.facebook.com/lasillaenradio/" target="_blank" style={{ ...iconBtn, color: '#1877f2', textDecoration: 'none' }} title="Facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/lasillaenradio/" target="_blank" style={{ ...iconBtn, color: '#e1306c', textDecoration: 'none' }} title="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://twitter.com/RadioLaSilla" target="_blank" style={{ ...iconBtn, textDecoration: 'none', fontWeight: 800, fontSize: 13, color: 'var(--text-2)' }} title="Twitter/X">
              𝕏
            </a>
            <a href="https://www.youtube.com/channel/UCxnXkeHoxiMUk2R90bNTsGw" target="_blank" style={{ ...iconBtn, color: '#ff0000', textDecoration: 'none' }} title="YouTube">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
            </a>
          </div>
          <button onClick={toggleTheme} style={iconBtn} title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
      {/* Menú móvil desplegable */}
      {mobileOpen && (
        <div className="nav-mobile-menu" style={{ display: 'none' }}>
          {NAV_ITEMS.map(item => {
            const cat = CATEGORIAS[item.id];
            const active = activeSection === item.id;
            return (
              <button key={item.id} onClick={() => handleSection(item.id)} style={{
                background: active ? cat.color + '18' : 'transparent',
                color: active ? cat.color : 'var(--text)',
                border: `1px solid ${active ? cat.color + '44' : 'transparent'}`,
                borderRadius: 8,
                padding: '11px 16px',
                textAlign: 'left',
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 14,
                fontWeight: active ? 700 : 500,
                cursor: 'pointer',
                letterSpacing: '0.02em',
                width: '100%',
                transition: 'all 0.15s',
              }}>
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

const navBtnBase = {
  border: 'none', background: 'transparent', cursor: 'pointer',
  fontSize: 12, fontFamily: 'Space Grotesk, sans-serif',
  padding: '0 10px', height: 48, transition: 'all 0.15s',
  letterSpacing: '0.02em', color: 'var(--text-2)',
};

const iconBtn = {
  background: 'transparent', border: 'none',
  width: 34, height: 34, borderRadius: 7,
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  cursor: 'pointer', color: 'var(--text-2)',
  transition: 'background 0.15s, color 0.15s', fontSize: 14,
};

// ── FOOTER ─────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: '#05050e', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '48px 24px 32px', marginTop: 64 }}>
      <div style={{ maxWidth: 1360, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 40 }}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', color: '#fff', marginBottom: 8 }}>
              LA SILLA <span style={{ color: 'var(--accent)' }}>DIARIO</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>El diario de <span style={{ color: 'var(--accent)' }}>@lasillaenradio</span>.<br />Noticias concretas.</p>
          </div>
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>En el aire</p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.8 }}>
              Miércoles <strong style={{ color: 'rgba(255,255,255,0.7)' }}>18 a 20hs</strong><br />
              <a href="https://www.classfm.com.ar" target="_blank" style={{ color: 'var(--accent)', fontSize: 12 }}>classfm.com.ar</a>
            </p>
          </div>
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>Publicidad</p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.8 }}>
              <strong style={{ color: 'rgba(255,255,255,0.7)' }}>11-6112-2292</strong><br />Tu marca en La Silla Diario
            </p>
          </div>
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>Redes</p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {[['fb','#1877f2','https://www.facebook.com/lasillaenradio/', <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>],
                ['yt','#ff0000','https://www.youtube.com/channel/UCxnXkeHoxiMUk2R90bNTsGw', <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>],
                ['ig','#e1306c','https://www.instagram.com/lasillaenradio/', <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>],
                ['x','#aaa','https://twitter.com/RadioLaSilla', <span style={{fontWeight:800,fontSize:12}}>𝕏</span>]
              ].map(([id, col, url, icon]) => (
                <a key={id} href={url} target="_blank" style={{ width: 34, height: 34, borderRadius: 7, border: '1px solid rgba(255,255,255,0.1)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: col, textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = col; e.currentTarget.style.background = col + '22'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'transparent'; }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', margin: 0 }}>© 2026 La Silla Diario · Web por Pedro Provenzano</p>
          <a href="https://fundeu.fiile.org.ar/" target="_blank" style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', textDecoration: 'none' }}>Fundeu · fundeu.fiile.org.ar</a>
        </div>
      </div>
    </footer>
  );
}

// ── TWEAKS PANEL ───────────────────────────────────────────────────
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#2563eb",
  "fontSize": 16,
  "borderRadius": 12,
  "theme": "dark"
}/*EDITMODE-END*/;

function TweaksPanel({ visible, tweaks, setTweaks }) {
  if (!visible) return null;
  const update = (key, val) => {
    setTweaks(t => ({ ...t, [key]: val }));
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: val } }, '*');
  };
  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 9000, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, padding: '18px 22px', width: 260, boxShadow: '0 16px 40px rgba(0,0,0,0.5)', fontFamily: 'Space Grotesk, sans-serif' }}>
      <p style={{ fontSize: 10, fontWeight: 800, color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 14px' }}>Tweaks</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div>
          <p style={{ fontSize: 11, color: 'var(--text-2)', marginBottom: 7 }}>Color acento</p>
          <div style={{ display: 'flex', gap: 7 }}>
            {['#2563eb','#1d9bf0','#e8003d','#22c55e','#a855f7'].map(c => (
              <button key={c} onClick={() => update('accentColor', c)} style={{ width: 26, height: 26, borderRadius: 6, background: c, border: tweaks.accentColor === c ? '2.5px solid #fff' : '2px solid transparent', cursor: 'pointer' }} />
            ))}
          </div>
        </div>
        <div>
          <p style={{ fontSize: 11, color: 'var(--text-2)', marginBottom: 4 }}>Fuente base: {tweaks.fontSize}px</p>
          <input type="range" min={13} max={20} value={tweaks.fontSize} onChange={e => update('fontSize', Number(e.target.value))} style={{ width: '100%' }} />
        </div>
        <div>
          <p style={{ fontSize: 11, color: 'var(--text-2)', marginBottom: 4 }}>Esquinas: {tweaks.borderRadius}px</p>
          <input type="range" min={0} max={24} value={tweaks.borderRadius} onChange={e => update('borderRadius', Number(e.target.value))} style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
}

// ── APP ROOT ───────────────────────────────────────────────────────
function App() {
  const [theme, setTheme]             = useState(() => localStorage.getItem('dn-theme') || 'dark');
  const [view, setView]               = useState('home');
  const [activeSection, setActiveSection] = useState('home');
  const [activeArticle, setActiveArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [tweaksVisible, setTweaksVisible] = useState(false);
  const [tweaks, setTweaks]           = useState(TWEAK_DEFAULTS);
  const [dataReady, setDataReady]     = useState(false);

  // Apply tweaks to CSS vars
  useEffect(() => {
    document.documentElement.style.setProperty('--accent', tweaks.accentColor);
    document.documentElement.style.setProperty('--accent-border', tweaks.accentColor + '66');
    document.documentElement.style.setProperty('--card-radius', tweaks.borderRadius + 'px');
    document.documentElement.style.fontSize = tweaks.fontSize + 'px';
  }, [tweaks]);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('dn-theme', theme);
  }, [theme]);

  // Escuchar cuando el backend termina de cargar
  useEffect(() => {
    const handler = () => setDataReady(true);
    window.addEventListener('backendDataReady', handler);
    return () => window.removeEventListener('backendDataReady', handler);
  }, []);

  // Helper: busca una noticia por id (tolera string vs number)
  const findArticle = (id) => NOTICIAS.find(n => String(n.id) === String(id));

  // Deep-link: cuando los datos están listos, leer el hash de la URL
  useEffect(() => {
    if (!dataReady) return;
    const hash = window.location.hash.replace(/^#/, '');
    if (hash.startsWith('noticia/')) {
      const id  = hash.slice('noticia/'.length);
      const art = findArticle(id);
      if (art) { setActiveArticle(art); setView('article'); window.scrollTo(0, 0); }
    }
  }, [dataReady]);

  // Popstate: botón atrás/adelante del navegador
  useEffect(() => {
    const handlePop = () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (hash.startsWith('noticia/')) {
        const id  = hash.slice('noticia/'.length);
        const art = findArticle(id);
        if (art) { setActiveArticle(art); setView('article'); window.scrollTo(0, 0); return; }
      }
      setActiveArticle(null);
      setView('home');
      setActiveSection('home');
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  // Contact event
  useEffect(() => {
    const handler = () => setContactOpen(true);
    window.addEventListener('openContact', handler);
    return () => window.removeEventListener('openContact', handler);
  }, []);

  // Tweaks protocol
  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode')   setTweaksVisible(true);
      if (e.data?.type === '__deactivate_edit_mode') setTweaksVisible(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  const clearHash    = () => history.pushState(null, '', window.location.pathname + window.location.search);
  const toggleTheme  = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  const goHome       = () => { setView('home'); setActiveSection('home'); setActiveArticle(null); setSearchQuery(null); clearHash(); window.scrollTo(0,0); };
  const goSection    = (id) => { setView('category'); setActiveSection(id); setActiveArticle(null); setSearchQuery(null); clearHash(); window.scrollTo(0,0); };
  const goArticle    = (art) => { setActiveArticle(art); setView('article'); history.pushState(null, '', '#noticia/' + art.id); window.scrollTo(0,0); };
  const goBack       = () => { setActiveArticle(null); setView(activeSection === 'home' ? 'home' : 'category'); clearHash(); window.scrollTo(0,0); };
  const goSearch     = (q)  => { setSearchQuery(q); setView('search'); setActiveSection('search'); clearHash(); window.scrollTo(0,0); };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <BreakingTicker />
      <Header theme={theme} toggleTheme={toggleTheme} onHome={goHome} />
      <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} onSection={goSection} onHome={goHome} onSearch={goSearch} />
      <main style={{ flex: 1 }}>
        {!dataReady ? (
          <div style={{ textAlign: 'center', padding: '80px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 40, height: 3, background: 'var(--accent)', borderRadius: 2, animation: 'pulse 1s ease infinite' }} />
            <p style={{ color: 'var(--text-2)', fontFamily: 'Space Grotesk, sans-serif', fontSize: 14, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Cargando noticias…</p>
          </div>
        ) : (
          <>
            {view === 'home'     && <HomeView     onSelectArticle={goArticle} />}
            {view === 'category' && <CategoryView categoria={activeSection} onSelectArticle={goArticle} />}
            {view === 'article'  && activeArticle && <ArticleView noticia={activeArticle} onBack={goBack} />}
            {view === 'search'   && searchQuery   && <SearchView  query={searchQuery} onSelectArticle={goArticle} />}
          </>
        )}
      </main>
      <Footer />
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
      <TweaksPanel visible={tweaksVisible} tweaks={tweaks} setTweaks={setTweaks} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
