class PCRINavbar extends HTMLElement {
 
  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar bg-body-tertiary z-3">
      <div class="navbar__container container d-flex">
          <a class="navbar-brand" href="../../index.html">
              <img src="../../assets/head/images/pcri_logo.jpg" alt="Logo" width="120"
                  class="d-inline-block align-text-top">
          </a>
          <ul class="nav__item-list d-none d-lg-flex nav justify-content-end">
              <!-- home item -->
              <li class="nav__item ms-5 nav-item ">
                  <div class="nav__item-label nav-item d-flex align-items-center justify-content-center">
                      <a href="../../index.html"
                          class="m-0 pe-2 text fs-5 fw-semibold text-primary text-decoration-none">Home</a>
                  </div>
              </li>

              <!-- about item -->
              <li class="nav__item ms-5 nav-item ">
                  <div class="nav__item-label nav-item d-flex align-items-center justify-content-center">
                      <p class="m-0 pe-2 text fs-5 fw-semibold text-primary">About</p>
                      <i class="fa-solid fa-caret-down text-primary"></i>
                  </div>

                  <div class="row gx-4 nav__mega-menu">
                      <ul class="col-6 list-unstyled">
                          <li class="nav-item mb-2"><a class="fs-6 fw-semibold text-primary"
                                  style="text-decoration: none;" href="../../pages/about/overview.html">Overview</a>
                          </li>
                          <li class="nav-item mb-2"><a class="fs-6 fw-semibold text-primary"
                                  style="text-decoration: none;"
                                  href="../../pages/about/supporters.html">Supporters</a>
                          </li>
                          <li class="nav-item"><a class="fs-6 fw-semibold text-primary" style="text-decoration: none;"
                                  href="../../pages/about/advisory-committee.html">Advisory
                                  committee</a>
                          </li>
                      </ul>
                      <ul class="col-6 list-unstyled">
                          <li class="nav-item mb-2"><a class="fs-6 fw-semibold text-primary"
                                  style="text-decoration: none;"
                                  href="../../pages/about/academic-advisory-board.html">Academic
                                  advisory board</a>
                          </li>
                          <li class="nav-item mb-2"><a class="fs-6 fw-semibold text-primary"
                                  style="text-decoration: none;" href="../../pages/about/people.html">People</a>
                          </li>
                          <li class="nav-item"><a class="fs-6 fw-semibold text-primary" style="text-decoration: none;"
                                  href="../../pages/about/new-gp.html">GP Participation</a>
                          </li>
                      </ul>
                  </div>
              </li>

              <!-- news item -->
              <li class="nav__item ms-5 nav-item ">
                  <div class="nav__item-label nav-item d-flex align-items-center justify-content-center">
                      <p class="m-0 pe-2 text fs-5 fw-semibold text-primary">News</p>
                      <i class="fa-solid fa-caret-down text-primary"></i>
                  </div>

                  <div class="row gx-4 nav__mega-menu--news">
                      <ul class="col-12 list-unstyled">
                          <li class="nav-item mb-2 "><a class="fs-6 fw-semibold text-primary"
                                  style="text-decoration: none;" href="../../pages/news/news.html">In the news</a>
                          </li>
                          <li class="nav-item mb-2 "><a class="fs-6 fw-semibold text-primary"
                                  style="text-decoration: none;" href="../../pages/news/events.html">Events</a>
                          </li>
                          <li class="nav-item"><a class="fs-6 fw-semibold text-primary" style="text-decoration: none;"
                                  href="../../pages/news/conferences.html">Conferences</a>
                          </li>
                      </ul>
                  </div>
              </li>

              <!-- resource item -->
              <li class="nav__item ms-5 nav-item ">
                  <div class="nav__item-label nav-item d-flex align-items-center justify-content-center">
                      <p class="m-0 pe-2 text fs-5 fw-semibold text-primary">Research</p>
                      <i class="fa-solid fa-caret-down text-primary"></i>
                  </div>

                  <div class="row gx-4 nav__mega-menu">
                      <ul class="col-6 list-unstyled">
                          <li class="nav-item mb-2"><a class="fs-6 fw-semibold text-primary"
                                  style="text-decoration: none;"
                                  href="../../pages/research/overview.html">Overview</a>
                          </li>
                          <li class="nav-item mb-2"><a class="fs-6 fw-semibold text-primary"
                                  style="text-decoration: none;" href="../../assets/research/pdf/call_f_proposals.pdf"
                                  target="_blank">Call
                                  for
                                  proposals</a>
                          </li>
                          <li class="nav-item mb-2"><a class="fs-6 fw-semibold text-primary"
                                  style="text-decoration: none;"
                                  href="../../pages/research/predocRA.html">Pre-doctoral</a>
                          </li>
                          <li class="nav-item mb-2"><a class="fs-6 fw-semibold text-primary"
                                  style="text-decoration: none;" href="../../pages/research/current.html">PCRI
                                  research</a>
                          </li>
                          <li class="nav-item mb-2"><a class="fs-6 fw-semibold text-primary"
                                  style="text-decoration: none;"
                                  href="../../pages/research/COI-documents.html">Research
                                  for COI
                                  document</a>
                          </li>
                          <li class="nav-item"><a class="fs-6 fw-semibold text-primary" style="text-decoration: none;"
                                  href="../../pages/research/YNOS.html">Indian
                                  start-up database
                                  from
                                  YNOS</a>
                          </li>
                      </ul>
                      <ul class="col-6 list-unstyled">
                          <li class="nav-item mb-2"><a class="fs-6 fw-semibold text-primary"
                                  style="text-decoration: none;" href="../../pages/research/patent.html">Patent
                                  database</a>
                          </li>
                          <li class="nav-item mb-2"><a class="fs-6 fw-semibold text-primary"
                                  style="text-decoration: none;" href="../../pages/research/earlyipo.html">Early
                                  IPO database</a>
                          </li>
                          <li class="nav-item mb-2"><a class="fs-6 fw-semibold text-primary"
                                  style="text-decoration: none;" href="../../pages/research/FAQs.html">PCRI
                                  research FAQs</a>
                          </li>
                          <li class="nav-item mb-2"><a class="fs-6 fw-semibold text-primary"
                                  style="text-decoration: none;" href="../../pages/research/data.html">Data
                                  summary</a>
                          </li>
                          <li class="nav-item mb-2"><a class="fs-6 fw-semibold text-primary"
                                  style="text-decoration: none;" href="../../pages/research/library.html">Library</a>
                          </li>
                          <li class="nav-item mb-2"><a class="fs-6 fw-semibold text-primary"
                                  style="text-decoration: none;" href="../../pages/research/apply.html">How to
                                  apply to PCRI</a>
                          </li>
                          <li class="nav-item"><a class="fs-6 fw-semibold text-primary" style="text-decoration: none;"
                                  href="../../assets/research/pdf/EXTERNAL_PCRI_MANUAL Version 2.5 UPDATE.pdf"
                                  target="_blank">Variables/Data
                                  user manual</a>
                          </li>
                      </ul>
                  </div>
              </li>
          </ul>

          <button class="navbar-toggler d-block d-lg-none" style="outline: none; box-shadow: none;" type="button"
              data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon fs-6"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                  <h5 class="offcanvas-title fw-semibold text-primary" id="offcanvasNavbarLabel">PCRI RESEARCH</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                      <li class="nav-item">
                          <a class="nav-link active text-primary fw-semibold" aria-current="page"
                              href="../../index.html">Home</a>
                      </li>
                      <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle text-primary fw-semibold" href="#" role="button"
                              data-bs-toggle="dropdown" aria-expanded="false">
                              About
                          </a>
                          <ul class="dropdown-menu border-0">
                              <li><a class="dropdown-item text-primary"
                                      href="../../pages/about/overview.html">Overview</a>
                              </li>
                              <li><a class="dropdown-item text-primary"
                                      href="../../pages/about/supporters.html">Supporters</a>
                              </li>
                              <li><a class="dropdown-item text-primary"
                                      href="../../pages/about/advisory-committee.html">Academic
                                      committee</a></li>
                              <li><a class="dropdown-item text-primary"
                                      href="../../pages/about/academic-advisory-board.html">Academic advisory
                                      board</a></li>
                              <li><a class="dropdown-item text-primary"
                                      href="../../pages/about/people.html">People</a>
                              </li>
                              <li><a class="dropdown-item text-primary" href="../../pages/about/new-gp.html">GP
                                      Participation</a>
                              </li>
                          </ul>
                      </li>
                      <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle text-primary fw-semibold" href="#" role="button"
                              data-bs-toggle="dropdown" aria-expanded="false">
                              News
                          </a>
                          <ul class="dropdown-menu border-0">
                              <li>
                                  <a class="dropdown-item text-primary" href="../../pages/news/news.html">In the
                                      news</a>
                                  <a class="dropdown-item text-primary" href="../../pages/news/events.html">Events</a>
                              </li>
                              <li><a class="dropdown-item text-primary"
                                      href="../../pages/news/conferences.html">Conferences</a>
                              </li>
                          </ul>
                      </li>
                      <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle text-primary fw-semibold" href="#" role="button"
                              data-bs-toggle="dropdown" aria-expanded="false">
                              Research
                          </a>
                          <ul class="dropdown-menu border-0">
                              <li><a class="dropdown-item text-primary"
                                      href="../../pages/research/overview.html">Overview</a>
                              </li>
                              <li><a class="dropdown-item text-primary"
                                      href="../../assets/research/pdf/call_f_proposals.pdf" target="_blank">Call for
                                      proposals</a></li>
                              <li><a class="dropdown-item text-primary"
                                      href="../../pages/research/predocRA.html">Pre-doctoral</a></li>
                              <li><a class="dropdown-item text-primary" href="../../pages/research/current.html">PCRI
                                      research</a></li>
                              <li><a class="dropdown-item text-primary"
                                      href="../../pages/research/COI-documents.html">Research
                                      for COI document</a></li>
                              <li><a class="dropdown-item text-primary" href="../../pages/research/YNOS.html">Indian
                                      start-up
                                      database from
                                      YNOS</a></li>
                              <li><a class="dropdown-item text-primary" href="../../pages/research/patent.html">Patent
                                      database</a></li>
                              <li><a class="dropdown-item text-primary"
                                      href="../../pages/research/earlyipo.html">Early IPO
                                      database</a></li>
                              <li><a class="dropdown-item text-primary" href="../../pages/research/FAQs.html">PCRI
                                      research
                                      FAQs</a></li>
                              <li><a class="dropdown-item text-primary" href="../../pages/research/data.html">Data
                                      summary</a>
                              </li>
                              <li><a class="dropdown-item text-primary"
                                      href="../../pages/research/library.html">Library</a></li>
                              <li><a class="dropdown-item text-primary" href="../../pages/research/apply.html">How
                                      to apply to
                                      PCRI</a></li>
                              <li><a class="dropdown-item text-primary"
                                      href="../../assets/research/pdf/EXTERNAL_PCRI_MANUAL Version 2.5 UPDATE.pdf"
                                      target="_blank">Variables/Data user manual</a></li>
                          </ul>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </nav>
    `
  }
}

customElements.define('pcri-navbar', PCRINavbar);
