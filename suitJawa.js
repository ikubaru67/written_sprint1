function suitJawa() {
  var p = prompt("pilih : gajah, semut, orang");

  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  var hasil = "";

  if (p == comp) {
    hasil = "Seri!";
  } else if (p == "gajah") {
    hasil = comp == "orang" ? "Menang!" : "Kalah!";
  } else if (p == "orang") {
    hasil = comp == "semut" ? "Menang!" : "Kalah!";
  } else if (p == "semut") {
    hasil = comp == "gajah" ? "Menang!" : "Kalah";
  } else {
    hasil = "Tolong pilih antara gajah, semut dan orang";
  }

  alert(
    "Kamu memilih : " +
      p +
      " dan komputer memilih : " +
      comp +
      "\nMaka hasilnya : kamu " +
      hasil
  );
}
