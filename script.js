// ══════════════════════════════════════════
//  ÉTAT INITIAL
// ══════════════════════════════════════════
const DEFAULT = {
    arts: [
        { id: 1, nom: 'Pain de campagne', prix: 2.20, qty: 18, desc: 'Pain au levain naturel', e: '🍞', online: true, tva: 0.055, nomen: [{ mpId: 1, qte: 0.35 }, { mpId: 4, qte: 0.005 }, { mpId: 6, qte: 0.008 }] },
        { id: 2, nom: 'Croissant', prix: 1.20, qty: 24, desc: 'Croissant pur beurre', e: '🥐', online: true, tva: 0.055, nomen: [{ mpId: 1, qte: 0.08 }, { mpId: 2, qte: 0.04 }, { mpId: 5, qte: 1 }] },
        { id: 3, nom: 'Pain bâtard', prix: 1.80, qty: 12, desc: 'Baguette tradition', e: '🥖', online: true, tva: 0.055, nomen: [{ mpId: 1, qte: 0.25 }, { mpId: 4, qte: 0.004 }] },
        { id: 4, nom: 'Brioche', prix: 3.50, qty: 8, desc: 'Brioche moelleuse', e: '🧁', online: true, tva: 0.055, nomen: [{ mpId: 1, qte: 0.22 }, { mpId: 2, qte: 0.10 }, { mpId: 5, qte: 2 }, { mpId: 7, qte: 0.03 }] },
        { id: 5, nom: 'Brownie', prix: 2.80, qty: 15, desc: 'Chocolat noir intense', e: '🍫', online: true, tva: 0.055, nomen: [{ mpId: 3, qte: 0.10 }, { mpId: 2, qte: 0.08 }, { mpId: 5, qte: 2 }, { mpId: 7, qte: 0.06 }] },
        { id: 6, nom: 'Pain au choco', prix: 1.00, qty: 30, desc: 'Pur beurre feuilleté', e: '🥐', online: true, tva: 0.055, nomen: [{ mpId: 1, qte: 0.07 }, { mpId: 3, qte: 0.03 }, { mpId: 2, qte: 0.03 }] },
        { id: 7, nom: 'Flan', prix: 2.50, qty: 10, desc: 'Flan pâtissier', e: '🍮', online: true, tva: 0.055, nomen: [{ mpId: 1, qte: 0.15 }, { mpId: 5, qte: 2 }, { mpId: 8, qte: 0.15 }, { mpId: 7, qte: 0.04 }] },
        { id: 8, nom: 'Madeleine', prix: 0.80, qty: 40, desc: 'Madeleine citron', e: '🍋', online: true, tva: 0.055, nomen: [{ mpId: 1, qte: 0.04 }, { mpId: 2, qte: 0.02 }, { mpId: 5, qte: 0.5 }, { mpId: 7, qte: 0.02 }] },
        { id: 9, nom: 'Tartelette Fraise', prix: 3.80, qty: 12, desc: 'Pâte sablée et fraises', e: '🍓', online: true, tva: 0.055, nomen: [{ mpId: 1, qte: 0.05 }, { mpId: 2, qte: 0.03 }, { mpId: 5, qte: 1 }, { mpId: 10, qte: 0.10 }] },
        { id: 10, nom: 'Éclair Café', prix: 2.90, qty: 15, desc: 'Crème café onctueuse', e: '☕', online: true, tva: 0.055, nomen: [{ mpId: 1, qte: 0.04 }, { mpId: 5, qte: 2 }, { mpId: 8, qte: 0.10 }, { mpId: 14, qte: 0.005 }] },
        { id: 11, nom: 'Cookie Pécan', prix: 2.20, qty: 20, desc: 'Moelleux aux noix', e: '🍪', online: true, tva: 0.055, nomen: [{ mpId: 1, qte: 0.06 }, { mpId: 2, qte: 0.04 }, { mpId: 9, qte: 0.02 }] },
        { id: 12, nom: 'Quiche Lorraine', prix: 4.50, qty: 10, desc: 'Lardons et crème', e: '🥧', online: true, tva: 0.10, nomen: [{ mpId: 1, qte: 0.08 }, { mpId: 13, qte: 0.05 }, { mpId: 11, qte: 0.10 }, { mpId: 5, qte: 1 }] },
        { id: 13, nom: 'Chausson Pommes', prix: 1.90, qty: 14, desc: 'Feuilletage maison', e: '🍎', online: true, tva: 0.055, nomen: [{ mpId: 1, qte: 0.07 }, { mpId: 2, qte: 0.05 }] },
        { id: 14, nom: 'Muffin Myrtille', prix: 2.50, qty: 16, desc: 'Baies sauvages', e: '🫐', online: true, tva: 0.055, nomen: [{ mpId: 1, qte: 0.10 }, { mpId: 5, qte: 1 }, { mpId: 7, qte: 0.05 }] },
        // --- Nouveaux articles ---
        { id: 15, nom: 'Pain de Seigle', prix: 2.60, qty: 10, desc: 'Idéal pour les fruits de mer', e: '🥖', online: true, tva: 0.055, nomen: [{ mpId: 15, qte: 0.30 }, { mpId: 6, qte: 0.008 }] },
        { id: 16, nom: 'Paris-Brest', prix: 4.20, qty: 6, desc: 'Crème mousseline praliné', e: '🍩', online: true, tva: 0.055, nomen: [{ mpId: 1, qte: 0.05 }, { mpId: 2, qte: 0.06 }, { mpId: 5, qte: 2 }, { mpId: 12, qte: 0.04 }] },
        { id: 17, nom: 'Fougasse Olive', prix: 3.20, qty: 8, desc: 'Olives vertes et herbes', e: '🍃', online: true, tva: 0.055, nomen: [{ mpId: 1, qte: 0.20 }, { mpId: 6, qte: 0.005 }] },
        { id: 18, nom: 'Jambon-Beurre', prix: 4.80, qty: 15, desc: 'Le classique parisien', e: '🥪', online: true, tva: 0.10, nomen: [{ mpId: 1, qte: 0.15 }, { mpId: 2, qte: 0.02 }, { mpId: 16, qte: 2 }] },
        { id: 19, nom: 'Tartelette Citron', prix: 3.50, qty: 10, desc: 'Meringue fondante', e: '🍋', online: true, tva: 0.055, nomen: [{ mpId: 1, qte: 0.04 }, { mpId: 5, qte: 1 }, { mpId: 7, qte: 0.05 }, { mpId: 17, qte: 0.03 }] },
        { id: 20, nom: 'Financier', prix: 1.50, qty: 25, desc: 'Poudre d’amandes', e: '🧈', online: true, tva: 0.055, nomen: [{ mpId: 12, qte: 0.03 }, { mpId: 2, qte: 0.03 }, { mpId: 5, qte: 1 }] }
    ],
    mps: [
        { id: 1, nom: 'Farine T65', stock: 25, u: 'kg', cout: 0.85, seuil: 5, cond: 'Sac 25kg' },
        { id: 2, nom: 'Beurre', stock: 4.2, u: 'kg', cout: 7.50, seuil: 2, cond: 'Plaquette 250g' },
        { id: 3, nom: 'Choco barre', stock: 1.8, u: 'kg', cout: 12.0, seuil: 1, cond: 'Tablette 200g' },
        { id: 4, nom: 'Levure', stock: 0.8, u: 'kg', cout: 4.00, seuil: 0.5, cond: 'Sachet 500g' },
        { id: 5, nom: 'Oeuf', stock: 60, u: 'u', cout: 0.25, seuil: 20, cond: 'Boîte 12' },
        { id: 6, nom: 'Sel', stock: 3.5, u: 'kg', cout: 0.30, seuil: 0.5, cond: 'Paquet 1kg' },
        { id: 7, nom: 'Sucre', stock: 6, u: 'kg', cout: 1.20, seuil: 2, cond: 'Paquet 1kg' },
        { id: 8, nom: 'Lait', stock: 10, u: 'L', cout: 0.95, seuil: 4, cond: 'Brique 1L' },
        { id: 9, nom: 'Noix de pécan', stock: 2.5, u: 'kg', cout: 22.0, seuil: 0.5, cond: 'Sachet 1kg' },
        { id: 10, nom: 'Fraises', stock: 5.0, u: 'kg', cout: 8.50, seuil: 1.5, cond: 'Caissette 2kg' },
        { id: 11, nom: 'Crème Liquide', stock: 12, u: 'L', cout: 3.20, seuil: 3, cond: 'Brique 1L' },
        { id: 12, nom: 'Amandes Poudre', stock: 4.0, u: 'kg', cout: 14.5, seuil: 1, cond: 'Sac 1kg' },
        { id: 13, nom: 'Lardons', stock: 3.0, u: 'kg', cout: 9.80, seuil: 1, cond: 'Barquette 500g' },
        { id: 14, nom: 'Café Extrait', stock: 0.5, u: 'L', cout: 45.0, seuil: 0.1, cond: 'Flacon 500ml' },
        { id: 15, nom: 'Farine Seigle', stock: 10, u: 'kg', cout: 1.10, seuil: 3, cond: 'Sac 10kg' },
        { id: 16, nom: 'Tranches Jambon', stock: 40, u: 'u', cout: 0.45, seuil: 10, cond: 'Paquet 20' },
        { id: 17, nom: 'Purée Citron', stock: 2.0, u: 'kg', cout: 18.0, seuil: 0.5, cond: 'Pot 1kg' }
    ],
    users: [
        { id: 1, nom: 'Maxime Bernard', role: 'Gérant', email: 'maxime@boulangerie.fr', acces: 'Tout' },
        { id: 2, nom: 'Lucie Morin', role: 'Vendeur', email: 'lucie@boulangerie.fr', acces: 'Caisse, Stock' },
        { id: 3, nom: 'Thomas Petit', role: 'Pâtissier', email: 'thomas@boulangerie.fr', acces: 'Stock, Articles' }
    ],
    suivi: { rec: 0, ht: 0, tvaCol: 0, nb: 0, esp: 0, cb: 0, chq: 0, marge: 0, byArt: {}, hist: [] },
    // Simulation d'un historique passé
    journees: [
        { date: '17/04/2026', rec: 450.50, ht: 420.00, tvaCol: 30.50, nb: 42, esp: 120.50, cb: 330.00, chq: 0, marge: 180.00, byArt: { 'Pain bâtard': { qty: 20, ttc: 36, ht: 34, marge: 12 } }, hist: [] },
        { date: '18/04/2026', rec: 512.00, ht: 480.00, tvaCol: 32.00, nb: 55, esp: 200.00, cb: 312.00, chq: 0, marge: 210.00, byArt: { 'Croissant': { qty: 45, ttc: 54, ht: 51, marge: 25 } }, hist: [] }
    ],
    cmds: [],
    nid: 30,
};

// PERSISTANCE localStorage
function loadState() {
    try {
        const raw = localStorage.getItem('localco_v2');
        if (raw) return JSON.parse(raw);
    } catch (e) { }
    return JSON.parse(JSON.stringify(DEFAULT));
}
function saveState() {
    try { localStorage.setItem('localco_v2', JSON.stringify(S)); } catch (e) { }
}
const S = loadState();
// Assurer que nomen existe sur les articles chargés
S.arts.forEach(a => { if (!a.nomen) a.nomen = []; if (!a.tva) a.tva = 0.055; });

// ══════════════════════════════════════════
//  UTILS
// ══════════════════════════════════════════
const fmt = v => parseFloat(v).toFixed(2).replace('.', ',') + ' €';
const fmtN = v => parseFloat(v).toFixed(2).replace('.', ',');
const today = () => new Date().toLocaleDateString('fr', { day: '2-digit', month: '2-digit', year: 'numeric' });
const sdot = m => { const p = m.stock / (m.seuil * 3.33) * 100; return p >= 100 ? '#1a6b3c' : p >= 50 ? '#c17d0a' : '#c0392b'; };
const sbadge = m => { const p = m.stock / (m.seuil * 3.33) * 100; return p >= 100 ? '<span class="badge bg">OK</span>' : p >= 50 ? '<span class="badge bo">Moyen</span>' : '<span class="badge br">Critique</span>'; };

// Calcul coût MP d'un article
function coutMP(art) {
    if (!art.nomen || !art.nomen.length) return 0;
    return art.nomen.reduce((s, n) => {
        const mp = S.mps.find(m => m.id === n.mpId);
        return s + (mp ? mp.cout * n.qte : 0);
    }, 0);
}

// Décrémente le stock MP pour une vente
function decrementerMP(art, qty) {
    if (!art.nomen) return;
    art.nomen.forEach(n => {
        const mp = S.mps.find(m => m.id === n.mpId);
        if (mp) mp.stock = Math.max(0, mp.stock - n.qte * qty);
    });
}

// ══════════════════════════════════════════
//  VIEWS
// ══════════════════════════════════════════
function go(v) {
    document.querySelectorAll('.view').forEach(x => x.classList.remove('active'));
    document.getElementById('view-' + v).classList.add('active');
    if (v === 'client') renderShop();
    if (v === 'merchant') { renderCaisse(); updBadge(); }
}

// ══════════════════════════════════════════
//  CLIENT SHOP
// ══════════════════════════════════════════
function renderShop() {
    const g = document.getElementById('shop-grid');
    g.innerHTML = S.arts.filter(a => a.online).map(a => {
        const q = S.cart && S.cart[a.id] || 0;
        const low = a.qty > 0 && a.qty <= 3;
        return `<div class="shop-card ${a.qty === 0 ? 'out-stock' : ''}">
      <div class="sc-img">${a.e}</div>
      <div class="sc-body">
        <div class="sc-name">${a.nom}</div>
        <div class="sc-desc">${a.desc}</div>
        <div class="sc-foot">
          <div class="sc-price">${fmt(a.prix)}<small>TTC · TVA ${(a.tva * 100).toFixed(1)}%</small></div>
          ${a.qty === 0 ? '<span class="stock-warn">Épuisé</span>' :
                q === 0 ? `<button class="sc-add" onclick="addCart(${a.id})">+</button>` :
                    `<div class="sc-qty"><button class="sc-qbtn" onclick="chCart(${a.id},-1)">−</button><span class="sc-qval">${q}</span><button class="sc-qbtn" onclick="chCart(${a.id},1)">+</button></div>`}
        </div>
        ${low && a.qty > 0 ? `<div class="stock-warn" style="margin-top:4px">⚠ Plus que ${a.qty} disponible(s)</div>` : ''}
      </div>
    </div>`;
    }).join('');
}

if (!S.cart) S.cart = {};
function addCart(id) {
    const a = S.arts.find(x => x.id === id);
    if (!a || a.qty <= 0) return;
    S.cart[id] = 1; updCart(); renderShop();
}
function chCart(id, d) {
    const a = S.arts.find(x => x.id === id);
    const max = a ? a.qty : 99;
    S.cart[id] = Math.max(0, Math.min(max, (S.cart[id] || 0) + d));
    if (!S.cart[id]) delete S.cart[id];
    updCart(); renderShop();
}
function updCart() {
    const entries = Object.entries(S.cart);
    const tot = entries.reduce((s, [id, q]) => { const a = S.arts.find(x => x.id == id); return s + (a ? a.prix * q : 0); }, 0);
    const cnt = entries.reduce((s, [, q]) => s + q, 0);
    document.getElementById('c-badge').textContent = cnt;
    document.getElementById('c-total').textContent = fmt(tot);
    const el = document.getElementById('c-items');
    if (!entries.length) { el.innerHTML = '<div class="cp-empty">Votre panier est vide</div>'; return; }
    el.innerHTML = entries.map(([id, q]) => {
        const a = S.arts.find(x => x.id == id); if (!a) return '';
        return `<div class="cart-item">
      <div class="ci-info"><div class="ci-name">${a.e} ${a.nom}</div><div class="ci-price">${fmt(a.prix)} × ${q}</div></div>
      <div class="qc" style="margin:0 6px"><button class="qb" onclick="chCart(${id},-1)">−</button><span class="qv">${q}</span><button class="qb" onclick="chCart(${id},1)">+</button></div>
      <span class="ci-total">${fmt(a.prix * q)}</span></div>`;
    }).join('');
}
function toggleCart() { document.getElementById('c-panel').classList.toggle('open'); document.getElementById('c-overlay').classList.toggle('open'); }

function passerCommande() {
    const nom = document.getElementById('cl-nom').value.trim();
    const email = document.getElementById('cl-email').value.trim();
    if (!nom || !email) { document.getElementById('c-stock-err').textContent = 'Veuillez saisir votre nom et email.'; document.getElementById('c-stock-err').style.display = 'block'; return; }
    const entries = Object.entries(S.cart);
    if (!entries.length) { document.getElementById('c-stock-err').textContent = 'Votre panier est vide.'; document.getElementById('c-stock-err').style.display = 'block'; return; }

    // Vérification stock en temps réel
    const errStock = [];
    entries.forEach(([id, q]) => { const a = S.arts.find(x => x.id == id); if (a && q > a.qty) errStock.push(`${a.nom} (dispo: ${a.qty}, demandé: ${q})`); });
    if (errStock.length) { document.getElementById('c-stock-err').textContent = 'Stock insuffisant : ' + errStock.join(', '); document.getElementById('c-stock-err').style.display = 'block'; return; }
    document.getElementById('c-stock-err').style.display = 'none';

    const arts = entries.map(([id, q]) => { const a = S.arts.find(x => x.id == id); return { id: a.id, nom: a.nom, qty: q, prix: a.prix, e: a.e, tva: a.tva }; });
    const tot = arts.reduce((s, a) => s + a.qty * a.prix, 0);
    const lieu = document.getElementById('cl-lieu').value;
    const date = document.getElementById('cl-date').value;
    const tel = document.getElementById('cl-tel').value;

    const cmd = { id: S.nid++, nom, email, tel, arts, tot, lieu, date: date || 'À définir', statut: 'nouvelle', ts: new Date().toISOString() };
    S.cmds.push(cmd);

    // Réservation du stock (on réduit le stock disponible pour éviter survente)
    arts.forEach(a => { const art = S.arts.find(x => x.id === a.id); if (art) art.qty = Math.max(0, art.qty - a.qty); });

    S.cart = {};
    saveState(); updCart();
    document.getElementById('c-panel').classList.remove('open');
    document.getElementById('c-overlay').classList.remove('open');

    // Récapitulatif simulant un email
    const recap = `De : commande@boulangerie-maxime.fr
À : ${email}
Objet : Confirmation de commande LOCAL CO

Bonjour ${nom},

Votre commande a bien été enregistrée.

─────────────────────────────
${arts.map(a => `  ${a.e} ${a.nom}  ×${a.qty}  ${fmt(a.prix * a.qty)}`).join('\n')}
─────────────────────────────
Total TTC : ${fmt(tot)}

Lieu de retrait : ${lieu}
Date : ${date || 'À convenir'}
Paiement : Au retrait (CB ou espèces)

Merci et à bientôt !
Boulangerie Maxime · 06 XX XX XX XX`;

    document.getElementById('c-recap').textContent = recap;
    document.getElementById('c-shop').style.display = 'none';
    document.getElementById('c-confirm').style.display = 'block';
    updBadge();
}
function resetClient() {
    document.getElementById('c-confirm').style.display = 'none';
    document.getElementById('c-shop').style.display = 'block';
    ['cl-nom', 'cl-email', 'cl-tel', 'cl-date'].forEach(id => document.getElementById(id).value = '');
    renderShop();
}

// ══════════════════════════════════════════
//  MERCHANT NAV
// ══════════════════════════════════════════
function showS(name, btn) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-it,.bn-it').forEach(b => b.classList.remove('active'));
    document.getElementById('sc-' + name).classList.add('active');
    document.querySelectorAll(`[data-s="${name}"]`).forEach(b => b.classList.add('active'));
    if (btn) btn.classList.add('active');
    const renders = { stock: renderStock, articles: renderArtCards, commandes: renderCmds, suivi: renderSuivi, cloture: renderCloture, users: renderUsers };
    if (renders[name]) renders[name]();
    window.scrollTo(0, 0);
}
function swTab(tabId, btn) {
    const sc = btn.closest('.screen');
    sc.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    sc.querySelectorAll('[id^="t-"]').forEach(t => t.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
}
function updBadge() {
    const n = S.cmds.filter(c => c.statut === 'nouvelle' || c.statut === 'en attente').length;
    document.getElementById('sb-badge').textContent = n;
    const bb = document.getElementById('bn-badge');
    if (bb) { bb.textContent = n; bb.style.display = n > 0 ? 'flex' : 'none'; }
    const d = document.getElementById('cmd-dot'); if (d) d.style.display = n > 0 ? 'inline-block' : 'none';
}

// ══════════════════════════════════════════
//  CAISSE
// ══════════════════════════════════════════
if (!S.panier) S.panier = [];
document.getElementById('caisse-date').textContent = today();

function renderCaisse() {
    const g = document.getElementById('art-grid'); if (!g) return;
    g.innerHTML = S.arts.map(a => {
        const ht = (a.prix / (1 + a.tva));
        return `<button class="art-btn ${S.panier.find(p => p.id === a.id) ? 'sel' : ''}" onclick="addPan(${a.id})" ${a.qty === 0 ? 'disabled' : ''}>
      <span class="a-name">${a.e} ${a.nom}</span>
      <span class="a-price">${fmt(a.prix)}</span>
      <span class="a-tva">HT: ${fmtN(ht)}€ · TVA ${(a.tva * 100).toFixed(1)}%</span>
      <span class="a-stock">Stock: ${a.qty}</span>
    </button>`;
    }).join('');
    renderPan();
}

function addPan(id) {
    const a = S.arts.find(x => x.id === id); if (!a || a.qty <= 0) return;
    const ex = S.panier.find(p => p.id === id);
    if (ex) { if (ex.qty < a.qty) ex.qty++; }
    else S.panier.push({ id, nom: a.nom, prix: a.prix, qty: 1, e: a.e, tva: a.tva, nomen: a.nomen || [] });
    renderCaisse();
}
function chPan(id, d) {
    const i = S.panier.findIndex(p => p.id === id); if (i < 0) return;
    S.panier[i].qty += d; if (S.panier[i].qty <= 0) S.panier.splice(i, 1);
    renderCaisse();
}
function getTVARate() { return parseFloat(document.getElementById('tva-sel').value); }

function renderPan() {
    const l = document.getElementById('pan-list'), e = document.getElementById('pan-empty'); if (!l) return;
    if (!S.panier.length) { l.innerHTML = ''; e.style.display = 'block'; }
    else {
        e.style.display = 'none';
        l.innerHTML = S.panier.map(p => `<div class="p-item">
      <span class="p-name">${p.e} ${p.nom}</span>
      <div class="qc"><button class="qb" onclick="chPan(${p.id},-1)">−</button><span class="qv">${p.qty}</span><button class="qb" onclick="chPan(${p.id},1)">+</button></div>
      <span class="p-price">${fmt(p.prix * p.qty)}</span></div>`).join('');
    }
    const rem = parseFloat(document.getElementById('rem-in').value) || 0;
    const ttc = S.panier.reduce((s, p) => s + p.prix * p.qty, 0) * (1 - rem / 100);
    // TVA par ligne selon le taux de l'article
    const tvaCol = S.panier.reduce((s, p) => {
        const rate = p.tva || getTVARate();
        return s + (p.prix * p.qty * (1 - rem / 100)) * (rate / (1 + rate));
    }, 0);
    const ht = ttc - tvaCol;
    document.getElementById('t-disp').textContent = fmt(ttc);
    document.getElementById('t-ht-line').textContent = `HT : ${fmt(ht)}`;
    document.getElementById('t-tva-line').textContent = `TVA : ${fmt(tvaCol)}`;
}
document.getElementById('rem-in').addEventListener('input', renderPan);
document.getElementById('tva-sel').addEventListener('change', renderPan);

function encaisser(mode) {
    if (!S.panier.length) return;
    const rem = parseFloat(document.getElementById('rem-in').value) || 0;
    const ttc = S.panier.reduce((s, p) => s + p.prix * p.qty, 0) * (1 - rem / 100);
    const tvaCol = S.panier.reduce((s, p) => {
        const rate = p.tva || getTVARate();
        return s + (p.prix * p.qty * (1 - rem / 100)) * (rate / (1 + rate));
    }, 0);
    const ht = ttc - tvaCol;
    const margeVente = S.panier.reduce((s, p) => {
        const a = S.arts.find(x => x.id === p.id);
        const cout = a ? coutMP(a) * p.qty : 0;
        const prixHT = (p.prix * p.qty * (1 - rem / 100)) / (1 + (p.tva || 0.055));
        return s + (prixHT - cout);
    }, 0);

    // décrémenter articles ET matières premières
    S.panier.forEach(p => {
        const a = S.arts.find(x => x.id === p.id);
        if (a) { a.qty = Math.max(0, a.qty - p.qty); decrementerMP(a, p.qty); }
        if (!S.suivi.byArt[p.nom]) S.suivi.byArt[p.nom] = { qty: 0, ttc: 0, ht: 0, marge: 0 };
        const pTTC = p.prix * p.qty * (1 - rem / 100);
        const pHT = pTTC / (1 + (p.tva || 0.055));
        const pCout = S.arts.find(x => x.id === p.id) ? coutMP(S.arts.find(x => x.id === p.id)) * p.qty : 0;
        S.suivi.byArt[p.nom].qty += p.qty;
        S.suivi.byArt[p.nom].ttc += pTTC;
        S.suivi.byArt[p.nom].ht += pHT;
        S.suivi.byArt[p.nom].marge += pHT - pCout;
    });

    S.suivi.rec += ttc; S.suivi.ht += ht; S.suivi.tvaCol += tvaCol;
    S.suivi.nb++; S.suivi.marge += margeVente;
    if (mode === 'especes') S.suivi.esp += ttc;
    else if (mode === 'cb') S.suivi.cb += ttc;
    else S.suivi.chq += ttc;

    const t = { h: new Date().toLocaleTimeString('fr', { hour: '2-digit', minute: '2-digit' }), arts: [...S.panier], ttc, ht, tvaCol, mode, rem };
    S.suivi.hist.unshift(t);
    saveState();

    document.getElementById('ticket-z').innerHTML = mkTicket(t) + `<button class="btn btn-o" style="width:100%;margin-top:8px" onclick="document.getElementById('ticket-z').innerHTML=''">Fermer</button>`;
    S.panier = []; document.getElementById('rem-in').value = ''; renderCaisse();
}

function mkTicket(t) {
    return `<div class="ticket">
    <div class="tk-t">🥖 BOULANGERIE MAXIME</div>
    <div class="tk-l"><span>${today()}</span><span>${t.h}</span></div>
    <div class="tk-s"></div>
    ${t.arts.map(a => `<div class="tk-l"><span>${a.e} ${a.nom} ×${a.qty}</span><span>${fmt(a.prix * a.qty)}</span></div>`).join('')}
    <div class="tk-s"></div>
    ${t.rem > 0 ? `<div class="tk-l"><span>Remise ${t.rem}%</span><span style="color:var(--red)">−${fmt(t.arts.reduce((s, a) => s + a.prix * a.qty, 0) * t.rem / 100)}</span></div>` : ''}
    <div class="tk-l"><span>HT</span><span>${fmt(t.ht)}</span></div>
    <div class="tk-l"><span>TVA</span><span>${fmt(t.tvaCol)}</span></div>
    <div class="tk-l" style="font-weight:700"><span>TOTAL TTC</span><span>${fmt(t.ttc)}</span></div>
    <div class="tk-l"><span>Paiement</span><span>${t.mode.toUpperCase()}</span></div>
    <div class="tk-s"></div>
    <div style="text-align:center">Merci et à bientôt !</div>
  </div>`;
}

// ══════════════════════════════════════════
//  COMMANDES
// ══════════════════════════════════════════
function renderCmds() {
    const el = document.getElementById('cmd-list');
    const pending = S.cmds.filter(c => c.statut !== 'traitée' && c.statut !== 'annulée');
    if (!pending.length) { el.innerHTML = '<div style="color:var(--text2);font-size:14px;padding:32px;text-align:center">✓ Aucune commande en attente</div>'; return; }
    el.innerHTML = pending.map(c => `<div class="cmd-card ${c.statut === 'nouvelle' ? 'new' : ''}">
    <div class="cmd-hd">
      <div><div class="cmd-nm">${c.nom}${c.statut === 'nouvelle' ? '<span class="ndot"></span>' : ''}</div>
      <div class="cmd-mt">📧 ${c.email} · 📞 ${c.tel || '—'}</div></div>
      <span class="badge ${c.statut === 'nouvelle' ? 'bb' : 'bo'}">${c.statut === 'nouvelle' ? 'Nouvelle' : 'En attente'}</span>
    </div>
    <div class="cmd-arts">${c.arts.map(a => `${a.e} ${a.nom} ×${a.qty}`).join(' · ')}</div>
    <div style="font-size:12px;color:var(--text2);margin-bottom:9px">📍 ${c.lieu} · 🗓 ${c.date}</div>
    <div class="cmd-ft">
      <div class="cmd-tot">${fmt(c.tot)}</div>
      <div style="display:flex;gap:6px">
        <button class="btn btn-g" style="font-size:12px;padding:7px 12px" onclick="traiterCmd(${c.id})">✓ Traiter</button>
        <button class="btn btn-o" style="font-size:12px;padding:7px 12px" onclick="annulerCmd(${c.id})">✕</button>
      </div>
    </div>
  </div>`).join('');
    S.cmds.forEach(c => { if (c.statut === 'nouvelle') c.statut = 'en attente'; });
    saveState(); updBadge();
}

function traiterCmd(id) {
    const c = S.cmds.find(x => x.id === id); if (!c) return;
    // Stock déjà réservé à la commande, on décrémente juste les MP
    c.arts.forEach(a => {
        const art = S.arts.find(x => x.id === a.id);
        if (art) decrementerMP(art, a.qty);
        if (!S.suivi.byArt[a.nom]) S.suivi.byArt[a.nom] = { qty: 0, ttc: 0, ht: 0, marge: 0 };
        const pHT = a.prix * a.qty / (1 + (a.tva || 0.055));
        const pCout = art ? coutMP(art) * a.qty : 0;
        S.suivi.byArt[a.nom].qty += a.qty; S.suivi.byArt[a.nom].ttc += a.prix * a.qty;
        S.suivi.byArt[a.nom].ht += pHT; S.suivi.byArt[a.nom].marge += pHT - pCout;
    });
    const tvaCmd = c.arts.reduce((s, a) => { const r = a.tva || 0.055; return s + a.prix * a.qty * (r / (1 + r)); }, 0);
    S.suivi.rec += c.tot; S.suivi.ht += c.tot - tvaCmd; S.suivi.tvaCol += tvaCmd;
    S.suivi.nb++; S.suivi.cb += c.tot;
    S.suivi.hist.unshift({ h: new Date().toLocaleTimeString('fr', { hour: '2-digit', minute: '2-digit' }), arts: c.arts, ttc: c.tot, ht: c.tot - tvaCmd, tvaCol: tvaCmd, mode: 'cmd en ligne', rem: 0 });
    c.statut = 'traitée';
    saveState(); renderCmds(); updBadge(); suc('Commande traitée', `${c.nom} — ${fmt(c.tot)}`);
}
function annulerCmd(id) {
    const c = S.cmds.find(x => x.id === id); if (!c) return;
    // Remettre le stock
    c.arts.forEach(a => { const art = S.arts.find(x => x.id === a.id); if (art) art.qty += a.qty; });
    c.statut = 'annulée'; saveState(); renderCmds(); updBadge();
}

// ══════════════════════════════════════════
//  STOCK
// ══════════════════════════════════════════
function renderStock() {
    document.getElementById('mp-tbody').innerHTML = S.mps.map(m => `<tr>
    <td><span class="dot" style="background:${sdot(m)}"></span>${m.nom}</td>
    <td><strong>${m.stock} ${m.u}</strong></td><td>${m.cond}</td>
    <td>${fmt(m.cout)}</td><td>${fmt(m.cout * m.stock)}</td><td>${sbadge(m)}</td></tr>`).join('');
    document.getElementById('mp-cards').innerHTML = S.mps.map(m => `<div class="mob-card">
    <div class="mc-row"><span style="font-weight:700;font-size:14px"><span class="dot" style="background:${sdot(m)}"></span>${m.nom}</span>${sbadge(m)}</div>
    <div class="mc-row"><span class="mc-label">Stock</span><span class="mc-val">${m.stock} ${m.u}</span></div>
    <div class="mc-row"><span class="mc-label">Coût unit.</span><span class="mc-val">${fmt(m.cout)}</span></div>
    <div class="mc-row"><span class="mc-label">Valeur stock</span><span class="mc-val" style="font-weight:700;color:var(--green)">${fmt(m.cout * m.stock)}</span></div>
  </div>`).join('');

    const tot = S.mps.reduce((s, m) => s + m.cout * m.stock, 0);
    document.getElementById('v-mp').textContent = fmt(tot);
    document.getElementById('cnt-o').textContent = S.mps.filter(m => { const p = m.stock / (m.seuil * 3.33) * 100; return p >= 50 && p < 100; }).length;
    document.getElementById('cnt-r').textContent = S.mps.filter(m => m.stock / (m.seuil * 3.33) * 100 < 50).length;
    const al = document.getElementById('st-alerts');
    al.innerHTML = S.mps.filter(m => m.stock < m.seuil).map(m => `<div class="alert-b ${m.stock < m.seuil * 0.3 ? 'alert-r' : 'alert-o'}">⚠ <strong>${m.nom}</strong> — ${m.stock} ${m.u} restants</div>`).join('');

    document.getElementById('as-tbody').innerHTML = S.arts.map(a => {
        const cout = coutMP(a); const htPrix = a.prix / (1 + a.tva); const marge = htPrix - cout; const pct = cout > 0 ? (marge / htPrix * 100) : null;
        return `<tr><td>${a.e} ${a.nom}</td><td><strong>${a.qty} u</strong></td><td>${fmt(a.prix)}</td>
      <td>${fmt(cout)}</td>
      <td class="${marge >= 0 ? 'marge-pos' : 'marge-neg'}">${fmt(marge)}${pct !== null ? ` (${pct.toFixed(0)}%)` : ''}${!a.nomen || !a.nomen.length ? '<br><small style="color:var(--amber)">Nomenclature manquante</small>' : ''}</td>
      <td><span class="badge ${a.qty > 10 ? 'bg' : a.qty > 2 ? 'bo' : 'br'}">${a.qty > 10 ? 'OK' : a.qty > 2 ? 'Moyen' : 'Critique'}</span></td></tr>`;
    }).join('');
    document.getElementById('as-cards').innerHTML = S.arts.map(a => {
        const cout = coutMP(a); const htPrix = a.prix / (1 + a.tva); const marge = htPrix - cout;
        return `<div class="mob-card">
      <div class="mc-row"><span style="font-weight:700;font-size:14px">${a.e} ${a.nom}</span><span class="badge ${a.qty > 10 ? 'bg' : a.qty > 2 ? 'bo' : 'br'}">${a.qty} u</span></div>
      <div class="mc-row"><span class="mc-label">Prix TTC</span><span class="mc-val">${fmt(a.prix)}</span></div>
      <div class="mc-row"><span class="mc-label">Coût MP</span><span class="mc-val">${fmt(cout)}</span></div>
      <div class="mc-row"><span class="mc-label">Marge HT</span><span class="mc-val ${marge >= 0 ? 'marge-pos' : 'marge-neg'}">${fmt(marge)}</span></div>
    </div>`;
    }).join('');
    document.getElementById('r-mp').innerHTML = S.mps.map(m => `<option value="${m.id}">${m.nom}</option>`).join('');
}
function openReappro() { renderStock(); document.getElementById('m-reappro').style.display = 'flex'; }
function saveReappro() {
    const id = parseInt(document.getElementById('r-mp').value);
    const q = parseFloat(document.getElementById('r-qty').value) || 0;
    if (q <= 0) return; const m = S.mps.find(x => x.id === id);
    if (m) { m.stock += q; saveState(); cm('m-reappro'); renderStock(); suc('Stock mis à jour', `+${q} ${m.u} de ${m.nom}`); }
}

// ══════════════════════════════════════════
//  ARTICLES + NOMENCLATURE
// ══════════════════════════════════════════
function renderArtCards() {
    document.getElementById('art-cards').innerHTML = S.arts.map(a => {
        const cout = coutMP(a); const htPrix = a.prix / (1 + a.tva); const marge = htPrix - cout;
        return `<div class="card" style="margin-bottom:0">
      <div style="font-size:28px;margin-bottom:7px">${a.e}</div>
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:5px">
        <div style="font-size:14px;font-weight:700">${a.nom}</div>
        <span class="badge ${a.qty > 10 ? 'bg' : a.qty > 0 ? 'bo' : 'br'}">${a.qty} u</span>
      </div>
      <div style="font-size:12px;color:var(--text2);margin-bottom:6px;line-height:1.4">${a.desc}</div>
      <div style="font-size:16px;font-weight:700;color:var(--green);margin-bottom:2px">${fmt(a.prix)}</div>
      <div style="font-size:11px;color:var(--text2);margin-bottom:5px">HT : ${fmtN(a.prix / (1 + a.tva))}€ · TVA ${(a.tva * 100).toFixed(1)}%</div>
      <div style="font-size:12px;margin-bottom:4px">Coût MP : ${fmt(cout)} · <span class="${marge >= 0 ? 'marge-pos' : 'marge-neg'}">Marge : ${fmt(marge)}</span></div>
      ${!a.nomen || !a.nomen.length ? '<div style="font-size:11px;color:var(--amber);margin-bottom:6px">⚠ Nomenclature non définie</div>' : '<div style="font-size:11px;color:var(--text2);margin-bottom:6px">MP: ' + a.nomen.map(n => { const m = S.mps.find(x => x.id === n.mpId); return m ? `${m.nom} ×${n.qte}${m.u}` : '' }).filter(Boolean).join(', ') + '</div>'}
      <div style="margin-bottom:8px"><span class="badge ${a.online ? 'bg' : 'bo'}">${a.online ? 'En ligne' : 'Boutique seule'}</span></div>
      <div class="btn-row">
        <button class="btn btn-o" style="flex:1;font-size:12px;padding:7px" onclick="editArt(${a.id})">✏ Modifier</button>
        <button class="btn btn-o" style="flex:1;font-size:12px;padding:7px" onclick="openNomen(${a.id})">⚗ Nomenclature</button>
        <button class="btn btn-o" style="flex:1;font-size:12px;padding:7px" onclick="openPerte(${a.id})">📋 Perte</button>
      </div>
    </div>`;
    }).join('');
}

function openArticle() {
    S.editArt = null; document.getElementById('m-art-tt').textContent = 'Nouvel article';
    ['a-nom', 'a-prix', 'a-qty', 'a-desc'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('a-emoji').value = '🥖'; document.getElementById('a-online').value = '1'; document.getElementById('a-tva').value = '0.055';
    document.getElementById('m-article').style.display = 'flex';
}
function editArt(id) {
    const a = S.arts.find(x => x.id === id); S.editArt = id;
    document.getElementById('m-art-tt').textContent = 'Modifier';
    document.getElementById('a-nom').value = a.nom; document.getElementById('a-prix').value = a.prix;
    document.getElementById('a-qty').value = a.qty; document.getElementById('a-desc').value = a.desc;
    document.getElementById('a-emoji').value = a.e; document.getElementById('a-online').value = a.online ? '1' : '0';
    document.getElementById('a-tva').value = a.tva || 0.055;
    document.getElementById('m-article').style.display = 'flex';
}
function saveArticle() {
    const nom = document.getElementById('a-nom').value.trim();
    const prix = parseFloat(document.getElementById('a-prix').value) || 0;
    const qty = parseInt(document.getElementById('a-qty').value) || 0;
    const desc = document.getElementById('a-desc').value.trim();
    const e = document.getElementById('a-emoji').value || '🥖';
    const online = document.getElementById('a-online').value === '1';
    const tva = parseFloat(document.getElementById('a-tva').value) || 0.055;
    if (!nom || prix <= 0) return;
    if (S.editArt) { Object.assign(S.arts.find(x => x.id === S.editArt), { nom, prix, qty, desc, e, online, tva }); }
    else S.arts.push({ id: S.nid++, nom, prix, qty, desc, e, online, tva, nomen: [] });
    saveState(); cm('m-article'); renderArtCards(); renderCaisse(); suc('Article enregistré', nom);
}

// Nomenclature
let _nomenArtId = null;
function openNomen(artId) {
    _nomenArtId = artId;
    const a = S.arts.find(x => x.id === artId);
    document.getElementById('m-nomen-tt').textContent = `Nomenclature — ${a.nom}`;
    const rows = document.getElementById('nomen-rows');
    rows.innerHTML = S.mps.map(m => {
        const existing = a.nomen && a.nomen.find(n => n.mpId === m.id);
        return `<div class="nomen-row">
      <span class="nomen-mp">${m.nom}</span>
      <input class="nomen-qty" type="number" step="0.001" min="0" placeholder="0" data-mpid="${m.id}" value="${existing ? existing.qte : ''}"/>
      <span class="nomen-unit">${m.u}</span>
    </div>`;
    }).join('');
    document.getElementById('m-nomen').style.display = 'flex';
}
function saveNomen() {
    const a = S.arts.find(x => x.id === _nomenArtId); if (!a) return;
    const inputs = document.querySelectorAll('.nomen-qty');
    a.nomen = [];
    inputs.forEach(inp => {
        const q = parseFloat(inp.value) || 0;
        if (q > 0) a.nomen.push({ mpId: parseInt(inp.dataset.mpid), qte: q });
    });
    saveState(); cm('m-nomen'); renderArtCards(); suc('Nomenclature enregistrée', a.nom);
}

function openPerte(preId) {
    document.getElementById('p-art').innerHTML = S.arts.map(a => `<option value="${a.id}" ${a.id === preId ? 'selected' : ''}>${a.nom}</option>`).join('');
    document.getElementById('p-qty').value = ''; document.getElementById('p-mot').value = '';
    document.getElementById('m-perte').style.display = 'flex';
}
function savePerte() {
    const id = parseInt(document.getElementById('p-art').value);
    const q = parseInt(document.getElementById('p-qty').value) || 0;
    if (q <= 0) return; const a = S.arts.find(x => x.id === id);
    if (a) a.qty = Math.max(0, a.qty - q);
    saveState(); cm('m-perte'); renderArtCards(); renderCaisse(); suc('Perte déclarée', `${q} unité(s) de ${a?.nom}`);
}

// ══════════════════════════════════════════
//  SUIVI
// ══════════════════════════════════════════
function renderSuivi() {
    document.getElementById('sv-rec').textContent = fmt(S.suivi.rec);
    document.getElementById('sv-ht').textContent = fmt(S.suivi.ht);
    document.getElementById('sv-tva').textContent = fmt(S.suivi.tvaCol);
    document.getElementById('sv-nb').textContent = S.suivi.nb;
    document.getElementById('sv-esp').textContent = fmt(S.suivi.esp);
    document.getElementById('sv-cb').textContent = fmt(S.suivi.cb);
    document.getElementById('sv-chq').textContent = fmt(S.suivi.chq);
    document.getElementById('sv-marge').textContent = fmt(S.suivi.marge);
    const entries = Object.entries(S.suivi.byArt);
    document.getElementById('sv-tbody').innerHTML = !entries.length
        ? '<tr><td colspan="4" style="color:var(--text2);text-align:center;padding:14px">Aucune vente</td></tr>'
        : entries.sort((a, b) => b[1].ttc - a[1].ttc).map(([n, v]) => `<tr>
      <td>${n}</td><td>${v.qty}</td><td class="tc">${fmt(v.ttc)}</td>
      <td class="${v.marge >= 0 ? 'marge-pos' : 'marge-neg'}">${fmt(v.marge)}</td></tr>`).join('');
    document.getElementById('sv-hist').innerHTML = !S.suivi.hist.length
        ? '<div style="color:var(--text2);font-size:13px;padding:8px 0">Aucune transaction</div>'
        : S.suivi.hist.slice(0, 20).map(t => `<div class="h-item">
      <div class="h-dot"></div>
      <div class="h-info"><div class="h-art">${t.arts.map(a => a.nom).join(', ')}</div>
      <div class="h-meta">${t.h} · ${t.mode} · HT:${fmt(t.ht)}</div></div>
      <div class="h-amt">${fmt(t.ttc)}</div></div>`).join('');
}

// ══════════════════════════════════════════
//  CLÔTURE
// ══════════════════════════════════════════
function renderCloture() {
    document.getElementById('cl-today').textContent = today();
    document.getElementById('cl-rec').textContent = fmt(S.suivi.rec);
    document.getElementById('cl-esp').textContent = fmt(S.suivi.esp);
    document.getElementById('cl-cb').textContent = fmt(S.suivi.cb);
    document.getElementById('cl-nb').textContent = S.suivi.nb;
    const hist = document.getElementById('hist-jours');
    if (!S.journees.length) { hist.innerHTML = '<div style="color:var(--text2);font-size:14px;padding:20px;text-align:center">Aucune journée clôturée</div>'; return; }
    hist.innerHTML = S.journees.slice().reverse().map((j, i) => `<div class="jour-card">
    <div class="jour-hd" onclick="toggleJour(${i})">
      <div class="jour-date">📅 ${j.date}</div>
      <div class="jour-stats">
        <div class="jour-stat"><span>CA TTC</span><strong>${fmt(j.rec)}</strong></div>
        <div class="jour-stat"><span>Ventes</span><strong>${j.nb}</strong></div>
        <div class="jour-stat"><span>Marge</span><strong class="${j.marge >= 0 ? 'marge-pos' : 'marge-neg'}">${fmt(j.marge)}</strong></div>
      </div>
      <span style="color:var(--text2);font-size:12px">▼</span>
    </div>
    <div class="jour-detail" id="jd-${i}">
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:10px">
        <div><div style="font-size:11px;color:var(--text2)">HT</div><div style="font-weight:700">${fmt(j.ht)}</div></div>
        <div><div style="font-size:11px;color:var(--text2)">TVA</div><div style="font-weight:700">${fmt(j.tvaCol)}</div></div>
        <div><div style="font-size:11px;color:var(--text2)">Espèces</div><div style="font-weight:700">${fmt(j.esp)}</div></div>
        <div><div style="font-size:11px;color:var(--text2)">CB</div><div style="font-weight:700">${fmt(j.cb)}</div></div>
        <div><div style="font-size:11px;color:var(--text2)">Chèques</div><div style="font-weight:700">${fmt(j.chq)}</div></div>
      </div>
      ${j.byArt && Object.keys(j.byArt).length ? `<table class="s-tbl"><thead><tr><th>Article</th><th>Qté</th><th>CA TTC</th><th>Marge</th></tr></thead><tbody>
        ${Object.entries(j.byArt).map(([n, v]) => `<tr><td>${n}</td><td>${v.qty}</td><td>${fmt(v.ttc)}</td><td class="${v.marge >= 0 ? 'marge-pos' : 'marge-neg'}">${fmt(v.marge)}</td></tr>`).join('')}
      </tbody></table>`: ''}
    </div>
  </div>`).join('');
}
function toggleJour(i) { const el = document.getElementById('jd-' + i); if (el) el.style.display = el.style.display === 'block' ? 'none' : 'block'; }

function cloturerCaisse() {
    if (S.suivi.nb === 0 && !confirm('Aucune vente aujourd\'hui. Clôturer quand même ?')) return;
    const j = { date: today(), rec: S.suivi.rec, ht: S.suivi.ht, tvaCol: S.suivi.tvaCol, nb: S.suivi.nb, esp: S.suivi.esp, cb: S.suivi.cb, chq: S.suivi.chq, marge: S.suivi.marge, byArt: JSON.parse(JSON.stringify(S.suivi.byArt)), hist: [...S.suivi.hist] };
    S.journees.push(j);
    S.suivi = { rec: 0, ht: 0, tvaCol: 0, nb: 0, esp: 0, cb: 0, chq: 0, marge: 0, byArt: {}, hist: [] };
    saveState(); renderCloture();
    document.getElementById('cl-status-txt').textContent = '✅ Caisse clôturée';
    suc('Caisse clôturée', `Journée du ${j.date} archivée · CA : ${fmt(j.rec)}`);
}

function exportCSV() {
    if (!S.journees.length) { alert('Aucune journée clôturée à exporter.'); return; }
    let csv = 'Date,CA TTC,CA HT,TVA,Nb ventes,Espèces,CB,Chèques,Marge\n';
    S.journees.forEach(j => {
        csv += `${j.date},${fmtN(j.rec)},${fmtN(j.ht)},${fmtN(j.tvaCol)},${j.nb},${fmtN(j.esp)},${fmtN(j.cb)},${fmtN(j.chq || 0)},${fmtN(j.marge)}\n`;
    });
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = `localco_export_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
}

// ══════════════════════════════════════════
//  USERS
// ══════════════════════════════════════════
function renderUsers() {
    document.getElementById('u-tbody').innerHTML = S.users.map(u => `<tr>
    <td><strong>${u.nom}</strong></td><td><span class="badge bg">${u.role}</span></td>
    <td>${u.email}</td><td>${u.acces}</td>
    <td><button class="btn btn-o" style="font-size:12px;padding:5px 9px" onclick="delUser(${u.id})">Supprimer</button></td></tr>`).join('');
    document.getElementById('u-cards').innerHTML = S.users.map(u => `<div class="mob-card">
    <div class="mc-row"><span style="font-weight:700;font-size:14px">${u.nom}</span><span class="badge bg">${u.role}</span></div>
    <div class="mc-row"><span class="mc-label">Email</span><span class="mc-val">${u.email}</span></div>
    <div class="mc-row"><span class="mc-label">Accès</span><span class="mc-val">${u.acces}</span></div>
    <div style="margin-top:8px"><button class="btn btn-o" style="font-size:12px;padding:7px 12px" onclick="delUser(${u.id})">Supprimer</button></div>
  </div>`).join('');
}
function saveUser() {
    const nom = document.getElementById('u-nom').value.trim();
    const email = document.getElementById('u-email').value.trim();
    const role = document.getElementById('u-role').value;
    if (!nom) return;
    const acces = role === 'Gérant' ? 'Tout' : role === 'Gestionnaire' ? 'Caisse, Stock, Articles' : 'Caisse';
    S.users.push({ id: S.nid++, nom, email, role, acces });
    saveState(); cm('m-user'); renderUsers(); suc('Utilisateur créé', nom + ' · ' + role);
}
function delUser(id) { if (!confirm('Supprimer ?')) return; S.users = S.users.filter(u => u.id !== id); saveState(); renderUsers(); }

// UTILS
function cm(id) { document.getElementById(id).style.display = 'none'; }
function suc(tt, sb) { document.getElementById('suc-tt').textContent = tt; document.getElementById('suc-sb').textContent = sb; document.getElementById('m-suc').style.display = 'flex'; }

function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("collapsed");
}