import { gamesJson } from "../db/db.js";

document.addEventListener('DOMContentLoaded', function () {
    const dataContainer = document.getElementById('dataContainer');

    gamesJson.forEach(game => {
        const gameContainer = document.createElement('div');
        gameContainer.classList.add('game');

        const gameData = [
            { label: 'Game ID', value: game.game_id },
            { label: 'Player Name', value: game.player_name },
            { label: 'Move Number', value: game.move_number },
            { label: 'Game Time', value: game.game_time },
            { label: 'Role', value: game.role },
            { label: 'Balance', value: game.balance },
            { label: 'Location', value: game.location }
        ];

        gameData.forEach(data => {
            const p = document.createElement('p');
            p.textContent = `${data.label}: ${data.value}`;
            gameContainer.appendChild(p);
        });

        dataContainer.appendChild(gameContainer);
    });
});
