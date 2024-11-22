let isMarqueeStopped = false;

function stopMarquee(element) {
    isMarqueeStopped = true;
    element.style.animation = "none";
}

function startMarquee(element) {
    if (!isMarqueeStopped) {
        element.style.animation = "marqueeAnimation 10s linear infinite";
    }
}
