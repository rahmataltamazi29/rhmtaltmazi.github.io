const key = 'b84ba1eed1088c2b592b82af06e5e700'; //sesuai API Key Anda
const endpoint_url = 'https://api.themoviedb.org/3/';
const endpoint_url2 = 'https://api.themoviedb.org/3/movie/';
const endpoint_url3 = 'https://api.themoviedb.org/3/movie/list';

// Blok kode untuk melakukan request API
function getListMovie(services, sectiontitle) {
  fetch(endpoint_url + services + "?api_key=" + key + "&language=en-US&page=1")
  .then(status)
  .then(json)
  .then(function(data) {
// Objek/array JavaScript dari response.json() masuk lewat data.
// Menyusun komponen card movie secara dinamis
  var moviesHTML = "";
  data.results.forEach(function(movie) {
    moviesHTML += `
        <div class="col m3 s6">
          <div class="card">
            <a href="./movie.html?id=${movie.id}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"/>
              </div>
            </a>
              <div class="card-content text-center textkecil">
              <strong>Judul:${movie.title}</strong><br>
              <strong>Released : ${movie.release_date}</strong><br>
              <strong>Vote average : ${movie.vote_average}</strong>
              </div>
            </div>
          </div>

    `;


});
    document.getElementById("movie_list").innerHTML = moviesHTML;
    document.getElementById("section_title").innerHTML = sectiontitle;
})
  .catch(error);
}

function getMovie(movie_id){
fetch(endpoint_url2 + movie_id + "?api_key=" + key + "&language=en-US&page=1")
 .then(status)
 .then(json)
 .then(function(data) {
  var moviepit = "";
  //ini hanya test nilainya di dapat atau ndak
  moviepit += `
    <div class="juduldetailfilm"><strong><h2 class="blue-text text-darken-2">${data.original_title} / ${data.title}</h2></strong><hr></div>
    <div class="col s12 m5">
      <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img src="https://image.tmdb.org/t/p/w500${data.poster_path}"/>
      </div>
    </div>
    </div>
  <div class="col m7 s12">

  <table class="highlight centered">

  <thead class="blue-text text-darken-2">
    <tr>
        <th>Nama Film</th>
        <td class="kimochi">${data.title}</td>
    </tr>
    <tr>
    <th>Tanggal</th>
      <td>${data.release_date}</td>
    </tr>
    <tr>
      <th>Budget</th>
      <td>$ ${data.budget}</td>
    </tr>
    <tr>
      <th>Bahasa</th>
      <td> ${data.original_language}</td>
    </tr>
    <tr>
      <th>Pendapatan</th>
      <td>$ ${data.revenue}</td>
    </tr>
    <tr>
      <th>Durasi Film</th>
      <td> ${data.runtime} Menit</td>
    </tr>
    <tr>
      <th>Status</th>
      <td> ${data.status}</td>
    </tr>
    <tr>
      <th>Homepage</th>
      <td class="homepage"><a href="${data.homepage}" class="link black-text">${data.homepage}</a></td>
    </tr>




  </thead>
  <tbody class=" blue-text text-darken-2">

  </tbody>
</table>
<div class="col m12 s12 blue-text text-darken-2 sinopsis" style="border:2px;">

  <h3>Sinopsis Cerita </h3>
  <p>${data.overview}</p>
</div>

  </div>


`;
      document.getElementById("movie_detail").innerHTML = moviepit;
})

  .catch(error);

}
