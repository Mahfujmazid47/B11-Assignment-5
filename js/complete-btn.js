// buttons

let btns = document.querySelectorAll('.complete-btn');
// console.log(btns.length)

for (let i = 0; i < btns.length; i++) {
    let btn = btns[i];
    btn.addEventListener('click', function (event) {

        btn.disabled = true;
        alert('Board Updated Successfully');
        const taskRemain = document.getElementById('task').innerText;
        // console.log(taskRemain)

        let sum = taskRemain - 1;
        document.getElementById('task').innerText = sum;

        const taskDone = document.getElementById('task-done').innerText;
        const covertedTaskDone = parseInt(taskDone);

        let sum1 = covertedTaskDone + 1;
        document.getElementById('task-done').innerText = sum1;

        if (taskRemain === "1") {
            alert("Congrats!!! You have completed all the current task");
        }

        const parentDiv = event.target.closest('.div-container');
        const taskMsg = parentDiv.querySelector('h1').innerText;


        const newHistory = document.getElementById('new-history1');

        const newElement = document.createElement('div');

        const date = new Date();
        const formattedDate = date.toLocaleString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        }).replace(",", "");

        console.log(formattedDate);


        newElement.innerText = `You have completed the task ${taskMsg} at ${formattedDate}`;

        newHistory.appendChild(newElement);

        newElement.classList.add('bg-[#F4F7FF]', 'p-2', 'rounded-lg', 'mb-3', 'remove');

        // newElement.style.display = 'block';
        // newElement.style.marginBottom = '15px';
    })
}

// document.getElementsByClassName('complete-btn')
//     .addEventListener('click', function () {
//         for
//     })