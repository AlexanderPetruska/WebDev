let pocitac;
let skore = JSON.parse(localStorage.getItem("score")) || {
  vyhryHrac: 0,
  vyhryPocitac: 0,
  remizy: 0,
};

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    playGame(1);
  } else if (event.key === "p") {
    playGame(2);
  } else if (event.key === "s") {
    playGame(3);
  } else if (event.key === "Enter") {
    vyresetujSkore();
  }
});

document.querySelector(".js-kamen-button").addEventListener("click", () => {
  playGame(1);
});

document.querySelector(".js-papier-button").addEventListener("click", () => {
  playGame(2);
});

document.querySelector(".js-noznice-button").addEventListener("click", () => {
  playGame(3);
});

document.querySelector(".js-reset-button").addEventListener("click", () => {
  vyresetujSkore();
});

function playGame(hracRuka) {
  vyberPocitac();
  porovnajRuky(hracRuka);
  localStorage.setItem("score", JSON.stringify(skore));
  vypisSkore();
}

function vypisSkore() {
  document.querySelector(
    ".js-skore"
  ).innerHTML = `Hráč: ${skore.vyhryHrac}, Počítač: ${skore.vyhryPocitac}, Remízy: ${skore.remizy}`;
}

vypisSkore();

function vyresetujSkore() {
  skore.vyhryHrac = 0;
  skore.vyhryPocitac = 0;
  skore.remizy = 0;
  localStorage.removeItem("score");
  vypisSkore();
  document.querySelector(".js-ruka-hrac").innerHTML = "";
  document.querySelector(".js-ruka-pocitac").innerHTML = "";
  document.querySelector(".js-vysledok").innerHTML = "";
}

function vyberPocitac() {
  pocitac = Math.floor(Math.random() * 3 + 1);
}

function porovnajRuky(hracRuka) {
  if (hracRuka == 1 && pocitac == 1) {
    document.querySelector(".js-ruka-hrac").innerHTML =
      'Hráč <img src="img/rock-emoji.png">';
    document.querySelector(".js-ruka-pocitac").innerHTML =
      '<img src="img/rock-emoji.png"> Počítač';
    document.querySelector(".js-vysledok").innerHTML = "Remíza";
    skore.remizy++;
  } else if (hracRuka == 1 && pocitac == 2) {
    document.querySelector(".js-ruka-hrac").innerHTML =
      'Hráč <img src="img/rock-emoji.png">';
    document.querySelector(".js-ruka-pocitac").innerHTML =
      '<img src="img/paper-emoji.png"> Počítač';
    document.querySelector(".js-vysledok").innerHTML = "Prehral Si!";
    skore.vyhryPocitac++;
  } else if (hracRuka == 1 && pocitac == 3) {
    document.querySelector(".js-ruka-hrac").innerHTML =
      'Hráč <img src="img/rock-emoji.png">';
    document.querySelector(".js-ruka-pocitac").innerHTML =
      '<img src="img/scissors-emoji.png"> Počítač';
    document.querySelector(".js-vysledok").innerHTML = "Vyhral si!";
    skore.vyhryHrac++;
  } else if (hracRuka == 2 && pocitac == 1) {
    document.querySelector(".js-ruka-hrac").innerHTML =
      'Hráč <img src="img/paper-emoji.png">';
    document.querySelector(".js-ruka-pocitac").innerHTML =
      '<img src="img/rock-emoji.png"> Počítač';
    document.querySelector(".js-vysledok").innerHTML = "Vyhral si!";
    skore.vyhryHrac++;
  } else if (hracRuka == 2 && pocitac == 2) {
    document.querySelector(".js-ruka-hrac").innerHTML =
      'Hráč <img src="img/paper-emoji.png">';
    document.querySelector(".js-ruka-pocitac").innerHTML =
      '<img src="img/paper-emoji.png"> Počítač';
    document.querySelector(".js-vysledok").innerHTML = "Remíza";
    skore.remizy++;
  } else if (hracRuka == 2 && pocitac == 3) {
    document.querySelector(".js-ruka-hrac").innerHTML =
      'Hráč <img src="img/paper-emoji.png">';
    document.querySelector(".js-ruka-pocitac").innerHTML =
      '<img src="img/scissors-emoji.png"> Počítač';
    document.querySelector(".js-vysledok").innerHTML = "Prehral Si!";
    skore.vyhryPocitac++;
  } else if (hracRuka == 3 && pocitac == 1) {
    document.querySelector(".js-ruka-hrac").innerHTML =
      'Hráč <img src="img/scissors-emoji.png">';
    document.querySelector(".js-ruka-pocitac").innerHTML =
      '<img src="img/rock-emoji.png"> Počítač';
    document.querySelector(".js-vysledok").innerHTML = "Prehral Si!";
    skore.vyhryPocitac++;
  } else if (hracRuka == 3 && pocitac == 2) {
    document.querySelector(".js-ruka-hrac").innerHTML =
      'Hráč <img src="img/scissors-emoji.png">';
    document.querySelector(".js-ruka-pocitac").innerHTML =
      '<img src="img/paper-emoji.png"> Počítač';
    document.querySelector(".js-vysledok").innerHTML = "Vyhral si!";
    skore.vyhryHrac++;
  } else if (hracRuka == 3 && pocitac == 3) {
    document.querySelector(".js-ruka-hrac").innerHTML =
      'Hráč <img src="img/scissors-emoji.png">';
    document.querySelector(".js-ruka-pocitac").innerHTML =
      '<img src="img/scissors-emoji.png"> Počítač';
    document.querySelector(".js-vysledok").innerHTML = "Remíza";
    skore.remizy++;
  }
}
