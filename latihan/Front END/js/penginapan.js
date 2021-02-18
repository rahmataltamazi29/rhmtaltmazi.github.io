const endpoint_url = 'https://51018018.p-web.click/wisata/api/';

function getPenginapan() {
  fetch(endpoint_url + "penginapan/penginapanlist")
  .then(status)
  .then(json)
  .then(function(data) {
// Objek/array JavaScript dari response.json() masuk lewat data.
// Menyusun komponen card movie secara dinamis
  var dataHTML = "";
  data.penginapan.forEach(function(date) {
    dataHTML += `
    <table class="highlight centered">

    <thead class="blue-text text-darken-2">

      <tr>
          <th>Nama Penginapan</th>
          <td>${date.nama}</td>
      </tr>
      <tr>
      <th>Alamat</th>
        <td>${date.alamat}</td>
      </tr>
      <tr>
        <th>Jumlah Ruangan</th>
        <td>${date.jumlah_kamar}</td>
      </tr>
      <tr>
        <th>Harga</th>
        <td>${date.harga}</td>
      </tr>

      <tr>
        <th>Jarak dari Lokasi Wisata</th>
        <td>${date.jarak}</td>
      </tr>
    </thead>
    <tbody class=" blue-text text-darken-2">
    </tbody>
    </table>
    <br>
    <br>
    `;


});
    document.getElementById("penginapan").innerHTML = dataHTML;
})
  .catch(error);
}



function getWisata() {
  fetch(endpoint_url + "wisata/wisatalist")
  .then(status)
  .then(json)
  .then(function(data) {
// Objek/array JavaScript dari response.json() masuk lewat data.
// Menyusun komponen card movie secara dinamis
  var dataHTML = "";
  var kimochi = "";
  data.wisata.forEach(function(date) {
    dataHTML += `
    <table class="highlight centered">

    <thead class="blue-text text-darken-2">

      <tr>
          <th>Jam buka</th>
          <td>${date.jam_buka}</td>
      </tr>
      <tr>
      <th>Jam tutup</th>
        <td>${date.jam_tutup}</td>
      </tr>
      <tr>
        <th>Harga Parkir</th>
        <td>${date.parkir}</td>
      </tr>
      <tr>
        <th>Hari buka</th>
        <td>${date.hari_buka}</td>
      </tr>
    </thead>
    <tbody class=" blue-text text-darken-2">
    </tbody>
    </table>
    <br>
    <br>
    `;

  kimochi  +=`
  <table class="highlight centered">

  <thead class="blue-text text-darken-2">

    <tr>
      <th>Harga Parkir</th>
      <td style="font-size:12px;">${date.parkir}</td>
    </tr>
    <tr>
      <th>Hari buka</th>
      <td>${date.hari_buka}</td>
    </tr>
  </thead>
  <tbody class=" blue-text text-darken-2">
  </tbody>
  </table>
  <br>
  <br>


  `;



});
    document.getElementById("wisata").innerHTML = dataHTML;
    document.getElementById("harga").innerHTML = kimochi;
})
  .catch(error);
}
