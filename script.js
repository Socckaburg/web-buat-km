// ================== NAVIGASI PAGE ==================
function showPage(pageId) {
  document.querySelectorAll("section").forEach(sec => sec.style.display="none");
  document.getElementById(pageId).style.display="block";
}

// tampilkan page1 saat load
showPage("page1");

// ================== PLAY MUSIK ==================
let musicStarted = false;
function playMusic() {
  if(!musicStarted){
    const audio = document.getElementById('bgMusic');
    audio.currentTime = 0; // mulai dari detik 0
    audio.play();
    musicStarted = true;
  }
}

// ================== YES / NO INTERAKTIF ==================
function handleYesNo(answer){
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const message = document.getElementById('finalMessage');

  if(answer === 'no'){
    noBtn.style.display = 'none';
    alert("coba pencet 'yes' aja 😘");
  } else if(answer === 'yes'){
    message.innerText = "haha udah tebak km bakal pencet yes 💙";
  }
}

// ================== BUNGA BERJATUHAN ==================
const flowersContainer = document.getElementById('flowers-container');
const flowerEmojis = ["🌸", "💠", "❄️"]; // bisa tambah emoji bunga biru

function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.style.left = Math.random() * 100 + "vw"; // posisi acak
  flower.style.fontSize = (15 + Math.random()*20) + "px"; // ukuran acak
  flower.style.animationDuration = (5 + Math.random()*5) + "s"; // durasi acak
  flower.innerText = flowerEmojis[Math.floor(Math.random()*flowerEmojis.length)];
  flowersContainer.appendChild(flower);

  // hapus bunga setelah jatuh
  setTimeout(() => {
    flower.remove();
  }, parseFloat(flower.style.animationDuration) * 1000);
}

// buat bunga terus menerus
setInterval(createFlower, 300);
