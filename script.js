let randomValue;
let locked = 0;

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function GenerateButtons(){
    let noOfButtons;
    let insertedNumber = document.getElementById("text").value;
    if( 1 < insertedNumber && insertedNumber < 1000)
        noOfButtons = insertedNumber;
    else
        noOfButtons = 2;

    for(let id = 1; id <= noOfButtons; id++)
    {
        document.getElementById("buttons-area").innerHTML += `
        <div id="${id}">
        <br>
        <div class="card">
            <div class="card-body">
                <div class="col text-center">
                    <button class="btn btn-danger" onclick="checkButton(${id})">
                    Button ${id}
                    </button>
                </div>
            </div>
        </div>
        </div>
        `;
    }
    document.getElementById("genButton").onclick=null;
    randomValue = randomIntFromInterval(1, insertedNumber);
}

function checkButton(value){
    let gameResult;
    let displayField;
    if(locked == 0)
    {
        locked = 1;
        if(value == randomValue)
        {
            gameResult = "YOU WIN!"
            displayField = "result-success"
        }
        else
        {
            gameResult = "YOU LOSE!"
            displayField = "result-fail"
        }
        document.getElementById(displayField).innerHTML = gameResult;
        document.getElementById(displayField).innerHTML += `
        <div class="card">
            <div class="card-body">
                <div class="col text-center">
                <button class="btn btn-primary" onclick="ReloadPage()">
                Restart Game
                </button>
                </div>
            </div>
        </div>
        `;
    }
}

function ReloadPage(){
    window.location.reload();
}