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

function renderTemplate() {
  var tandaTanganTable = document.getElementById("tanda-tangan").innerHTML;
  var tandaTangan = Handlebars.compile(tandaTanganTable);

  var rktTable = document.getElementById("html-rkt").innerHTML;
  var templateRkt = Handlebars.compile(rktTable);

  var anggaranTable = document.getElementById("html-anggaran").innerHTML;
  var templateAnggaran = Handlebars.compile(anggaranTable);

  var dataUsers = {
    date: "10 Januari 2024",
    firstPerson: {
      name: "Dr. dr. SUYUTI SYAMSUL, MPM",
      jabatan: "KEPALA DINAS KESEHATAN PROVINSI KALIMANTAN TENGAH",
      posisi: "Pembina Utama Madya",
      nip: "19680807 200003 1 006",
      ttdImg:
        "https://i.pinimg.com/originals/f0/a9/93/f0a993fdc4e1d81651f1d820c746fc3f.jpg",
    },
    secondPerson: {
      name: "H. SUGIANTO SABRAN, S.IP",
      jabatan: "GUBERNUR KALIMANTAN TENGAH",
      posisi: "",
      nip: "",
      ttdImg: "",
    },
  };
  var datarkt = [
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
  var dataAnggaran = [
    {
      name: "Program pemenuhan upaya kesehatan perorangan dan upaya kesehatan masyarakat",
      anggaran: "Rp. 56.511.744.038",
      keterangan: "",
    },
    {
      name: "Program peningkatan kapasitas sumber daya manusia kesehatan",
      anggaran: "Rp. 8.827.569.050",
      keterangan: "",
    },
    {
      name: "Program sediaan farmasi, alat kesehatan dan makanan minuman",
      anggaran: "Rp. 127.050.000",
      keterangan: "",
    },
    {
      name: "Program pemberdayaan masyarakat bidang kesehatan",
      anggaran: "Rp. 870.098.600",
      keterangan: "",
    },
  ];

  var compileTtd = templateRkt(datarkt);
  document.getElementById("table-rkt").innerHTML = compileTtd;

  var compileAnggaran = templateAnggaran(dataAnggaran);
  document.getElementById("table-anggaran").innerHTML = compileAnggaran;

  var compileTtd = tandaTangan(dataUsers);
  document.getElementById("ttd").innerHTML = compileTtd;
}

renderTemplate();
