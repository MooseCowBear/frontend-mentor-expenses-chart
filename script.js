fetch('https://raw.githubusercontent.com/MooseCowBear/frontend-mentor-expenses-chart/main/data.json')
  .then(response => response.json())
  .then(data => displayData(data)) //function that uses the data
  .catch(error => displayError(error)); //function for loading an error message in case it doesn't read

const days = {sun: 0, mon: 1, tue: 2, wed:3, thu: 4, fri: 5, sat: 6};
function displayData(data) {
    const today = new Date().getDay(); //returns 0 - 6, with 0 being sun - graph starts week on monday
    for (let i = 0; i < data.length; i++) {
        const day = data[i].day;
        const amount = data[i].amount; 

        //get the right bar
        const bar = document.getElementById(day);
        bar.style.height = `${amount/9}em`; 

        if (days[day] === today) {
            bar.classList.add("today");
        }

        //and the right amount div
        const amountDisplay = document.getElementById(`${day}-spent`);
        amountDisplay.innerText = "$" + amount; 
    }
}

function displayError(error) {
    console.log(error);

}

//event listener for mouseover on bars to display the amount divs
const bars = document.querySelectorAll(".bar");

bars.forEach(elem => elem.addEventListener('mouseenter', event => {
    const amountSpentDiv = event.target.previousElementSibling; 
    amountSpentDiv.classList.add("focused");
}));
bars.forEach(elem => elem.addEventListener('mouseleave', event => {
    const amountSpentDiv = event.target.previousElementSibling; 
    amountSpentDiv.classList.remove("focused");
}));

//focusing with tabbing

bars.forEach(elem => elem.addEventListener('focus', event => {
    const amountSpentDiv = event.target.previousElementSibling; 
    amountSpentDiv.classList.add("focused");
    
}));
bars.forEach(elem => elem.addEventListener('blur', event => {
    const amountSpentDiv = event.target.previousElementSibling; 
    amountSpentDiv.classList.remove("focused");
}));
