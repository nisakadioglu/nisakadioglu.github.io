window.onload = function () {
    randomFruit();
};


function randomFruit(params) {
    var gameTable = document.getElementById('game-table');
    var counter = 0;

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            var randomNum = Math.floor(Math.random() * 7);
            var img = document.createElement('img');
            var cell = gameTable.rows[i].cells[j];

            let idname = "img" + counter;
            img.id = idname;

            switch (randomNum) {
                case 0:
                    img.src = './images/apple.png';
                    cell.innerHTML = "";
                    cell.appendChild(img);
                    break;

                case 1:
                    img.src = './images/orange.png';
                    cell.innerHTML = "";
                    cell.appendChild(img);
                    break;

                case 2:
                    img.src = './images/avocado.png';
                    cell.innerHTML = "";
                    cell.appendChild(img);
                    break;

                case 3:
                    img.src = './images/strawberry.png';
                    cell.innerHTML = "";
                    cell.appendChild(img);
                    break;

                case 4:
                    img.src = './images/watermelon.png';
                    cell.innerHTML = "";
                    cell.appendChild(img);
                    break;

                case 5:
                    img.src = './images/blueberry.png';
                    cell.innerHTML = "";
                    cell.appendChild(img);
                    break;

                case 6:
                    img.src = './images/pineapple.png';
                    cell.innerHTML = "";
                    cell.appendChild(img);
                    break;

                default:
                    break;
            }
            img.addEventListener('click', clickFunc);
            counter++;
        }
    }
}




// const clickFunc = e => {
//     // console.log(e.target.id);  // Get ID of Clicked Element
//     // console.log("aaa")

// }

let clickCounter = 0;
document.getElementById("counter").innerHTML = clickCounter;

function clickFunc(params) {
    let selected = params.srcElement.id;
    console.log(selected);
    document.getElementById(selected).style.visibility = 'hidden';
    clickCounter++;
    if (clickCounter == 1) {
        document.getElementById("counter").innerHTML = clickCounter + " Fruit Collected";
    }

    else {
        document.getElementById("counter").innerHTML = clickCounter + " Fruits Collected";
    }

    if (clickCounter == 20) {
        document.getElementById("congrats").innerHTML = "Congratulations";
    }
}

