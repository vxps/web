document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.getElementById('loader');
    const dataList = document.getElementById('post-container');

    preloader.style.display = 'block';

    setTimeout(async function () {
        try {
            await fetchAndRenderData();
            preloader.style.display = 'none';
        } catch (error) {
            console.error('Error fetching data:', error);
            preloader.style.display = 'none';
            renderError();
        }
    }, 1500);
});

async function fetchAndRenderData() {
    const response = await fetchDataWithRandomFilter();
    const data = await response.json();

    renderDataList(data);
}

function fetchDataWithRandomFilter() {
    const randomFilter = Math.random() < 0.5 ? '10' : '20';
    const apiUrl = `https://jsonplaceholder.typicode.com/comments?id_lte=${randomFilter}`;

    return fetch(apiUrl);
}

function renderDataList(data) {
    const dataList = document.getElementById('post-container');

    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${item.name}</strong><p>${item.body}</p>`;
        dataList.appendChild(listItem);
    });
}

function renderError() {
    const errorPlaceholder = document.createElement('p');
    errorPlaceholder.textContent = '⚠ Что-то пошло не так';
    document.body.appendChild(errorPlaceholder);
}
