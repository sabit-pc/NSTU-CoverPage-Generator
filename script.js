/* ═══════════════════════════════════════════
   NSTU Cover Page Generator — script.js
   ═══════════════════════════════════════════ */

'use strict';

/* ─── NSTU Logo (embedded SVG → base64) ───────────────────────────
   A clean SVG representation of the NSTU crest — no external file needed.
   Replace with a real PNG base64 string if you have the official logo.
────────────────────────────────────────────────────────────────── */
// default NSTU logo
let logoDataURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAADqCAMAAAAWJ24oAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAEUUExURQsAff+aAP///wAAAAChx/8AAP/nwcHBwYGBgT4+PvDw8QcHB/8/P6GhoeHh4iwsLNHR0bGxsQJMoRoaGv/NgWBgYE9PTwYjj5GRkQCJvHFxcQYQhwFgqQB5tP/cp//58AQzlmUxT//EaP+gBhsCdU0hXcXA3//z4QYGBsVzGf+tK0o5nP/t0YpLPPCQAQsDgv+0Pf8NA/+nGdN9ECwLbD0VZKdfKgCXwgFur42DwP/UkeKGBv+6TisrK/+FhRkZGf9oaD09PdDQ0P8eHphVM3tAQ//w8P/h4f+MAP82AF9fX/+oqLZpIW9vb//Bwf9yAP9UAODg4P/R0ZCQkGpdrSwZjbaw16egztPQ5wAAAEdwTEdwTGMtUcIAAABcdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAAEEnqkgAAGX9JREFUeNrsm2lT20oWhiULI1myZNnCCzYGh80DBgwJAQIZhqkESCq5QGUguVX+//9j+nRr6U2yJMvgD/ckJBUjWo/O8vbpVkeZFGs31epNwUMqBY9XLZer/yD+g/jaiPfV63SI19X7t0G8KZdP7tIg3p2UyzdvhSjeWYYovfBVEO+Rc8q/piP+Qped3L9NLl6XRZ6q9KPy9RuVy90XdPMf0xB/oIu+3L2V6OC7T0OUPMdr6qIYQwFRlg2viShWAo8oralXnV0EPeERZxScAhBBlcsP8YgPZZm+v+4czadaVfjnTIJTSBvBFSyLKCn5N0B8YGWPQbybWXCKacbYWDKIswtOZsSbG0nm3yOO8r0Mkf0OVWM3N/NCRCp48kPelFXj/CuB+XGSTSmVjCEtf3mYKjyJgvMA+Zkp/EpGgQGP3Yuff5G4BWCuhUYdj5FJiDLlYngDzjfsAuEydO81Jzh31+UT7MP7OVY0CVP5S4KSrKsHcY2R/8MPcxada+yHcvUhllBdlz8dCcHJ9VxFx5cMEu0babQOtlR1U5YjwU9ln7DzSPd9vD823ququh/v+zxLmHyzS2xKflbB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';
let logoImage   = null;                         // HTMLImageElement

/* Pre-load default logo */
(function preloadDefaultLogo() {
  const img = new Image();
  img.onload = () => {
    logoImage = img;
    renderLivePreview();
    showThumbPreview(logoDataURL);
  };
  img.src = logoDataURL;
})();

/* ─── Form helpers ─────────────────────────────────────────────── */
const $ = id => document.getElementById(id);

function val(id) {
  return ($(`${id}`)?.value || '').trim();
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function getData() {
  return {
    university:  val('university')  || 'Noakhali Science & Technology University',
    location:    val('location')    || 'Noakhali – 3814',
    department:  val('department')  || 'Department',
    title:       val('title')       || 'Assignment Title',
    course:      val('course')      || 'Course Name',
    courseCode:  val('courseCode')  || 'Course Code',
    year:        val('year')        || 'Year',
    term:        val('term')        || 'Term',
    session:     val('session')     || 'Session',
    submitDate:  formatDate(val('submitDate')),
    studentName: val('studentName') || 'Student Name',
    roll:        val('roll')        || 'Roll No.',
    instructor:  val('instructor')  || 'Instructor Name',
    designation: val('designation') || 'Designation', 
  };
}

/* ─── Logo file input ──────────────────────────────────────────── */
$('logoFile').addEventListener('change', function () {
  const file = this.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    logoDataURL = e.target.result;
    const img = new Image();
    img.onload = () => {
      logoImage = img;
      renderLivePreview();
      showThumbPreview(logoDataURL);
    };
    img.src = logoDataURL;
  };
  reader.readAsDataURL(file);
});

function showThumbPreview(src) {
  const thumb = $('logoPreviewThumb');
  thumb.src = src;
  thumb.classList.add('visible');
  $('logoUploadArea').querySelector('.logo-upload-text').textContent = 'Logo loaded. Click to replace.';
}

/* ─── Live preview wiring ──────────────────────────────────────── */
document.querySelectorAll('input').forEach(el => {
  el.addEventListener('input',  renderLivePreview);
  el.addEventListener('change', renderLivePreview);
});

/* ─── Default date ─────────────────────────────────────────────── */
(function setDefaultDate() {
  const today = new Date().toISOString().split('T')[0];
  $('submitDate').value = today;
})();

/* ═══════════════════════════════════════════════════════════════
   CORE: Draw the cover page onto a canvas context
   ctx       — CanvasRenderingContext2D
   W, H      — canvas pixel dimensions
   scale     — px per mm  (for A4: 794/210 ≈ 3.78 at 96dpi)
   data      — form values
   logo      — HTMLImageElement | null
═══════════════════════════════════════════════════════════════ */
function drawCover(ctx, W, H, scale, data, logo) {
  const mm = v => v * scale; // helper: mm → px

  ctx.clearRect(0, 0, W, H);

  /* ── Background ── */
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, W, H);

  /* ── Top accent band ── */
  ctx.fillStyle = '#0b2545';
  ctx.fillRect(mm(8), mm(8), W - mm(16), mm(22));

  /* ── Bottom accent band ── */
  ctx.fillStyle = '#0b2545';
  ctx.fillRect(mm(8), H - mm(5), W - mm(16), mm(22));

  /* ── University name (top band) ── */
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.font = `bold ${mm(6.5)}px 'Times New Roman', serif`;
  ctx.fillText(data.university.toUpperCase(), W / 2, mm(22));

  /* ── Location below band ── */
  ctx.fillStyle = '#0b2545';
  ctx.font = `bold ${mm(5)}px 'Times New Roman', serif`;
  ctx.fillText(data.location, W / 2, mm(42));

  /* ── Logo ── */
  const logoSize = mm(34);
  const logoX = (W - logoSize) / 2;
  const logoY = mm(48);
  if (logo) {
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.15)';
    ctx.shadowBlur = mm(3);
    ctx.drawImage(logo, logoX, logoY, logoSize, logoSize);
    ctx.restore();
  } else {
    // placeholder circle
    ctx.strokeStyle = '#dde2ea';
    ctx.lineWidth = mm(0.5);
    ctx.beginPath();
    ctx.arc(W / 2, logoY + logoSize / 2, logoSize / 2, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#aab';
    ctx.font = `${mm(4)}px sans-serif`;
    ctx.fillText('LOGO', W / 2, logoY + logoSize / 2 + mm(1.5));
  }

  /* ── Divider line after logo ── */
  const afterLogo = logoY + logoSize + mm(8);
  ctx.strokeStyle = '#0b2545';
  ctx.lineWidth = mm(0.6);
  ctx.beginPath();
  ctx.moveTo(mm(50), afterLogo);
  ctx.lineTo(W - mm(50), afterLogo);
  ctx.stroke();

  /* ── "Assignment On:" label ── */
  const titleY = afterLogo + mm(10);
  ctx.fillStyle = '#0b2545';
  ctx.font = `bold ${mm(5)}px 'Times New Roman', serif`;
  ctx.fillText('Assignment On:', W / 2, titleY);

  /* ── Assignment title (wrapped) ── */
  ctx.font = `bold ${mm(8)}px 'Times New Roman', serif`;
  ctx.fillStyle = '#1a1a2e';
  const titleLines = wrapText(ctx, data.title, W - mm(50));
  titleLines.forEach((line, i) => {
    ctx.fillText(line, W / 2, titleY + mm(10) + i * mm(8.5));
  });

  /* ── Course info block ── */
  let cy = titleY + mm(10) + titleLines.length * mm(8.5) + mm(8);

  ctx.textAlign = 'center';
  ctx.fillStyle = '#333';

  const infoLines = [];
  if (data.course)     infoLines.push(`Course Title:  ${data.course}`);
  if (data.courseCode) infoLines.push(`Course Code: ${data.courseCode}`);
  if (data.year)       infoLines.push(`Year: ${data.year}`);
  if (data.term)       infoLines.push(`Term: ${data.term}`);
  if (data.session)    infoLines.push(`Session: ${data.session}`);

  ctx.font = `${mm(5)}px 'Times New Roman', serif`;
  infoLines.forEach((line, i) => {
    ctx.fillText(line, W / 2, cy + i * mm(7));
  });

  cy += infoLines.length * mm(7) + mm(5);

  /* ── Department ── */
  ctx.fillStyle = '#0b2545';
  ctx.font = `bold ${mm(4.5)}px 'Times New Roman', serif`;
  ctx.fillText(data.department, W / 2, cy);

  /* ── Divider ── */
  cy += mm(8);
  ctx.strokeStyle = '#dde2ea';
  ctx.lineWidth = mm(0.5);
  ctx.beginPath();
  ctx.moveTo(mm(20), cy);
  ctx.lineTo(W - mm(20), cy);
  ctx.stroke();

  /* ── Two-column info table ── */
  cy += mm(20);
  const colW   = (W - mm(40)) / 2;
  const col1X  = mm(20);
  const col2X  = W / 2 + mm(5);
  const tableH = mm(36);

  // Box borders
  ctx.strokeStyle = '#0b2545';
  ctx.lineWidth = mm(0.5);
  // Left box
  ctx.strokeRect(col1X, cy, colW - mm(5), tableH);
  // Right box
  ctx.strokeRect(col2X, cy, colW - mm(5), tableH);

  // Box header fills
  ctx.fillStyle = 'rgba(11,37,69,0.06)';
  ctx.fillRect(col1X, cy, colW - mm(5), mm(9));
  ctx.fillRect(col2X, cy, colW - mm(5), mm(9));

  ctx.fillStyle = '#0b2545';
  ctx.textAlign = 'left';
  ctx.font = `bold ${mm(4.2)}px 'Times New Roman', serif`;
  ctx.fillText('Submitted by:', col1X + mm(3), cy + mm(6.5));
  ctx.fillText('Submitted to:', col2X + mm(3), cy + mm(6.5));

  ctx.font = `${mm(3.8)}px 'Times New Roman', serif`;
  ctx.fillStyle = '#555';
  ctx.fillText('Name:', col1X + mm(3), cy + mm(15));
  ctx.fillText('Name:', col2X + mm(3), cy + mm(15));

  ctx.fillStyle = '#0b2545';
  ctx.font = `bold ${mm(5)}px 'Times New Roman', serif`;
  ctx.fillText(data.studentName, col1X + mm(3), cy + mm(22));
  ctx.fillText(data.instructor,  col2X + mm(3), cy + mm(22));

  ctx.fillStyle = '#333';
  ctx.font = `${mm(3.8)}px 'Times New Roman', serif`;
  ctx.fillText(`Roll: ${data.roll}`, col1X + mm(3), cy + mm(30));
  if (data.designation) {
    const dLines = wrapText(ctx, data.designation, colW - mm(10));
    dLines.forEach((l, i) => ctx.fillText(l, col2X + mm(3), cy + mm(30) + i * mm(5.5)));
  }

  /* ── Submission Date ── */
  cy += tableH + mm(10);

  cy += mm(45);

  if (data.submitDate) {
    ctx.fillStyle = '#0b2545';
    ctx.font = `bold ${mm(4.5)}px 'Times New Roman', serif`;
    ctx.textAlign = 'center';
    ctx.fillText(`Submission Date: ${data.submitDate}`, W / 2, cy);
  }
}

/* ─── Text wrap helper ──────────────────────────────────────────── */
function wrapText(ctx, text, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let current = '';
  words.forEach(word => {
    const test = current ? `${current} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  });
  if (current) lines.push(current);
  return lines;
}

/* ─── Live preview renderer ────────────────────────────────────── */
function renderLivePreview() {
  const canvas = $('liveCanvas');
  const wrap   = canvas.parentElement;
  const W = wrap.clientWidth  || 400;
  const H = wrap.clientHeight || Math.round(W * 297 / 210);
  canvas.width  = W * 2;
  canvas.height = H * 2;
  canvas.style.width  = W + 'px';
  canvas.style.height = H + 'px';
  const ctx = canvas.getContext('2d');
  ctx.scale(2, 2);
  const scale = W / 210;
  drawCover(ctx, W, H, scale, getData(), logoImage);
}

/* ─── Modal preview ────────────────────────────────────────────── */
function openPreviewModal() {
  const modal  = $('previewModal');
  const canvas = $('modalCanvas');
  const A4_W   = 794;   // px at 96dpi
  const A4_H   = 1123;
  canvas.width  = A4_W * 2;
  canvas.height = A4_H * 2;
  canvas.style.width  = A4_W + 'px';
  canvas.style.height = A4_H + 'px';
  const ctx = canvas.getContext('2d');
  ctx.scale(2, 2);
  const scale = A4_W / 210;
  drawCover(ctx, A4_W, A4_H, scale, getData(), logoImage);
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePreviewModal() {
  $('previewModal').classList.remove('open');
  document.body.style.overflow = '';
}

/* Close modal on overlay click */
$('previewModal').addEventListener('click', function (e) {
  if (e.target === this) closePreviewModal();
});

/* ─── PDF Download ─────────────────────────────────────────────── */
function downloadPDF() {
  // Validate required fields
  const required = {
    university:  'University Name',
    department:  'Department',
    title:       'Assignment Title',
    course:      'Course Title',
    submitDate:  'Submission Date',
    studentName: 'Student Name',
    roll:        'Roll No.',
    instructor:  'Instructor Name',
  };

  let missing = [];
  Object.entries(required).forEach(([id, label]) => {
    const el = $(id);
    if (!el.value.trim()) {
      el.classList.add('error');
      missing.push(label);
      el.addEventListener('input', () => el.classList.remove('error'), { once: true });
    }
  });

  if (missing.length) {
    showToast(`⚠️ Please fill: ${missing.join(', ')}`, '#c8102e');
    return;
  }

  /* Render to a high-res offscreen canvas then export via jsPDF */
  const A4_W  = 794;
  const A4_H  = 1123;
  const scale = A4_W / 210;

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
  buildJsPDFCover(doc, getData(), logoDataURL); 

  const name   = val('studentName').replace(/\s+/g, '_') || 'student';
  const course = val('courseCode').replace(/\s+/g, '_') || val('course').replace(/\s+/g, '_') || 'assignment';
  doc.save(`NSTU_Cover_${name}_${course}.pdf`);

  showToast('✅ PDF downloaded!');
  closePreviewModal();
}

function buildJsPDFCover(doc, d, logoSrc) {
  const W = 210, H = 297;

  // Background
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, W, H, 'F');

  // Outer double border
  doc.setDrawColor(11, 37, 69);
  doc.setLineWidth(1.2);
  doc.rect(8, 8, W - 16, H - 16);
  doc.setLineWidth(0.4);
  doc.rect(10, 10, W - 20, H - 20);

  // Top navy band
  doc.setFillColor(11, 37, 69);
  doc.rect(8, 8, W - 16, 22, 'F');

  // Bottom navy band
  doc.rect(8, H - 30, W - 16, 22, 'F');

  // Red accent lines
  doc.setFillColor(200, 16, 46);
  doc.rect(8, 30, W - 16, 2.5, 'F');
  doc.rect(8, H - 30, W - 16, 2.5, 'F');

  // University name in top band
  doc.setFont('times', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(255, 255, 255);
  doc.text(d.university.toUpperCase(), W / 2, 22, { align: 'center' });

  // Location
  doc.setFontSize(11);
  doc.setTextColor(11, 37, 69);
  doc.text(d.location, W / 2, 42, { align: 'center' });

  // Logo
  if (logoSrc) {
    try {
      const fmt = logoSrc.includes('svg') ? 'SVG' : 'PNG';
      doc.addImage(logoSrc, fmt, (W - 32) / 2, 48, 32, 32);
    } catch(e) {
      // fallback: skip logo silently
    }
  }

  // Divider after logo
  doc.setDrawColor(200, 16, 46);
  doc.setLineWidth(0.6);
  doc.line(25, 86, W - 25, 86);

  // "Assignment On:" label
  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(11, 37, 69);
  doc.text('Assignment On:', W / 2, 96, { align: 'center' });

  // Title (wrapped)
  doc.setFontSize(13);
  doc.setTextColor(26, 26, 46);
  const titleLines = doc.splitTextToSize(d.title, 160);
  doc.text(titleLines, W / 2, 106, { align: 'center' });

  let cy = 106 + titleLines.length * 8;

  // Course info
  doc.setFont('times', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(50, 50, 50);
  const infoLines = [];
  if (d.course)     infoLines.push(`Course Title:  ${d.course}`);
  if (d.courseCode) infoLines.push(`Course Code: ${d.courseCode}`);
  if (d.year) infoLines.push(`Year: ${d.year}`);
  if (d.term) infoLines.push(`Term: ${d.term}`);
  if (d.session)    infoLines.push(`Session: ${d.session}`);
  infoLines.forEach((line, i) => {
    doc.text(line, W / 2, cy + i * 7, { align: 'center' });
  });
  cy += infoLines.length * 7 + 5;

  // Department
  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(200, 16, 46);
  doc.text(d.department, W / 2, cy, { align: 'center' });
  cy += 10;

  // Horizontal divider
  doc.setDrawColor(200, 200, 210);
  doc.setLineWidth(0.4);
  doc.line(20, cy, W - 20, cy);
  cy += 8;

  // Two-column table
  const colW = (W - 40) / 2;
  const col1X = 20, col2X = W / 2 + 5;
  const tableH = 38;

  // Box borders
  doc.setDrawColor(11, 37, 69);
  doc.setLineWidth(0.5);
  doc.rect(col1X, cy, colW - 5, tableH);
  doc.rect(col2X, cy, colW - 5, tableH);

  // Header fill
  doc.setFillColor(230, 235, 245);
  doc.rect(col1X, cy, colW - 5, 9, 'F');
  doc.rect(col2X, cy, colW - 5, 9, 'F');

  // Box headings
  doc.setFont('times', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(11, 37, 69);
  doc.text('Submitted by:', col1X + 3, cy + 6.5);
  doc.text('Submitted to:', col2X + 3, cy + 6.5);

  // Labels
  doc.setFont('times', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(80, 80, 80);
  doc.text('Name:', col1X + 3, cy + 15);
  doc.text('Name:', col2X + 3, cy + 15);

  // Values
  doc.setFont('times', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(11, 37, 69);
  doc.text(d.studentName, col1X + 3, cy + 22);
  doc.text(d.instructor,  col2X + 3, cy + 22);

  doc.setFont('times', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(50, 50, 50);
  doc.text(`ROLL: ${d.roll}`, col1X + 3, cy + 30);
  if (d.designation) {
    const dLines = doc.splitTextToSize(d.designation, colW - 10);
    doc.text(dLines, col2X + 3, cy + 30);
  }

  cy += tableH + 12;

  // Red tick
  doc.setDrawColor(200, 16, 46);
  doc.setLineWidth(0.5);
  doc.line(W / 2, cy, W / 2, cy + 5);
  cy += 10;

  // Submission date
  if (d.submitDate) {
    doc.setFont('times', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(11, 37, 69);
    doc.text(`Submission Date: ${d.submitDate}`, W / 2, cy, { align: 'center' });
  }

  // Bottom band text
  doc.setFont('times', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(232, 160, 32);
  doc.text(d.university.toUpperCase(), W / 2, H - 20, { align: 'center' });

  // Page number
  doc.setTextColor(180, 180, 180);
  doc.setFontSize(9);
  doc.text('1', W - 14, H - 4, { align: 'right' });
}

/* ─── Toast ────────────────────────────────────────────────────── */
function showToast(msg, bg) {
  const t = $('toast');
  t.textContent = msg;
  t.style.background = bg || '#0b2545';
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3200);
}

/* ─── Init ─────────────────────────────────────────────────────── */
window.addEventListener('load', () => {
  renderLivePreview();
});

window.addEventListener('resize', renderLivePreview);
