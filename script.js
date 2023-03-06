fetch('https://raw.githubusercontent.com/MooseCowBear/frontend-mentor-expenses-chart/main/data.json')
  .then(response => response.json())
  .then(data => displayData(data)) //function that uses the data
  .catch(error => displayError(error)); //function for loading an error message in case it doesn't read

const days = {"sun": 0, "mon": 1, "tue": 2, "wed":3, "thu": 4, "fri": 5, "sat": 6};
function displayData(data) {
    const today = new Date().getDay(); //returns 0 - 6, with 0 being sun - graph starts week on monday
    for (let i = 0; i < data.length; i++) {
        const day = data[i].day;
        const amount = data[i].amount; 

        //get the right bar
        const bar = document.getElementById(day);
        bar.style.height = `${amount/9}em`; 

        //and the right amount div
        const amountDisplay = document.getElementById(`${day}-spent`);
        console.log(amountDisplay, "display amount div");
        amountDisplay.innerText = "$" + amount; 
    }
}

function displayError(error) {
    console.log(error);

}

//event listener for mouseover on bars to display the amount divs