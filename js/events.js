import {EVENT_LIST} from './data/events-data.js';

// Define the number of items to be displayed per page
const ITEM_PER_PAGE = 15;
// Initialize the current page to 1
let thisPage = 1;
// Calculate the maximum number of pages based on the number of events and items per page
let maxPage = Math.ceil(EVENT_LIST.length / ITEM_PER_PAGE);

// This function is used to process a URL and return a modified version of it
function getUrl(url) {
    // If the URL is empty or doesn't start with "/", return the URL as is
    if (!url || !url.startsWith("/")) {
        return url;
    }

    // If the URL starts with "/", prepend "../.." to it and return
    return "../.." + url;
}

// Function to render events on the page
function renderEvents() {
    // Calculate the range of events to be displayed on the current page
    let beginGet = ITEM_PER_PAGE * (thisPage - 1);
    let endGet = ITEM_PER_PAGE * thisPage - 1;

    const eventsContainer = document.getElementById("events-list");
    let out = "";

    // Loop through each event in the current page range
    EVENT_LIST.slice(beginGet, endGet + 1).forEach((item) => {
        out += `
        <li class="my-4 col-12 col-md-6 col-lg-4">
            <div class="event-card mb-4">
                <a href="${getUrl(item.url)}" target="_blank">
                    <div class="event-card__image">
                        <image src="${getUrl(item.image)}" alt="event-image">
                    </div>
                </a>
                    <p class="hover--underline mt-2 px-2 py-2" style="flex: 1;"><a
                            class="fw-semibold text-decoration-none text-primary"
                            href="${getUrl(item.url)}"
                            target="_blank">${item.title}</a>
                    </p>
                
                <div class="event-date">
                    <p class="fw-semibold mb-1" style="font-size: 14px;">${new Date(item.date).toLocaleString('en-US', { month: "short", day: '2-digit' })}</p>
                    <p class="fw-bold mb-0">${new Date(item.date).getFullYear()}</p>
                </div>
            </div>
        </li>
        `;
    });

    // Set the inner HTML of the events container to the generated output string
    eventsContainer.innerHTML = out;
    renderPagination();
}

// Change the current page and re-render the events
export function changePage(i) {
    thisPage = i;
    renderEvents();
}

// Add a click event listener to the 'previous' button
let prev = document.getElementById('btn-prev');
prev.addEventListener('click', function(){
    if (thisPage === 1) return;
    changePage(thisPage - 1);
});

// Add a click event listener to the 'next' button
let next = document.getElementById('btn-next');
next.addEventListener('click', function(){
    if (thisPage === maxPage) return;
    changePage(thisPage + 1);
});

// Function to add a page item to the pagination
function addPageItem(page, thisPage) {
    const paginationContainer = document.getElementById("events-pagination");
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

// Function to add a '...' item to the pagination
function addMoreItem() {
    const paginationContainer = document.getElementById("events-pagination");
    let newPage = document.createElement('li');
    newPage.innerHTML = `
        <a class="page-link">...</a>
    `;
    newPage.classList.add('page-item');
    paginationContainer.appendChild(newPage);
}

// Function to render the pagination
function renderPagination() {
    if (maxPage === 0) return;

    const paginationContainer = document.getElementById("events-pagination");
    paginationContainer.innerHTML = "";

    // If the current page is the first page, disable the 'previous' button
    if (thisPage === 1) {
        prev.classList.add("disabled");
    } else {
        prev.classList.remove("disabled");
    }
    // If the current page is the last page, disable the 'next' button
    if (thisPage === maxPage) {
        next.classList.add("disabled");
    } else {
        next.classList.remove("disabled");
    }

    // If there are 5 or fewer pages, add a page item for each page
    if (maxPage <= 5) {
        for (let i = 1; i <= maxPage; i++) {
            addPageItem(i, thisPage)
        }
    } else {
        // Add a page item for the first page
        addPageItem(1, thisPage);
        // If the current page is greater than 2, add a '...' item
        if (thisPage > 2) {
            addMoreItem();
        }
        // If the current page is one of the last two pages, add a page item for the page two pages before the current page
        if (thisPage >= maxPage - 1) {
            addPageItem(thisPage - 2, thisPage);
        }
         // Add a page item for each of the two pages before and after the current page
        for (let i = Math.max(2, thisPage - 1); i <= Math.min(maxPage - 1, thisPage + 1); i++) {
            addPageItem(i, thisPage);
        }
        // If the current page is one of the first two pages, add a page item for the page two pages after the current page
        if (thisPage <= 2) {
            addPageItem(thisPage + 2, thisPage);
        }
        // If the current page is less than the second to last page, add a '...' item
        if (thisPage < maxPage - 1) {
            addMoreItem();
        }
        // Add a page item for the last page
        addPageItem(maxPage, thisPage);
    }
    
 
}


renderEvents();
