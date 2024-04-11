import {NEWS_LIST} from './data/news-data.js';
import {EVENT_LIST} from './data/events-data.js';

const newsContainer = document.getElementById("news-list");
const eventsContainer = document.getElementById("events-list");
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function getUrl(url) {
    // If the URL is empty or doesn't start with "/", return the URL as is
    if (!url?.startsWith("/")) {
        return url;
    }
    // If the URL starts with "/", prepend "../.." to it and return
    return "." + url;
}


function renderNews() {
    let out = "";
    NEWS_LIST.slice(0, 4).forEach((item) => {
        const utc = new Date(item.date)
        const convertedDate = new Date(utc.getTime() + new Date().getTimezoneOffset() * 60000);
        out += `
        <li class="list-group-item px-0">
        <div class="news__card card border-0">
            <div class="card-body px-0 d-flex">
                <div class="me-4" style="flex: 1;">
                    <h6 class="news__title card-title ">
                        <a class="fw-semibold text-primary"
                            href="${getUrl(item.url)}"
                            target="_blank">${item.title}</a>
                    </h6>
                    <p class="mt-5 fw-light">${convertedDate.toLocaleString('en-US', { day: '2-digit', month: "long", year: "numeric"  })}</p>
                </div>
                <div class="d-block">
                    <div class="news__image-wrapper">
                        <a class="fw-semibold text-primary" href="${getUrl(item.url)}" target="_blank">
                            <img src="${getUrl(item.image)}" alt="news" class="img-fluid">
                        </a>
                    </div>
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
        const utc = new Date(item.date);
        const convertedDate = new Date(utc.getTime() + new Date().getTimezoneOffset() * 60000);

        out += `
        <li class="d-flex mb-4">
            <div class="text-center border-end" style="width: 100px;">
                <p class="mb-1 fw-bold">${convertedDate.toLocaleString('en-US', { month: "short", day: '2-digit' })}</p>
                <p class="m-0 fw-semibold" style="font-size: 14px;">${convertedDate.getFullYear()}</p>
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
        
