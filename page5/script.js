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

Handlebars.registerHelper("indexToAlphabet", function (index) {
  return String.fromCharCode(97 + index).toLowerCase() + ". ";
});

function renderTemplate() {
  var rktTable = document.getElementById("html-rkt").innerHTML;
  var templateRkt = Handlebars.compile(rktTable);

  var tandaTanganTable = document.getElementById("tanda-tangan").innerHTML;
  var tandaTangan = Handlebars.compile(tandaTanganTable);

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
      program:
        "PROGRAM PEMENUHAN UPAYA KESEHATAM PERORANGAN DAN UPAYA KESEHATAN MASYARAKAT",
      anggaran: "Rp. 56.511.744.038",
      tw1: "Rp. 56.511.744.038",
      tw2: "Rp. 12.107.251.255",
      tw3: "Rp. 12.107.251.25",
      tw4: "Rp. 12.107.251.25",
      keterangan: "",
      kegiatan: [
        {
          name: "Penyediaan Fasilitas Pelayanan, Sarana, Prasarana dan Alat Kesehatan untuk UKP Rujukan, dan UKM",
          anggaran: "Rp. 56.511.744.038",
          tw1: "Rp. 0",
          tw2: "Rp. 12.107.251.255",
          tw3: "Rp. 12.107.251.25",
          tw4: "Rp. 12.107.251.25",
          keterangan: "",
          list: [
            {
              name: "Distribusi Alat Kesehatan, Obat, Vaksin, Makanan dan Minuman serta Fasilitas kesehatan Lainnya",
              anggaran: "Rp. 56.511.744.038",
              tw1: "Rp. 0",
              tw2: "Rp. 12.107.251.255",
              tw3: "Rp. 12.107.251.25",
              tw4: "Rp. 12.107.251.25",
              keterangan: "",
            },
            {
              name: "Distribusi Alat Kesehatan, Obat, Vaksin, Makanan dan Minuman serta Fasilitas kesehatan Lainnya",
              anggaran: "Rp. 56.511.744.038",
              tw1: "Rp. 0",
              tw2: "Rp. 12.107.251.255",
              tw3: "Rp. 12.107.251.25",
              tw4: "Rp. 12.107.251.25",
              keterangan: "",
            },
          ],
        },
      ],
    },
  ];

  var compileRkt = templateRkt(datarkt);
  document.getElementById("table-rkt").innerHTML = compileRkt;

  var compileTtd = tandaTangan(dataUsers);
  document.getElementById("ttd").innerHTML = compileTtd;
}

renderTemplate();
