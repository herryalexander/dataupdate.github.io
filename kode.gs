function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index'); // Mengembalikan file HTML
}

function getSensorData() {
  var sheet_id = '1EwOFOFipIg6L0yMKaouZVNwfL47JEfTUCkiaKcuG1OQ'; // Ganti dengan ID Spreadsheet Anda
  var sheet = SpreadsheetApp.openById(sheet_id).getSheetByName('Sheet1'); // Ambil sheet bernama 'Sheet1'
  var dataRange = sheet.getDataRange(); // Ambil semua data
  var data = dataRange.getValues(); // Dapatkan nilai

  // Menghapus header jika ada
  data.shift(); // Menghapus baris header (jika ada)

  // Mengubah data menjadi format yang diinginkan (waktu, pH, suhu)
  var formattedData = data.map(function(row) {
    return [row[1] + ' ' + row[0], row[2], row[3]]; // Ambil kolom waktu, pH, dan suhu
  });

  return formattedData; // Kembalikan data yang telah diformat
}
