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
  var rktTable = document.getElementById("html-rkt").innerHTML;
  var templateRkt = Handlebars.compile(rktTable);

  var datarkt = [
    {
      sasaranStrategis: "Meningkatkan Kualitas Pelayanan Kesehatan",
      indikatorKinerja: "Angka Usia Harapan Hidup (tahun)",
      satuan: "Tahun",
      target: "70,44",
      tw1: "70,44",
      tw2: "70,44",
      tw3: "70,44",
      keterangan: "",
    },
    {
      sasaranStrategis: "Perbaikan Gizi Masyarakat",
      indikatorKinerja: "Presentase Wasting Balita",
      satuan: "Persen",
      target: "7,3",
      tw1: "7,3",
      tw2: "7,3",
      tw3: "7,3",
      keterangan: "",
    },
    {
      sasaranStrategis: "",
      indikatorKinerja: "Presentase Balita Stunting (%)",
      satuan: "Persen",
      target: "16",
      tw1: "16",
      tw2: "16",
      tw3: "16",
      keterangan: "",
    },
    {
      sasaranStrategis: "Meningkatnya kesehatan ibu dan anak",
      indikatorKinerja: "Angka Kematian Bayi per 1000 kelahiran hidup (indeks)",
      satuan: "Indeks",
      target: "6,7",
      tw1: "6,7",
      tw2: "6,7",
      tw3: "6,7",
      keterangan: "",
    },
    {
      sasaranStrategis: "",
      indikatorKinerja: "Presentase Balita Stunting (%)",
      satuan: "Persen",
      target: "16",
      tw1: "16",
      tw2: "16",
      tw3: "16",
      keterangan: "",
    },
  ];

  var compileRkt = templateRkt(datarkt);
  document.getElementById("table-rkt").innerHTML = compileRkt;
}

renderTemplate();
