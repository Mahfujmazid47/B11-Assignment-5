// bg change button 

document.getElementById('bg-img').addEventListener('click', function () {

    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;



    // const r = Math.floor(Math.random() * 256); // Random red value between 0-255
    // const g = Math.floor(Math.random() * 256); // Random green value between 0-255
    // const b = Math.floor(Math.random() * 256); // Random blue value between 0-255
    // document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; // Return RGB format


})



// Set time 

const date = new Date();
const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
}).replace(",", "");

document.getElementById('time').innerText = formattedDate;



