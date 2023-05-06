var count = 0;
var countAbout = 0;

function changeTheme() {
    count++;
    console.log(count);
    if (count % 2 == 1) {
        document.getElementById("header").style.backgroundImage = "url('./images/bg2.jpg')";
        var buttons = document.getElementsByClassName("btn-1");

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.borderColor = "#f5f3f3";
            buttons[i].style.color = "#ccc";
        }

        document.getElementById("header-text").style.color = "#ccc";


    }

    else {
        document.getElementById("header").style.backgroundImage = "url('./images/bg.jpg')";

        var buttons = document.getElementsByClassName("btn-1");

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.borderColor = "black";
            buttons[i].style.color = "#000";
        }

        document.getElementById("header-text").style.color = "black";
    }

}

function changeThemeAbout() {
    countAbout++;
    console.log(countAbout);
    if (countAbout % 2 == 1) {
        document.getElementById("side-panel").style.backgroundImage = "url('./images/bg2.jpg')";
        document.getElementById("side-header").style.color = "white";
        document.getElementById("side-subheader").style.color = "white";

    }

    else {
        document.getElementById("side-panel").style.backgroundImage = "url('./images/bg.jpg')";
        document.getElementById("side-header").style.color = "black";
        document.getElementById("side-subheader").style.color = "black";
    }
}