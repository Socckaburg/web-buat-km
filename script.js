// tampilkan page1 saat load
function showPage(pageId) {
  document.querySelectorAll("section").forEach(sec => sec.style.display="none");
  document.getElementById(pageId).style.display="block";
}

showPage("page1");

// play musik dari detik 41
let musicStarted = false;
function playMusic() {
  if(!musicStarted){
    const audio = document.getElementById('bgMusic');
    audio.currentTime = 41; // mulai dari detik 41
    audio.play();
    musicStarted = true;
  }
}

// interaktif yes/no page2
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
