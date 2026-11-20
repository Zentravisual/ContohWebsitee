// ====== PENGATURAN (ganti sesuai data coffee shop Anda) ======
const NAMA     = "Soon Coffee";
const WA_NUMBER = "6281234567890";           // format internasional, tanpa + dan tanpa 0 di depan
const ALAMAT   = "Jl. Melati No. 12, Kota Anda";
const JAM      = { buka: 8, tutup: 22 };      // setiap hari, format 24 jam

const MAPS_QUERY = encodeURIComponent(`${NAMA}, ${ALAMAT}`);
const MAPS_URL   = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;

// Isi img dengan link/foto sendiri (contoh: "img/espresso.jpg"). Jika kosong, tampil gambar pengganti.
const U = id => `https://images.unsplash.com/${id}?w=800&q=80`;
const MENU = [
  // ---- COFFEE (9) ----
  {nama:"Americano", kategori:"Coffee", harga:18000, img:"americano.jpg.jfif", desc:"Ice / Hot. Espresso dengan air, segar dan bersih."},
  {nama:"Americano Peach", kategori:"Coffee", harga:22000, img:"americano peach.jfif", desc:"Americano dengan sirup peach yang segar."},
  {nama:"Americano On The Cloud", kategori:"Coffee", harga:22000, img:"aotc.jfif", desc:"americano dengan sensasi lembut dan creamy."},
  {nama:"Butterscotch Seasalt", kategori:"Coffee", harga:28000, img:"bc  seasalt.jfif", desc:"Kopi susu butterscotch dengan sea salt cream."},
  {nama:"Aren Coffee Latte", kategori:"Coffee", harga:25000, img:"aren coffe.jfif", desc:"Kopi susu gula aren, disajikan dingin."},
  {nama:"Berrycano", kategori:"Coffee", harga:24000, img:"berrycano.jfif", desc:"Americano dengan rasa berry yang segar."},
  {nama:"Coffee Latte", kategori:"Coffee", harga:25000, img:"latte coffe.jfif", desc:"Espresso dengan susu yang creamy."},
  {nama:"Matcha Coffee", kategori:"Coffee", harga:28000, img:"matcha coffe.jfif", desc:"Perpaduan matcha dan espresso."},
  {nama:"Mont Blanc", kategori:"Coffee", harga:27000, img:"mont blanc coffee.jfif", desc:"* kopi dengan perpaduan rasa manis, creamy, dan aroma kopi yang nikmat."},

  // ---- NON COFFEE (6) ----
  {nama:"Matcha Classic", kategori:"Non Coffee", harga:25000, img:"matcha milk.jfif", desc:"Matcha hijau dengan susu segar."},
  {nama:"Matcha Seasalt", kategori:"Non Coffee", harga:28000, img:"matcha seasalt.jfif", desc:"Matcha dengan sea salt cream yang gurih."},
  {nama:"Red Velvet", kategori:"Non Coffee", harga:25000, img:"red velvet milk.jfif", desc:"Minuman red velvet manis dan lembut."},
  {nama:"Choco Milk", kategori:"Non Coffee", harga:23000, img:"choco milk.jfif", desc:"Susu coklat yang pekat."},
  {nama:"Matcha Berry", kategori:"Non Coffee", harga:24000, img:"matcha berry.jfif", desc:"* Perpaduan matcha khas Jepang dengan sentuhan rasa buah berry yang segar."},
  {nama:"Ube Milk", kategori:"Non Coffee", harga:25000, img:"ube milk.jfif", desc:"Minuman susu lembut dengan cita rasa ubi ungu yang manis dan creamy."},

  // ---- APPETIZER (6) ----
  {nama:"Mix Platter", kategori:"Appetizer", harga:30000, img:"mix pletter.jfif", desc:"Aneka camilan goreng dalam satu piring."},
  {nama:"Siomay Mix", kategori:"Appetizer", harga:20000, img:"Gambar 6.jpg", desc:" Aneka siomay dengan isian pilihan, disajikan bersama saus kacang gurih."},
  {nama:"Croisant", kategori:"Appetizer", harga:22000, img:"cr.jfif", desc:"astry berlapis dengan tekstur renyah di luar dan lembut di dalam."},
  {nama:"Sate Taichan", kategori:"Appetizer", harga:25000, img:"Sate Taichan.jfif", desc:"Sate ayam bakar pedas ala taichan."},
  {nama:"Chesecake", kategori:"Appetizer", harga:20000, img:"cs.jfif", desc:"Kue keju lembut dengan perpaduan rasa manis dan gurih yang seimbang."},
  {nama:"Aglio olio", kategori:"Appetizer", harga:18000, img:"ao.jfif", desc:"Pasta dengan tumisan bawang putih, minyak zaitun, dan bumbu pilihan."},

  // ---- MAIN COURSE (5) ----
  {nama:"Nasi Goreng Special", kategori:"Main Course", harga:30000, img:"Gambar 21.webp", desc:"Nasi goreng dengan telur, ayam, dan pelengkap."},
  {nama:"Nasi Goreng Udang", kategori:"Main Course", harga:35000, img:"Gambar 27.jpg", desc:"Nasi goreng dengan udang."},
  {nama:"Nasi Ayam Goreng", kategori:"Main Course", harga:28000, img:"ag.jfif", desc:"Nasi dengan ayam goreng dan sambal."},
  {nama:"Soto Special", kategori:"Main Course", harga:28000, img:"Gambar 11.webp", desc:"Hidangan berkuah hangat dengan rempah khas"},
  {nama:"Nasi Ayam Bakar Special", kategori:"Main Course", harga:32000, img:"ab.jfif", desc:"Nasi dengan ayam bakar bumbu spesial."}
];

// Gambar pengganti otomatis bila foto belum diisi / gagal dimuat
const EMOJI = {"Coffee":"☕","Non Coffee":"🥤","Appetizer":"🍟","Main Course":"🍛"};
const gambar = m => m.img || pengganti(m);
function pengganti(m){
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="800" height="600" fill="#dbe8f7"/><text x="400" y="320" font-size="160" text-anchor="middle">${EMOJI[m.kategori]}</text><text x="400" y="440" font-size="40" font-family="sans-serif" fill="#1c4fa0" text-anchor="middle">${m.nama}</text></svg>`;
  return "data:image/svg+xml," + encodeURIComponent(svg);
}
function jagaGambar(img, m){ img.addEventListener("error", () => { img.src = pengganti(m); }, {once:true}); }

// ====== UTILITAS ======
const $ = id => document.getElementById(id);
const rupiah = n => "Rp" + n.toLocaleString("id-ID");
const waLink = text => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

// ====== LOKASI, WA, JAM BUKA ======
$("alamat").textContent = ALAMAT;
$("mapBtn").href = MAPS_URL;
$("mapFrame").src = MAPS_EMBED;
$("waBtn").href = $("fab").href = waLink(`Halo ${NAMA}, saya ingin bertanya/reservasi.`);

const pad = n => String(n).padStart(2, "0");
$("hours").innerHTML = `<li><span>Setiap hari</span><strong>${pad(JAM.buka)}.00–${pad(JAM.tutup)}.00</strong></li>`;

const jam = new Date().getHours();
const buka = jam >= JAM.buka && jam < JAM.tutup;
const badge = $("statusBuka");
badge.textContent = buka ? `Buka sekarang · sampai ${pad(JAM.tutup)}.00` : `Tutup · buka ${pad(JAM.buka)}.00`;
badge.classList.add(buka ? "open" : "closed");

// ====== NAVBAR ======
const nav = $("nav"), links = $("navLinks"), toggle = $("navToggle");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
onScroll();
window.addEventListener("scroll", onScroll, {passive:true});
toggle.onclick = () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
  if (open) nav.classList.add("scrolled"); else onScroll();
};
links.addEventListener("click", e => {
  if (e.target.tagName === "A") { links.classList.remove("open"); toggle.setAttribute("aria-expanded", false); onScroll(); }
});

// ====== MENU ======
const kategori = ["Coffee", "Non Coffee", "Appetizer", "Main Course"];
let aktif = "Coffee", kata = "";

function renderTabs(){
  $("tabs").innerHTML = "";
  kategori.forEach(k => {
    const b = document.createElement("button");
    b.className = "tab" + (k === aktif ? " active" : "");
    b.textContent = `${k} (${MENU.filter(m => m.kategori === k).length})`;
    b.onclick = () => { aktif = k; renderTabs(); renderMenu(); };
    $("tabs").appendChild(b);
  });
}

function renderMenu(){
  const grid = $("menuGrid");
  grid.innerHTML = "";
  const hasil = kata
    ? MENU.filter(m => m.nama.toLowerCase().includes(kata))   // cari di semua kategori
    : MENU.filter(m => m.kategori === aktif);
  $("empty").hidden = hasil.length > 0;
  hasil.forEach(m => {
    const card = document.createElement("button");
    card.className = "card";
    card.innerHTML = `<img alt="${m.nama}" loading="lazy">
      <div class="card__body"><h3>${m.nama}</h3><p>${m.desc}</p><span>${rupiah(m.harga)}</span></div>`;
    const im = card.querySelector("img");
    jagaGambar(im, m);
    im.src = gambar(m);
    card.onclick = () => bukaModal(m, card);
    grid.appendChild(card);
  });
}
$("search").addEventListener("input", e => { kata = e.target.value.trim().toLowerCase(); renderMenu(); });

// ====== MODAL ======
const modal = $("modal");
let terpilih = null, jumlah = 1, pemicu = null;

function updateOrder(){
  $("qVal").textContent = jumlah;
  $("mPrice").textContent = rupiah(terpilih.harga * jumlah);
}
function bukaModal(m, el){
  terpilih = m; jumlah = 1; pemicu = el;
  jagaGambar($("mImg"), m);
  $("mImg").src = gambar(m); $("mImg").alt = m.nama;
  $("mTitle").textContent = m.nama;
  $("mDesc").textContent = m.desc;
  updateOrder();
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  $("closeBtn").focus();
}
function tutupModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (pemicu) pemicu.focus();
}
$("qMinus").onclick = () => { if (jumlah > 1) { jumlah--; updateOrder(); } };
$("qPlus").onclick  = () => { if (jumlah < 20) { jumlah++; updateOrder(); } };
$("mAdd").onclick = () => { tambahBook(terpilih, jumlah); tutupModal(); };
$("closeBtn").onclick = tutupModal;
modal.addEventListener("click", e => { if (e.target === modal) tutupModal(); });
document.addEventListener("keydown", e => { if (e.key !== "Escape") return; if (modal.classList.contains("open")) tutupModal(); else tutupBook(); });

// ====== BOOK MENU (keranjang pesanan) ======
let book = [];
try { book = JSON.parse(localStorage.getItem("soon-book")) || []; } catch (e) { book = []; }
const simpan = () => { try { localStorage.setItem("soon-book", JSON.stringify(book)); } catch (e) {} };
const totalItem  = () => book.reduce((a, b) => a + b.qty, 0);
const totalHarga = () => book.reduce((a, b) => a + b.qty * b.harga, 0);
const cariMenu = nama => MENU.find(m => m.nama === nama);

let toastTimer;
function toast(teks){
  const t = $("toast"); t.textContent = teks; t.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}
function tambahBook(m, qty){
  const f = book.find(x => x.nama === m.nama);
  if (f) f.qty = Math.min(99, f.qty + qty); else book.push({nama:m.nama, harga:m.harga, qty});
  simpan(); renderBook(); toast(`${qty}x ${m.nama} masuk ke Book Menu`);
}
function renderBook(){
  const n = totalItem();
  $("navCount").textContent = n;
  const fab = $("bookFab");
  fab.hidden = n === 0;
  fab.textContent = `Book Menu · ${n} item · ${rupiah(totalHarga())}`;
  $("bookTotal").textContent = rupiah(totalHarga());
  $("bookEmpty").hidden = n > 0;
  const list = $("bookList"); list.innerHTML = "";
  book.forEach((b, i) => {
    const m = cariMenu(b.nama);
    const li = document.createElement("li");
    li.className = "bitem";
    li.innerHTML = `<img alt="${b.nama}" src="${m ? gambar(m) : ""}">
      <div><h4>${b.nama}</h4><small>${rupiah(b.harga * b.qty)}</small></div>
      <div class="qty"><button aria-label="Kurangi ${b.nama}">−</button><output>${b.qty}</output><button aria-label="Tambah ${b.nama}">+</button></div>`;
    const [min, plus] = li.querySelectorAll("button");
    min.onclick  = () => { b.qty--; if (b.qty <= 0) book.splice(i, 1); simpan(); renderBook(); };
    plus.onclick = () => { if (b.qty < 99) { b.qty++; simpan(); renderBook(); } };
    list.appendChild(li);
  });
}
function bukaBook(){
  $("drawer").classList.add("open"); $("drawer").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function tutupBook(){
  $("drawer").classList.remove("open"); $("drawer").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
$("navBook").onclick = () => { links.classList.remove("open"); bukaBook(); };
$("bookFab").onclick = bukaBook;
$("drawerClose").onclick = tutupBook;
$("drawerBg").onclick = tutupBook;
$("clearBook").onclick = () => { book = []; simpan(); renderBook(); };

// tanggal minimal = hari ini (waktu lokal)
$("fTanggal").min = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);

$("sendBook").onclick = () => {
  const err = $("bookErr"); err.textContent = "";
  const nama = $("fNama").value.trim();
  if (!book.length) { err.textContent = "Book Menu masih kosong."; return; }
  if (!nama) { err.textContent = "Isi nama Anda dulu."; $("fNama").focus(); return; }
  const tipe = document.querySelector('input[name="tipe"]:checked').value;
  const tgl = $("fTanggal").value, jm = $("fJam").value, cat = $("fCatatan").value.trim();
  const baris = book.map((b, i) => `${i + 1}. ${b.qty}x ${b.nama} (${rupiah(b.harga * b.qty)})`).join("\n");
  const teks = `Halo ${NAMA}, saya ingin book menu:\n${baris}\n\nTotal: ${rupiah(totalHarga())}\nNama: ${nama}\nJenis: ${tipe}` +
    (tgl ? `\nTanggal: ${tgl}` : "") + (jm ? `\nJam: ${jm}` : "") + (cat ? `\nCatatan: ${cat}` : "");
  window.open(waLink(teks), "_blank", "noopener");
};

renderTabs();
renderMenu();
renderBook();
