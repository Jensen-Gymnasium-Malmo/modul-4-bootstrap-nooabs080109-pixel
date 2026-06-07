document.addEventListener("DOMContentLoaded", () => {

  // HEADER
  document.body.insertAdjacentHTML("afterbegin", `
    <header class="bg-dark text-white p-3">
      <div class="container d-flex justify-content-between align-items-center">
        <h3 class="m-0">My Favorites</h3>

        <nav>
          <a class="text-white mx-2 text-decoration-none" href="index.html">Home</a>
          <a class="text-white mx-2 text-decoration-none" href="movies.html">Movies</a>
          <a class="text-white mx-2 text-decoration-none" href="series.html">Series</a>
          <a class="text-white mx-2 text-decoration-none" href="music.html">Music</a>
        </nav>
      </div>
    </header>
  `);

  // FOOTER
  document.body.insertAdjacentHTML("beforeend", `
    <footer class="bg-dark text-white text-center p-3 mt-5">
      <p class="m-0">© 2026 My Favorites</p>
    </footer>
  `);

});