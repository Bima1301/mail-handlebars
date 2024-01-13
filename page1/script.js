function template() {
  var personTable = document.getElementById("person").innerHTML;
  var tandaTanganTable = document.getElementById("tanda-tangan").innerHTML;
  var template = Handlebars.compile(personTable);
  var tandaTangan = Handlebars.compile(tandaTanganTable);
  var allDataPerson = [
    {
      nama: "Dr. dr. SUYUTI SYAMSUL, MPM",
      jabatan: "KEPALA DINAS KESEHATAN PROVINSI KALIMANTAN TENGAH",
    },
    {
      nama: "H. SUGIANTO SABRAN, S.IPn",
      jabatan: "GUBERNUR KALIMANTAN TENGAH",
    },
  ];
  var dataTtd = {
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

  for (var i = 0; i < allDataPerson.length; i++) {
    var compileData = template(allDataPerson[i]);
    document.getElementById("person" + (i + 1)).innerHTML = compileData;
  }

  var compileTtd = tandaTangan(dataTtd);
  document.getElementById("ttd").innerHTML = compileTtd;
}

template();
