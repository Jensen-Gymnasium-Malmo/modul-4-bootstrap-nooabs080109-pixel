document.addEventListener("DOMContentLoaded", () => {

  // HEADER (Bootstrap navbar + dropdown)
  document.body.insertAdjacentHTML("afterbegin", `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">

        <a class="navbar-brand fw-bold" href="index.html">MediaHub</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="nav">

          <ul class="navbar-nav ms-auto">

            <li class="nav-item">
              <a class="nav-link" href="index.html">Home</a>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Movies
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="movies.html">All Movies</a></li>
                <li><a class="dropdown-item" href="#">2000s</a></li>
                <li><a class="dropdown-item" href="#">1900s</a></li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="series.html">Series</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="music.html">Music</a>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  `);

  // FOOTER
  document.body.insertAdjacentHTML("beforeend", `
    <footer class="bg-dark text-white text-center p-3 mt-5">
      <p class="m-0">© 2026 MediaHub</p>
    </footer>
  `);

});