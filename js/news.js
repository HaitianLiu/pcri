import {NEWS_LIST} from './data/news-data.js';

// Define the number of news items to be displayed per page
const ITEM_PER_PAGE = 16;
// Initialize the current page to 1
let thisPage = 1;
// Calculate the maximum number of pages based on the number of news items and items per page
let maxPage = Math.ceil(NEWS_LIST.length / ITEM_PER_PAGE);

function getUrl(url) {
    // If the URL is empty or doesn't start with "/", return the URL as is
    if (!url || !url.startsWith("/")) {
        return url;
    }

    // If the URL starts with "/", prepend "../.." to it and return
    return "../.." + url;
}

function renderNews() {
    let beginGet = ITEM_PER_PAGE * (thisPage - 1);
    let endGet = ITEM_PER_PAGE * thisPage - 1;

    const container = document.getElementById("news-list");
    let out = "";

    NEWS_LIST.slice(beginGet, endGet + 1).forEach((item) => {
        out += `
        <li class="my-4 col-6 col-md-6 col-lg-3">
            <div class="news-card mb-4">
                <a href="${getUrl(item.url)}" target="_blank">
                    <div class="news-card__image">
                        <img src="${getUrl(item.image)}" alt="news-image">
                    </div>
                </a>
                
                <p class="hover--underline mt-2 px-2 py-2" style="flex: 1;"><a
                        class="fw-semibold text-decoration-none text-primary"
                        href="${getUrl(item.url)}"
                        target="_blank">${item.title}</a>
                </p>
                
                <div class="news-date">
                    <p class="fw-bold mb-1">${new Date(item.date).toLocaleString('en-US', { month: "short", day: '2-digit', timeZone: 'UTC'})}</p>
                    <p class="fw-semibold m-0" style="font-size: 14px;">${new Date(item.date).getUTCFullYear()}</p>                
                </div>
            </div>
        </li>
        `;
    });

    container.innerHTML = out;
    renderPagination();
}

export function changePage(i) {
    thisPage = i;
    renderNews();
}

let prev = document.getElementById('btn-prev');
prev.addEventListener('click', function(){
    if (thisPage === 1) return;
    changePage(thisPage - 1);
});

let next = document.getElementById('btn-next');
next.addEventListener('click', function(){
    if (thisPage === maxPage) return;
    changePage(thisPage + 1);
});

function addPageItem(page, thisPage) {
    const paginationContainer = document.getElementById("news-pagination");
    let newPage = document.createElement('li');
    newPage.innerHTML = `
        <a class="page-link text-primary bg-light fw-semibold" href="#">${page}</a>
    `;
    newPage.classList = 'px-2 rounded-4 page__item';
    if(page == thisPage){
        newPage.classList.add('active');
    }
    newPage.addEventListener('click', function(){
        changePage(page);
    });
    paginationContainer.appendChild(newPage);
}

function addMoreItem() {
    const paginationContainer = document.getElementById("news-pagination");
    let newPage = document.createElement('li');
    newPage.innerHTML = `
        <a class="page-link">...</a>
    `;
    newPage.classList.add('page-item');
    paginationContainer.appendChild(newPage);
}

function renderPagination() {
    if (maxPage === 0) return;

    const paginationContainer = document.getElementById("news-pagination");
    paginationContainer.innerHTML = "";

    if (thisPage === 1) {
        prev.classList.add("disabled");
    } else {
        prev.classList.remove("disabled");
    }

    if (maxPage <= 5) {
        for (let i = 1; i <= maxPage; i++) {
            addPageItem(i, thisPage)
        }
    } else {
        addPageItem(1, thisPage);
        if (thisPage > 2) {
            addMoreItem();
        }

        if (thisPage >= maxPage - 1) {
            addPageItem(thisPage - 2, thisPage);
        }
        for (let i = Math.max(2, thisPage - 1); i <= Math.min(maxPage - 1, thisPage + 1); i++) {
            addPageItem(i, thisPage);
        }
        if (thisPage <= 2) {
            addPageItem(thisPage + 2, thisPage);
        }

        if (thisPage < maxPage - 1) {
            addMoreItem();
        }
        addPageItem(maxPage, thisPage);
    }
    
    if (thisPage === maxPage) {
        next.classList.add("disabled");
    } else {
        next.classList.remove("disabled");
    }
}


renderNews();
