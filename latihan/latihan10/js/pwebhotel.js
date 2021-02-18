const endpoint_url = 'http://localhost/PWEB201/prak8/api/';

    document.addEventListener("DOMContentLoaded", function() {
      getRoomRate();
});

function getRoomRate() {
  fetch(endpoint_url + "rooms/roomcountbytype")
    .then(status)
    .then(json)
    .then(function(data) {

      var tb_header = `
        <table id="tb_roomrate">
        <thead>
          <tr>
            <th>Room Type</th>
            <th>Room Rate</th>
            <th>Available</th>
          </tr>
        </thead>
      <tbody></tbody>
    </table>
`;

$("#dttable").html( tb_header );
$("#tb_title").html( "Room Rate" );

$('#tb_roomrate').DataTable({
  "data": data.ruangan,
  "columns": [
      { "data": "rtype" },
      { "data": "rate" },
      { "data": "jumlah_kamar" }
    ]
  });

  $('select').formSelect();
  })
  .catch(error);
}

function getRoomlist() {
  fetch(endpoint_url + "rooms/roomlist")
    .then(status)
    .then(json)
    .then(function(data) {

      var tb_header = `
        <table id="tb_roomrate">
        <thead>
          <tr>
            <th>Room</th>
            <th>Type</th>
            <th>View</th>
            <th>Rate</th>
          </tr>
        </thead>
      <tbody></tbody>
    </table>
`;

$("#dttable").html( tb_header );
$("#tb_title").html( "Rooms" );

$('#tb_roomrate').DataTable({
  "data": data.rooms,
  "columns": [
      { "data": "room" },
      { "data": "rtype" },
      { "data": "dview" },
      { "data": "vrate" }
    ]
  });

  $('select').formSelect();
  })
  .catch(error);
}

function getGuestslist() {
  fetch(endpoint_url + "guests/guestslist")
    .then(status)
    .then(json)
    .then(function(data) {

      var tb_header = `
        <table id="tb_roomrate">
        <thead>
          <tr>
            <th>Tamu</th>
            <th>Asal</th>
            <th>DateOut</th>
            <th>DateIn</th>
          </tr>
        </thead>
      <tbody></tbody>
    </table>
`;

$("#dttable").html( tb_header );
$("#tb_title").html( "Guests" );

$('#tb_roomrate').DataTable({
  "data": data.guests,
  "columns": [
      { "data": "nama" },
      { "data": "Asal" },
      { "data": "date_out" },
      { "data": "date_in" }
    ]
  });

  $('select').formSelect();
  })
  .catch(error);
}
function getMemberslist() {
  fetch(endpoint_url + "members/memberlist")
    .then(status)
    .then(json)
    .then(function(data) {

      var tb_header = `
        <table id="tb_roomrate">
        <thead>
          <tr>
            <th>MemberID</th>
            <th>Nama</th>
            <th>Kota</th>
            <th>Negara</th>
            
          </tr>
        </thead>
      <tbody></tbody>
    </table>
`;

$("#dttable").html( tb_header );
$("#tb_title").html( "Members" );

$('#tb_roomrate').DataTable({
  "data": data.members,
  "columns": [
      { "data": "member_ID" },
      { "data": "nama" },
      { "data": "kota" },
      { "data": "Asal" },

    ]
  });

  $('select').formSelect();
  })
  .catch(error);
}
