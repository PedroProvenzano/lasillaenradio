// Views: HomeView, ArticleView, CategoryView, SearchView

const { useState, useEffect, useRef } = React;

// ── XENONA FLYER ────────────────────────────────────────────────────
function XenonaFlyer() {
  const xnf = (cls) => 'xnf-' + cls;
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: '#0a0a0a', width: '100%', overflow: 'hidden', borderRadius: 12 }}>
      {/* Header */}
      <div style={{ background: '#0a0a0a', padding: '18px 20px 14px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #1a1a1a' }}>
        <div>
          <div style={{ fontSize: 32, fontWeight: 900, letterSpacing: 6, color: '#fff', lineHeight: 1, textAlign: 'center' }}>XENONA</div>
          <div style={{ fontSize: 10, letterSpacing: 8, color: '#888', marginTop: 2, textAlign: 'center' }}>JEANS</div>
        </div>
      </div>
      {/* Hero */}
      <div style={{ position: 'relative', background: 'linear-gradient(135deg,#1a1a1a 0%,#2d2d2d 100%)', padding: '28px 20px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse at 20% 50%,rgba(139,0,0,0.15) 0%,transparent 60%),radial-gradient(ellipse at 80% 50%,rgba(255,255,255,0.03) 0%,transparent 60%)' }} />
        <div style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: 3, color: '#fff', border: '1px solid rgba(255,255,255,0.3)', padding: '4px 10px', marginBottom: 10 }}>● New in</div>
        <div style={{ fontSize: 28, fontWeight: 900, color: '#fff', letterSpacing: 1, lineHeight: 1.1, marginBottom: 20, position: 'relative' }}>
          Aprovechá<br />las <span style={{ color: '#cc2200' }}>promos</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 6, height: 6, background: '#cc2200', borderRadius: '50%', flexShrink: 0 }} />
            <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', letterSpacing: 0.5 }}><span style={{ color: '#ffcc00' }}>3 cuotas</span> sin interés</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 6, height: 6, background: '#cc2200', borderRadius: '50%', flexShrink: 0 }} />
            <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', letterSpacing: 0.5 }}><span style={{ color: '#ffcc00' }}>10% off</span> transferencia y efectivo</div>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div style={{ height: 1, background: 'linear-gradient(to right,transparent,#333,transparent)', margin: '0 20px' }} />
      {/* Info */}
      <div style={{ background: '#111', padding: 20 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
          <div style={{ width: 32, height: 32, background: '#cc2200', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
            <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: '#fff' }}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 2, color: '#666', textTransform: 'uppercase', marginBottom: 3 }}>Encontranos en</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', letterSpacing: 0.5 }}>Álvarez Jonte 4574, CABA</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 12, borderTop: '1px solid #1e1e1e' }}>
          <div style={{ width: 28, height: 28, background: '#222', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, fill: '#fff' }}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#aaa', letterSpacing: 0.5 }}>@xenona.jonte</div>
        </div>
      </div>
      {/* CTA */}
      <div style={{ background: '#cc2200', padding: '12px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: '#fff', textTransform: 'uppercase' }}>Shop Now — Nueva Colección</div>
      </div>
      {/* Products */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: '#1a1a1a' }}>
        <div style={{ position: 'relative' }}>
          <img src="imagenes/publicidad/imagen1.png" alt="Jean wide leg verde oliva" style={{ width: '100%', height: 'auto', display: 'block' }} />
          <div style={{ position: 'absolute', bottom: 8, left: 8, background: 'rgba(0,0,0,0.75)', color: '#fff', fontSize: 9, letterSpacing: 2, fontWeight: 700, padding: '4px 8px', textTransform: 'uppercase' }}>Wide Leg</div>
        </div>
        <div style={{ position: 'relative' }}>
          <img src="imagenes/publicidad/imagen2.png" alt="Jean negro con chaleco" style={{ width: '100%', height: 'auto', display: 'block' }} />
          <div style={{ position: 'absolute', bottom: 8, left: 8, background: 'rgba(0,0,0,0.75)', color: '#fff', fontSize: 9, letterSpacing: 2, fontWeight: 700, padding: '4px 8px', textTransform: 'uppercase' }}>New In</div>
        </div>
      </div>
    </div>
  );
}

// ── HOME VIEW ──────────────────────────────────────────────────────
function HomeView({ onSelectArticle }) {
  const byDateDesc = (a, b) => b.rawDate.localeCompare(a.rawDate);
  const principales = NOTICIAS.filter(n => n.principal).sort(byDateDesc);
  const [vidaTab, setVidaTab] = useState('medioAmb');
  const [medioAmbSubTab, setMedioAmbSubTab] = useState('1');
  const [triviaAnswer, setTriviaAnswer] = useState(null);
  const vidaTabs = [
    { id: 'medioAmb', label: 'Medio Ambiente' },
    { id: 'vidaSana', label: 'Vida Sana' },
    { id: 'genero', label: 'Género' },
  ];

  const getVidaNoticia = () => {
    const sorted = [...NOTICIAS].sort(byDateDesc);
    if (vidaTab === 'medioAmb') {
      if (medioAmbSubTab === '1') {
        const found = sorted.find(n => n.categoria === 'medioAmb' && (n.temaPrincipal === 'Medio ambiente 1' || n.temaPrincipal === 'Medio ambiente'));
        return found || sorted.find(n => n.categoria === 'medioAmb') || NOTICIAS[6];
      } else {
        const found = sorted.find(n => n.categoria === 'medioAmb' && n.temaPrincipal === 'Medio ambiente 2');
        const allMedioAmb = sorted.filter(n => n.categoria === 'medioAmb');
        return found || allMedioAmb[1] || allMedioAmb[0] || NOTICIAS[6];
      }
    }
    return sorted.find(n => n.categoria === vidaTab) || NOTICIAS[6];
  };

  const vidaNoticia = getVidaNoticia();
  const actFront = NOTICIAS.filter(n => n.categoria === 'actualidad').sort(byDateDesc).slice(0, 2);
  const arteNots = NOTICIAS.filter(n => n.categoria === 'espectaculo').sort(byDateDesc);
  const ecoNot = [...NOTICIAS].sort(byDateDesc).find(n => n.categoria === 'streaming');

  return (
    <div>
      {/* ── HERO GRID ── */}
      <section style={{ maxWidth: 1360, margin: '0 auto', padding: '28px 20px 0' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 320px', gap: 16, alignItems: 'stretch' }}>
          <div style={{ minHeight: 440 }}>
            <HeroCard noticia={principales[0]} onSelect={onSelectArticle} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <SideCard noticia={principales[1]} onSelect={onSelectArticle} />
            <SideCard noticia={principales[2]} onSelect={onSelectArticle} />
          </div>
        </div>
      </section>

      {/* ── CONTACT STRIP ── */}
      <ContactStrip />

      {/* ── BANNERS ── */}
      <BannersRow />

      {/* ── VIDA / MEDIO AMB / GÉNERO + ECO ── */}
      <section style={{ maxWidth: 1360, margin: '48px auto 0', padding: '0 20px' }}>
        <div className="two-col-section" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24, alignItems: 'start' }}>
          {/* Tabs */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden' }}>
            {/* Tab nav */}
            <div style={{ display: 'flex', borderBottom: '1px solid var(--border)' }}>
              {vidaTabs.map(t => {
                const cat = CATEGORIAS[t.id];
                const active = vidaTab === t.id;
                return (
                  <button key={t.id} onClick={() => setVidaTab(t.id)} style={{
                    flex: 1, padding: '12px 8px', border: 'none', background: active ? cat.color + '15' : 'transparent',
                    color: active ? cat.color : 'var(--text-2)', fontWeight: active ? 700 : 500,
                    fontFamily: 'Space Grotesk, sans-serif', fontSize: 13, cursor: 'pointer',
                    borderBottom: active ? `2px solid ${cat.color}` : '2px solid transparent',
                    transition: 'all 0.2s', textTransform: 'uppercase', letterSpacing: '0.05em',
                  }}>{t.label}</button>
                );
              })}
            </div>

            {/* Sub-tabs para Medio Ambiente */}
            {vidaTab === 'medioAmb' && (
              <div style={{ display: 'flex', gap: 6, padding: '8px 16px', background: 'var(--surface-2)', borderBottom: '1px solid var(--border)', alignItems: 'center' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', marginRight: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Pestaña:</span>
                {['1', '2'].map(num => {
                  const active = medioAmbSubTab === num;
                  return (
                    <button
                      key={num}
                      onClick={() => setMedioAmbSubTab(num)}
                      style={{
                        padding: '4px 14px',
                        borderRadius: 6,
                        border: active ? '1px solid var(--accent)' : '1px solid var(--border)',
                        background: active ? 'var(--accent)' : 'var(--surface)',
                        color: active ? '#000' : 'var(--text)',
                        fontWeight: active ? 700 : 500,
                        fontSize: 12,
                        cursor: 'pointer',
                        fontFamily: 'Space Grotesk, sans-serif',
                        transition: 'all 0.15s',
                      }}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>
            )}
            {/* Tab content */}
            <div className="tab-inner-grid" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 0 }}>
              <div style={{ overflow: 'hidden', aspectRatio: '2/3', background: 'var(--surface-2)' }}>
                <img src={vidaNoticia.imagen} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => e.target.style.display='none'} />
              </div>
              <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <CategoryBadge categoria={vidaNoticia.categoria} small />
                <h3 style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.3, color: 'var(--text)', fontFamily: 'Space Grotesk, sans-serif', margin: 0 }}>{vidaNoticia.titulo}</h3>
                <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6, flex: 1, display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{vidaNoticia.subtitulo}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <button onClick={() => onSelectArticle(vidaNoticia)} style={{ background: 'var(--accent)', color: '#000', border: 'none', borderRadius: 6, padding: '7px 18px', fontSize: 11, fontWeight: 700, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Space Grotesk, sans-serif' }}>Leer nota →</button>
                  <span style={{ fontSize: 11, color: 'var(--text-3)' }}>{vidaNoticia.autor}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Economy / extra card */}
          {ecoNot && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden', cursor: 'pointer' }} onClick={() => onSelectArticle(ecoNot)}>
                <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: 'var(--surface-2)' }}>
                  <img src={ecoNot.imagen} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => e.target.style.display='none'} />
                </div>
                <div style={{ padding: '16px 18px' }}>
                  <CategoryBadge categoria={ecoNot.categoria} small />
                  <h3 style={{ fontSize: 14, fontWeight: 700, margin: '8px 0 0', lineHeight: 1.35, color: 'var(--text)', fontFamily: 'Space Grotesk, sans-serif' }}>{ecoNot.titulo}</h3>
                </div>
              </div>
              {/* Dato Meme */}
              <DatoMemeCard />
            </div>
          )}
        </div>
      </section>

      {/* ── ACTUALIDAD FRONT ── */}
      {actFront.length > 0 && (
        <section style={{ maxWidth: 1360, margin: '48px auto 0', padding: '0 20px' }}>
          <SectionHeader title="Actualidad" color={CATEGORIAS.actualidad.color} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
            {actFront.map(n => <NewsCard key={n.id} noticia={n} onSelect={onSelectArticle} />)}
          </div>
        </section>
      )}

      {/* ── ARTE / ESPECTÁCULOS ── */}
      <section style={{ maxWidth: 1360, margin: '48px auto 0', padding: '0 20px' }}>
        <SectionHeader title="Espectáculos & Arte" color={CATEGORIAS.espectaculo.color} />
        <div className="two-col-section" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20, alignItems: 'start' }}>
          <div className="art-inner-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {arteNots.slice(0, 4).map(n => <NewsCard key={n.id} noticia={n} onSelect={onSelectArticle} />)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <DatoHumorCard />
            <DatoArtCard />
          </div>
        </div>
      </section>

      {/* ── BANNERS 2 ── */}
      {(() => {
        const banners2 = [
          { src: 'imagenes/pizzerialucita.png', href: 'https://www.instagram.com/lucita_pizzeria/' },
          { type: 'component', component: <XenonaFlyer />, href: 'https://www.instagram.com/xenona.jonte' },
          { src: 'imagenes/chuna.jpg',           href: 'https://www.instagram.com/chuna.lopedevega/' },
          { src: 'imagenes/llevatumascota.jpeg', href: null },
        ];
        const s = { borderRadius: 10, overflow: 'hidden', border: '1px solid var(--border)', maxWidth: 400, flex: '1 1 240px', display: 'block' };
        const imgProps = { alt: 'publicidad', style: { width: '100%', height: 'auto', display: 'block', transition: 'opacity 0.2s' },
          onMouseEnter: e => { if (e.target.parentElement.tagName === 'A') e.target.style.opacity = '0.85'; },
          onMouseLeave: e => { e.target.style.opacity = '1'; },
          onError: e => e.target.parentElement.style.display = 'none' };
        return (
          <div style={{ maxWidth: 1360, margin: '40px auto', padding: '0 20px', display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            {banners2.map(({ src, href, type, component }, i) => {
              if (type === 'component') {
                return href
                  ? <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{ ...s, cursor: 'pointer' }}>{component}</a>
                  : <div key={i} style={s}>{component}</div>;
              }
              return href
                ? <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{ ...s, cursor: 'pointer' }}><img src={src} {...imgProps} /></a>
                : <div key={i} style={s}><img src={src} {...imgProps} /></div>;
            })}
          </div>
        );
      })()}

      {/* ── TRIVIA ── */}
      <section style={{ maxWidth: 1360, margin: '0 auto 48px', padding: '0 20px' }}>
        <div className="two-col-section" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20, alignItems: 'start' }}>
          <TriviaCard triviaAnswer={triviaAnswer} setTriviaAnswer={setTriviaAnswer} />
          {/* Curiosidades card */}
          {(() => {
            const curiosidad = [...NOTICIAS].sort(byDateDesc).find(n => n.temaPrincipal === 'curiosidades');
            return curiosidad && <NewsCard noticia={curiosidad} onSelect={onSelectArticle} />;
          })()}
        </div>
      </section>

      {/* ── EQUIPO ── */}
      <TeamSection />
    </div>
  );
}

// ── CONTACT STRIP ──────────────────────────────────────────────────
function ContactStrip() {
  const [hov, setHov] = useState(false);
  return (
    <div style={{ background: 'var(--surface-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', margin: '28px 0', padding: '20px', textAlign: 'center' }}>
      <button
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        onClick={() => window.dispatchEvent(new CustomEvent('openContact'))}
        style={{ background: hov ? '#000' : 'var(--accent)', color: hov ? 'var(--accent)' : '#000', border: hov ? '2px solid var(--accent)' : '2px solid transparent', borderRadius: 50, padding: '14px 48px', fontSize: 14, fontWeight: 800, cursor: 'pointer', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Space Grotesk, sans-serif', transition: 'all 0.25s' }}>
        📬 Tu mensaje en un click
      </button>
    </div>
  );
}

// ── BANNERS ROW ──────────────────────────────────────────────────
function BannersRow() {
  const banners = [
    { src: 'imagenes/bannerEmilio1.jpeg',                href: 'https://www.instagram.com/institutoemiliocardenas' },
    { src: 'imagenes/clementina.jpeg',                  href: null },
    { src: 'imagenes/Kappel.jpg',                       href: 'https://www.instagram.com/claudio.kappel/' },
    { src: 'imagenes/entrenamiento_personalizado.jpeg',  href: 'https://www.instagram.com/suarezlaurafitness/' },
    { src: 'imagenes/churros.jpeg',                     href: null },
    { src: 'imagenes/coffee break.jpeg',                href: null },
  ];
  const cardStyle = { flex: '1 1 240px', maxWidth: 400, borderRadius: 10, overflow: 'hidden', border: '1px solid var(--border)', display: 'block' };
  return (
    <div style={{ display: 'flex', gap: 16, padding: '0 20px', maxWidth: 1360, margin: '0 auto 8px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
      {banners.map(({ src, href }, i) =>
        href
          ? <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{ ...cardStyle, cursor: 'pointer' }}>
              <img src={src} alt="publicidad" style={{ width: '100%', height: 'auto', display: 'block', transition: 'opacity 0.2s' }}
                onMouseEnter={e => e.target.style.opacity = '0.85'}
                onMouseLeave={e => e.target.style.opacity = '1'}
                onError={e => e.target.parentElement.style.display='none'} />
            </a>
          : <div key={i} style={cardStyle}>
              <img src={src} alt="publicidad" style={{ width: '100%', height: 'auto', display: 'block' }}
                onError={e => e.target.parentElement.style.display='none'} />
            </div>
      )}
    </div>
  );
}

// ── DATO MEME ──────────────────────────────────────────────────────
function DatoMemeCard() {
  const src = (typeof DATO_MEME !== 'undefined' && DATO_MEME && DATO_MEME.imgUrl)
    ? DATO_MEME.imgUrl
    : 'imagenes/datomeme.jpeg';
  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden' }}>
      <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 16 }}>😄</span>
        <span style={{ fontWeight: 800, fontSize: 13, fontFamily: 'Space Grotesk, sans-serif', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Dato Meme</span>
      </div>
      <img src={src} alt="dato meme" style={{ width: '100%', height: 'auto', display: 'block' }} onError={e => e.target.parentElement.style.display='none'} />
    </div>
  );
}

// ── DATO HUMOR ─────────────────────────────────────────────────────
function DatoHumorCard() {
  const src = (typeof DATO_HUMOR !== 'undefined' && DATO_HUMOR && DATO_HUMOR.imgUrl)
    ? DATO_HUMOR.imgUrl
    : 'imagenes/kappelImagen.jpg';
  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden' }}>
      <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 16 }}>🎭</span>
        <span style={{ fontWeight: 800, fontSize: 13, fontFamily: 'Space Grotesk, sans-serif', color: CATEGORIAS.cultura.color, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Dato Humor</span>
      </div>
      <img src={src} alt="dato humor" style={{ width: '100%', height: 'auto', display: 'block' }} onError={e => e.target.parentElement.style.display='none'} />
    </div>
  );
}

// ── DATO ART ───────────────────────────────────────────────────────
function DatoArtCard() {
  const [imgOk, setImgOk] = useState(true);
  const art  = (typeof DATO_ART !== 'undefined') ? DATO_ART : null;
  const src  = (art && art.imgUrl) ? art.imgUrl : 'imagenes/xenona.jpeg';
  const desc = art ? `${art.descripcion || 'Obra del mes'}${art.autor ? ' · ' + art.autor : ''}` : 'Xenona · Obra del mes';
  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden' }}>
      <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 16 }}>🎨</span>
        <span style={{ fontWeight: 800, fontSize: 13, fontFamily: 'Space Grotesk, sans-serif', color: CATEGORIAS.espectaculo.color, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Dato Art</span>
      </div>
      {imgOk ? (
        <img src={src} alt="dato art"
          style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }}
          onError={() => setImgOk(false)} />
      ) : (
        <div style={{ height: 160, background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 36 }}>🎨</span>
        </div>
      )}
      <div style={{ padding: '12px 16px' }}>
        <p style={{ fontSize: 12, color: 'var(--text-2)', margin: 0, textAlign: 'center' }}>{desc}</p>
      </div>
    </div>
  );
}

// ── TRIVIA ─────────────────────────────────────────────────────────
function TriviaCard({ triviaAnswer, setTriviaAnswer }) {
  const correct = TRIVIA.correcta;
  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, padding: '24px 28px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
        <span style={{ fontSize: 20 }}>🧠</span>
        <span style={{ fontWeight: 800, fontSize: 18, fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Trivia</span>
      </div>
      <p style={{ fontSize: 17, fontWeight: 600, color: 'var(--text)', lineHeight: 1.4, marginBottom: 20, fontFamily: 'Space Grotesk, sans-serif' }}>{TRIVIA.pregunta}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {TRIVIA.opciones.map(op => {
          const selected = triviaAnswer === op.id;
          const isCorrect = op.id === correct;
          const showResult = triviaAnswer !== null;
          let bg = 'var(--surface-2)', border = 'var(--border)', color = 'var(--text)';
          if (showResult && isCorrect) { bg = '#22c55e22'; border = '#22c55e'; color = '#22c55e'; }
          else if (showResult && selected && !isCorrect) { bg = '#ef444422'; border = '#ef4444'; color = '#ef4444'; }
          return (
            <button key={op.id} onClick={() => !triviaAnswer && setTriviaAnswer(op.id)} style={{
              background: bg, border: `1.5px solid ${border}`, borderRadius: 8, padding: '12px 18px',
              color, fontSize: 14, fontWeight: 600, cursor: triviaAnswer ? 'default' : 'pointer',
              textAlign: 'left', transition: 'all 0.2s', fontFamily: 'DM Sans, sans-serif',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{ fontWeight: 800, color: 'var(--accent)', minWidth: 20 }}>{op.id.toUpperCase()}.</span>
              {op.texto}
              {showResult && isCorrect && <span style={{ marginLeft: 'auto' }}>✓</span>}
              {showResult && selected && !isCorrect && <span style={{ marginLeft: 'auto' }}>✗</span>}
            </button>
          );
        })}
      </div>
      {triviaAnswer && (
        <div style={{ marginTop: 16, padding: '12px 16px', background: 'var(--surface-2)', borderRadius: 8, fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>
          {TRIVIA.descripcion}
        </div>
      )}
    </div>
  );
}

// ── TEAM SECTION ───────────────────────────────────────────────────
function TeamSection() {
  return (
    <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '48px 20px', textAlign: 'center' }}>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Quiénes somos</p>
        <h2 style={{ fontSize: 32, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text)', margin: '0 0 32px' }}>Hacemos La Silla Diario</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 48 }}>
          {[
            { nombre: 'Marcos', apellido: 'Kamin', img: 'imagenes/1x/marcos.jpeg' },
            { nombre: 'Nacho', apellido: 'Brown', img: 'imagenes/1x/juan.jpeg' },
            { nombre: 'Carolina', apellido: 'Somoza', img: 'imagenes/1x/carolina.jpeg' },
          ].map(p => (
            <div key={p.nombre} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 100, height: 100, borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--accent)', background: 'var(--surface-2)' }}>
                <img src={p.img} alt={p.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => e.target.style.display='none'} />
              </div>
              <div>
                <p style={{ fontWeight: 800, fontSize: 16, color: 'var(--text)', margin: 0, fontFamily: 'Space Grotesk, sans-serif' }}>{p.nombre}</p>
                <p style={{ fontSize: 13, color: 'var(--text-2)', margin: 0 }}>{p.apellido}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const NOTICIAS_POR_PAGINA = 9; // 3 columnas × 3 filas

function Paginador({ pagina, totalPaginas, onIr, color, maxVisible }) {
  if (totalPaginas <= 1) return null;

  // Si maxVisible está definido, mostrar solo las primeras N páginas (las más recientes)
  const paginas = maxVisible
    ? Array.from({ length: Math.min(maxVisible, totalPaginas) }, (_, i) => i)
    : Array.from({ length: totalPaginas }, (_, i) => i);

  const mostrandoTodas = !maxVisible || totalPaginas <= maxVisible;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 40 }}>
      <button
        onClick={() => onIr(pagina - 1)}
        disabled={pagina === 0}
        style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          color: 'var(--text)', borderRadius: 8, padding: '8px 16px',
          cursor: pagina === 0 ? 'default' : 'pointer',
          fontFamily: 'Space Grotesk, sans-serif', fontSize: 13, fontWeight: 600,
          opacity: pagina === 0 ? 0.4 : 1,
        }}
      >← Anterior</button>

      {paginas.map(i => (
        <button
          key={i}
          onClick={() => onIr(i)}
          style={{
            width: 36, height: 36, borderRadius: 8, border: '1px solid',
            borderColor: i === pagina ? (color || 'var(--accent)') : 'var(--border)',
            background: i === pagina ? (color || 'var(--accent)') : 'var(--surface)',
            color: i === pagina ? '#000' : 'var(--text)',
            fontWeight: i === pagina ? 700 : 500,
            cursor: 'pointer', fontFamily: 'Space Grotesk, sans-serif', fontSize: 13,
          }}
        >{i + 1}</button>
      ))}

      {!mostrandoTodas && (
        <span style={{ color: 'var(--text-3)', fontFamily: 'Space Grotesk, sans-serif', fontSize: 13 }}>…</span>
      )}

      {(() => {
        const limite = maxVisible ? Math.min(maxVisible, totalPaginas) - 1 : totalPaginas - 1;
        const deshabilitado = pagina >= limite;
        return (
          <button
            onClick={() => onIr(pagina + 1)}
            disabled={deshabilitado}
            style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              color: 'var(--text)', borderRadius: 8, padding: '8px 16px',
              cursor: deshabilitado ? 'default' : 'pointer',
              fontFamily: 'Space Grotesk, sans-serif', fontSize: 13, fontWeight: 600,
              opacity: deshabilitado ? 0.4 : 1,
            }}
          >Siguiente →</button>
        );
      })()}
    </div>
  );
}

// ── CATEGORY VIEW ──────────────────────────────────────────────────
function CategoryView({ categoria, onSelectArticle }) {
  const cat  = CATEGORIAS[categoria] || { label: categoria, color: 'var(--accent)' };
  const nots = NOTICIAS.filter(n => n.categoria === categoria).sort((a, b) => b.rawDate.localeCompare(a.rawDate));
  const [pagina, setPagina] = useState(0);

  const irPagina = (n) => {
    setPagina(n);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Entrevistas tiene su propia vista
  if (categoria === 'entrevistas') {
    return (
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '28px 20px 60px' }}>
        <SectionHeader title={cat.label} color={cat.color} />
        <EntrevistasExtra />
      </div>
    );
  }

  // Primera noticia: banner destacado (siempre la misma)
  const featured = nots[0] || null;
  // El resto: paginado
  const resto        = nots.slice(1);
  const totalPaginas = Math.ceil(resto.length / NOTICIAS_POR_PAGINA);
  const inicio       = pagina * NOTICIAS_POR_PAGINA;
  const paginaActual = resto.slice(inicio, inicio + NOTICIAS_POR_PAGINA);

  return (
    <div style={{ maxWidth: 1360, margin: '0 auto', padding: '28px 20px 60px' }}>
      <SectionHeader title={cat.label} color={cat.color} />

      {/* Contador */}
      {nots.length > 0 && (
        <p style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 20, fontFamily: 'Space Grotesk, sans-serif' }}>
          {nots.length} {nots.length === 1 ? 'nota' : 'notas'}
          {totalPaginas > 1 && ` · página ${pagina + 1} de ${totalPaginas}`}
        </p>
      )}

      {/* Banner destacado — solo en página 1 */}
      {featured && pagina === 0 && (
        <div style={{ marginBottom: 28, cursor: 'pointer' }} onClick={() => onSelectArticle(featured)}>
          <div className="featured-banner" style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', aspectRatio: '21/9', background: 'var(--surface-2)' }}>
            <img src={featured.imagen} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => e.target.style.display='none'} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 32px' }}>
              <CategoryBadge categoria={featured.categoria} />
              <h2 style={{ fontSize: 'clamp(18px, 2.5vw, 32px)', fontWeight: 800, color: '#fff', fontFamily: 'Space Grotesk, sans-serif', margin: '10px 0 8px', lineHeight: 1.25 }}>{featured.titulo}</h2>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', margin: 0 }}>{featured.autor} · {featured.fecha}</p>
            </div>
          </div>
        </div>
      )}

      {/* Grid de noticias paginado */}
      {paginaActual.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {paginaActual.map(n => <NewsCard key={n.id} noticia={n} onSelect={onSelectArticle} />)}
        </div>
      ) : nots.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-2)' }}>
          <p style={{ fontSize: 32, marginBottom: 12 }}>📰</p>
          <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 16 }}>No hay notas en esta sección todavía.</p>
        </div>
      ) : null}

      <Paginador pagina={pagina} totalPaginas={totalPaginas} onIr={irPagina} color={cat.color} maxVisible={4} />
    </div>
  );
}

const ENTREVISTAS_POR_PAGINA = 9; // 3 columnas × 3 filas

function EntrevistasExtra() {
  const audio = (typeof ENTREVISTAS !== 'undefined') ? ENTREVISTAS : [];
  const [pagina, setPagina] = useState(0);

  const totalPaginas = Math.ceil(audio.length / ENTREVISTAS_POR_PAGINA);
  const inicio       = pagina * ENTREVISTAS_POR_PAGINA;
  const paginaActual = audio.slice(inicio, inicio + ENTREVISTAS_POR_PAGINA);

  const irPagina = (n) => {
    setPagina(n);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (audio.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-2)' }}>
        <p style={{ fontSize: 32, marginBottom: 12 }}>🎙</p>
        <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 16 }}>No hay audios disponibles por el momento.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Contador */}
      <p style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 20, fontFamily: 'Space Grotesk, sans-serif' }}>
        {audio.length} entrevistas · página {pagina + 1} de {totalPaginas}
      </p>

      {/* Grid 3 por fila */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
        {paginaActual.map((ent, i) => {
          const isYoutube = ent.src && ent.src.includes('youtube.com/embed');
          return (
            <div key={inicio + i} style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              overflow: 'hidden',
            }}>
              {ent.imgUrl && (
                <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: 'var(--surface-2)' }}>
                  <img
                    src={ent.imgUrl}
                    alt=""
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={e => e.target.parentElement.style.display = 'none'}
                  />
                </div>
              )}
              <div style={{ padding: '12px 14px' }}>
                {isYoutube ? (
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 6 }}>
                    <iframe
                      src={ent.src}
                      title="YouTube"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    />
                  </div>
                ) : (
                  <iframe
                    src={ent.src}
                    width="100%"
                    height="52"
                    scrolling="no"
                    frameBorder="no"
                    style={{ display: 'block', borderRadius: 6 }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <Paginador pagina={pagina} totalPaginas={totalPaginas} onIr={irPagina} color="var(--accent)" />
    </div>
  );
}

// ── COPY LINK BUTTON ───────────────────────────────────────────────
function CopyLinkBtn({ noticia }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const url = window.location.origin + window.location.pathname + '#noticia/' + noticia.id;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2500); });
    } else {
      // fallback para navegadores sin clipboard API
      const ta = document.createElement('textarea');
      ta.value = url; ta.style.position = 'fixed'; ta.style.opacity = 0;
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); setCopied(true); setTimeout(() => setCopied(false), 2500); } catch(e) {}
      document.body.removeChild(ta);
    }
  };
  return (
    <button onClick={handleCopy} style={{
      background: copied ? '#22c55e22' : 'var(--surface)',
      color: copied ? '#22c55e' : 'var(--text-2)',
      border: `1px solid ${copied ? '#22c55e66' : 'var(--border)'}`,
      borderRadius: 6, padding: '6px 14px', fontSize: 11, fontWeight: 700,
      cursor: 'pointer', fontFamily: 'Space Grotesk, sans-serif',
      transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: 5,
    }}>
      {copied ? '✓ Copiado!' : '🔗 Copiar link'}
    </button>
  );
}

// ── FACEBOOK COMMENTS ──────────────────────────────────────────────
function FbComments({ noticia }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    // URL igual al formato original del sitio viejo
    const slug = noticia.titulo.replace(/ /g, '');
    const href = 'https://www.lasillaenradio.com.ar/' + slug;
    ref.current.innerHTML = `<div class="fb-comments" data-href="${href}" data-width="100%" data-numposts="5" data-lazy="true"></div>`;
    // Reinicializar el SDK de Facebook para que procese el nuevo widget
    if (window.FB) {
      window.FB.XFBML.parse(ref.current);
    }
  }, [noticia.id]);

  return (
    <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
      <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-2)', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        💬 Comentarios
      </p>
      <div ref={ref} />
    </div>
  );
}

// ── ARTICLE VIEW ───────────────────────────────────────────────────
function ArticleView({ noticia, onBack }) {
  const [imgIdx, setImgIdx] = useState(0);
  // Usar array de imágenes del backend si existe, si no la imagen única
  const imgs = (noticia.imagenes && noticia.imagenes.length > 0)
    ? noticia.imagenes
    : (noticia.imagen ? [noticia.imagen] : []);

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '32px 20px 80px' }}>
      <button onClick={onBack} style={{ background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6, marginBottom: 24, fontFamily: 'Space Grotesk, sans-serif', padding: 0, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        ← Volver
      </button>
      <CategoryBadge categoria={noticia.categoria} />
      <h1 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, lineHeight: 1.2, color: 'var(--text)', fontFamily: 'Space Grotesk, sans-serif', margin: '14px 0 12px' }}>{noticia.titulo}</h1>
      <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 20 }}>{noticia.subtitulo}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', marginBottom: 24 }}>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 800, fontSize: 14 }}>
          {noticia.autor.charAt(0)}
        </div>
        <div>
          <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', margin: 0 }}>{noticia.autor}</p>
          <p style={{ fontSize: 11, color: 'var(--text-3)', margin: 0 }}>{noticia.fuente} · {noticia.fecha}</p>
        </div>
      </div>
      {/* Imagen(es) con navegación si hay varias */}
      {imgs.length > 0 && (
        <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', marginBottom: 28, background: 'var(--surface-2)' }}>
          <img src={imgs[imgIdx]} alt="" style={{ width: '100%', maxHeight: 480, objectFit: 'cover', display: 'block' }} onError={e => e.target.style.display='none'} />
          {imgs.length > 1 && (
            <div style={{ position: 'absolute', bottom: 12, right: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
              <button onClick={() => setImgIdx(i => Math.max(0, i - 1))} disabled={imgIdx === 0}
                style={{ background: 'rgba(0,0,0,0.6)', border: 'none', color: '#fff', borderRadius: 6, width: 32, height: 32, cursor: 'pointer', fontSize: 14, opacity: imgIdx === 0 ? 0.4 : 1 }}>‹</button>
              <span style={{ background: 'rgba(0,0,0,0.6)', color: '#fff', fontSize: 11, padding: '4px 10px', borderRadius: 6 }}>{imgIdx + 1}/{imgs.length}</span>
              <button onClick={() => setImgIdx(i => Math.min(imgs.length - 1, i + 1))} disabled={imgIdx === imgs.length - 1}
                style={{ background: 'rgba(0,0,0,0.6)', border: 'none', color: '#fff', borderRadius: 6, width: 32, height: 32, cursor: 'pointer', fontSize: 14, opacity: imgIdx === imgs.length - 1 ? 0.4 : 1 }}>›</button>
            </div>
          )}
        </div>
      )}
      {/* Video de YouTube si existe */}
      {noticia.youtubeUrl && (() => {
        // Convierte cualquier formato de URL de YouTube al formato embed
        const toEmbed = (url) => {
          try {
            // ya es embed
            if (url.includes('youtube.com/embed/')) return url;
            // youtu.be/VIDEO_ID
            const short = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
            if (short) return `https://www.youtube.com/embed/${short[1]}`;
            // watch?v=VIDEO_ID
            const watch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
            if (watch) return `https://www.youtube.com/embed/${watch[1]}`;
          } catch {}
          return url;
        };
        const embedSrc = toEmbed(noticia.youtubeUrl);
        return (
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 14, marginBottom: 28 }}>
            <iframe src={embedSrc} title="YouTube" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
          </div>
        );
      })()}
      {/* Contenido */}
      <div style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--text)', whiteSpace: 'pre-wrap', fontFamily: 'DM Sans, sans-serif' }}>
        {noticia.contenido}
      </div>
      {/* Share */}
      {(() => {
        const shareUrl = encodeURIComponent(window.location.origin + window.location.pathname + '#noticia/' + noticia.id);
        const shareTitle = encodeURIComponent(noticia.titulo);
        const shareLinks = [
          ['Facebook', '#1877f2', `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`],
          ['Twitter/X', '#1d9bf0', `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`],
          ['WhatsApp', '#25d366', `https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`],
        ];
        return (
          <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--border)', display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-2)', fontFamily: 'Space Grotesk, sans-serif' }}>Compartir:</span>
            {shareLinks.map(([red, col, href]) => (
              <a key={red} href={href} target="_blank" rel="noopener noreferrer" style={{
                background: col + '22', color: col, border: `1px solid ${col}44`,
                borderRadius: 6, padding: '6px 14px', fontSize: 11, fontWeight: 700,
                cursor: 'pointer', fontFamily: 'Space Grotesk, sans-serif',
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
              }}>
                {red}
              </a>
            ))}
            <CopyLinkBtn noticia={noticia} />
          </div>
        );
      })()}
      {/* Comentarios Facebook */}
      <FbComments noticia={noticia} />
    </div>
  );
}

// ── SEARCH VIEW ────────────────────────────────────────────────────
function SearchView({ query, onSelectArticle }) {
  const results = NOTICIAS.filter(n =>
    n.titulo.toLowerCase().includes(query.toLowerCase()) ||
    n.contenido.toLowerCase().includes(query.toLowerCase()) ||
    n.autor.toLowerCase().includes(query.toLowerCase())
  ).sort((a, b) => b.rawDate.localeCompare(a.rawDate));
  return (
    <div style={{ maxWidth: 1360, margin: '0 auto', padding: '28px 20px 60px' }}>
      <SectionHeader title={`Resultados para "${query}"`} color="var(--accent)" />
      {results.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-2)' }}>
          <p style={{ fontSize: 48, marginBottom: 16 }}>🔍</p>
          <p style={{ fontSize: 18, fontFamily: 'Space Grotesk, sans-serif' }}>No encontramos resultados para "{query}"</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {results.map(n => <NewsCard key={n.id} noticia={n} onSelect={onSelectArticle} />)}
        </div>
      )}
    </div>
  );
}

// ── CONTACT MODAL ──────────────────────────────────────────────────
function ContactModal({ onClose }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ nombre: '', barrio: '', email: '', mensaje: '' });
  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      const res = await fetch('https://backend.lasillaenradio.com.ar/mensajes/enviar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: form.nombre,
          barrio: form.barrio,
          email: form.email,
          contenido: form.mensaje,
        }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError('Hubo un error al enviar el mensaje. Intentá de nuevo.');
      }
    } catch (err) {
      setError('No se pudo conectar con el servidor. Intentá más tarde.');
    } finally {
      setSending(false);
    }
  };
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, padding: '36px 40px', width: '100%', maxWidth: 520, position: 'relative', boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 20, background: 'none', border: 'none', color: 'var(--text-2)', cursor: 'pointer', fontSize: 20 }}>✕</button>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <p style={{ fontSize: 48, marginBottom: 16 }}>✅</p>
            <h3 style={{ color: 'var(--text)', fontFamily: 'Space Grotesk, sans-serif', fontSize: 22, marginBottom: 8 }}>¡Mensaje enviado!</h3>
            <p style={{ color: 'var(--text-2)', fontSize: 14 }}>Te vamos a responder a la brevedad.</p>
            <button onClick={onClose} style={{ marginTop: 20, background: 'var(--accent)', color: '#000', border: 'none', borderRadius: 8, padding: '10px 28px', fontWeight: 700, cursor: 'pointer', fontSize: 13, fontFamily: 'Space Grotesk, sans-serif' }}>Cerrar</button>
          </div>
        ) : (
          <>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 24 }}>Contacto</h3>
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <input required placeholder="Nombre *" value={form.nombre} onChange={e => setForm(f => ({...f, nombre: e.target.value}))} style={inputStyle} />
                <input placeholder="Barrio/Localidad" value={form.barrio} onChange={e => setForm(f => ({...f, barrio: e.target.value}))} style={inputStyle} />
              </div>
              <input required type="email" placeholder="E-mail *" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} style={inputStyle} />
              <textarea required placeholder="Tu mensaje..." value={form.mensaje} onChange={e => setForm(f => ({...f, mensaje: e.target.value}))} rows={5} style={{...inputStyle, resize: 'vertical', fontFamily: 'DM Sans, sans-serif'}} />
              {error && <p style={{ color: '#ef4444', fontSize: 13, margin: 0 }}>{error}</p>}
              <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 4 }}>
                <button type="button" onClick={onClose} style={{ background: 'var(--surface-2)', color: 'var(--text-2)', border: '1px solid var(--border)', borderRadius: 8, padding: '10px 22px', fontWeight: 700, cursor: 'pointer', fontSize: 13, fontFamily: 'Space Grotesk, sans-serif' }}>Cancelar</button>
                <button type="submit" disabled={sending} style={{ background: 'var(--accent)', color: '#000', border: 'none', borderRadius: 8, padding: '10px 28px', fontWeight: 700, cursor: sending ? 'not-allowed' : 'pointer', fontSize: 13, fontFamily: 'Space Grotesk, sans-serif', opacity: sending ? 0.7 : 1 }}>{sending ? 'Enviando...' : 'Enviar →'}</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 8,
  padding: '11px 14px', color: 'var(--text)', fontSize: 14, fontFamily: 'DM Sans, sans-serif',
  outline: 'none', width: '100%', boxSizing: 'border-box',
};

Object.assign(window, { HomeView, CategoryView, ArticleView, SearchView, ContactModal, ContactStrip, BannersRow });
