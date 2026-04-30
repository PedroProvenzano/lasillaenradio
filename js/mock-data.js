// ── DATA LOADER ────────────────────────────────────────────────────
// Carga datos desde https://backend.lasillaenradio.com.ar/
// y popula las variables globales que usan los componentes React.

const URL_BACKEND = 'https://backend.lasillaenradio.com.ar/';

// ── CATEGORÍAS (estático) ──────────────────────────────────────────
const CATEGORIAS = {
  actualidad:  { label: 'Actualidad',      color: '#60a5fa' },
  cultura:     { label: 'Cultura',         color: '#a855f7' },
  deporte:     { label: 'Deportes',        color: '#22c55e' },
  streaming:   { label: 'Streaming',       color: '#3b82f6' },
  espectaculo: { label: 'Espectáculos',    color: '#ec4899' },
  entrevistas: { label: 'Entrevistas',     color: '#f59e0b' },
  vidaSana:    { label: 'Vida Sana',       color: '#10b981' },
  medioAmb:    { label: 'Medio Ambiente',  color: '#84cc16' },
  genero:      { label: 'Género',          color: '#e879f9' },
};

// Mapeo: temaPrincipal del backend → ID de categoría del sitio
const TOPIC_MAP = {
  'actualidad':           'actualidad',
  'actualidad-front-uno': 'actualidad',
  'actualidad-front-dos': 'actualidad',
  'ecofin':               'actualidad',
  'curiosidades':         'actualidad',
  'cultura':              'cultura',
  'deporte':              'deporte',
  'streaming':            'streaming',
  'espectaculo':          'espectaculo',
  'entrevistas':          'entrevistas',
  'Vida sana':            'vidaSana',
  'Medio ambiente':       'medioAmb',
  'Genero':               'genero',
};

// ── HELPERS ────────────────────────────────────────────────────────
function parseImageUrl(imagenesUrl) {
  if (!imagenesUrl) return '';
  try {
    const parsed = JSON.parse(imagenesUrl);
    const url = Array.isArray(parsed) ? parsed[0] : parsed;
    return typeof url === 'string' ? url.replace('blob:', '') : '';
  } catch {
    return typeof imagenesUrl === 'string' ? imagenesUrl : '';
  }
}

function parseAllImages(imagenesUrl) {
  if (!imagenesUrl) return [];
  try {
    const parsed = JSON.parse(imagenesUrl);
    const arr = Array.isArray(parsed) ? parsed : [parsed];
    return arr.map(u => (typeof u === 'string' ? u.replace('blob:', '') : '')).filter(Boolean);
  } catch {
    return typeof imagenesUrl === 'string' ? [imagenesUrl] : [];
  }
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    const [y, m, d] = dateStr.slice(0, 10).split('-');
    const meses = ['enero','febrero','marzo','abril','mayo','junio',
                   'julio','agosto','septiembre','octubre','noviembre','diciembre'];
    return `${parseInt(d)} de ${meses[parseInt(m) - 1]}, ${y}`;
  } catch { return dateStr; }
}

function mapNoticia(raw, index) {
  const categoria = TOPIC_MAP[raw.temaPrincipal] || 'actualidad';
  const importNum = parseInt((raw.importancia || '').replace('importante', '')) || 0;
  return {
    id:        raw.id   || index + 1,
    titulo:    raw.titulo        || '',
    subtitulo: raw.contenidoRes  || '',
    contenido: raw.contenido     || '',
    autor:     raw.autor         || 'Redacción La Silla Diario',
    fuente:    raw.fuente        || 'LaSillaEnRadio',
    fecha:     formatDate(raw.date),
    rawDate:   raw.date || '',
    categoria,
    imagen:    parseImageUrl(raw.imagenesUrl),
    imagenes:  parseAllImages(raw.imagenesUrl),
    principal: importNum >= 1 && importNum <= 3,
    destacado: importNum >= 1 && importNum <= 6,
    youtubeUrl: (raw.youtubeUrl && raw.youtubeUrl !== 'vacio') ? raw.youtubeUrl : null,
    tags:      raw.tags || '',
  };
}

// ── VARIABLES GLOBALES ─────────────────────────────────────────────
var NOTICIAS      = [];
var TRIVIA        = { pregunta: '', opciones: [], correcta: 'a', descripcion: '' };
var BREAKING_NEWS = ['🔴 Cargando titulares...'];
var DATO_ART      = null;   // { imgUrl, descripcion, autor }
var DATO_MEME     = null;   // { imgUrl }
var ENTREVISTAS   = [];     // [{ imgUrl, src }, ...]

// ── CARGA DESDE EL BACKEND ─────────────────────────────────────────
(async function loadBackendData() {
  const get = (path) => fetch(URL_BACKEND + path).then(r => r.json());

  // 1 — Noticias
  try {
    const raw = await get('noticias/todas');
    NOTICIAS = raw.map(mapNoticia);
    BREAKING_NEWS = NOTICIAS
      .filter(n => n.destacado)
      .slice(0, 6)
      .map(n => '🔴 ' + n.titulo);
    if (!BREAKING_NEWS.length)
      BREAKING_NEWS = ['🔴 LaSillaEnRadio · Noticias concretas'];
  } catch (e) {
    console.warn('[Dato News] Error cargando noticias:', e);
  }

  // 2 — Trivia
  try {
    const res = await get('trivia/todas');
    const t   = res[0];
    if (t) {
      const opciones = [
        { id: 'a', texto: t.respuestaUno  || '' },
        { id: 'b', texto: t.respuestaDos  || '' },
        { id: 'c', texto: t.respuestaTres || '' },
      ];
      const sol      = (t.solucion || '').replace(/\s/g, '');
      const correcta = opciones.find(op => op.texto.replace(/\s/g, '') === sol)?.id || 'a';
      TRIVIA = { pregunta: t.pregunta || '', opciones, correcta, descripcion: t.description || '' };
    }
  } catch (e) {
    console.warn('[Dato News] Error cargando trivia:', e);
  }

  // 3 — Imagen del día (Dato Art)
  try {
    const res = await get('imagen/todas');
    const img = res[0];
    if (img) DATO_ART = { imgUrl: img.imgUrl, descripcion: img.descripcion, autor: img.autor };
  } catch (e) {
    console.warn('[Dato News] Error cargando imagen del día:', e);
  }

  // 4 — Meme
  try {
    const res  = await get('meme/todas');
    const meme = res[0];
    if (meme) DATO_MEME = { imgUrl: meme.imgUrl };
  } catch (e) {
    console.warn('[Dato News] Error cargando meme:', e);
  }

  // 5 — Entrevistas / audios
  try {
    const res = await get('entrevistas/todas');
    ENTREVISTAS = [...res].reverse();
  } catch (e) {
    console.warn('[Dato News] Error cargando entrevistas:', e);
  }

  // 6 — Registrar visita
  fetch(URL_BACKEND + 'visitas/add').catch(() => {});

  // Avisar a React que los datos están listos
  window.dispatchEvent(new CustomEvent('backendDataReady'));
})();
