//register math to handlebars
Handlebars.registerHelper("math", function (lvalue, operator, rvalue, options) {
  lvalue = parseFloat(lvalue);
  rvalue = parseFloat(rvalue);

  return {
    "+": lvalue + rvalue,
    "-": lvalue - rvalue,
    "*": lvalue * rvalue,
    "/": lvalue / rvalue,
    "%": lvalue % rvalue,
  }[operator];
});

function template() {
  var tandaTanganTable = document.getElementById("tanda-tangan").innerHTML;
  var tandaTangan = Handlebars.compile(tandaTanganTable);
  var personTable = document.getElementById("html-rkt").innerHTML;
  var template = Handlebars.compile(personTable);
  var dataUsers = {
    date: "10 Januari 2024",
    firstPerson: {
      nama: "Dr. dr. SUYUTI SYAMSUL, MPM",
      jabatan: "KEPALA DINAS KESEHATAN PROVINSI KALIMANTAN TENGAH",
      posisi: "Pembina Utama Madya",
      nip: "19680807 200003 1 006",
      ttdImg:
        "https://i.pinimg.com/originals/f0/a9/93/f0a993fdc4e1d81651f1d820c746fc3f.jpg",
    },
    secondPerson: {
      nama: "H. SUGIANTO SABRAN, S.IP",
      jabatan: "GUBERNUR KALIMANTAN TENGAH",
      posisi: "",
      nip: "",
      ttdImg: "",
    },
  };
  var data = [
    {
      sasaranStrategis: "Meningkatkan Kualitas Pelayanan Kesehatan",
      indikatorKinerja: "Angka Usia Harapan Hidup (tahun)",
      satuan: "Tahun",
      target: "70,44",
    },
    {
      sasaranStrategis: "Perbaikan Gizi Masyarakat",
      indikatorKinerja: "Presentase Wasting Balita",
      satuan: "Persen",
      target: "7,3",
    },
    {
      sasaranStrategis: "",
      indikatorKinerja: "Presentase Balita Stunting (%)",
      satuan: "Persen",
      target: "16",
    },
    {
      sasaranStrategis: "Meningkatnya kesehatan ibu dan anak",
      indikatorKinerja: "Angka Kematian Bayi per 1000 kelahiran hidup (indeks)",
      satuan: "Indeks",
      target: "6,7",
    },
  ];

  var compileTtd = template(data);
  document.getElementById("table-rkt").innerHTML = compileTtd;

  var compileTtd = tandaTangan(dataUsers);
  document.getElementById("ttd").innerHTML = compileTtd;
}

template();
