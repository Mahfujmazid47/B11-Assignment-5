// bg change button 

document.getElementById('bg-img').addEventListener('click', function () {

    // const col = ["red", "green", "blue", "yellow", "pink", "purple",
    //     "orange", "cyan", "lime", "magenta", "teal", "brown"];

    // const body = document.getElementById('body');
    // for (let i = 0; i < 1; i++) {
    //     const color = col[0];

    //     document.body.style.backgroundColor = color;
    // }



    const r = Math.floor(Math.random() * 256); // Random red value between 0-255
            const g = Math.floor(Math.random() * 256); // Random green value between 0-255
            const b = Math.floor(Math.random() * 256); // Random blue value between 0-255
            document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; // Return RGB format


})