import {NEWS_LIST} from './data/news-data.js';
import {EVENT_LIST} from './data/events-data.js';

const newsContainer = document.getElementById("news-list");
const eventsContainer = document.getElementById("events-list");

function getUrl(url) {
    // If the URL is empty or doesn't start with "/", return the URL as is
    if (!url || !url.startsWith("/")) {
        return url;
    }
    // If the URL starts with "/", prepend "../.." to it and return
    return "." + url;
}


function renderNews() {
    let out = "";
    NEWS_LIST.slice(0, 4).forEach((item) => {
        out += `
        <li class="list-group-item px-0">
        <div class="news__card card border-0">
            <div class="card-body px-0 d-flex">
                <div class="me-0" style="flex: 1;">
                    <h6 class="news__title card-title ">
                        <a class="fw-semibold text-primary"
                            href="${getUrl(item.url)}"
                            target="_blank">${item.title}</a>
                    </h6>
                    <p class="mt-3 fw-light">${new Date(item.date).toLocaleString('en-US', { day: '2-digit', month: "long", year: "numeric", timeZone: 'UTC'  })}</p>
                </div>
                <div class="d-block">
                    <a href="${getUrl(item.url)}" target="_blank">
                        <div class="news__image-wrapper">
                            <img src="${getUrl(item.image)}" alt="news" class="img-fluid">
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </li>
        `;
    });
    newsContainer.innerHTML = out;
}

function renderEvents() {
    let out = "";
    EVENT_LIST.slice(0, 4).forEach((item) => {
        out += `
        <li class="d-flex mb-4">
            <div class="text-center border-end" style="width: 100px;">
                <p class="mb-1 fw-bold">${new Date(item.date).toLocaleString('en-US', { month: "short", day: '2-digit', timeZone: 'UTC' })}</p>
                <p class="m-0 fw-semibold" style="font-size: 14px;">${new Date(item.date).getFullYear()}</p>
            </div>
            <p class="ps-3 hover--underline" style="flex: 1;">
                <a class="text-decoration-none text-primary" href="${getUrl(item.url)}">
                    ${item.title}    
                </a>
            </p>
    </li>
    `});

    out += `
    <a href="./pages/news/events.html" class="btn border-0 fw-semibold">
        <div class="d-flex align-items-center ">
            <span class="hover--underline">More events</span>
            <i class="fa-solid fa-arrow-right ps-2 text-small"></i>
        </div>
    </a>
    `

    eventsContainer.innerHTML = out;
}

renderNews();
renderEvents();
        
