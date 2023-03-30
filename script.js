var count = 0;

function changeTheme() {
    count++;
    console.log(count);
    if (count % 2 == 1) {
        document.getElementById("header").style.backgroundImage = "url('./images/bg2.jpg')";
        var buttons = document.getElementsByClassName("header-button");
        
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "black";
            buttons[i].style.color = "#ccc";
        }

        document.getElementById("header-text").style.color = "#ccc";


    }

    else {
        document.getElementById("header").style.backgroundImage = "url('./images/bg.jpg')";

        var buttons = document.getElementsByClassName("header-button");

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "#f5f3f3";
            buttons[i].style.color = "black";
        }

        document.getElementById("header-text").style.color = "black";
    }

}