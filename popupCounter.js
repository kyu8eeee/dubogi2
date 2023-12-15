var redirect = function() {
    window.location.href = 'https://link.coupang.com/a/bjybMs';
    setVisitedCookie();
}

var removePopupAndOverlay = function() {
    document.getElementById('myPopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scroll
    setVisitedCookie();
}

var setVisitedCookie = function() {
    document.cookie = "visited=true; max-age=7200"; // 2 hours
}

window.onload = function() {
    if (document.cookie.includes("visited=true")) {
        removePopupAndOverlay();
    }

    let counter = 5;
    const counterElement = document.getElementById('counter');

    setInterval(function() {
        if (counter > 0) {
            counterElement.innerText = counter--;
        } else {
            counterElement.innerText = 'x';
        }
    }, 1000);
}
