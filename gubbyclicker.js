let clicks = 0;
let clickPower = 2;
let autoClickers = 0;

let powerCost = 25;
let autoCost = 100;

const gubby = document.getElementById("gubbyButton");
const clickText = document.getElementById("clicks");

const powerUpgrade = document.getElementById("powerUpgrade");
const autoUpgrade = document.getElementById("autoUpgrade");

const powerText = document.getElementById("power");
const autoText = document.getElementById("auto");

const message = document.getElementById("message");


function updateScreen() {

    clickText.textContent = "Gubby Clicks: " + clicks;

    powerText.textContent = "Click Power: " + clickPower;

    autoText.textContent = "Auto Clickers: " + autoClickers;

    powerUpgrade.textContent =
        "💪 Click Power +1 — Cost: " + powerCost;

    autoUpgrade.textContent =
        "⚡ Auto Clicker +1/sec — Cost: " + autoCost;

    powerUpgrade.disabled = clicks < powerCost;

    autoUpgrade.disabled = clicks < autoCost;
}


gubby.onclick = function(event) {

    clicks = clicks + clickPower;

    createFloatingText(
        "+" + clickPower,
        event.clientX,
        event.clientY
    );

    updateScreen();
};


powerUpgrade.onclick = function() {

    if (clicks >= powerCost) {

        clicks = clicks - powerCost;

        clickPower = clickPower + 1;

        powerCost = Math.floor(powerCost * 1.5);

        message.textContent = "💪 Click Power upgraded!";

        updateScreen();
    }
};


autoUpgrade.onclick = function() {

    if (clicks >= autoCost) {

        clicks = clicks - autoCost;

        autoClickers = autoClickers + 1;

        autoCost = Math.floor(autoCost * 1.7);

        message.textContent = "⚡ Auto Clicker bought!";

        updateScreen();
    }
};


function createFloatingText(text, x, y) {

    const floating = document.createElement("div");

    floating.className = "floating";

    floating.textContent = text;

    floating.style.left = x + "px";
    floating.style.top = y + "px";

    document.body.appendChild(floating);

    setTimeout(function() {
        floating.remove();
    }, 800);
}


setInterval(function() {

    if (autoClickers > 0) {

        clicks = clicks + autoClickers;

        updateScreen();
    }

}, 1000);


updateScreen();
