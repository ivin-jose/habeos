document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
        <header id="site-header" class="header-front-page style-5">
            <div id="site-header-inner" class="container">
                <div class="wrap-inner">          
                    <div id="site-logo" class="clearfix">
                        <div id="site-logo-inner">
                            <a href="index.html" title="Construction" rel="home" class="main-logo">
                                <img src="assets/img/logo-light.png" alt="Construction" data-retina="assets/img/logo-light@2x.png" data-width="204" data-height="30">
                            </a>
                        </div>
                    </div>
                    <div class="mobile-button"><span></span></div>
                    <nav id="main-nav" class="main-nav">
                        <ul class="menu">
                            <li class="menu-item"><a href="index.html">Home</a></li>
                            <li class="menu-item"><a href="about.html">About Us</a></li>
                            <li class="menu-item"><a href="services.html">Services</a></li>
                            <li class="menu-item menu-item-has-children"><a href="#">Projects</a>
                              <ul class="sub-menu">
                                <li class="menu-item"><a href="commercial-projects.html">Commercial Projects</a></li>
                                <li class="menu-item"><a href="residence-projects.html">Residence Projects</a></li>
                                <li class="menu-item"><a href="resort-projects.html">Resort Projects</a></li>                         
                              </ul>
                            </li>
                            <li class="menu-item"><a href="portfolio.html">Portfolio</a></li>
                            <li class="menu-item"><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    `;

    document.getElementById("site-header-wrap").innerHTML = headerHTML;

    // **Highlight the Active Menu Item**
    let currentURL = window.location.pathname.split("/").pop(); // Get the current page filename
    if (currentURL === "") currentURL = "index.html"; // Default to index.html if on the root page

    const menuItems = document.querySelectorAll("#main-nav .menu-item a");

    menuItems.forEach((item) => {
        if (item.getAttribute("href") === currentURL) {
            item.parentElement.classList.add("active"); // Add active class to the parent <li>
        }
    });
});



// <div id="site-header-wrap"></div>
// <div id="home-footer"></div>