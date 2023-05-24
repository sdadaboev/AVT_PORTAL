const links = document.querySelectorAll('.header-links a')

// Add an event listener for the "load" event on the window object
window.addEventListener('load', function () {
    // Loop through each link element
    links.forEach(function (link) {
        // Get the link's href attribute
        const href = link.getAttribute('href')
        // Check if the current URL contains the href attribute value
        if (window.location.href.indexOf(href) !== -1) {
            // Add a class to the link element
            link.classList.add('active')
        }
    })
})
