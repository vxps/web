document.addEventListener("DOMContentLoaded", function () {
    const days = localStorage.getItem("days")
    const count = localStorage.getItem("movies")

    const daysIn = document.getElementsByName('days');
    const movIn = document.getElementsByName('movies');

    if (days && count) {
        const loadingArea = document.querySelector(".load");
        loadingArea.style.display = "block"

        const loadArea = document.createElement("div")
        loadArea.className = "load"
        loadArea.textContent = "В памяти сохранены предыдущие параметры. Загрузить их?"

        const loadButton = document.createElement("b")
        loadButton.innerHTML = `<button class="load-button" type="submit">Загрузить</button>`

        const notLoadButton = document.createElement("b")
        notLoadButton.innerHTML = `<button class="not-load-button" type="submit">Не загружать</button>`

        loadArea.appendChild(loadButton)
        loadArea.appendChild(notLoadButton)
        loadingArea.appendChild(loadArea)

        loadButton.addEventListener("click", function (e) {
            e.preventDefault()
            printUserTable(days, count)

            loadingArea.removeChild(loadArea)
            loadingArea.style.display = "none"
        });

        notLoadButton.addEventListener("click", function (e) {
            e.preventDefault()
            loadingArea.removeChild(loadArea)
            loadingArea.style.display = "none"
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('table-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const daysInput = document.getElementById('days');

        const maxMoviesCount = document.getElementById('movies');
        const count = maxMoviesCount.value;

        if (count !== "") {
            printUserTable(daysInput, count)

            const savingArea = document.querySelector('.save')
            savingArea.style.display = "block"

            const saveAreas = document.querySelectorAll(".save-area")
            if (saveAreas) {
                saveAreas.forEach(area => {
                    savingArea.removeChild(area)
                })
            }

            const saveArea = document.createElement("div")
            saveArea.className = "save-area"
            saveArea.textContent = "Сохранить введённые параметры?"

            const saveButton = document.createElement("b")
            saveButton.innerHTML = `<button class="save-button" type="submit">Сохранить</button>`

            const notSaveButton = document.createElement("b")
            notSaveButton.innerHTML = `<button class="not-save-button" type="submit">Не сохранять</button>`

            saveArea.appendChild(saveButton)
            saveArea.appendChild(notSaveButton)
            savingArea.appendChild(saveArea)

            saveButton.addEventListener("click", function (e) {
                e.preventDefault()

                localStorage.setItem("days", days)
                localStorage.setItem("movies", count)
                alert("Параметры сохранены!")
                savingArea.removeChild(saveArea)
                savingArea.style.display = "none"
            });

            notSaveButton.addEventListener("click", function (e) {
                e.preventDefault()
                savingArea.removeChild(saveArea)
                savingArea.style.display = "none"
            });
        } else {
            alert("введите количество дней");
        }
    });
});

function printUserTable(days, count) {
    const userTable = document.getElementById('table');
    userTable.innerHTML = '';

    const table = document.createElement('table');
    table.classList.add('user-table');

    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    tr.innerHTML = `<th>фильм</th>
                        <th>Понедельник</th>`

    
    if (days.value == 2) {
        tr.innerHTML += `<th>вторник</th>`;
    }

    thead.appendChild(tr);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    for (let i = 0; i < count; i++) {

        const row = document.createElement('tr');
        row.id = `film-${i}`;
        row.innerHTML = `
    <td class="number">${i + 1}</td>
    <td class="monday"><textarea name="monday-${i}"></textarea></td>`;


        if (days.value == 2) {
            row.innerHTML += `<td class="tuesday"><textarea type="text" name="tuesday-${i}"></textarea></td>`;
        }

        tbody.appendChild(row);
    }

    table.appendChild(tbody)
    userTable.appendChild(table)
}