var keysPressed = [];

function playKey(e) 
{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (key !== null)
    {
        key.classList.contains('white') ? key.classList.add('playing-white') : key.classList.add('playing-black');

        if (!keysPressed.includes(key))
        {
            keysPressed.push(key);
            audio.currentTime = 0;
            audio.play();
        }
    }
}

function resetKey(e)
{
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    var index = keysPressed.indexOf(key);
    if (index !== -1) keysPressed.splice(index, 1);

    if (key !== null) key.classList.remove('playing-white', 'playing-black');
}

window.addEventListener('keydown', playKey);
window.addEventListener('keyup', resetKey);