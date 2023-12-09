(function () {
    
    function showLoadTime() {
        const loadTime = window.performance.now();
        const message = `Page load time is <span class="load-time-text"> ${(loadTime/1000).toFixed(3)} </span> c.`;

        const infoElement = document.createElement('div');
        infoElement.innerHTML = message;

        document.body.appendChild(infoElement);
    }

    window.addEventListener('load', showLoadTime);
})();