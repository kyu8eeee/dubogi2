function redirect() {
    window.location.href = 'https://link.coupang.com/a/bjybMs';
    setVisitedCookie();
}

function removePopupAndOverlay() {
    document.getElementById('myPopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scroll
    setVisitedCookie();
}

function setVisitedCookie() {
    document.cookie = "visited=true; max-age=7200"; // 2 hours
}

window.onload = function() {
    if (document.cookie.includes("visited=true")) {
        removePopupAndOverlay();
    }

    let counter = 5;
    setInterval(function() {
        if (counter > 0) {
            document.getElementById('counter').innerText = counter--;
        } else {
            document.getElementById('counter').innerText = 'x';
        }
    }, 1000);
}
