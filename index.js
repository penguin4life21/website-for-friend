function init() {
    clicks = 0;
}

function render() {
    document.getElementById("amount").innerHTML = clicks;
}

function onClickFunc() {
    clicks += 1;

    render();
}