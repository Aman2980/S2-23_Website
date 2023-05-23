import { gamesJson } from "../db/db.js";

document.addEventListener('DOMContentLoaded', function () {
    const dataContainer = document.getElementById('dataContainer');
    const form = document.querySelector('form');
    const gameIdInput = document.getElementById('id');

    // Create table element and header
    const table = document.createElement('table');
    table.classList.add('game-table');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    const headings = ['Game ID', 'Player Name', 'Move Number', 'Game Time', 'Role', 'Balance', 'Location'];

    headings.forEach(heading => {
        const th = document.createElement('th');
        th.textContent = heading;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement('tbody');

    gamesJson.forEach(game => {
        const gameData = [
            { label: 'Game ID', value: game.game_id },
            { label: 'Player Name', value: game.player_name },
            { label: 'Move Number', value: game.move_number },
            { label: 'Game Time', value: game.game_time },
            { label: 'Role', value: game.role },
            { label: 'Balance', value: game.balance },
            { label: 'Location', value: game.location }
        ];

        const row = document.createElement('tr');

        gameData.forEach(data => {
            const cell = document.createElement('td');
            cell.textContent = data.value;
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    dataContainer.appendChild(table);

    // Add event listener to the form submit button
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const filterValue = parseInt(gameIdInput.value);

        // Clear the table body
        tbody.innerHTML = '';


        // Filter the games based on the input value
        const filteredGames = gamesJson.filter(game => game.game_id === filterValue);

        filteredGames.forEach(game => {
            const gameData = [
                { label: 'Game ID', value: game.game_id },
                { label: 'Player Name', value: game.player_name },
                { label: 'Move Number', value: game.move_number },
                { label: 'Game Time', value: game.game_time },
                { label: 'Role', value: game.role },
                { label: 'Balance', value: game.balance },
                { label: 'Location', value: game.location }
            ];

            const row = document.createElement('tr');

            gameData.forEach(data => {
                const cell = document.createElement('td');
                cell.textContent = data.value;
                row.appendChild(cell);
            });

            tbody.appendChild(row);
        });
    });
});
