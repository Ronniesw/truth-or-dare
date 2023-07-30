const truths = [
  "Apa yang membuatmu kesal tentang orang di sebelah kiri kamu?",
  "Ceritakan hal paling gila yang pernah kamu lakukan untuk membuat seseorang terkesan!",
  "Pernahkah kamu menyesal karena unggahan di media sosial? Apa itu?",
  "Jika ada orang di ruangan ini yang bisa kamu tukar dengan satu juta dolar, siapakah dia?",
  "Menurutmu, siapa orang yang paling menyebalkan di ruangan ini dan mengapa?",
  "Beri nilai dirimu sendiri dari 1 hingga 10, berdasarkan seberapa menarik menurut kamu!",
  "Siapa selebriti yang kamu sukai, tetapi paling memalukan bagimu?",
  "Apakah pernah kamu ke toilet umum tanpa kertas tisu? Lalu apa yang kamu lakukan?",
  "Jika kamu bertemu dengan selebritas yang kamu sukai, kalimat apa yang akan kamu ucapkan saat menyambut mereka?",
  "Kapan terakhir kali kamu kentut di depan umum dan mencoba menyalahkan orang lain?",
  "Ceritakan waktu paling tidak pantas yang pernah membuatmu tertawa!",
  "Berapa lama kamu pernah tidak mandi?",
  "Apa lelucon terlucu yang pernah kamu lakukan pada seseorang?",
  "Jika kamu bisa menjadi karakter utama dalam film, buku, atau acara TV, apa yang kamu pilih dan mengapa?",
  "Pernahkah kamu memiliki naksir pada salah satu guru kamu? Jika ya, siapa itu?",
  "Ceritakan kenangan favoritmu!",
  "Karakter fiksi mana yang ingin kamu nikahi, dan kenapa?",
  "Apa hal aneh yang membuatmu merasa terikat emosional?",
  "Menurutmu, apa hal paling aneh tentang keluargamu?",
  "Apakah kamu berbohong selama pertandingan hari ini, dan kami tidak menyadarinya?",
  "Blog gosip apa yang ingin kamu baca?",
  "Apa hadiah termurah yang pernah kamu berikan kepada seseorang?",
  "Berapa lama kamu pernah dihukum, dan kenapa?",
  "Pernahkah kamu berkelahi saat di sekolah?",
  "Apa hal terburuk yang pernah kamu lakukan pada seseorang?",
  "Ceritakan kenangan masa kecilmu yang paling memalukan!",
  "Apa rumor terburuk yang pernah kamu percayai tanpa sadar itu tidak benar?",
  "Apa lelucon paling menjijikkan yang pernah kamu dengar?",
  "Pilihannya sulit, apakah kamu lebih suka tidak pernah makan cokelat atau tidak pernah berhubungan seks lagi?",
  "Siapa orang terakhir yang ingin kamu lihat tanpa pakaiannya?",
  "Kalau kamu bisa pergi ke masa lalu atau masa depan, ke mana yang kamu pilih?",
  "Apa kamu percaya dengan hipnosis? Pernahkah kamu mencoba hipnosis sebelumnya?",
  "Bagi kamu, apa yang lebih penting antara kepintaran atau penampilan fisik?",
  "Ceritakan tentang pengalaman menerima hadiah yang kurang menyenangkan!",
  "Kalau hidup kamu diangkat menjadi film, siapa yang cocok untuk memerankan peran kamu?",
  "Pernahkah kamu diam-diam keluar rumah tanpa sepengetahuan orangtua atau wali?",
  "Apakah kamu pernah mengalami situasi yang membuatmu merasa dekat dengan kematian?",
  "Kalau diberi kesempatan, di mana tempat di dunia yang ingin kamu huni?",
  "Ceritakan tentang momen terbaik dalam hidupmu dan mengapa itu begitu berarti!",
  "Ceritakan tentang lelucon yang mungkin agak menjijikkan, tetapi lucu yang pernah kamu lakukan pada seseorang!",
  "Ceritakan tentang saat terakhir kali kamu menangis dan apa penyebabnya!",
  "Pernahkah kamu mengalami sesuatu yang di luar akal sehat, seperti pengalaman paranormal?",
  "Apa yang membuatmu berbeda dari orang lain? Apakah kamu bangga dengan keunikan itu?",
  "Jika uang bukan masalah, apa impian atau tujuan hidup yang ingin kamu capai?",
  "Kartun mana yang paling kamu sukai saat masih kecil?",
  "Jika kamu bisa menjadi tak terlihat selama sehari, apa yang akan kamu lakukan?",
  "Apakah kamu memiliki bakat khusus yang mungkin tidak diketahui banyak orang?",
  "Jika kamu bisa menjadi atlet profesional, olahraga apa yang paling kamu minati?",
  "Jika diberi pilihan, apakah kamu ingin fasih dalam semua bahasa atau bisa berbicara dengan hewan?",
  "Apa pengalaman paling menantang yang pernah kamu hadapi dalam hidup?",
];

const dares = [
  "Telepon teman kamu terus minta maaf kalau kamu pernah maling celana dalemnya",
  "Bikin instastory dan story WhatsApp pake foto mantan kamu terus kasih caption 'Pernah memilikinya walau tak selamanya'",
  "Cari lawan jenis yang gak dikenal terus bilang 'Nanti malem bisa kerumah ga? Mumpung papa sama mama lagi pergi'",
  "Chat di grup WA kalau kamu pengen keluarg dari grup karena gak betah terus langsung left grup",
  "Minta uang koin sama orang gak dikenal dengan alasan mau bayar kang parkir",
  "Cari orang yang gak dikenal terus minta dia buat nganterin kamu ke WC",
  "Sapa 5 orang yang gak kamu kenal",
  "Pake lipstick sampai lebihi garis bibir",
  "Jongkok pake helm selama satu putaran",
  "Ngesot di lantai dan sapa 3 orang",
  "Cover dance 1 lagu bareng 2 temen kamu",
  "Cari yang lagi ngumpul dan bilang ke satu orang 'Mama nyuruh kamu pulang sekarang'",
  "Tawarin orang ga dikenal buat di pijitin bahunya cari sampai ada yang mau",
  "Pinjem helm orang gak dikenal lalu keliling sebanyak 2 kali",
  "Akting kesurupan selama 5 menit",
  "Marah-marah sama dinding selama 1 putaran",
  "Tatap mata temen di sebelah kii kamu selama 1 menit gak boleh ngedip",
  "Jilat dinding",
  "Bilang ke pacar kalo kamu lebih milih selingkuhan",
  "Pegang 1 es batu sampe mencair",
  "Suruh pake kaos kaki di tangan",
  "Gombalin dinding selama 5 menit",
  "Peluk tiang/batang selama satu puteran",
  "Cari yang lagi ngumpul trus jawil orang yang gak dikenal, lakuin diem-diem biar gak ketahuan",
  "Cari yang lagi pacaran terus kamu nyanyi lagu dangdut",
  "Harus menuruti semua perkataan (nama orang) selama 20 menit ke depan.",
  "Coba makan segigit kulit pisang.",
  "Tembak (ungkapkan cinta) cowok/cewek random di sekitar sini",
  "Ajak orang yg tidak kamu kenal itu selfie berdua dengan mu lalu upload ke snapgram",
  "Baca/buat puisi dengan tema (alam/cinta/sesuatu yang absurd) selama dua menit. (Siap-siap buat nge-story).",
  "Harus rela (nama orang) bikin tato pakai spidol permanen di area tubuh yang terlihat.",
  "Cobalah menjilat ketiak kamu, lalu foto dan kirim ke lima orang teman kamu!",
  "Ulangi setiap perkataan orang yang ada di sampingmu sampai kamu dapat giliran lagi.",
  "Rekam diri kamu sendiri saat menyanyikan sebuah lagu dan posting di YouTube atau media sosialmu",
  "Cabut bulu ketiak 3 kali",
  "Minta foto sama orang tidak dikenal",
  "Pake baju kebalik sampe pulang",
  "Bilang masih sayang ke mantan sekarang juga",
  "Lihatin chat paling memalukan yang masih kamu simpan",
  "Lihatin pap paling konyol pacar kamu",
  "Beli cemilan ke minimarket nggak pakai sendal",
  "Minum segelas air tanpa menggunakan tangan",
  "Biarkan pemain lain menggelitik Anda tetapi jangan tertawa!",
  "Berputar di kursi putar selama 30 detik lalu coba berjalan lurus.",
  "Bertukar pakaian dengan pemain lain selama sisa permainan.",
  "Beli cemilan ke minimarket nggak pakai sendal/nyeker",
  "Kirim foto selfie ke mantan sekarang",
  "Rekam kamu lagi teriak dan tag mantan kamu",
  "Kirim pesan random ke followers ig kamu",
  "Vidio call di instagram salah satu followers kamu",
];

function getRandomQuestion(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getTruth() {
  const questionElement = document.getElementById("question");
  const truth = getRandomQuestion(truths);

  animateText(questionElement, truth);
}

function getDare() {
  const questionElement = document.getElementById("question");
  const dare = getRandomQuestion(dares);

  animateText(questionElement, dare);
}

function animateText(element, text) {
  let index = 0;
  const typingAnimation = () => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(typingAnimation, 50);
    }
  };
  element.textContent = "";
  typingAnimation();
}

// Fungsi untuk membuat elemen hujan salju
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflake.innerHTML = "❄";
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

// Fungsi untuk memulai hujan salju
function startSnow() {
  setInterval(createSnowflake, 100);
}

// Panggil fungsi untuk memulai hujan salju
startSnow();
function shareGame() {
  const shareMessage = "Yuk main Truth or Dare!"; // Pesan yang akan dibagikan
  const shareURL = "https://example.com/truth-or-dare"; // URL game Anda

  if (navigator.share) {
    navigator
      .share({
        title: "Truth or Dare",
        text: shareMessage,
        url: shareURL,
      })
      .then(() => {
        console.log("Berhasil membagikan game!");
      })
      .catch((error) => {
        console.error("Gagal membagikan game:", error);
      });
  } else {
    alert("Browser Anda tidak mendukung fitur Sharing.");
  }
}
