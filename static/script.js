const container = document.querySelector('.game_container');
const startBtn = document.getElementById('game_start');
const stopBtn = document.getElementById('game_stop');
const images = ["static/dude1.png", "static/dude2.png", "static/dude3.png"]
let score = 0

function spawnDude() {
    const button = document.createElement('button');
    button.className = "dude_button";

    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
    
    button.style.backgroundImage = `url('${selectedImage}')`;
    button.style.backgroundSize = "cover";
    button.style.backgroundPosition = "center";

    const maxX = container.clientWidth - 100; 
    const maxY = container.clientHeight - 40;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;

    button.onclick = function() {
        score += 1
        this.remove();
        spawnDude();
    };

    container.appendChild(button);
}

function stopSpawningDudes() {
    Dudes = document.querySelectorAll('.dude_button');
    Dudes.forEach(dude => dude.remove());
    alert("You've caught: " + score + " dudes!!!")
    score = 0
}

startBtn.addEventListener('click', () => {
    spawnDude();
});

stopBtn.addEventListener('click', () => {
    stopSpawningDudes();
});