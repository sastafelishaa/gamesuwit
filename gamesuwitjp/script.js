function getpilihanComputer() {
    var comp = Math.random();
  
    if (comp < 0.34) return "kertas";
    if (comp >= 0.34 && comp < 0.67) return "gunting";
    return "batu";
  }
  function getHasil(comp, player) {
    if (player == comp) return "SERI!";
    if (player == "kertas") return comp == "gunting" ? "KALAH!!" : "MENANG!!";
    if (player == "gunting") return comp == "kertas" ? "MENANG!!" : "KALAH!!";
    if (player == "batu") return comp == "gunting" ? "MENANG!!" : "KALAH!!";
  }
  function putar() {
    const imgComputer = document.querySelector(".img-Computer");
    const gambar = ["kertas", "batu", "gunting"];
    let a = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
      if (new Date().getTime() - waktuMulai > 1000) {
        clearInterval;
        return;
      }
      imgComputer.setAttribute("src", "img/" + gambar[a++] + ".png");
      if (a == gambar.length) a = 0;
    }, 100);
  }
  
  const pilih = document.querySelectorAll("li img");
  pilih.forEach(function (i) {
    i.addEventListener("click", function () {
      const pilihanComputer = getpilihanComputer();
      const pilihanPlayer = i.className;
      const hasil = getHasil(pilihanComputer, pilihanPlayer);
  
      putar();
  
      setTimeout(function () {
        const imgComputer = document.querySelector(".img-Computer");
        imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
  
        const info = document.querySelector(".info");
        info.innerHTML = hasil;
      }, 1000);
    });
  });
  