class PCRIFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <footer>
        <div class="footer__wrapper container-fluid d-flex align-items-center justify-content-center mt-5 px-md-5">
            <div class="row container-fluid d-flex mt-2 mt-lg-5 px-md-5">
                <div class="col-12 d-none d-sm-flex col-lg-4 d-lg-block align-items-sm-center px-5">
                    <a href="../../index.html">
                        <img width="100px" src="../../assets/head/images/pcri_logo.jpg" alt="logo" class="img-fluid">
                    </a>
                    <p class="w-75 ms-5 w-lg-50 ms-lg-0 mt-3 text-light" style="font-size: 14px;">The Private Capital
                        Research
                        Institute is a
                        not-for-profit
                        501(c)(3) corporation formed to further the understanding of private capital</p>
                </div>
                <div class="col-8 d-lg-flex d-none">
                    <div>
                        <h6 class="text-light mb-4 fw-bold">ABOUT</h6>
                        <ul class="list-unstyled">
                            <li class="mb-3 hover--underline-light" style="font-size: 14px;"><a
                                    class="text-light text-decoration-none" style="font-size: 14px;"
                                    href="../../pages/about/overview.html">Overview</a>
                            </li>
                            <li class="mb-3 hover--underline-light" style="font-size: 14px;"><a
                                    class="text-light text-decoration-none" style="font-size: 14px;"
                                    href="../../pages/about/supporters.html">Supporter</a>
                            </li>
                            <li class="mb-3 hover--underline-light" style="font-size: 14px;"><a
                                    class="text-light text-decoration-none" style="font-size: 14px;"
                                    href="../../pages/about/advisory-committee.html">Advisory
                                    Committee</a>
                            </li>
                            <li class="mb-3 hover--underline-light" style="font-size: 14px;"><a
                                    class="text-light text-decoration-none" style="font-size: 14px;"
                                    href="../../pages/about/academic-advisory-board.html">Academic
                                    Advisory Board</a>
                            </li>
                            <li class="mb-3 hover--underline-light" style="font-size: 14px;"><a
                                    class="text-light text-decoration-none" style="font-size: 14px;"
                                    href="../../pages/about/people.html">People</a>
                            </li>
                            <li class="mb-3 hover--underline-light" style="font-size: 14px;"><a
                                    class="text-light text-decoration-none" style="font-size: 14px;"
                                    href="../../pages/about/new-gp.html">GP Participation</a>
                            </li>
                        </ul>
                    </div>
                    <div class="mx-5">
                        <h6 class="text-light mb-4 fw-bold">RESEARCH</h6>
                        <ul class="list-unstyled">
                            <li class="mb-3 hover--underline-light" style="font-size: 14px;"><a
                                    class="text-light text-decoration-none" style="font-size: 14px;"
                                    href="../../pages/research/overview.html">Overview</a>
                            </li>
                            <li class="mb-3 hover--underline-light" style="font-size: 14px;"><a
                                    class="text-light text-decoration-none" style="font-size: 14px;"
                                    href="../../assets/research/pdf/call_f_proposals.pdf" target="_blank">Call for
                                    proposals</a>
                            </li>
                            <li class="mb-3 hover--underline-light" style="font-size: 14px;"><a
                                    class="text-light text-decoration-none" style="font-size: 14px;"
                                    href="../../pages/research/current.html">PCRI Research</a>
                            </li>
                            <li class="mb-3 hover--underline-light" style="font-size: 14px;"><a
                                    class="text-light text-decoration-none" style="font-size: 14px;"
                                    href="../../pages/research/FAQs.html">PCRI Research FAQs</a>
                            </li>
                            <li class="mb-3 hover--underline-light" style="font-size: 14px;"><a
                                    class="text-light text-decoration-none" style="font-size: 14px;"
                                    href="../../pages/research/library.html">Library</a>
                            </li>
                            <li class="mb-3 hover--underline-light" style="font-size: 14px;"><a
                                    class="text-light text-decoration-none" style="font-size: 14px;"
                                    href="../../pages/research/apply.html">How to apply to PCRI</a>
                            </li>
                        </ul>
                    </div>

                    <div style="flex: 1;">
                        <h6 class="text-light mb-4 fw-bold">PARTNERS &amp; SPONSORS</h6>
                        <div class="d-flex flex-wrap">
                            <a target="_blank" href="https://www.kauffman.org"
                                class="support__image-wrapper me-2 mb-4 p-2 bg-light">
                                <img src="../../assets/about/images/partners/partners-and-sponsors-1.gif" alt="partner">
                            </a>
                            <a target="_blank" href="https://www.unquote.com"
                                class="support__image-wrapper me-2 mb-4 p-2 bg-light">
                                <img src="../../assets/about/images/partners/unquote.jpg" alt="partner">
                            </a>
                            <a target="_blank" href="https://www.globalprivatecapital.org"
                                class="support__image-wrapper me-2 mb-4 p-2 bg-light">
                                <img src="../../assets/about/images/partners/EMPEA.png" alt="partner">
                            </a>
                            <a target="_blank"
                                href="https://www.spglobal.com/marketintelligence/en/mi/products/ilevel.html"
                                class="support__image-wrapper me-2 mb-4 p-2 bg-light">
                                <img src="../../assets/about/images/partners/ilevel.png" alt=" partner">
                            </a>
                            <a target="_blank" href="https://nyppex.com/"
                                class="support__image-wrapper me-2 mb-4 p-2 bg-light">
                                <img src="../../assets/about/images/partners/NYPPEX.png" alt="partner">
                            </a>
                            <a target="_blank" href="https://www.thomsonreuters.com/en.html"
                                class="support__image-wrapper me-2 mb-4 p-2 bg-light">
                                <img src="../../assets/about/images/partners/thomson-reuters.jpg" alt="partner">
                            </a>
                            <a target="_blank"
                                href="http://hcd.ucdavis.edu/faculty/webpages/kenney/misc/Firm_IPO_Database_Guide.pdf"
                                class="support__image-wrapper me-2 mb-4 p-2 bg-light">
                                <img src="../../assets/about/images/partners/Kenney-Patton.jpg" alt="partner">
                            </a>
                        </div>
                    </div>
                </div>
                <p class="text-light text-center mt-4 text--small">© The Private Capital Research Institute. All Rights
                    Reserved.
                    PCRI |
                    175 North
                    Harvard Street,
                    Boston, MA 02134 | info@pcrinstitute.org</p>
            </div>
        </div>
    </footer>
`
    }
}

customElements.define('pcri-footer', PCRIFooter)
