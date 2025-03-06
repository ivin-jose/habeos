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
                                <li class="menu-item"><a href="services.html">Services</a></li>
                                <li class="menu-item"><a href="about.html">About Us</a></li>
                                <li class="menu-item"><a href="projects.html">Projects</a></li>
                                <li class="menu-item"><a href="portfolio.html">Portfolio</a></li>
                                <li class="menu-item"><a href="contact.html">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
    `;
    
    document.getElementById("site-header-wrap").innerHTML = headerHTML;

});


document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        const header = document.getElementById("site-header");
        
        if (window.scrollY > 50) { // Change background after scrolling 50px
            header.style.backgroundColor = "black"; // Transparent black
            header.style.transition = "background-color 0.3s ease";
        } else {
            header.style.backgroundColor = "transparent"; // Revert to transparent
        }
    });
});

// <div id="site-header-wrap"></div>
// <div id="home-footer"></div>